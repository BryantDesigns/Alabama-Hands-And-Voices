import { expect, test } from '@playwright/test'
import type { DocumentElement } from '@keystatic/core'
import { membershipTiers, PAYPAL_CGI_URL } from '../../src/lib/membership'
import { selectActiveEvents } from '../../src/lib/events'
import { selectActiveVideos } from '../../src/lib/videos'

test('renders fixed navigation and connected global settings', async ({
    page,
}, testInfo) => {
    test.skip(
        testInfo.project.name === 'mobile-chromium',
        'Desktop navigation is hidden at the mobile breakpoint.'
    )

    await page.goto('/')

    const header = page.getByRole('banner')
    const mainContent = page.locator('#main-content')
    const footer = page.getByRole('contentinfo')
    const navigation = header.getByRole('navigation', {
        name: 'Main navigation',
    })
    await navigation.getByRole('button', { name: 'About' }).click()
    for (const name of ['Who We Are', 'Board Members', 'Staff', 'Contact']) {
        await expect(
            navigation.getByRole('link', { name, exact: true })
        ).toBeVisible()
    }

    await navigation.getByRole('button', { name: 'Programs' }).click()
    for (const name of [
        'All Programs',
        'Guide By Your Side (GBYS)',
        'Educational Advocacy (ASTra)',
        "O.U.R. Children's Safety Project",
        'DHH Committee Members',
    ]) {
        await expect(
            navigation.getByRole('link', { name, exact: true })
        ).toBeVisible()
    }

    await expect(page).toHaveTitle(/Alabama Hands & Voices/)
    const facebookPageLink =
        'a[href="https://www.facebook.com/alabamahandsandvoices/"]'
    await expect(header.locator(facebookPageLink)).toHaveCount(1)
    await expect(footer.locator(facebookPageLink)).toHaveCount(1)
    await expect
        .poll(() => mainContent.locator(facebookPageLink).count())
        .toBeGreaterThanOrEqual(1)
    await expect(
        footer.getByText('alabamahinfo@gmail.com', { exact: true })
    ).toBeVisible()
    await expect(
        footer.getByText('205-677-3136', { exact: true })
    ).toBeVisible()
    await expect(
        footer.getByText('P.O. Box 130627, Birmingham, AL 35213', {
            exact: true,
        })
    ).toBeVisible()
    await expect(
        footer.getByText(
            `© ${new Date().getFullYear()} Alabama Hands & Voices. All rights reserved.`,
            { exact: true }
        )
    ).toBeVisible()

    for (const group of ['Explore', 'Get involved', 'Connect']) {
        await expect(
            footer.getByRole('heading', {
                name: group,
                exact: true,
            })
        ).toBeVisible()
    }

    const paypalForm = 'form[action="https://www.paypal.com/cgi-bin/webscr"]'
    const footerDonationForms = footer.locator(paypalForm)
    await expect(footerDonationForms).toHaveCount(1)
    await expect(
        footerDonationForms.locator('input[name="hosted_button_id"]')
    ).toHaveValue('R99Y9497TS2SW')

    const mainDonationForms = mainContent.locator(paypalForm)
    await expect
        .poll(() => mainDonationForms.count())
        .toBeGreaterThanOrEqual(1)
    await expect(
        mainDonationForms
            .first()
            .locator('input[name="hosted_button_id"]')
    ).toHaveValue('R99Y9497TS2SW')
    await expect(
        mainDonationForms
            .first()
            .getByRole('button', { name: 'Donate', exact: true })
    ).toBeVisible()
    await expect(
        footer.getByRole('button', { name: 'Donate Now', exact: true })
    ).toBeVisible()
})

