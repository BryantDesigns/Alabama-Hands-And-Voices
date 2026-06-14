import { expect, test, type Page } from '@playwright/test'

const browserErrorsByPage = new WeakMap<Page, string[]>()

test.beforeEach(async ({ page }) => {
    const browserErrors: string[] = []
    browserErrorsByPage.set(page, browserErrors)

    page.on('console', (message) => {
        if (message.type() === 'error') {
            browserErrors.push(message.text())
        }
    })
    page.on('pageerror', (error) => browserErrors.push(error.message))
})

test.afterEach(async ({ page }) => {
    expect(browserErrorsByPage.get(page)).toEqual([])
})

test('renders the configured Keystatic editor sections', async ({ page }) => {
    await page.goto('/keystatic')

    const mainPanel = page.locator('#keystatic-main-panel')

    await expect(
        mainPanel.getByRole('link', { name: 'Site Settings', exact: true })
    ).toBeVisible()
    await expect(
        mainPanel.getByRole('link', { name: 'Navigation', exact: true })
    ).toBeVisible()
    await expect(
        mainPanel.getByRole('link', { name: 'Home Page', exact: true })
    ).toBeVisible()
})

test('protects navigation structure and destinations', async ({ page }) => {
    await page.goto('/keystatic/singleton/navigation')

    await expect(
        page.getByRole('group', { name: 'Who We Are', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('group', {
            name: 'DHH Committee Members',
            exact: true,
        })
    ).toBeVisible()
    await expect(page.getByText('Href', { exact: true })).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Add' })).toHaveCount(0)
    await expect(page.getByText('Item Count', { exact: true })).toHaveCount(0)
})

test('protects membership titles, prices, order, and payment IDs', async ({
    page,
}) => {
    await page.goto('/keystatic/singleton/chooseMembershipPage')

    await expect(
        page.getByRole('group', {
            name: 'Parent, Student, and DHH Adult',
            exact: true,
        })
    ).toBeVisible()
    await expect(
        page.getByRole('group', { name: 'Professional', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('group', { name: 'Organization', exact: true })
    ).toBeVisible()

    for (const protectedField of [
        'Title',
        'Price',
        'PayPal Button ID',
        'PayPal ID',
    ]) {
        await expect(
            page.getByText(protectedField, { exact: true })
        ).toHaveCount(0)
    }
    await expect(page.getByRole('button', { name: 'Add' })).toHaveCount(0)
})

test('keeps safe global settings editable', async ({ page }) => {
    await page.goto('/keystatic/singleton/siteSettings')

    await expect(
        page.getByRole('textbox', { name: 'Facebook URL', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('textbox', {
            name: 'Donation Button Label',
            exact: true,
        })
    ).toBeVisible()
})
