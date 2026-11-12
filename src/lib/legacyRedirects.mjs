// Addresses the previous site (static HTML) answered, mapped to where the same
// page or document lives now. Other organisations, printed letters and old
// emails link to these, so they must keep working after the new site takes
// over the domain. `next.config.mjs` serves this list as its `redirects`;
// `tests/e2e/legacy-redirects.spec.ts` pins the behavior.

// The previous site answered each of these names with and without ".html".
const currentAddressByLegacyPageName = {
    'who-we-are': '/about',
    'board-members': '/about/board',
    staff: '/about/staff',
    contact: '/about/contact',
    gbys: '/programs/gbys',
    astra: '/programs/astra',
    safety: '/programs/safety',
    'role-model': '/programs/dhh-committee',
    'choose-your-membership': '/membership/choose-membership',
    // The "Where To Start" letter is a section of the home page now.
    start: '/',
}

// Pages whose address only loses the old ".html" ending.
const currentAddressByLegacyHtmlFile = {
    '/index.html': '/',
    '/membership.html': '/membership',
    '/resources.html': '/resources',
    '/faq.html': '/faq',
}

// Old document addresses, written as they read in a link (not encoded).
const currentAddressByLegacyDocument = {
    '/assets/ALHV V17 4.13.24 Communication Plan - fillable form.docx':
        '/assets/documents/communicationPlan.docx',
    '/assets/Communication Plan - Spanish Version 2024.docx':
        '/assets/documents/communicationPlan-es.docx',
    '/assets/0-3 Children Resources.pdf': '/assets/documents/providers-0-3.pdf',
    '/assets/02_Parent Road Map.pdf': '/assets/documents/Road_map.pdf',
    '/assets/03_hv-membership-form.docx':
        '/assets/documents/hv-membership-form.docx',
    '/assets/hv-membership-form.docx':
        '/assets/documents/hv-membership-form.docx',
    '/assets/05_Guide By Your Side Flyer English.pdf':
        '/assets/documents/GBYS-English.pdf',
    '/assets/06_Guide By Your Side_Spanish.pdf':
        '/assets/documents/GBYS-Spanish.pdf',
    '/assets/11_List of Resources and Providers Age 3+.pdf':
        '/assets/documents/providers-3-plus.pdf',
    '/assets/ASTra (1).pdf': '/assets/documents/astra-training.pdf',
    '/assets/Pathways.pdf': '/assets/documents/Pathways.pdf',
    '/assets/nasdse-3rd-ed-7-11-2019-final.pdf':
        '/assets/documents/nasdse-3rd-ed-7-11-2019-final.pdf',
}

const CHARACTERS_SAFE_IN_A_SOURCE_PATTERN = /[A-Za-z0-9_-]/

// A space, a plus sign or a parenthesis reaches the server either as typed or
// percent-encoded, depending on what produced the link. Match both forms.
function patternForFileNameCharacter(fileNameCharacter) {
    if (CHARACTERS_SAFE_IN_A_SOURCE_PATTERN.test(fileNameCharacter)) {
        return fileNameCharacter
    }
    if (fileNameCharacter === '.') {
        return '\\.'
    }

    const percentEncodedCharacter = `%${fileNameCharacter
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0')}`
    const literalCharacter =
        fileNameCharacter === ' ' ? ' ' : `\\${fileNameCharacter}`

    return `(?:${literalCharacter}|${percentEncodedCharacter})`
}

function sourcePatternForLegacyDocument(legacyDocumentAddress) {
    const lastSlashIndex = legacyDocumentAddress.lastIndexOf('/')
    const directoryPath = legacyDocumentAddress.slice(0, lastSlashIndex)
    const fileName = legacyDocumentAddress.slice(lastSlashIndex + 1)
    const fileNamePattern = Array.from(
        fileName,
        patternForFileNameCharacter
    ).join('')

    return `${directoryPath}/:legacyDocumentFileName(${fileNamePattern})`
}

const legacyPageRedirects = [
    ...Object.entries(currentAddressByLegacyPageName).flatMap(
        ([legacyPageName, currentAddress]) => [
            { source: `/${legacyPageName}`, destination: currentAddress },
            { source: `/${legacyPageName}.html`, destination: currentAddress },
        ]
    ),
    ...Object.entries(currentAddressByLegacyHtmlFile).map(
        ([legacyHtmlFileAddress, currentAddress]) => ({
            source: legacyHtmlFileAddress,
            destination: currentAddress,
        })
    ),
].map((pageRedirect) => ({ ...pageRedirect, permanent: true }))

// Temporary on purpose: browsers never cache a temporary redirect, so an old
// document address keeps following the document if its file is replaced.
const legacyDocumentRedirects = Object.entries(
    currentAddressByLegacyDocument
).map(([legacyDocumentAddress, currentAddress]) => ({
    source: sourcePatternForLegacyDocument(legacyDocumentAddress),
    destination: currentAddress,
    permanent: false,
}))

export const legacyRedirects = [
    ...legacyPageRedirects,
    ...legacyDocumentRedirects,
]
