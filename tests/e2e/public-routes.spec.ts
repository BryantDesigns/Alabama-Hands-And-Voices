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
    const navigation = page.getByRole('navigation', {
        name: 'Main navigation',
    })

    await navigation.getByRole('button', { name: 'About' }).click()
    for (const name of ['Who We Are', 'Board Members', 'Staff', 'Contact']) {
        await expect(navigation.getByRole('link', { name })).toBeVisible()
    }

    await navigation.getByRole('button', { name: 'Programs' }).click()
    for (const name of [
        'All Programs',
        'Guide By Your Side (GBYS)',
        'Educational Advocacy (ASTra)',
        "O.U.R. Children's Safety Project",
        'DHH Committee Members',
    ]) {
        await expect(navigation.getByRole('link', { name })).toBeVisible()
    }

    const footer = page.getByRole('contentinfo')
    for (const group of ['Explore', 'Get involved', 'Connect']) {
        await expect(
            footer.getByRole('heading', { name: group })
        ).toBeVisible()
    }
    // Compact footer carries top-level destinations; sub-pages are reached
    // through the header dropdowns asserted above.
    for (const href of [
        '/',
        '/about',
        '/programs',
        '/resources',
        '/membership',
        '/membership/choose-membership',
        '/faq',
    ]) {
        await expect(footer.locator(`a[href="${href}"]`)).toBeVisible()
    }
    await expect(
        footer.locator('form[action="https://www.paypal.com/cgi-bin/webscr"]')
    ).toHaveCount(1)
    await expect(
        page.getByRole('link', {
            name: 'Alabama Hands & Voices on Facebook',
        })
    ).toHaveCount(1)
    await expect(footer.getByRole('link', { name: 'Facebook' })).toBeVisible()
    await expect(
        footer.getByText(
            `© ${new Date().getFullYear()} Alabama Hands & Voices. All rights reserved.`
        )
    ).toBeVisible()
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
    await page.getByRole('button', { name: 'Open menu' }).click()

    const menu = page.getByRole('dialog', { name: 'Navigation menu' })
    const closeButton = page.getByRole('button', { name: 'Close menu' })
    if (isTouchProject) {
        await closeButton.focus()
    }
    await expect(closeButton).toBeFocused()
    await menu.getByRole('button', { name: 'About' }).click()
    await expect(menu.getByRole('link', { name: 'Who We Are' })).toBeVisible()
    await menu.getByRole('button', { name: 'Programs' }).click()
    await expect(
        menu.getByRole('link', { name: 'Guide By Your Side' })
    ).toBeVisible()

    await closeButton.click()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
})

test('FAQ accordion exposes and hides its answer', async ({ page }) => {
    await page.goto('/faq')

    const question = page
        .locator('button[aria-controls^="faq-v3-panel-"]')
        .first()
    await expect(question).toHaveAttribute('aria-expanded', 'false')
    await question.click()
    await expect(question).toHaveAttribute('aria-expanded', 'true')
    await expect(question.locator('xpath=../following-sibling::dd')).toBeVisible()
})

test('membership controls and GBYS tabs are keyboard reachable', async ({
    page,
}) => {
    await page.goto('/membership')
    // The footer carries a same-named link; scope to the page content.
    const onlineMembershipLink = page.locator('#main-content').getByRole('link', {
        name: 'Join & Pay Online',
    })
    await expect(onlineMembershipLink).toHaveAttribute(
        'href',
        '/membership/choose-membership'
    )

    await page.goto('/membership/choose-membership')
    const membershipForm = page.locator('#membership-form')
    const memberName = membershipForm.getByLabel('Parent/Guardian Name:', {
        exact: true,
    })
    await memberName.focus()
    await expect(memberName).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(
        membershipForm.getByLabel('Secondary Parent/Guardian Name:', {
            exact: true,
        })
    ).toBeFocused()

    await page.goto('/programs/gbys', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('[data-route-loading]')).toHaveCount(0)
    // Both tab panels stay in the DOM; scope lookups to the personal panel.
    const personalPanel = page.locator('#gbys-personal-panel')
    const primaryName = personalPanel.getByLabel('Parent / guardian name')
    await primaryName.focus()
    await expect(primaryName).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(
        personalPanel.getByLabel('Secondary parent / guardian')
    ).toBeFocused()

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
