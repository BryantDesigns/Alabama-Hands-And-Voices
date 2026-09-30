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

test.describe('ASTra live form', () => {
    const successMessage =
        "Thank you! Your ASTra support request was sent. We'll be in touch."

    function astraForm(page: Page) {
        return page.getByRole('form', { name: 'Request ASTra support' })
    }

    async function fillRequiredFields(form: Locator) {
        await form
            .getByLabel('Parent/Guardian Name:', { exact: true })
            .fill('Pat Example')
        await form.getByLabel('Phone Number:').fill('205-555-0100')
        await form.getByLabel('Email:').fill('pat@example.com')
        await form.getByLabel('Student Name:').fill('Sam Example')
    }

    test('a successful form submission thanks the visitor and resets the form', async ({
        page,
    }) => {
        const endpoint = await fakeDetectionFormEndpoint(page)
        await gotoLoadedRoute(page, '/programs/astra')
        const form = astraForm(page)
        const statusRegion = form.getByRole('status')
        const alertRegion = form.getByRole('alert')
        // Live regions announce reliably only when mounted before they change.
        await expect(statusRegion).toBeEmpty()
        await expect(alertRegion).toBeEmpty()

        await fillRequiredFields(form)
        await form.getByRole('button', { name: 'Submit' }).click()

        await expect(statusRegion).toHaveText(successMessage)
        await expect(alertRegion).toBeEmpty()
        expect(endpoint.submissions).toHaveLength(1)
        const [submission] = endpoint.submissions
        expect(submission.get('form-name')).toBe('astra')
        expect(submission.get('student_name')).toBe('Sam Example')
        expect(submission.get('bot-field')).toBe('')
        await expect(form.getByLabel('Student Name:')).toHaveValue('')
        await expect(form.getByLabel('Email:')).toHaveValue('')
    })

    test('a failed form submission keeps the answers and offers the contact email', async ({
        page,
    }) => {
        const endpoint = await fakeDetectionFormEndpoint(page)
        endpoint.responseStatus = 500
        await gotoLoadedRoute(page, '/programs/astra')
        const form = astraForm(page)
        const alertRegion = form.getByRole('alert')
        const submitButton = form.getByRole('button', { name: 'Submit' })

        await fillRequiredFields(form)
        await submitButton.click()

        await expect(alertRegion).toHaveText(
            `Sorry, your form didn't send. Please try again, or email us at ${CONTACT_EMAIL}.`
        )
        await expect(
            alertRegion.getByRole('link', { name: CONTACT_EMAIL })
        ).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`)
        await expect(form.getByRole('status')).toBeEmpty()
        await expect(form.getByLabel('Student Name:')).toHaveValue(
            'Sam Example'
        )
        await expect(form.getByLabel('Email:')).toHaveValue('pat@example.com')
        await expect(submitButton).toBeEnabled()

        endpoint.responseStatus = 200
        await submitButton.click()

        await expect(form.getByRole('status')).toHaveText(successMessage)
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
        await gotoLoadedRoute(page, '/programs/astra')
        const form = astraForm(page)

        await fillRequiredFields(form)
        await form.getByRole('button', { name: 'Submit' }).dblclick()

        await expect(
            form.getByRole('button', { name: 'Sending…' })
        ).toBeDisabled()
        releaseResponses()
        await expect(form.getByRole('status')).toHaveText(successMessage)
        await expect(form.getByRole('button', { name: 'Submit' })).toBeEnabled()
        expect(endpoint.submissions).toHaveLength(1)
    })
})

test.describe('D/HH Committee live form', () => {
    const successMessage =
        'Thank you! Your request was sent. A D/HH Committee member will be in touch.'

    function dhhCommitteeForm(page: Page) {
        return page.getByRole('form', {
            name: 'Connect with a D/HH Committee member',
        })
    }

    async function fillRequiredFields(form: Locator) {
        await form.getByLabel('Name:', { exact: true }).fill('Pat Example')
        await form.getByLabel('Phone Number:').fill('205-555-0100')
        await form.getByLabel('Email:').fill('pat@example.com')
        await form.getByLabel("Child's Name:").fill('Sam Example')
        await form.getByLabel("Child's DOB:").fill('2020-05-01')
    }

    test('a successful form submission thanks the visitor and resets the form', async ({
        page,
    }) => {
        const endpoint = await fakeDetectionFormEndpoint(page)
        await gotoLoadedRoute(page, '/programs/dhh-committee')
        const form = dhhCommitteeForm(page)
        const statusRegion = form.getByRole('status')
        const alertRegion = form.getByRole('alert')
        // Live regions announce reliably only when mounted before they change.
        await expect(statusRegion).toBeEmpty()
        await expect(alertRegion).toBeEmpty()

        await fillRequiredFields(form)
        await form.getByRole('button', { name: 'Submit' }).click()

        await expect(statusRegion).toHaveText(successMessage)
        await expect(alertRegion).toBeEmpty()
        expect(endpoint.submissions).toHaveLength(1)
        const [submission] = endpoint.submissions
        expect(submission.get('form-name')).toBe('dhhrm')
        expect(submission.get('childs-name')).toBe('Sam Example')
        expect(submission.get('bot-field')).toBe('')
        await expect(form.getByLabel("Child's Name:")).toHaveValue('')
        await expect(form.getByLabel('Email:')).toHaveValue('')
    })

    test('a failed form submission keeps the answers and offers the contact email', async ({
        page,
    }) => {
        const endpoint = await fakeDetectionFormEndpoint(page)
        endpoint.responseStatus = 500
        await gotoLoadedRoute(page, '/programs/dhh-committee')
        const form = dhhCommitteeForm(page)
        const alertRegion = form.getByRole('alert')
        const submitButton = form.getByRole('button', { name: 'Submit' })

        await fillRequiredFields(form)
        await submitButton.click()

        await expect(alertRegion).toHaveText(
            `Sorry, your form didn't send. Please try again, or email us at ${CONTACT_EMAIL}.`
        )
        await expect(
            alertRegion.getByRole('link', { name: CONTACT_EMAIL })
        ).toHaveAttribute('href', `mailto:${CONTACT_EMAIL}`)
        await expect(form.getByRole('status')).toBeEmpty()
        await expect(form.getByLabel("Child's Name:")).toHaveValue(
            'Sam Example'
        )
        await expect(form.getByLabel('Email:')).toHaveValue('pat@example.com')
        await expect(submitButton).toBeEnabled()

        endpoint.responseStatus = 200
        await submitButton.click()

        await expect(form.getByRole('status')).toHaveText(successMessage)
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
        await gotoLoadedRoute(page, '/programs/dhh-committee')
        const form = dhhCommitteeForm(page)

        await fillRequiredFields(form)
        await form.getByRole('button', { name: 'Submit' }).dblclick()

        await expect(
            form.getByRole('button', { name: 'Sending…' })
        ).toBeDisabled()
        releaseResponses()
        await expect(form.getByRole('status')).toHaveText(successMessage)
        await expect(form.getByRole('button', { name: 'Submit' })).toBeEnabled()
        expect(endpoint.submissions).toHaveLength(1)
    })
})
