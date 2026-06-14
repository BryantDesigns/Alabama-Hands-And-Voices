import { expect, test } from '@playwright/test'
import {
    canonicalPaths,
    pageMetadata,
    SITE_NAME,
    SITE_URL,
} from '../../src/lib/seo'

test.beforeEach(({}, testInfo) => {
    test.skip(
        testInfo.project.name !== 'chromium',
        'Metadata and generated route checks run once in desktop Chromium.'
    )
})

for (const path of canonicalPaths) {
    test(`${path} exposes fixed SEO metadata`, async ({ page }) => {
        const expected = pageMetadata[path]
        const expectedTitle =
            path === '/' ? SITE_NAME : `${expected.title} | ${SITE_NAME}`

        await page.goto(path, { waitUntil: 'domcontentloaded' })

        await expect(page).toHaveTitle(expectedTitle)
        await expect(page.locator('meta[name="description"]')).toHaveAttribute(
            'content',
            expected.description
        )
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
            'href',
            path === '/' ? SITE_URL : new URL(path, SITE_URL).toString()
        )
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
            'content',
            expectedTitle
        )
        await expect(
            page.locator('meta[property="og:description"]')
        ).toHaveAttribute('content', expected.description)
        await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
            'content',
            new RegExp(`${SITE_URL}/opengraph-image`)
        )
        await expect(
            page.locator('meta[name="twitter:card"]')
        ).toHaveAttribute('content', 'summary_large_image')
    })
}

test('sitemap contains only canonical public routes', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    const body = await response.text()

    expect(response.ok()).toBe(true)
    for (const path of canonicalPaths) {
        expect(body).toContain(new URL(path, SITE_URL).toString())
    }
    expect(body).not.toContain('/programs/dhh</loc>')
    expect(body).not.toContain('/keystatic')
    expect(body).not.toContain('/api/keystatic')
})

test('robots allows public pages and excludes private routes', async ({
    request,
}) => {
    const response = await request.get('/robots.txt')
    const body = await response.text()

    expect(response.ok()).toBe(true)
    expect(body).toContain('Allow: /')
    expect(body).toContain('Disallow: /keystatic')
    expect(body).toContain('Disallow: /api/keystatic')
    expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)
})

test('home page exposes nonprofit Organization structured data', async ({
    page,
}) => {
    await page.goto('/')
    const data = JSON.parse(
        (await page.locator('script[type="application/ld+json"]').textContent()) ??
            '{}'
    )

    expect(data).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        email: 'alabamahinfo@gmail.com',
        telephone: '205-677-3136',
    })
    expect(data.sameAs).toEqual([
        'https://www.facebook.com/alabamahandsandvoices/',
    ])
})

test('generated Open Graph image is a 1200 by 630 PNG', async ({
    request,
}) => {
    const response = await request.get('/opengraph-image')
    const image = await response.body()

    expect(response.ok()).toBe(true)
    expect(response.headers()['content-type']).toContain('image/png')
    expect(image.byteLength).toBeGreaterThan(1_000)
    expect(image.readUInt32BE(16)).toBe(1200)
    expect(image.readUInt32BE(20)).toBe(630)
})

test('unknown routes render the branded 404 page', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist')

    expect(response?.status()).toBe(404)
    await expect(
        page.getByRole('heading', { name: 'Page not found' })
    ).toBeVisible()
    await expect(page.getByRole('link', { name: 'Return home' })).toBeVisible()
})
