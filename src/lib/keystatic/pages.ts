import { reader } from './reader'

// Typed page content helpers — server-only.
// Import these functions in server components and route files only.

export async function getHomePageContent() {
    const page = await reader.singletons.homePage.read()

    if (!page) return null

    const [introBody, missionBody] = await Promise.all([
        page.intro.body(),
        page.mission.body(),
    ])

    return {
        ...page,
        intro: { ...page.intro, body: introBody },
        mission: { ...page.mission, body: missionBody },
    }
}

export async function getAboutPageContent() {
    const page = await reader.singletons.aboutPage.read()

    if (!page) return null

    const [whoWeAreBody, whyWeAreHereBody] = await Promise.all([
        page.whoWeAreBody(),
        page.whyWeAreHereBody(),
    ])

    return { ...page, whoWeAreBody, whyWeAreHereBody }
}

export async function getContactPageContent() {
    return reader.singletons.contactPage.read()
}

export async function getMembershipPageContent() {
    const page = await reader.singletons.membershipPage.read()

    if (!page) return null

    return { ...page, scholarshipNote: await page.scholarshipNote() }
}

export async function getChooseMembershipPageContent() {
    return reader.singletons.chooseMembershipPage.read()
}

export async function getGbysPageContent() {
    const page = await reader.singletons.gbysPage.read()

    if (!page) return null

    return { ...page, programIntro: await page.programIntro() }
}

export async function getSafetyPageContent() {
    const page = await reader.singletons.safetyPage.read()

    if (!page) return null

    return { ...page, introCopy: await page.introCopy() }
}

export async function getDhhCommitteePageContent() {
    const page = await reader.singletons.dhhCommitteePage.read()

    if (!page) return null

    return { ...page, description: await page.description() }
}

export async function getResourcesPageContent() {
    return reader.singletons.resourcesPage.read()
}

export async function getFaqPageContent() {
    const page = await reader.singletons.faqPage.read()

    if (!page) return null

    const faqEntries = await Promise.all(
        page.faqEntries.map(async (entry) => ({
            ...entry,
            answer: await entry.answer(),
        }))
    )

    return { ...page, faqEntries }
}
