import { expect, test } from '@playwright/test'
import { selectActiveVideos } from '../../src/lib/videos'

test('renders fixed navigation and connected global settings', async ({
    page,
}, testInfo) => {
    test.skip(
        testInfo.project.name === 'mobile-chromium',
        'Desktop navigation is hidden at the mobile breakpoint.'
    )

    await page.goto('/')

    await page.getByRole('button', { name: 'About Us' }).click()
    for (const href of [
        '/about',
        '/about/board',
        '/about/staff',
        '/about/contact',
    ]) {
        await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
    }

    await page.getByRole('button', { name: 'Programs' }).click()
    for (const href of [
        '/programs/gbys',
        '/programs/astra',
        '/programs/safety',
        '/programs/dhh-committee',
    ]) {
        await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
    }

    await expect(page).toHaveTitle(/Alabama Hands & Voices/)
    await expect(
        page.locator(
            'a[href="https://www.facebook.com/alabamahandsandvoices/"]'
        )
    ).toBeAttached()
    await expect(page.getByText('alabamahinfo@gmail.com')).toBeVisible()
    await expect(page.getByText('205-677-3136')).toBeVisible()
    await expect(
        page.getByText('P.O. Box 130627, Birmingham, AL 35213')
    ).toBeVisible()
    await expect(page.getByText('© 2024 Alabama Hands & Voices')).toBeVisible()

    const donationForms = page.locator(
        'form[action="https://www.paypal.com/cgi-bin/webscr"]'
    )
    await expect(donationForms).toHaveCount(2)
    expect(
        await donationForms
            .locator('input[name="hosted_button_id"]')
            .evaluateAll((inputs) =>
                inputs.map((input) => (input as HTMLInputElement).value)
            )
    ).toEqual(['R99Y9497TS2SW', 'R99Y9497TS2SW'])
    await expect(page.getByRole('button', { name: 'Donate' })).toHaveCount(2)
})

test('renders fixed membership prices and payment IDs', async ({ page }) => {
    await page.goto('/membership/choose-membership')

    await expect(
        page.getByRole('button', { name: '$25.00 Membership' })
    ).toBeVisible()
    await expect(
        page.getByRole('button', { name: '$40.00 Membership' })
    ).toBeVisible()
    await expect(
        page.getByRole('button', { name: '$50.00 Membership' })
    ).toBeVisible()

    expect(
        await page
            .locator('input[name="hosted_button_id"]')
            .evaluateAll((inputs) =>
                inputs.map((input) => (input as HTMLInputElement).value)
            )
    ).toEqual([
        'E5Q6YYU8F3M66',
        '32NBUMV7CGXJE',
        'TN95YMB8QNGZN',
        'R99Y9497TS2SW',
    ])
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
