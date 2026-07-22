import { config, fields, singleton, collection } from '@keystatic/core'

const isProduction = process.env.NODE_ENV === 'production'

const richTextScope = {
    formatting: {
        inlineMarks: { bold: true, italic: true },
        listTypes: { unordered: true, ordered: true },
        softBreaks: true,
    },
    links: true,
} as const

export default config({
    storage: isProduction ? { kind: 'cloud' } : { kind: 'local' },
    cloud: {
        project: 'al-hands-and-voices/al-hands-and-voices',
    },

    singletons: {
        // ─── Global Singletons ────────────────────────────────────────────────
        siteSettings: singleton({
            label: 'Site Settings',
            path: 'src/content/singletons/siteSettings',
            format: { data: 'yaml' },
            schema: {
                siteName: fields.text({
                    label: 'Site Name',
                    validation: { isRequired: true, length: { max: 80 } },
                }),
                contactEmail: fields.text({
                    label: 'Contact Email',
                    validation: {
                        isRequired: true,
                        pattern: {
                            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address.',
                        },
                    },
                }),
                phone: fields.text({
                    label: 'Phone',
                    validation: { isRequired: true, length: { max: 40 } },
                }),
                address: fields.text({
                    label: 'Address',
                    validation: { isRequired: true, length: { max: 160 } },
                }),
                facebookUrl: fields.url({
                    label: 'Facebook URL',
                    validation: { isRequired: true },
                }),
                donationButtonLabel: fields.text({
                    label: 'Donation Button Label',
                    validation: { isRequired: true, length: { max: 40 } },
                }),
                footerCopyright: fields.text({
                    label: 'Footer Copyright',
                    validation: { isRequired: true, length: { max: 120 } },
                }),
                footerTagline: fields.text({
                    label: 'Footer Tagline',
                    validation: { isRequired: true },
                }),
            },
        }),

        navigation: singleton({
            label: 'Navigation',
            path: 'src/content/singletons/navigation',
            format: { data: 'yaml' },
            schema: {
                about: fields.object(
                    {
                        whoWeAre: navigationItem('Who We Are'),
                        boardMembers: navigationItem('Board Members'),
                        staff: navigationItem('Staff'),
                        contact: navigationItem('Contact'),
                    },
                    { label: 'About Menu Items' }
                ),
                programs: fields.object(
                    {
                        gbys: navigationItem('Guide By Your Side (GBYS)'),
                        astra: navigationItem('Educational Advocacy (ASTra)'),
                        safety: navigationItem(
                            "O.U.R. Children's Safety Project"
                        ),
                        dhhCommittee: navigationItem('DHH Committee Members'),
                    },
                    { label: 'Program Menu Items' }
                ),
            },
        }),

        // ─── Page Singletons ──────────────────────────────────────────────────
        homePage: singleton({
            label: 'Home Page',
            path: 'src/content/singletons/homePage',
            format: { data: 'yaml' },
            schema: {
                heroQuote: fields.text({
                    label: 'Hero Quote',
                    validation: { isRequired: true },
                }),
                heroLogoImage: localImagePathField(
                    'Hero Logo Image Path',
                    true
                ),
                intro: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        body: fields.document({
                            label: 'Body',
                            ...richTextScope,
                        }),
                        image: localImagePathField('Image Path', true),
                        imageAlt: fields.text({
                            label: 'Image Alt Text',
                            validation: { isRequired: true },
                        }),
                    },
                    { label: 'Intro Section' }
                ),
                mission: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        body: fields.document({
                            label: 'Body',
                            ...richTextScope,
                        }),
                    },
                    { label: 'Mission Section' }
                ),
                whereToStart: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        subheading: fields.text({
                            label: 'Subheading',
                            validation: { isRequired: true },
                        }),
                        body: fields.text({
                            label: 'Body',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                        quoteText: fields.text({
                            label: 'Quote Text',
                            validation: { isRequired: true },
                        }),
                        quoteAuthors: fields.text({
                            label: 'Quote Authors',
                            validation: { isRequired: true },
                        }),
                        backgroundImage: localImagePathField(
                            'Background Image Path',
                            true
                        ),
                        stats: fields.array(
                            fields.object({
                                number: fields.text({
                                    label: 'Number',
                                    validation: { isRequired: true },
                                }),
                                label: fields.text({
                                    label: 'Label',
                                    validation: { isRequired: true },
                                }),
                            }),
                            {
                                label: 'Stats',
                                itemLabel: (props) =>
                                    props.fields.label.value || 'Stat',
                            }
                        ),
                        resourceLinks: fields.array(
                            fields.object({
                                label: fields.text({
                                    label: 'Label',
                                    validation: { isRequired: true },
                                }),
                                url: mixedLinkField('URL', true),
                            }),
                            {
                                label: 'Starting Resources',
                                itemLabel: (props) =>
                                    props.fields.label.value || 'Resource',
                            }
                        ),
                        ctaLabel: fields.text({
                            label: 'CTA Label',
                            validation: { isRequired: true },
                        }),
                        ctaHref: mixedLinkField('CTA Href', true),
                    },
                    { label: 'Where to Start Section' }
                ),
                learnMore: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        featureBlocks: fields.array(
                            fields.object({
                                heading: fields.text({
                                    label: 'Heading',
                                    validation: { isRequired: true },
                                }),
                                body: fields.text({
                                    label: 'Body',
                                    multiline: true,
                                    validation: { isRequired: true },
                                }),
                                image: localImagePathField('Image Path', true),
                                imageAlt: fields.text({
                                    label: 'Image Alt Text',
                                    validation: { isRequired: true },
                                }),
                            }),
                            {
                                label: 'Feature Blocks',
                                itemLabel: (props) =>
                                    props.fields.heading.value || 'Block',
                            }
                        ),
                    },
                    { label: 'Learn More Section' }
                ),
                membership: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        body: fields.text({
                            label: 'Body',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                        fees: fields.array(
                            fields.object({
                                label: fields.text({
                                    label: 'Label',
                                    validation: { isRequired: true },
                                }),
                                price: fields.text({
                                    label: 'Price',
                                    validation: { isRequired: true },
                                }),
                            }),
                            {
                                label: 'Membership Fees',
                                itemLabel: (props) =>
                                    props.fields.label.value || 'Fee',
                            }
                        ),
                        pageUrl: mixedLinkField('Membership Page URL', true),
                        formUrl: mixedLinkField('Membership Form URL', true),
                    },
                    { label: 'Membership Section' }
                ),
                support: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        body: fields.text({
                            label: 'Body',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                    },
                    { label: 'Support Section' }
                ),
                events: fields.object(
                    {
                        heading: fields.text({
                            label: 'Heading',
                            validation: { isRequired: true },
                        }),
                        intro: fields.text({
                            label: 'Intro',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                        backgroundImage: localImagePathField(
                            'Background Image Path',
                            true
                        ),
                    },
                    { label: 'Events Section' }
                ),
            },
        }),

        aboutPage: singleton({
            label: 'About Page',
            path: 'src/content/singletons/aboutPage',
            format: { data: 'yaml' },
            schema: {
                whoWeAreBody: fields.document({
                    label: 'Who We Are Body',
                    ...richTextScope,
                }),
                whoWeAreQuote: fields.text({
                    label: 'Who We Are Quote',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                whoWeAreQuoteAttribution: fields.text({
                    label: 'Quote Attribution',
                    validation: { isRequired: true },
                }),
                whyWeAreHereBody: fields.document({
                    label: 'Why We Are Here Body',
                    ...richTextScope,
                }),
                values: fields.array(
                    fields.object({
                        value: fields.text({
                            label: 'Value',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Shared Values',
                        itemLabel: (props) =>
                            props.fields.value.value || 'Value',
                    }
                ),
                membershipCtaText: fields.text({
                    label: 'Membership CTA Text',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                membershipFormUrl: mixedLinkField('Membership Form URL'),
                images: fields.array(
                    fields.object({
                        src: localImagePathField('Image Path', true),
                        alt: fields.text({
                            label: 'Alt Text',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Images',
                        itemLabel: (props) => props.fields.alt.value || 'Image',
                    }
                ),
            },
        }),

        contactPage: singleton({
            label: 'Contact Page',
            path: 'src/content/singletons/contactPage',
            format: { data: 'yaml' },
            schema: {
                heading: fields.text({
                    label: 'Heading',
                    validation: { isRequired: true },
                }),
                body: fields.text({
                    label: 'Body',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                email: fields.text({ label: 'Email' }),
                phone: fields.text({ label: 'Phone' }),
                mailingAddress: fields.text({ label: 'Mailing Address' }),
                facebookGroupUrl: fields.url({
                    label: 'Facebook Group URL',
                    validation: { isRequired: true },
                }),
                surveyUrl: fields.url({
                    label: 'Survey URL',
                    validation: { isRequired: true },
                }),
                image: localImagePathField('Image Path'),
            },
        }),

        membershipPage: singleton({
            label: 'Membership Page',
            path: 'src/content/singletons/membershipPage',
            format: { data: 'yaml' },
            schema: {
                heroHeading: fields.text({
                    label: 'Hero Heading',
                    validation: { isRequired: true },
                }),
                heroText: fields.text({
                    label: 'Hero Text',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                documentDownloadUrl: mixedLinkField(
                    'Document Download URL',
                    true
                ),
                scholarshipNote: fields.document({
                    label: 'Scholarship Note',
                    ...richTextScope,
                }),
            },
        }),

        chooseMembershipPage: singleton({
            label: 'Choose Membership Page',
            path: 'src/content/singletons/chooseMembershipPage',
            format: { data: 'yaml' },
            schema: {
                membershipOptions: fields.object(
                    {
                        parent: membershipOption(
                            'Parent, Student, and DHH Adult'
                        ),
                        professional: membershipOption('Professional'),
                        organization: membershipOption('Organization'),
                    },
                    { label: 'Membership Options' }
                ),
            },
        }),

        astraPage: singleton({
            label: 'ASTra Page',
            path: 'src/content/singletons/astraPage',
            format: { data: 'yaml' },
            schema: {
                heroTagline: fields.text({
                    label: 'Hero Tagline',
                    validation: { isRequired: true },
                }),
                programDescription: fields.document({
                    label: 'Program Description',
                    ...richTextScope,
                }),
                questions: fields.array(
                    fields.object({
                        question: fields.text({
                            label: 'Question',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Questions',
                        itemLabel: (props) =>
                            props.fields.question.value || 'Question',
                    }
                ),
                resourceLinks: fields.array(
                    fields.object({
                        name: fields.text({
                            label: 'Name',
                            validation: { isRequired: true },
                        }),
                        url: mixedLinkField('URL', true),
                    }),
                    {
                        label: 'Resource Links',
                        itemLabel: (props) => props.fields.name.value || 'Link',
                    }
                ),
                trainingCtaLabel: fields.text({ label: 'Training CTA Label' }),
                trainingCtaHref: mixedLinkField('Training CTA Href'),
            },
        }),

        gbysPage: singleton({
            label: 'GBYS Page',
            path: 'src/content/singletons/gbysPage',
            format: { data: 'yaml' },
            schema: {
                heroTagline: fields.text({
                    label: 'Hero Tagline',
                    validation: { isRequired: true },
                }),
                programIntro: fields.document({
                    label: 'Program Intro',
                    ...richTextScope,
                }),
                services: fields.array(
                    fields.object({
                        service: fields.text({
                            label: 'Service',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Services',
                        itemLabel: (props) =>
                            props.fields.service.value || 'Service',
                    }
                ),
                enrollmentNote: fields.text({
                    label: 'Enrollment Note',
                    multiline: true,
                }),
                flyerEnglishUrl: mixedLinkField('English Flyer URL', true),
                flyerSpanishUrl: mixedLinkField('Spanish Flyer URL', true),
            },
        }),

        safetyPage: singleton({
            label: "O.U.R. Children's Safety Page",
            path: 'src/content/singletons/safetyPage',
            format: { data: 'yaml' },
            schema: {
                heroTagline: fields.text({
                    label: 'Hero Tagline',
                    validation: { isRequired: true },
                }),
                introCopy: fields.document({
                    label: 'Intro Copy',
                    ...richTextScope,
                }),
                actionCards: fields.array(
                    fields.object({
                        title: fields.text({
                            label: 'Title',
                            validation: { isRequired: true },
                        }),
                        description: fields.text({
                            label: 'Description',
                            multiline: true,
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Action Cards',
                        itemLabel: (props) =>
                            props.fields.title.value || 'Card',
                    }
                ),
                familyRetreatsHeading: fields.text({
                    label: 'Family Retreats Heading',
                    validation: { isRequired: true },
                }),
                familyRetreatsBody: fields.text({
                    label: 'Family Retreats Body',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                familyRetreatsLink: mixedLinkField(
                    'Family Retreats Link',
                    true
                ),
            },
        }),

        dhhCommitteePage: singleton({
            label: 'DHH Committee Page',
            path: 'src/content/singletons/dhhCommitteePage',
            format: { data: 'yaml' },
            schema: {
                heroTagline: fields.text({
                    label: 'Hero Tagline',
                    validation: { isRequired: true },
                }),
                committeeCardBody: fields.text({
                    label: 'Committee Card Body',
                    validation: { isRequired: true },
                }),
                description: fields.document({
                    label: 'Description',
                    ...richTextScope,
                }),
                benefits: fields.array(
                    fields.object({
                        benefit: fields.text({
                            label: 'Benefit',
                            validation: { isRequired: true },
                        }),
                    }),
                    {
                        label: 'Benefits',
                        itemLabel: (props) =>
                            props.fields.benefit.value || 'Benefit',
                    }
                ),
                videoSectionHeading: fields.text({
                    label: 'Video Section Heading',
                }),
            },
        }),

        resourcesPage: singleton({
            label: 'Resources Page',
            path: 'src/content/singletons/resourcesPage',
            format: { data: 'yaml' },
            schema: {
                introCopy: fields.text({
                    label: 'Intro Copy',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                resourceCategories: fields.array(
                    fields.object({
                        title: fields.text({
                            label: 'Category Title',
                            validation: { isRequired: true },
                        }),
                        resources: fields.array(
                            fields.object({
                                name: fields.text({
                                    label: 'Name',
                                    validation: { isRequired: true },
                                }),
                                url: mixedLinkField('URL', true),
                            }),
                            {
                                label: 'Resources',
                                itemLabel: (props) =>
                                    props.fields.name.value || 'Resource',
                            }
                        ),
                    }),
                    {
                        label: 'Resource Categories',
                        itemLabel: (props) =>
                            props.fields.title.value || 'Category',
                    }
                ),
                ehdiSidebarBody: fields.text({
                    label: 'EHDI Sidebar Body',
                    multiline: true,
                    validation: { isRequired: true },
                }),
                ehdiSidebarUrl: fields.url({
                    label: 'EHDI Sidebar URL',
                    validation: { isRequired: true },
                }),
            },
        }),

        faqPage: singleton({
            label: 'FAQ Page',
            path: 'src/content/singletons/faqPage',
            format: { data: 'yaml' },
            schema: {
                heading: fields.text({
                    label: 'Heading',
                    validation: { isRequired: true },
                }),
                introCopy: fields.text({
                    label: 'Intro Copy',
                    multiline: true,
                }),
                faqEntries: fields.array(
                    fields.object({
                        question: fields.text({
                            label: 'Question',
                            validation: { isRequired: true },
                        }),
                        answer: fields.document({
                            label: 'Answer',
                            ...richTextScope,
                        }),
                        resourceLinks: fields.array(
                            fields.object({
                                label: fields.text({
                                    label: 'Label',
                                    validation: { isRequired: true },
                                }),
                                url: mixedLinkField('URL', true),
                            }),
                            {
                                label: 'Resource Links',
                                itemLabel: (props) =>
                                    props.fields.label.value || 'Resource',
                            }
                        ),
                    }),
                    {
                        label: 'FAQ Entries',
                        itemLabel: (props) =>
                            props.fields.question.value || 'Entry',
                    }
                ),
            },
        }),
    },

    collections: {
        events: collection({
            label: 'Events',
            path: 'src/content/events/*',
            slugField: 'title',
            format: { data: 'yaml' },
            schema: {
                title: fields.slug({
                    name: {
                        label: 'Title',
                        validation: { isRequired: true, length: { max: 120 } },
                    },
                }),
                dateText: fields.text({
                    label: 'Date / schedule',
                    description:
                        'Shown on the card, e.g. "Every first Tuesday" or "March 14, 2027". Leave blank to hide.',
                }),
                location: fields.text({
                    label: 'Location',
                    description:
                        'e.g. "Virtual (Zoom)" or a venue. Leave blank to hide.',
                }),
                description: fields.document({
                    label: 'Description',
                    ...richTextScope,
                }),
                linkLabel: fields.text({
                    label: 'Button label',
                    description:
                        'Optional call-to-action button text, e.g. "Register".',
                }),
                linkUrl: fields.text({
                    label: 'Button URL',
                    description:
                        'Where the button goes. Required if a button label is set.',
                }),
                active: fields.checkbox({
                    label: 'Show on site',
                    defaultValue: true,
                }),
                sortOrder: fields.integer({
                    label: 'Sort Order',
                    defaultValue: 99,
                    validation: { isRequired: true, min: 0 },
                }),
            },
        }),

        boardMembers: collection({
            label: 'Board Members',
            path: 'src/content/boardMembers/*',
            slugField: 'name',
            format: { data: 'yaml' },
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                role: fields.text({
                    label: 'Role',
                    validation: { isRequired: true },
                }),
                imageUrl: fields.text({ label: 'Image URL' }),
                sortOrder: fields.integer({
                    label: 'Sort Order',
                    defaultValue: 99,
                }),
            },
        }),

        staffMembers: collection({
            label: 'Staff Members',
            path: 'src/content/staffMembers/*',
            slugField: 'name',
            format: { data: 'yaml' },
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                role: fields.text({
                    label: 'Role',
                    validation: { isRequired: true },
                }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Parent Guide', value: 'Parent Guide' },
                        { label: 'Coordinator', value: 'Coordinator' },
                    ],
                    defaultValue: 'Parent Guide',
                }),
                imageUrl: fields.text({ label: 'Image URL' }),
                sortOrder: fields.integer({
                    label: 'Sort Order',
                    defaultValue: 99,
                }),
            },
        }),

        videos: collection({
            label: 'Videos',
            path: 'src/content/videos/*',
            slugField: 'internalId',
            format: { data: 'yaml' },
            schema: {
                internalId: fields.slug({
                    name: {
                        label: 'Internal ID',
                        description:
                            'Used for the content filename; not displayed publicly.',
                        validation: { isRequired: true, length: { max: 100 } },
                    },
                }),
                title: fields.text({
                    label: 'Title',
                    validation: { isRequired: true, length: { max: 160 } },
                }),
                youtubeId: fields.text({
                    label: 'YouTube ID',
                    description: 'The 11-character ID from the YouTube URL.',
                    validation: {
                        isRequired: true,
                        pattern: {
                            regex: /^[A-Za-z0-9_-]{11}$/,
                            message:
                                'Enter a valid 11-character YouTube video ID.',
                        },
                    },
                }),
                placement: fields.select({
                    label: 'Placement',
                    options: [
                        { label: 'Resources', value: 'resources' },
                        { label: 'DHH Committee', value: 'dhh-committee' },
                    ],
                    defaultValue: 'resources',
                }),
                thumbnailFrame: fields.select({
                    label: 'Thumbnail Frame',
                    options: [
                        { label: 'Default frame', value: '0' },
                        { label: 'Alternate frame', value: '1' },
                    ],
                    defaultValue: '0',
                }),
                sortOrder: fields.integer({
                    label: 'Sort Order',
                    defaultValue: 99,
                    validation: { isRequired: true, min: 0 },
                }),
                active: fields.checkbox({
                    label: 'Active',
                    defaultValue: true,
                }),
            },
        }),
    },
})

function navigationItem(label: string) {
    return fields.object(
        {
            title: fields.text({
                label: 'Title',
                validation: { isRequired: true, length: { max: 80 } },
            }),
            description: fields.text({
                label: 'Description',
                multiline: true,
                validation: { isRequired: true, length: { max: 240 } },
            }),
        },
        { label }
    )
}

function membershipOption(label: string) {
    return fields.object(
        {
            subtitle: fields.text({
                label: 'Subtitle',
                validation: { isRequired: true, length: { max: 120 } },
            }),
            image: localImagePathField('Image Path', true),
        },
        { label }
    )
}

function localImagePathField(label: string, isRequired = false) {
    return fields.text({
        label,
        description: 'Path under /images/, e.g. /images/family.jpg',
        validation: {
            ...(isRequired ? { isRequired: true } : {}),
            pattern: {
                regex: /^\/images\/.+/,
                message: 'Use a path under /images/.',
            },
        },
    })
}

function mixedLinkField(label: string, isRequired = false) {
    return fields.text({
        label,
        description:
            'Enter an internal path beginning with / or a complete external URL.',
        validation: isRequired ? { isRequired: true } : undefined,
    })
}
