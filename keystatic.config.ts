import { config, fields, singleton, collection } from '@keystatic/core'

const isProduction = process.env.NODE_ENV === 'production'

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
        siteName: fields.text({ label: 'Site Name' }),
        contactEmail: fields.text({ label: 'Contact Email' }),
        phone: fields.text({ label: 'Phone' }),
        address: fields.text({ label: 'Address' }),
        facebookUrl: fields.text({ label: 'Facebook URL' }),
        donationButtonLabel: fields.text({ label: 'Donation Button Label' }),
        footerCopyright: fields.text({ label: 'Footer Copyright' }),
      },
    }),

    navigation: singleton({
      label: 'Navigation',
      path: 'src/content/singletons/navigation',
      format: { data: 'yaml' },
      schema: {
        aboutMenuItems: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'Href' }),
            description: fields.text({ label: 'Description' }),
          }),
          {
            label: 'About Menu Items',
            itemLabel: (props) => props.fields.name.value || 'Menu Item',
          }
        ),
        programMenuItems: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            href: fields.text({ label: 'Href' }),
            description: fields.text({ label: 'Description' }),
          }),
          {
            label: 'Program Menu Items',
            itemLabel: (props) => props.fields.name.value || 'Menu Item',
          }
        ),
      },
    }),

    // ─── Page Singletons ──────────────────────────────────────────────────
    homePage: singleton({
      label: 'Home Page',
      path: 'src/content/singletons/homePage',
      format: { data: 'yaml' },
      schema: {
        heroQuote: fields.text({ label: 'Hero Quote' }),
        heroLogoImage: fields.text({ label: 'Hero Logo Image Path' }),
        intro: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            body: fields.text({ label: 'Body', multiline: true }),
            image: fields.text({ label: 'Image Path' }),
            imageAlt: fields.text({ label: 'Image Alt Text' }),
          },
          { label: 'Intro Section' }
        ),
        whereToStart: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            subheading: fields.text({ label: 'Subheading' }),
            body: fields.text({ label: 'Body', multiline: true }),
            quoteText: fields.text({ label: 'Quote Text' }),
            quoteAuthors: fields.text({ label: 'Quote Authors' }),
            backgroundImage: fields.text({ label: 'Background Image Path' }),
            stats: fields.array(
              fields.object({
                number: fields.text({ label: 'Number' }),
                label: fields.text({ label: 'Label' }),
              }),
              {
                label: 'Stats',
                itemLabel: (props) => props.fields.label.value || 'Stat',
              }
            ),
            ctaLabel: fields.text({ label: 'CTA Label' }),
            ctaHref: fields.text({ label: 'CTA Href' }),
          },
          { label: 'Where to Start Section' }
        ),
        learnMore: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            featureBlocks: fields.array(
              fields.object({
                heading: fields.text({ label: 'Heading' }),
                body: fields.text({ label: 'Body', multiline: true }),
                image: fields.text({ label: 'Image Path' }),
                imageAlt: fields.text({ label: 'Image Alt Text' }),
              }),
              {
                label: 'Feature Blocks',
                itemLabel: (props) => props.fields.heading.value || 'Block',
              }
            ),
          },
          { label: 'Learn More Section' }
        ),
        support: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            body: fields.text({ label: 'Body', multiline: true }),
            ctaLabel: fields.text({ label: 'CTA Label' }),
          },
          { label: 'Support Section' }
        ),
        events: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            intro: fields.text({ label: 'Intro', multiline: true }),
            backgroundImage: fields.text({ label: 'Background Image Path' }),
            events: fields.array(
              fields.object({
                title: fields.text({ label: 'Title' }),
                description: fields.text({ label: 'Description', multiline: true }),
              }),
              {
                label: 'Events',
                itemLabel: (props) => props.fields.title.value || 'Event',
              }
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
        whoWeAreBody: fields.text({ label: 'Who We Are Body', multiline: true }),
        whyWeAreHereBody: fields.text({ label: 'Why We Are Here Body', multiline: true }),
        membershipCtaText: fields.text({ label: 'Membership CTA Text', multiline: true }),
        membershipFormUrl: fields.text({ label: 'Membership Form URL' }),
        images: fields.array(
          fields.object({
            src: fields.text({ label: 'Image Path' }),
            alt: fields.text({ label: 'Alt Text' }),
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
        heading: fields.text({ label: 'Heading' }),
        body: fields.text({ label: 'Body', multiline: true }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        image: fields.text({ label: 'Image Path' }),
      },
    }),

    membershipPage: singleton({
      label: 'Membership Page',
      path: 'src/content/singletons/membershipPage',
      format: { data: 'yaml' },
      schema: {
        heroText: fields.text({ label: 'Hero Text', multiline: true }),
        documentDownloadUrl: fields.text({ label: 'Document Download URL' }),
        scholarshipNote: fields.text({ label: 'Scholarship Note', multiline: true }),
      },
    }),

    chooseMembershipPage: singleton({
      label: 'Choose Membership Page',
      path: 'src/content/singletons/chooseMembershipPage',
      format: { data: 'yaml' },
      schema: {
        membershipOptions: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            subtitle: fields.text({ label: 'Subtitle' }),
            price: fields.text({ label: 'Price' }),
            paypalButtonId: fields.text({ label: 'PayPal Button ID' }),
            image: fields.text({ label: 'Image Path' }),
          }),
          {
            label: 'Membership Options',
            itemLabel: (props) => props.fields.title.value || 'Option',
          }
        ),
      },
    }),

    astraPage: singleton({
      label: 'ASTra Page',
      path: 'src/content/singletons/astraPage',
      format: { data: 'yaml' },
      schema: {
        programDescription: fields.text({ label: 'Program Description', multiline: true }),
        questions: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
          }),
          {
            label: 'Questions',
            itemLabel: (props) => props.fields.question.value || 'Question',
          }
        ),
        resourceLinks: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            url: fields.text({ label: 'URL' }),
          }),
          {
            label: 'Resource Links',
            itemLabel: (props) => props.fields.name.value || 'Link',
          }
        ),
        trainingCtaLabel: fields.text({ label: 'Training CTA Label' }),
        trainingCtaHref: fields.text({ label: 'Training CTA Href' }),
      },
    }),

    gbysPage: singleton({
      label: 'GBYS Page',
      path: 'src/content/singletons/gbysPage',
      format: { data: 'yaml' },
      schema: {
        programIntro: fields.text({ label: 'Program Intro', multiline: true }),
        services: fields.array(
          fields.object({
            service: fields.text({ label: 'Service' }),
          }),
          {
            label: 'Services',
            itemLabel: (props) => props.fields.service.value || 'Service',
          }
        ),
        enrollmentNote: fields.text({ label: 'Enrollment Note', multiline: true }),
      },
    }),

    safetyPage: singleton({
      label: "O.U.R. Children's Safety Page",
      path: 'src/content/singletons/safetyPage',
      format: { data: 'yaml' },
      schema: {
        introCopy: fields.text({ label: 'Intro Copy', multiline: true }),
        actionCards: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Action Cards',
            itemLabel: (props) => props.fields.title.value || 'Card',
          }
        ),
        familyRetreatsHeading: fields.text({ label: 'Family Retreats Heading' }),
        familyRetreatsBody: fields.text({ label: 'Family Retreats Body', multiline: true }),
        familyRetreatsLink: fields.text({ label: 'Family Retreats Link' }),
      },
    }),

    dhhCommitteePage: singleton({
      label: 'DHH Committee Page',
      path: 'src/content/singletons/dhhCommitteePage',
      format: { data: 'yaml' },
      schema: {
        description: fields.text({ label: 'Description', multiline: true }),
        benefits: fields.array(
          fields.object({
            benefit: fields.text({ label: 'Benefit' }),
          }),
          {
            label: 'Benefits',
            itemLabel: (props) => props.fields.benefit.value || 'Benefit',
          }
        ),
        videoSectionHeading: fields.text({ label: 'Video Section Heading' }),
      },
    }),

    resourcesPage: singleton({
      label: 'Resources Page',
      path: 'src/content/singletons/resourcesPage',
      format: { data: 'yaml' },
      schema: {
        introCopy: fields.text({ label: 'Intro Copy', multiline: true }),
        resourceCategories: fields.array(
          fields.object({
            title: fields.text({ label: 'Category Title' }),
            resources: fields.array(
              fields.object({
                name: fields.text({ label: 'Name' }),
                url: fields.text({ label: 'URL' }),
              }),
              {
                label: 'Resources',
                itemLabel: (props) => props.fields.name.value || 'Resource',
              }
            ),
          }),
          {
            label: 'Resource Categories',
            itemLabel: (props) => props.fields.title.value || 'Category',
          }
        ),
        ehdiSidebarBody: fields.text({ label: 'EHDI Sidebar Body', multiline: true }),
        ehdiSidebarUrl: fields.text({ label: 'EHDI Sidebar URL' }),
      },
    }),

    faqPage: singleton({
      label: 'FAQ Page',
      path: 'src/content/singletons/faqPage',
      format: { data: 'yaml' },
      schema: {
        heading: fields.text({ label: 'Heading' }),
        introCopy: fields.text({ label: 'Intro Copy', multiline: true }),
        faqEntries: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          {
            label: 'FAQ Entries',
            itemLabel: (props) => props.fields.question.value || 'Entry',
          }
        ),
      },
    }),
  },

  collections: {
    boardMembers: collection({
      label: 'Board Members',
      path: 'src/content/boardMembers/*',
      slugField: 'name',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        imageUrl: fields.text({ label: 'Image URL' }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 99 }),
      },
    }),

    staffMembers: collection({
      label: 'Staff Members',
      path: 'src/content/staffMembers/*',
      slugField: 'name',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        category: fields.text({ label: 'Category' }),
        imageUrl: fields.text({ label: 'Image URL' }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 99 }),
      },
    }),

    videos: collection({
      label: 'Videos',
      path: 'src/content/videos/*',
      slugField: 'title',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        youtubeId: fields.text({ label: 'YouTube ID' }),
        placement: fields.text({ label: 'Placement' }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 99 }),
        active: fields.checkbox({ label: 'Active', defaultValue: true }),
      },
    }),
  },
})
