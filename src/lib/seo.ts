import type { Metadata } from 'next'

export const SITE_NAME = 'Alabama Hands & Voices'
export const SITE_URL =
    'https://alabama-hands-and-voices-redesign.netlify.app'

export const pageMetadata = {
    '/': {
        title: SITE_NAME,
        description:
            'Parent-to-parent support, education, and advocacy for Alabama families of children who are deaf or hard of hearing.',
    },
    '/about': {
        title: 'About Us',
        description:
            'Learn about Alabama Hands & Voices, our family-centered mission, and why we support families without bias around communication choices.',
    },
    '/about/board': {
        title: 'Board of Directors',
        description:
            'Meet the Alabama Hands & Voices Board of Directors and learn how parent leaders, professionals, and D/HH adults guide our work.',
    },
    '/about/staff': {
        title: 'Staff',
        description:
            'Meet the Alabama Hands & Voices staff who provide family support, educational advocacy, and community programs across Alabama.',
    },
    '/about/contact': {
        title: 'Contact Us',
        description:
            'Contact Alabama Hands & Voices for family support, program information, membership questions, or website assistance.',
    },
    '/membership': {
        title: 'Membership',
        description:
            'Join Alabama Hands & Voices and support services for families of children who are deaf or hard of hearing.',
    },
    '/membership/choose-membership': {
        title: 'Choose a Membership',
        description:
            'Choose an Alabama Hands & Voices parent, professional, or organization membership.',
    },
    '/programs': {
        title: 'Programs',
        description:
            'Explore Alabama Hands & Voices programs: Guide By Your Side, ASTra educational advocacy, the O.U.R. Children’s Safety Project, and the D/HH Committee.',
    },
    '/programs/astra': {
        title: 'ASTra Educational Advocacy',
        description:
            'Request support from the Alabama Hands & Voices ASTra educational advocacy program.',
    },
    '/programs/dhh-committee': {
        title: 'D/HH Committee',
        description:
            'Connect with Alabama deaf and hard of hearing role models and members of the Alabama Hands & Voices D/HH Committee.',
    },
    '/programs/gbys': {
        title: 'Guide By Your Side',
        description:
            'Connect with a trained Alabama Hands & Voices Parent Guide through the Guide By Your Side program.',
    },
    '/programs/safety': {
        title: "O.U.R. Children's Safety Project",
        description:
            'Find family safety information and resources through the Alabama Hands & Voices O.U.R. Children’s Safety Project.',
    },
    '/resources': {
        title: 'Resources',
        description:
            'Explore Alabama and national resources for families of children who are deaf or hard of hearing.',
    },
    '/faq': {
        title: 'Frequently Asked Questions',
        description:
            'Answers to common questions from Alabama families of children who are deaf or hard of hearing.',
    },
} as const

export type CanonicalPath = keyof typeof pageMetadata
export const canonicalPaths = Object.keys(pageMetadata) as CanonicalPath[]

export function createPageMetadata(path: CanonicalPath): Metadata {
    const page = pageMetadata[path]
    const socialTitle =
        path === '/' ? SITE_NAME : `${page.title} | ${SITE_NAME}`

    return {
        title: path === '/' ? { absolute: SITE_NAME } : page.title,
        description: page.description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            type: 'website',
            url: path,
            siteName: SITE_NAME,
            title: socialTitle,
            description: page.description,
            images: [
                {
                    url: '/opengraph-image',
                    width: 1200,
                    height: 630,
                    alt: SITE_NAME,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description: page.description,
            images: ['/opengraph-image'],
        },
    }
}
