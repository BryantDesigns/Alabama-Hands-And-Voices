import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// Node-only unit tests. Playwright owns tests/e2e (its files also end in
// .spec.ts), so only tests/unit/**/*.test.ts is collected here.
export default defineConfig({
    resolve: {
        alias: {
            'server-only': fileURLToPath(
                new URL('./tests/unit/support/empty-module.ts', import.meta.url)
            ),
        },
    },
    test: {
        environment: 'node',
        include: ['tests/unit/**/*.test.ts'],
    },
})
