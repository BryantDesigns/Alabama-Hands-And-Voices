import { expect, test, type Locator, type Page } from '@playwright/test'

const DETECTION_FORM_PATH = '/__forms.html'
// Site Settings > Contact Email (src/content/singletons/siteSettings.yaml).
const CONTACT_EMAIL = 'alabamahinfo@gmail.com'

// Answers each form submission POST to the detection-form path with
// `responseStatus` once `responseGate` settles, recording the request body.
// Any other request to that path passes through.
async function fakeDetectionFormEndpoint(page: Page) {
    const endpoint = {
        responseStatus: 200,
        responseGate: Promise.resolve(),
        submissions: [] as URLSearchParams[],
    }

    await page.route(`**${DETECTION_FORM_PATH}`, async (route) => {
        const request = route.request()
        if (request.method() !== 'POST') {
            await route.continue()
            return
        }

        endpoint.submissions.push(new URLSearchParams(request.postData() ?? ''))
        await endpoint.responseGate
        await route.fulfill({ status: endpoint.responseStatus, body: '' })
    })

    return endpoint
}

async function gotoLoadedRoute(page: Page, route: string) {
    await page.goto(route)
    await expect(page.locator('[data-route-loading]')).toHaveCount(0)
}

// One answer a visitor gives: typed into the field labelled `label` and sent
// in the form submission as `fieldName`.
interface Answer {
    label: string
    fieldName: string
    value: string
}

interface LiveForm {
    title: string
    route: string
    accessibleName: string
    formName: string
    successMessage: string
    requiredAnswers: Answer[]
}

const liveForms: LiveForm[] = [
    {
        title: 'ASTra live form',
        route: '/programs/astra',
        accessibleName: 'Request ASTra support',
        formName: 'astra',
        successMessage:
            "Thank you! Your ASTra support request was sent. We'll be in touch.",
        requiredAnswers: [
            {
                label: 'Parent/Guardian Name:',
                fieldName: 'name',
                value: 'Pat Example',
            },
            {
                label: 'Phone Number:',
                fieldName: 'phone_number',
                value: '205-555-0100',
            },
            { label: 'Email:', fieldName: 'email', value: 'pat@example.com' },
            {
                label: 'Student Name:',
                fieldName: 'student_name',
                value: 'Sam Example',
            },
        ],
    },
    {
        title: 'D/HH Committee live form',
        route: '/programs/dhh-committee',
        accessibleName: 'Connect with a D/HH Committee member',
        formName: 'dhhrm',
        successMessage:
            'Thank you! Your request was sent. A D/HH Committee member will be in touch.',
        requiredAnswers: [
            { label: 'Name:', fieldName: 'name', value: 'Pat Example' },
            {
                label: 'Phone Number:',
                fieldName: 'phone',
                value: '205-555-0100',
            },
            { label: 'Email:', fieldName: 'email', value: 'pat@example.com' },
            {
                label: "Child's Name:",
                fieldName: 'childs-name',
                value: 'Sam Example',
            },
            {
                label: "Child's DOB:",
                fieldName: 'childs-dob',
                value: '2020-05-01',
            },
        ],
    },
]

function answerField(form: Locator, answer: Answer) {
    return form.getByLabel(answer.label, { exact: true })
}

async function fillAnswers(form: Locator, answers: Answer[]) {
    for (const answer of answers) {
        await answerField(form, answer).fill(answer.value)
    }
}

for (const liveForm of liveForms) {
    test.describe(liveForm.title, () => {
        function locateForm(page: Page) {
            return page.getByRole('form', { name: liveForm.accessibleName })
        }

        test('a successful form submission thanks the visitor and resets the form', async ({
            page,
        }) => {
            const endpoint = await fakeDetectionFormEndpoint(page)
            await gotoLoadedRoute(page, liveForm.route)
            const form = locateForm(page)
            const statusRegion = form.getByRole('status')
            const alertRegion = form.getByRole('alert')
            // Live regions announce reliably only when mounted before they change.
            await expect(statusRegion).toBeEmpty()
            await expect(alertRegion).toBeEmpty()

            await fillAnswers(form, liveForm.requiredAnswers)
            await form.getByRole('button', { name: 'Submit' }).click()

            await expect(statusRegion).toHaveText(liveForm.successMessage)
            await expect(alertRegion).toBeEmpty()
            expect(endpoint.submissions).toHaveLength(1)
            const [submission] = endpoint.submissions
            expect(submission.get('form-name')).toBe(liveForm.formName)
            expect(submission.get('bot-field')).toBe('')
            for (const answer of liveForm.requiredAnswers) {
                expect(submission.get(answer.fieldName)).toBe(answer.value)
                await expect(answerField(form, answer)).toHaveValue('')
            }
        })

        test('a failed form submission keeps the answers and offers the contact email', async ({
            page,
        }) => {
            const endpoint = await fakeDetectionFormEndpoint(page)
            endpoint.responseStatus = 500
            await gotoLoadedRoute(page, liveForm.route)
            const form = locateForm(page)
            const alertRegion = form.getByRole('alert')
            const submitButton = form.getByRole('button', { name: 'Submit' })

            await fillAnswers(form, liveForm.requiredAnswers)
            await submitButton.click()

            await expect(alertRegion).toHaveText(
                `Sorry, your form didn't send. Please try again, or email us at ${CONTACT_EMAIL}.`
            )
            await expect(
                alertRegion.getByRole('link', { name: CONTACT_EMAIL })
            ).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`)
            await expect(form.getByRole('status')).toBeEmpty()
            for (const answer of liveForm.requiredAnswers) {
                await expect(answerField(form, answer)).toHaveValue(
                    answer.value
                )
            }
            await expect(submitButton).toBeEnabled()

            endpoint.responseStatus = 200
            await submitButton.click()

            await expect(form.getByRole('status')).toHaveText(
                liveForm.successMessage
            )
            await expect(alertRegion).toBeEmpty()
            expect(endpoint.submissions).toHaveLength(2)
        })

        test('a double-clicked submit sends one form submission', async ({
            page,
        }) => {
            const endpoint = await fakeDetectionFormEndpoint(page)
            let releaseResponses = () => {}
            endpoint.responseGate = new Promise((resolve) => {
                releaseResponses = resolve
            })
            await gotoLoadedRoute(page, liveForm.route)
            const form = locateForm(page)

            await fillAnswers(form, liveForm.requiredAnswers)
            await form.getByRole('button', { name: 'Submit' }).dblclick()

            await expect(
                form.getByRole('button', { name: 'Sending…' })
            ).toBeDisabled()
            releaseResponses()
            await expect(form.getByRole('status')).toHaveText(
                liveForm.successMessage
            )
            await expect(
                form.getByRole('button', { name: 'Submit' })
            ).toBeEnabled()
            expect(endpoint.submissions).toHaveLength(1)
        })
    })
}
