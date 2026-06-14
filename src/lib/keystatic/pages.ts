import { reader } from './reader'
import type {
    NavigationContent,
    NavigationItemContent,
    SiteSettings,
} from '@/types/cms'

// Typed page content helpers — server-only.
// Import these functions in server components and route files only.

export async function getHomePageContent() {
    return reader.singletons.homePage.read()
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
    return reader.singletons.aboutPage.read()
}

export async function getContactPageContent() {
    return reader.singletons.contactPage.read()
}

export async function getMembershipPageContent() {
    return reader.singletons.membershipPage.read()
}

export async function getChooseMembershipPageContent() {
    return reader.singletons.chooseMembershipPage.read()
}

export async function getAstraPageContent() {
    return reader.singletons.astraPage.read()
}

export async function getGbysPageContent() {
    return reader.singletons.gbysPage.read()
}

export async function getSafetyPageContent() {
    return reader.singletons.safetyPage.read()
}

export async function getDhhCommitteePageContent() {
    return reader.singletons.dhhCommitteePage.read()
}

export async function getResourcesPageContent() {
    return reader.singletons.resourcesPage.read()
}

export async function getFaqPageContent() {
    return reader.singletons.faqPage.read()
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