test('renders membership signup, payment tiers, donation, and success handoff', async ({
    page,
}) => {
    await page.goto('/membership/choose-membership')

    const signupSection = page.locator('#membership-form')
    const signupForm = signupSection.locator('form[name="membership"]')
    await expect(signupForm).toBeVisible()

    const tiersSection = page.locator('#membership-tiers')
    const tierForms = tiersSection.locator(`form[action="${PAYPAL_CGI_URL}"]`)
    await expect(tierForms).toHaveCount(3)
    await expect(
        tiersSection.getByRole('button', { name: 'Pay with PayPal' })
    ).toHaveCount(3)
    for (const tier of membershipTiers) {
        await expect(
            tiersSection.getByText(`$${tier.price}`, { exact: true })
        ).toBeVisible()
    }

    expect(
        await tierForms
            .locator('input[name="hosted_button_id"]')
            .evaluateAll((inputs) =>
                inputs.map((input) => (input as HTMLInputElement).value)
            )
    ).toEqual(membershipTiers.map((tier) => tier.paypalButtonId))

    const donateSection = page.locator('#donate')
    const donationForms = donateSection.locator(
        `form[action="${PAYPAL_CGI_URL}"]`
    )
    await expect(donationForms).toHaveCount(1)
    await expect(donationForms.locator('input[name="cmd"]')).toHaveValue(
        '_donations'
    )

    await page.route('**/__forms.html', async (route) => {
        if (route.request().method() === 'POST') {
            await route.fulfill({ status: 200, body: 'ok' })
            return
        }

        await route.continue()
    })

    await signupForm.getByRole('button', { name: 'Submit' }).click()
    const handoff = signupForm.getByRole('link', {
        name: 'Thanks — now choose your membership tier below',
    })
    await expect(handoff).toHaveAttribute('href', '#membership-tiers')
    await expect(page.locator('#membership-tiers-heading')).toBeFocused()
})

test('renders Resources videos in configured order', async ({ page }) => {
    await page.goto('/resources')

    await expect(
        page.locator('iframe[title="Hands & Voices: Lost and Found"]')
    ).toHaveAttribute('src', /T8nDcBvOWnk/)

    const gallery = page.locator('section').filter({
        has: page.getByRole('heading', {
            name: 'Hands & Voices Video Library',
        }),
    })
    await expect(gallery.locator('button')).toHaveText([
        'Hands & Voices: Lost and Found',
        'Alabama Hands & Voices - Unlocking the Access Toolbox',
        'Hands & Voices The Time is Now',
        'The Mission of Hands & Voices (American Sign Language)',
        'Deaf and Hard of Hearing Hidden Figures',
    ])
})

test('renders DHH videos in configured order', async ({ page }) => {
    await page.goto('/programs/dhh-committee')

    await expect(page.locator('iframe[title="Default Video"]')).toHaveAttribute(
        'src',
        /PHOm_bHbAhQ/
    )
    await expect(page.locator('iframe')).toHaveCount(1)

    const videoSection = page.locator('section').filter({
        has: page.locator('iframe[title="Default Video"]'),
    })
    await expect(videoSection.locator('button')).toHaveText([
        'Ahav Makenzie',
        'DHH Role Model Interview - Ryan Hickman 2020',
        'Beth Overland video',
        'The Mission of Hands & Voices (American Sign Language)',
        'Deaf and Hard of Hearing Hidden Figures',
    ])
})

test('renders active events in configured order with metadata and CTA', async ({
    page,
}) => {
    await page.goto('/')

    const eventsSection = page.locator('section').filter({
        has: page.getByRole('heading', { name: 'Events', exact: true }),
    })
    await expect(eventsSection.locator('article h3')).toHaveText([
        'Monthly Virtual Gatherings',
        'Educational Advocacy (ASTra) Training',
        'More Events',
    ])
    await expect(
        eventsSection.getByText('Date / schedule', { exact: true })
    ).toBeVisible()
    await expect(eventsSection.getByText('Monthly', { exact: true })).toBeVisible()
    await expect(
        eventsSection.getByText('Location', { exact: true })
    ).toBeVisible()
    await expect(eventsSection.getByText('Virtual', { exact: true })).toBeVisible()

    const registrationLink = eventsSection.getByRole('link', {
        name: 'Register online',
        exact: true,
    })
    await expect(registrationLink).toHaveAttribute(
        'href',
        'https://docs.google.com/forms/d/e/1FAIpQLScXNEkBud-9NM0IeTzfw-kysGDHsr8YABGHNtFE_NDPVlw_HA/viewform'
    )
    await expect(registrationLink).toHaveAttribute('target', '_blank')
    await expect(registrationLink).toHaveAttribute('rel', /noopener/)
})

test('renders the seeded v3 marketing copy from CMS', async ({ page }) => {
    const pageCopy = [
        {
            route: '/programs/gbys',
            values: ['A parent guide, right by your side'],
        },
        {
            route: '/programs/astra',
            values: ['Advocate Support Training & Resources'],
        },
        {
            route: '/programs/dhh-committee',
            values: [
                'Deaf & Hard of Hearing Role Models & Mentors',
                'D/HH Committee Members are deaf and hard of hearing adults who give back by serving as role models and mentors to the next generation of children and families.',
            ],
        },
        {
            route: '/programs/safety',
            values: [
                'Helping families protect children who are deaf or hard of hearing.',
            ],
        },
    ]

    for (const { route, values } of pageCopy) {
        await page.goto(route, { waitUntil: 'domcontentloaded' })
        const mainContent = page.locator('#main-content')

        for (const value of values) {
            await expect(
                mainContent.getByText(value, { exact: true })
            ).toBeVisible()
        }
    }

    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await expect(
        page
            .getByRole('contentinfo')
            .getByText(
                '“What works for your child is what makes the choice right.” ™',
                { exact: true }
            )
    ).toBeVisible()
})

