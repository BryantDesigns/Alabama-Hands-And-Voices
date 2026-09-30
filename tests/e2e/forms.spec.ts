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

// A live form is found by its accessible name. A live form on a tab has none:
// it is found through the tab that shows it.
type LiveFormLocation = { accessibleName: string } | { tabName: string }

type LiveForm = LiveFormLocation & {
    title: string
    route: string
    formName: string
    successMessage: string
    submitButtonName: string
    requiredAnswers: Answer[]
}

// GBYS labels read "<label>* (required)" on required fields: a visible
// asterisk and a screen-reader hint.
const gbysPersonalLiveForm = {
    title: 'GBYS personal live form',
    route: '/programs/gbys',
    tabName: 'Personal',
    formName: 'gbys',
    successMessage:
        'Thank you! Your request was sent. A Parent Guide will be in touch.',
    submitButtonName: 'Connect with a Parent Guide',
    requiredAnswers: [
        {
            label: 'Parent / guardian name* (required)',
            fieldName: 'name',
            value: 'Pat Example',
        },
        {
            label: "Child's name* (required)",
            fieldName: 'childs-name',
            value: 'Sam Example',
        },
        {
            label: "Child's date of birth* (required)",
            fieldName: 'child-dob',
            value: '2020-05-01',
        },
        {
            label: 'Email address* (required)',
            fieldName: 'email',
            value: 'pat@example.com',
        },
        {
            label: 'Phone number* (required)',
            fieldName: 'phone',
            value: '205-555-0100',
        },
    ],
} satisfies LiveForm

const gbysReferralLiveForm = {
    title: 'GBYS referral live form',
    route: '/programs/gbys',
    tabName: 'Professional Referral',
    formName: 'gbysref',
    successMessage:
        'Thank you! Your referral was sent. Our Guide By Your Side team will follow up.',
    submitButtonName: 'Submit referral',
    requiredAnswers: [
        {
            label: "Professional's full name* (required)",
            fieldName: 'pr-ref-name',
            value: 'Lee Example',
        },
        {
            label: 'Referral role* (required)',
            fieldName: 'pr-ref-role',
            value: 'Audiologist',
        },
        {
            label: 'Parent / guardian name* (required)',
            fieldName: 'pr-name',
            value: 'Pat Example',
        },
        {
            label: 'Phone number* (required)',
            fieldName: 'pr-phone',
            value: '205-555-0100',
        },
        {
            label: "Child's name* (required)",
            fieldName: 'pr-childs-name',
            value: 'Sam Example',
        },
        {
            label: 'Email address* (required)',
            fieldName: 'pr-email',
            value: 'pat@example.com',
        },
        {
            label: 'Language spoken in the home* (required)',
            fieldName: 'pr-language',
            value: 'English',
        },
    ],
} satisfies LiveForm

const liveForms: LiveForm[] = [
    {
        title: 'ASTra live form',
        route: '/programs/astra',
        accessibleName: 'Request ASTra support',
        formName: 'astra',
        successMessage:
            "Thank you! Your ASTra support request was sent. We'll be in touch.",
        submitButtonName: 'Submit',
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
        submitButtonName: 'Submit',
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
    gbysPersonalLiveForm,
    gbysReferralLiveForm,
]

// Selects the tab and returns the tab panel it shows.
async function selectTab(page: Page, tabName: string) {
    await page.getByRole('tab', { name: tabName, exact: true }).click()
    return page.getByRole('tabpanel', { name: tabName, exact: true })
}

// Loads the live form's page and returns the live form. A live form on a tab
// is returned as its tab panel, which holds that form and nothing else.
async function openLiveForm(page: Page, liveForm: LiveForm) {
    await gotoLoadedRoute(page, liveForm.route)
    if ('tabName' in liveForm) {
        return selectTab(page, liveForm.tabName)
    }
    return page.getByRole('form', { name: liveForm.accessibleName })
}

function answerField(form: Locator, answer: Answer) {
    return form.getByLabel(answer.label, { exact: true })
}

function locateSubmitButton(form: Locator, liveForm: LiveForm) {
    return form.getByRole('button', { name: liveForm.submitButtonName })
}

async function fillAnswers(form: Locator, answers: Answer[]) {
    for (const answer of answers) {
        await answerField(form, answer).fill(answer.value)
    }
}

for (const liveForm of liveForms) {
    test.describe(liveForm.title, () => {
        test('a successful form submission thanks the visitor and resets the form', async ({
            page,
        }) => {
            const endpoint = await fakeDetectionFormEndpoint(page)
            const form = await openLiveForm(page, liveForm)
            const statusRegion = form.getByRole('status')
            const alertRegion = form.getByRole('alert')
            // Live regions announce reliably only when mounted before they change.
            await expect(statusRegion).toBeEmpty()
            await expect(alertRegion).toBeEmpty()

            await fillAnswers(form, liveForm.requiredAnswers)
            await locateSubmitButton(form, liveForm).click()

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
            const form = await openLiveForm(page, liveForm)
            const alertRegion = form.getByRole('alert')
            const submitButton = locateSubmitButton(form, liveForm)

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
            const form = await openLiveForm(page, liveForm)

            await fillAnswers(form, liveForm.requiredAnswers)
            await locateSubmitButton(form, liveForm).dblclick()

            await expect(
                form.getByRole('button', { name: 'Sending…' })
            ).toBeDisabled()
            releaseResponses()
            await expect(form.getByRole('status')).toHaveText(
                liveForm.successMessage
            )
            await expect(locateSubmitButton(form, liveForm)).toBeEnabled()
            expect(endpoint.submissions).toHaveLength(1)
        })
    })
}

test.describe('GBYS live forms', () => {
    test('a successful form submission on the personal tab shows no status in the referral panel', async ({
        page,
    }) => {
        await fakeDetectionFormEndpoint(page)
        const personalPanel = await openLiveForm(page, gbysPersonalLiveForm)
        await fillAnswers(personalPanel, gbysPersonalLiveForm.requiredAnswers)
        await locateSubmitButton(personalPanel, gbysPersonalLiveForm).click()
        await expect(personalPanel.getByRole('status')).toHaveText(
            gbysPersonalLiveForm.successMessage
        )

        const referralPanel = await selectTab(
            page,
            gbysReferralLiveForm.tabName
        )

        await expect(referralPanel.getByRole('status')).toBeEmpty()
        await expect(referralPanel.getByRole('alert')).toBeEmpty()
        await expect(
            page.getByText(gbysPersonalLiveForm.successMessage)
        ).toBeHidden()
    })
})
