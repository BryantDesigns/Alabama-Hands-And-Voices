import { expect, test, type Page } from '@playwright/test'

const browserErrorsByPage = new WeakMap<Page, string[]>()

test.beforeEach(async ({ page }, testInfo) => {
    test.skip(
        testInfo.project.name !== 'chromium',
        'Keystatic admin smoke tests run in desktop Chromium only.'
    )

    const browserErrors: string[] = []
    browserErrorsByPage.set(page, browserErrors)

    page.on('console', (message) => {
        if (message.type() === 'error') {
            const text = message.text()
            // Keystatic-upstream warning on collection create routes.
            if (text.includes('An empty string') && text.includes('href')) {
                return
            }
            browserErrors.push(text)
        }
    })
    page.on('pageerror', (error) => browserErrors.push(error.message))
})

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'chromium') {
        return
    }

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
    await expect(
        mainPanel.getByRole('link', { name: 'Events', exact: true })
    ).toBeVisible()
})

test('shows every event control with the scoped rich-text toolbar', async ({
    page,
}) => {
    await page.goto('/keystatic/collection/events/create')

    for (const textboxName of [
        'Title',
        'Date / schedule',
        'Location',
        'Button label',
        'Button URL',
    ]) {
        await expect(
            page.getByRole('textbox', { name: textboxName, exact: true })
        ).toBeVisible()
    }

    await expect(page.getByText('Description', { exact: true })).toBeVisible()
    await expect(
        page.getByRole('checkbox', { name: 'Bold', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('checkbox', { name: 'Italic', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('radiogroup', { name: 'Lists', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('radio', { name: 'Bullet List', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('radio', { name: 'Numbered List', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('checkbox', { name: 'Show on site', exact: true })
    ).toBeVisible()
    await expect(
        page.getByRole('textbox', { name: 'Sort Order', exact: true })
    ).toBeVisible()
    // Keystatic's link toolbar control has no accessible name.
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

test('shows the scoped rich-text toolbar for FAQ answers', async ({ page }) => {
    await page.goto('/keystatic/singleton/faqPage')

    const faqEntries = page.getByRole('grid', {
        name: 'FAQ Entries',
        exact: true,
    })
    await faqEntries
        .getByRole('row', {
            name: 'My child was referred for additional hearing tests after the newborn screening. What does this mean?',
            exact: true,
        })
        .click()

    const editItemDialog = page.getByRole('dialog', {
        name: 'Edit item',
        exact: true,
    })

    await expect(
        editItemDialog.getByRole('checkbox', { name: 'Bold', exact: true })
    ).toBeVisible()
    await expect(
        editItemDialog.getByRole('checkbox', { name: 'Italic', exact: true })
    ).toBeVisible()
    await expect(
        editItemDialog.getByRole('radio', {
            name: 'Bullet List',
            exact: true,
        })
    ).toBeVisible()
    await expect(
        editItemDialog.getByRole('radio', {
            name: 'Numbered List',
            exact: true,
        })
    ).toBeVisible()
    // Keystatic's nameless link button is covered by the document schema scope.
})
