import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './tests/e2e',
    reporter: 'line',
    use: {
        baseURL: 'http://localhost:3000',
    },
    webServer: {
        command: 'npm run dev -- --hostname localhost --port 3000',
        url: 'http://localhost:3000/keystatic',
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
})
