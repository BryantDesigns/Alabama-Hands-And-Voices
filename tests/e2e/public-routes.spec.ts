import { expect, test, type Page } from '@playwright/test'
import { canonicalPublicRoutes } from './public-routes'

function collectBrowserErrors(page: Page) {
    const errors: string[] = []

    page.on('console', (message) => {
        if (message.type() === 'error') {
            errors.push(message.text())
        }
    })
    page.on('pageerror', (error) => errors.push(error.message))

    return errors
}

for (const route of canonicalPublicRoutes) {
    test(`${route} renders a canonical public page`, async (
        { page },
        testInfo
    ) => {
        const browserErrors = collectBrowserErrors(page)
        const response = await page.goto(route, {
            waitUntil: 'domcontentloaded',
        })

        expect(response?.ok()).toBe(true)
        await expect(page.locator('main:not([role="status"])')).toBeVisible()
        await expect(page.locator('h1')).toHaveCount(1)
        await expect(page.locator('h1')).toBeVisible()
        if (testInfo.project.name === 'mobile-chromium') {
            expect(
                await page.evaluate(
                    () =>
                        document.documentElement.scrollWidth <=
                        window.innerWidth + 1
                )
            ).toBe(true)
        }
        expect(browserErrors).toEqual([])
    })
}

test('/programs/dhh redirects to the canonical DHH page', async ({ page }) => {
    const response = await page.goto('/programs/dhh', {
        waitUntil: 'domcontentloaded',
    })

    expect(response?.ok()).toBe(true)
    await expect(page).toHaveURL(/\/programs\/dhh-committee$/)
})

test('desktop navigation and footer expose fixed destinations', async ({
    page,
}, testInfo) => {
    test.skip(
        testInfo.project.name === 'mobile-chromium',
        'Desktop navigation is hidden at the mobile breakpoint.'
    )

    await page.goto('/')
    const navigation = page.getByRole('navigation', { name: 'Global' })

    await navigation.getByRole('button', { name: 'About Us' }).click()
    for (const href of [
        '/about',
        '/about/board',
        '/about/staff',
        '/about/contact',
    ]) {
        await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible()
    }

    await navigation.getByRole('button', { name: 'Programs' }).click()
    for (const href of [
        '/programs/gbys',
        '/programs/astra',
        '/programs/safety',
        '/programs/dhh-committee',
    ]) {
        await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible()
    }

    const footer = page.getByRole('contentinfo')
    for (const href of [
        '/',
        '/about',
        '/resources',
        '/about/contact',
        '/assets/documents/Road_map.pdf',
    ]) {
        await expect(footer.locator(`a[href="${href}"]`)).toBeVisible()
    }
})

test('mobile navigation opens, receives focus, and exposes fixed destinations', async ({
    page,
}, testInfo) => {
    test.skip(
        !['chromium', 'mobile-chromium'].includes(testInfo.project.name),
        'Mobile navigation is tested in Chromium with touch and keyboard input.'
    )

    const isTouchProject = testInfo.project.name === 'mobile-chromium'
    if (!isTouchProject) {
        await page.setViewportSize({ width: 412, height: 915 })
    }

    await page.goto('/')
    await page.getByRole('button', { name: 'Open main menu' }).click()

    const closeButton = page.getByRole('button', { name: 'Close menu' })
    if (isTouchProject) {
        await closeButton.focus()
    }
    await expect(closeButton).toBeFocused()
    await page.getByRole('button', { name: 'About Us' }).click()
    await expect(page.getByRole('link', { name: 'Who We Are' })).toBeVisible()
    await page.getByRole('button', { name: 'Programs' }).click()
    await expect(
        page.getByRole('link', { name: 'Guide By Your Side' })
    ).toBeVisible()

    await closeButton.click()
    await expect(page.getByRole('button', { name: 'Open main menu' })).toBeFocused()
})

test('FAQ accordion exposes and hides its answer', async ({ page }) => {
    await page.goto('/faq')

    const question = page.getByRole('button').filter({
        has: page.locator('span.text-base\\/7'),
    }).first()
    await expect(question).toHaveAttribute('aria-expanded', 'false')
    await question.click()
    await expect(question).toHaveAttribute('aria-expanded', 'true')
    await expect(question.locator('xpath=../following-sibling::dd')).toBeVisible()
})

test('membership controls and GBYS tabs are keyboard reachable', async ({
    page,
}) => {
    await page.goto('/membership', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('[data-route-loading]')).toHaveCount(0)
    const primaryName = page.getByLabel('Parent/Guardian Name:', {
        exact: true,
    })
    await primaryName.focus()
    await expect(primaryName).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByLabel('Secondary Parent/Guardian Name:')).toBeFocused()

    await page.goto('/programs/gbys')
    const personalTab = page.getByRole('tab', { name: 'Personal' })
    const professionalTab = page.getByRole('tab', {
        name: 'Professional Referral',
    })
    await personalTab.focus()
    await expect(personalTab).toBeFocused()
    await page.keyboard.press('ArrowRight')
    await expect(professionalTab).toBeFocused()
    await expect(professionalTab).toHaveAttribute('aria-selected', 'true')
})

test('skip link moves keyboard focus to the public content', async ({
    page,
    browserName,
}) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const skipLink = page.getByRole('link', { name: 'Skip to main content' })

    if (browserName === 'webkit') {
        // Safari follows the macOS preference for whether Tab focuses links.
        await skipLink.focus()
    } else {
        await page.keyboard.press('Tab')
    }

    await expect(skipLink).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
})

test('video players have accessible titles', async ({ page }) => {
    for (const route of ['/resources', '/programs/dhh-committee']) {
        await page.goto(route)
        const frames = page.locator('iframe')

        for (let index = 0; index < (await frames.count()); index += 1) {
            await expect(frames.nth(index)).toHaveAttribute('title', /.+/)
        }
    }
})

test('reduced motion preference renders without browser errors', async ({
    page,
}) => {
    const browserErrors = collectBrowserErrors(page)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    expect(browserErrors).toEqual([])
})

for (const route of [
    '/membership',
    '/programs/astra',
    '/programs/dhh-committee',
    '/programs/gbys',
]) {
    test(`${route} visible form controls have accessible names`, async ({
        page,
    }) => {
        await page.goto(route, { waitUntil: 'domcontentloaded' })
        const controls = page.locator(
            'input:not([type="hidden"]):visible, select:visible, textarea:visible, form button:visible'
        )

        for (let index = 0; index < (await controls.count()); index += 1) {
            await expect(controls.nth(index)).toHaveAccessibleName(/.+/)
        }
    })
}
