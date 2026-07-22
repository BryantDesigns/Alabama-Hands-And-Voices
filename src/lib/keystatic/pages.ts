import { reader } from './reader'
import type {
    NavigationContent,
    NavigationItemContent,
    SiteSettings,
} from '@/types/cms'

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

export async function getSiteSettings() {
    const settings = await reader.singletons.siteSettings.read()

    if (!settings) {
        throw new Error(
            '[Keystatic] Required Site Settings content is missing.'
        )
    }

    const normalized: SiteSettings = {
        siteName: requireText(settings.siteName, 'Site Settings > Site Name'),
        contactEmail: requireText(
            settings.contactEmail,
            'Site Settings > Contact Email'
        ),
        phone: requireText(settings.phone, 'Site Settings > Phone'),
        address: requireText(settings.address, 'Site Settings > Address'),
        facebookUrl: requireText(
            settings.facebookUrl,
            'Site Settings > Facebook URL'
        ),
        donationButtonLabel: requireText(
            settings.donationButtonLabel,
            'Site Settings > Donation Button Label'
        ),
        footerCopyright: requireText(
            settings.footerCopyright,
            'Site Settings > Footer Copyright'
        ),
        footerTagline: requireText(
            settings.footerTagline,
            'Site Settings > Footer Tagline'
        ),
    }

    try {
        new URL(normalized.facebookUrl)
    } catch {
        throw new Error(
            '[Keystatic] Site Settings > Facebook URL must be a valid URL.'
        )
    }

    return normalized
}

export async function getNavigation() {
    const navigation = await reader.singletons.navigation.read()

    if (!navigation) {
        throw new Error('[Keystatic] Required Navigation content is missing.')
    }

    const normalized: NavigationContent = {
        about: {
            whoWeAre: requireNavigationItem(
                navigation.about.whoWeAre,
                'About > Who We Are'
            ),
            boardMembers: requireNavigationItem(
                navigation.about.boardMembers,
                'About > Board Members'
            ),
            staff: requireNavigationItem(
                navigation.about.staff,
                'About > Staff'
            ),
            contact: requireNavigationItem(
                navigation.about.contact,
                'About > Contact'
            ),
        },
        programs: {
            gbys: requireNavigationItem(
                navigation.programs.gbys,
                'Programs > Guide By Your Side'
            ),
            astra: requireNavigationItem(
                navigation.programs.astra,
                'Programs > ASTra'
            ),
            safety: requireNavigationItem(
                navigation.programs.safety,
                "Programs > O.U.R. Children's Safety"
            ),
            dhhCommittee: requireNavigationItem(
                navigation.programs.dhhCommittee,
                'Programs > DHH Committee'
            ),
        },
    }

    return normalized
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

export async function getAstraPageContent() {
    const page = await reader.singletons.astraPage.read()

    if (!page) return null

    return { ...page, programDescription: await page.programDescription() }
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

function requireText(value: string | null, field: string) {
    if (!value?.trim()) {
        throw new Error(`[Keystatic] Required field "${field}" is empty.`)
    }

    return value.trim()
}

function requireNavigationItem(
    item: { title: string; description: string },
    field: string
): NavigationItemContent {
    return {
        title: requireText(item.title, `${field} > Title`),
        description: requireText(item.description, `${field} > Description`),
    }
}
