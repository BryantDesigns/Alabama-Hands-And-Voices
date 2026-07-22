export interface SiteSettings {
    siteName: string
    contactEmail: string
    phone: string
    address: string
    facebookUrl: string
    donationButtonLabel: string
    footerCopyright: string
    footerTagline: string
}

export interface NavigationItemContent {
    title: string
    description: string
}

export interface NavigationContent {
    about: {
        whoWeAre: NavigationItemContent
        boardMembers: NavigationItemContent
        staff: NavigationItemContent
        contact: NavigationItemContent
    }
    programs: {
        gbys: NavigationItemContent
        astra: NavigationItemContent
        safety: NavigationItemContent
        dhhCommittee: NavigationItemContent
    }
}

export interface VideoContent {
    id: string
    title: string
    youtubeId: string
    thumbnailFrame: '0' | '1'
}
