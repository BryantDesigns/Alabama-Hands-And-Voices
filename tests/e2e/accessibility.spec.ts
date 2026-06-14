import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { canonicalPublicRoutes } from './public-routes'

test.beforeEach(({}, testInfo) => {
    test.skip(
        !['chromium', 'mobile-chromium'].includes(testInfo.project.name),
        'Axe runs in desktop and mobile Chromium.'
    )
})

for (const route of canonicalPublicRoutes) {
    test(`${route} has no critical or serious Axe violations`, async ({
        page,
    }) => {
        await page.goto(route, { waitUntil: 'domcontentloaded' })
        await expect(page.locator('[data-route-loading]')).toHaveCount(0)
        await expect(page.locator('h1')).toBeVisible()

        const results = await new AxeBuilder({ page })
            .exclude('iframe')
            .withTags([
                'wcag2a',
                'wcag2aa',
                'wcag21a',
                'wcag21aa',
                'wcag22a',
                'wcag22aa',
            ])
            .analyze()
        const highImpactViolations = results.violations.filter(
            (violation) =>
                violation.impact === 'critical' ||
                violation.impact === 'serious'
        )

        expect(
            highImpactViolations,
            highImpactViolations
                .map(
                    (violation) =>
                        `${violation.id}: ${violation.help}\n${violation.nodes
                            .map(
                                (node) =>
                                    `  ${node.target.join(' ')}: ${node.failureSummary}`
                            )
                            .join('\n')}`
                )
                .join('\n\n')
        ).toEqual([])
    })
}