test('preserves every migrated rich-text value', async ({ page }) => {
    const pageContent = [
        {
            route: '/',
            phrases: [
                'We provide unbiased information, resources, and support',
                'Our outreach, parent-professional collaboration, and advocacy',
            ],
        },
        {
            route: '/about',
            phrases: [
                'including ASL and other visual-language signers',
                'Hands & Voices does not promote specific communication choices',
            ],
        },
        {
            route: '/programs/gbys',
            phrases: ['trained Parent Guides who have walked a similar path'],
        },
        {
            route: '/programs/astra',
            phrases: ['help families navigate the educational system'],
        },
        {
            route: '/programs/dhh-committee',
            phrases: ['serve as role models and mentors'],
        },
        {
            route: '/programs/safety',
            phrases: ['protect children who are deaf or hard of hearing'],
        },
        {
            route: '/membership',
            phrases: ['families who need financial assistance'],
        },
    ]

    for (const { route, phrases } of pageContent) {
        await page.goto(route, { waitUntil: 'domcontentloaded' })
        const mainContent = page.locator('#main-content')

        for (const phrase of phrases) {
            await expect(mainContent).toContainText(phrase)
        }
    }

    await page.goto('/faq', { waitUntil: 'domcontentloaded' })
    const faqPhrases = [
        'Follow-up testing is routine',
        'Download our Pathways guide',
        'Technology decisions are personal',
        'There is no single right answer',
        'Your child\'s team may include audiologists',
    ]
    const faqButtons = page.locator('button[aria-controls^="faq-v3-panel-"]')

    await expect(faqButtons).toHaveCount(faqPhrases.length)
    for (let index = 0; index < faqPhrases.length; index += 1) {
        const button = faqButtons.nth(index)
        await button.click()
        await expect(
            page.locator(`#faq-v3-panel-${index}`)
        ).toContainText(faqPhrases[index])
    }
})

test('filters inactive videos and sorts active videos by placement', () => {
    const videos = selectActiveVideos(
        [
            {
                id: 'later',
                title: 'Later',
                youtubeId: 'abcdefghijk',
                placement: 'resources',
                thumbnailFrame: '0',
                sortOrder: 2,
                active: true,
            },
            {
                id: 'inactive',
                title: 'Inactive',
                youtubeId: 'bcdefghijkl',
                placement: 'resources',
                thumbnailFrame: '0',
                sortOrder: 0,
                active: false,
            },
            {
                id: 'other-placement',
                title: 'Other Placement',
                youtubeId: 'cdefghijklm',
                placement: 'dhh-committee',
                thumbnailFrame: '0',
                sortOrder: 0,
                active: true,
            },
            {
                id: 'first',
                title: 'First',
                youtubeId: 'defghijklmn',
                placement: 'resources',
                thumbnailFrame: '1',
                sortOrder: 1,
                active: true,
            },
        ],
        'resources'
    )

    expect(videos.map((video) => video.id)).toEqual(['first', 'later'])
})

test('filters inactive events, sorts active events, and handles no active events', () => {
    const description: DocumentElement[] = []
    const events = selectActiveEvents([
        {
            id: 'later',
            title: 'Later',
            dateText: '',
            location: '',
            description,
            linkLabel: '',
            linkUrl: '',
            sortOrder: 2,
            active: true,
        },
        {
            id: 'inactive',
            title: 'Inactive',
            dateText: '',
            location: '',
            description,
            linkLabel: '',
            linkUrl: '',
            sortOrder: 0,
            active: false,
        },
        {
            id: 'first',
            title: 'First',
            dateText: 'Monthly',
            location: 'Virtual',
            description,
            linkLabel: 'Register',
            linkUrl: 'https://example.com/register',
            sortOrder: 1,
            active: true,
        },
    ])

    expect(events.map((event) => event.id)).toEqual(['first', 'later'])
    expect(
        selectActiveEvents([
            {
                id: 'inactive',
                title: 'Inactive',
                dateText: '',
                location: '',
                description,
                linkLabel: '',
                linkUrl: '',
                sortOrder: 1,
                active: false,
            },
        ])
    ).toEqual([])
    expect(selectActiveEvents([])).toEqual([])
})
