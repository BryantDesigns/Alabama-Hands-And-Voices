import { expect, test, type Page } from '@playwright/test'

const DETECTION_FORM_PATH = '/__forms.html'

// Each live form and the route that renders it. The gbysref live form sits in
// the GBYS page's hidden referral tab panel, which is still in the DOM.
const liveForms = [
    { formName: 'gbys', route: '/programs/gbys' },
    { formName: 'gbysref', route: '/programs/gbys' },
    { formName: 'astra', route: '/programs/astra' },
    { formName: 'dhhrm', route: '/programs/dhh-committee' },
    { formName: 'membership', route: '/membership/choose-membership' },
] as const

interface FormSummary {
    formNameValue: string | null
    honeypotFieldName: string | null
    fieldKinds: Record<string, string>
    duplicatedFieldNames: string[]
}

// Summarizes the live form on the current page and its detection form, which
// is fetched from the served detection-form file and parsed in the page.
async function summarizeLiveAndDetectionForm(page: Page, formName: string) {
    return page.evaluate(
        async ({ formName, detectionFormPath }) => {
            function summarizeForm(form: HTMLFormElement): FormSummary {
                const summary: FormSummary = {
                    formNameValue: null,
                    honeypotFieldName:
                        form.getAttribute('netlify-honeypot') ??
                        form.getAttribute('data-netlify-honeypot'),
                    fieldKinds: {},
                    duplicatedFieldNames: [],
                }

                for (const element of Array.from(form.elements)) {
                    const tagName = element.tagName.toLowerCase()
                    const fieldName = element.getAttribute('name')
                    if (
                        !fieldName ||
                        !['input', 'select', 'textarea'].includes(tagName)
                    ) {
                        continue
                    }
                    if (fieldName === 'form-name') {
                        summary.formNameValue = (
                            element as HTMLInputElement
                        ).value
                        continue
                    }

                    // An input's type property is its effective type: 'text'
                    // when the attribute is missing or unrecognized.
                    const fieldKind =
                        tagName === 'input'
                            ? (element as HTMLInputElement).type
                            : tagName
                    // Checkbox groups may share a name; any other repeat is a bug.
                    if (
                        fieldName in summary.fieldKinds &&
                        fieldKind !== 'checkbox'
                    ) {
                        summary.duplicatedFieldNames.push(fieldName)
                    }
                    summary.fieldKinds[fieldName] = fieldKind
                }

                return summary
            }

            const formSelector = `form[name="${formName}"]`
            const liveForm =
                document.querySelector<HTMLFormElement>(formSelector)
            if (!liveForm) {
                throw new Error(`${formName}: no live form on this page`)
            }

            const detectionResponse = await fetch(detectionFormPath)
            if (!detectionResponse.ok) {
                throw new Error(
                    `${detectionFormPath} responded ${detectionResponse.status}`
                )
            }
            const detectionDocument = new DOMParser().parseFromString(
                await detectionResponse.text(),
                'text/html'
            )
            const detectionForm =
                detectionDocument.querySelector<HTMLFormElement>(formSelector)
            if (!detectionForm) {
                throw new Error(
                    `${formName}: no detection form in ${detectionFormPath}`
                )
            }

            return {
                live: summarizeForm(liveForm),
                detection: summarizeForm(detectionForm),
            }
        },
        { formName, detectionFormPath: DETECTION_FORM_PATH }
    )
}

function pickFieldKinds(
    fieldKinds: Record<string, string>,
    fieldNames: string[]
) {
    return Object.fromEntries(
        fieldNames.map((fieldName) => [fieldName, fieldKinds[fieldName]])
    )
}

test.beforeEach(({}, testInfo) => {
    test.skip(
        testInfo.project.name !== 'chromium',
        'Form parity does not depend on the browser.'
    )
})

test('every detection form has a live form under test', async ({ page }) => {
    await page.goto(DETECTION_FORM_PATH)
    const detectionFormNames = await page
        .locator('form[name]')
        .evaluateAll((forms) =>
            forms.map((form) => form.getAttribute('name') ?? '')
        )

    expect(detectionFormNames.sort()).toEqual(
        liveForms.map(({ formName }) => formName).sort()
    )
})

for (const { formName, route } of liveForms) {
    test(`${formName} live form keeps form parity with its detection form`, async ({
        page,
    }) => {
        await page.goto(route, { waitUntil: 'domcontentloaded' })
        const { live, detection } = await summarizeLiveAndDetectionForm(
            page,
            formName
        )

        const liveFieldNames = Object.keys(live.fieldKinds)
        const detectionFieldNames = Object.keys(detection.fieldKinds)
        const sharedFieldNames = liveFieldNames.filter(
            (fieldName) => fieldName in detection.fieldKinds
        )

        expect
            .soft(
                liveFieldNames.filter(
                    (fieldName) => !(fieldName in detection.fieldKinds)
                ),
                `${formName}: live fields missing from the detection form`
            )
            .toEqual([])
        expect
            .soft(
                detectionFieldNames.filter(
                    (fieldName) => !(fieldName in live.fieldKinds)
                ),
                `${formName}: detection fields missing from the live form`
            )
            .toEqual([])
        expect
            .soft(
                pickFieldKinds(live.fieldKinds, sharedFieldNames),
                `${formName}: field kinds (received live, expected detection)`
            )
            .toEqual(pickFieldKinds(detection.fieldKinds, sharedFieldNames))
        expect
            .soft(live.honeypotFieldName, `${formName}: live form honeypot`)
            .toBe(detection.honeypotFieldName)
        expect
            .soft(
                live.duplicatedFieldNames,
                `${formName}: duplicated non-checkbox fields in the live form`
            )
            .toEqual([])
        expect
            .soft(
                detection.duplicatedFieldNames,
                `${formName}: duplicated non-checkbox fields in the detection form`
            )
            .toEqual([])
        expect
            .soft(live.formNameValue, `${formName}: live form-name value`)
            .toBe(formName)
        expect
            .soft(
                detection.formNameValue,
                `${formName}: detection form-name value`
            )
            .toBe(formName)
    })
}
