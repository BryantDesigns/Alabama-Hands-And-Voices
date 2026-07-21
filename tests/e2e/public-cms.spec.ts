import { expect, test } from '@playwright/test'
import { membershipTiers, PAYPAL_CGI_URL } from '../../src/lib/membership'
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
