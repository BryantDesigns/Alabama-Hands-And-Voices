import { expect, test } from '@playwright/test'

// Addresses the previous site answered. Other organisations, printed letters
// and old emails link to them, so each one has to land on its new address.
// Every address is written the way a client sends it (spaces as %20).

const legacyPageAddresses: ReadonlyArray<
    readonly [legacyAddress: string, currentAddress: string]
> = [
    ['/index.html', '/'],
    ['/who-we-are', '/about'],
    ['/who-we-are.html', '/about'],
    ['/board-members', '/about/board'],
    ['/board-members.html', '/about/board'],
    ['/staff', '/about/staff'],
    ['/staff.html', '/about/staff'],
    ['/contact', '/about/contact'],
    ['/contact.html', '/about/contact'],
    ['/gbys', '/programs/gbys'],
    ['/gbys.html', '/programs/gbys'],
    ['/astra', '/programs/astra'],
    ['/astra.html', '/programs/astra'],
    ['/safety', '/programs/safety'],
    ['/safety.html', '/programs/safety'],
    ['/role-model', '/programs/dhh-committee'],
    ['/role-model.html', '/programs/dhh-committee'],
    ['/choose-your-membership', '/membership/choose-membership'],
    ['/choose-your-membership.html', '/membership/choose-membership'],
    ['/start', '/'],
    ['/start.html', '/'],
    ['/membership.html', '/membership'],
    ['/resources.html', '/resources'],
    ['/faq.html', '/faq'],
]

const wordDocument =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const pdfDocument = 'application/pdf'

const legacyDocumentAddresses: ReadonlyArray<
    readonly [
        legacyAddress: string,
        currentAddress: string,
        contentType: string,
    ]
> = [
    [
        '/assets/ALHV%20V17%204.13.24%20Communication%20Plan%20-%20fillable%20form.docx',
        '/assets/documents/communicationPlan.docx',
        wordDocument,
    ],
    [
        '/assets/Communication%20Plan%20-%20Spanish%20Version%202024.docx',
        '/assets/documents/communicationPlan-es.docx',
        wordDocument,
    ],
    [
        '/assets/0-3%20Children%20Resources.pdf',
        '/assets/documents/providers-0-3.pdf',
        pdfDocument,
    ],
    [
        '/assets/02_Parent%20Road%20Map.pdf',
        '/assets/documents/Road_map.pdf',
        pdfDocument,
    ],
    [
        '/assets/03_hv-membership-form.docx',
        '/assets/documents/hv-membership-form.docx',
        wordDocument,
    ],
    [
        '/assets/hv-membership-form.docx',
        '/assets/documents/hv-membership-form.docx',
        wordDocument,
    ],
    [
        '/assets/05_Guide%20By%20Your%20Side%20Flyer%20English.pdf',
        '/assets/documents/GBYS-English.pdf',
        pdfDocument,
    ],
    [
        '/assets/06_Guide%20By%20Your%20Side_Spanish.pdf',
        '/assets/documents/GBYS-Spanish.pdf',
        pdfDocument,
    ],
    // A plus sign and parentheses reach the server either as typed or
    // percent-encoded, depending on what produced the link.
    [
        '/assets/11_List%20of%20Resources%20and%20Providers%20Age%203+.pdf',
        '/assets/documents/providers-3-plus.pdf',
        pdfDocument,
    ],
    [
        '/assets/11_List%20of%20Resources%20and%20Providers%20Age%203%2B.pdf',
        '/assets/documents/providers-3-plus.pdf',
        pdfDocument,
    ],
    [
        '/assets/ASTra%20(1).pdf',
        '/assets/documents/astra-training.pdf',
        pdfDocument,
    ],
    [
        '/assets/ASTra%20%281%29.pdf',
        '/assets/documents/astra-training.pdf',
        pdfDocument,
    ],
    ['/assets/Pathways.pdf', '/assets/documents/Pathways.pdf', pdfDocument],
    [
        '/assets/nasdse-3rd-ed-7-11-2019-final.pdf',
        '/assets/documents/nasdse-3rd-ed-7-11-2019-final.pdf',
        pdfDocument,
    ],
]

// Addresses that are the same on the previous site and this one.
const unchangedAddresses = ['/', '/membership', '/resources', '/faq']

const PERMANENT_REDIRECT = 308
const TEMPORARY_REDIRECT = 307

test.beforeEach(({}, testInfo) => {
    test.skip(
        testInfo.project.name !== 'chromium',
        'Redirects are answered by the server; one project is enough.'
    )
})

function redirectTargetPath(locationHeader: string | undefined) {
    expect(locationHeader, 'Location header').toBeTruthy()
    const redirectTarget = new URL(locationHeader ?? '', 'http://localhost')

    return `${redirectTarget.pathname}${redirectTarget.search}`
}

for (const [legacyAddress, currentAddress] of legacyPageAddresses) {
    test(`legacy page ${legacyAddress} moves permanently to ${currentAddress}`, async ({
        request,
    }) => {
        const redirectResponse = await request.get(legacyAddress, {
            maxRedirects: 0,
        })

        expect(redirectResponse.status()).toBe(PERMANENT_REDIRECT)
        expect(redirectTargetPath(redirectResponse.headers()['location'])).toBe(
            currentAddress
        )

        const currentPageResponse = await request.get(currentAddress, {
            maxRedirects: 0,
        })
        expect(currentPageResponse.status()).toBe(200)
    })
}

for (const [
    legacyAddress,
    currentAddress,
    contentType,
] of legacyDocumentAddresses) {
    test(`legacy document ${legacyAddress} redirects to ${currentAddress}`, async ({
        request,
    }) => {
        const redirectResponse = await request.get(legacyAddress, {
            maxRedirects: 0,
        })

        // Temporary on purpose: a browser never caches it, so the address
        // keeps following the document if its file is replaced later.
        expect(redirectResponse.status()).toBe(TEMPORARY_REDIRECT)
        expect(redirectTargetPath(redirectResponse.headers()['location'])).toBe(
            currentAddress
        )

        const currentDocumentResponse = await request.head(currentAddress, {
            maxRedirects: 0,
        })
        expect(currentDocumentResponse.status()).toBe(200)
        expect(currentDocumentResponse.headers()['content-type']).toContain(
            contentType
        )
    })
}

for (const unchangedAddress of unchangedAddresses) {
    test(`${unchangedAddress} is served without a redirect`, async ({
        request,
    }) => {
        const directResponse = await request.get(unchangedAddress, {
            maxRedirects: 0,
        })

        expect(directResponse.status()).toBe(200)
    })
}

test('an address the previous site never had is still not found', async ({
    request,
}) => {
    const missingDocumentResponse = await request.get(
        '/assets/never-published.pdf',
        { maxRedirects: 0 }
    )
    expect(missingDocumentResponse.status()).toBe(404)

    const missingPageResponse = await request.get('/never-published.html', {
        maxRedirects: 0,
    })
    expect(missingPageResponse.status()).toBe(404)
})
