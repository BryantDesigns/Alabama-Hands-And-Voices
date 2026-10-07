import { fileURLToPath } from 'node:url'
import { createReader } from '@keystatic/core/reader'
import { describe, expect, it } from 'vitest'
import keystaticConfig from '../../keystatic.config'
import { createSingletons } from '../../src/lib/keystatic/singletons'

// Each scenario is a small content root shaped like the real repo
// (<root>/src/content/singletons/…), read through the real Keystatic config.
function singletonsFromFixture(scenarioName: string) {
    const fixtureRoot = fileURLToPath(
        new URL(`./fixtures/${scenarioName}`, import.meta.url)
    )

    return createSingletons(createReader(fixtureRoot, keystaticConfig))
}

describe('getSingleton', () => {
    it('returns a page singleton with its rich-text fields resolved to document trees', async () => {
        const { getSingleton } = singletonsFromFixture('page-rich-text')

        const astraPage = await getSingleton('astraPage')

        expect(astraPage.heroTagline).toBe('Fixture ASTra tagline')
        expect(astraPage.programDescription).toEqual([
            {
                type: 'paragraph',
                children: [
                    { text: 'Fixture ' },
                    { text: 'program', bold: true },
                    { text: ' description.' },
                ],
            },
        ])
    })

    it('returns rich text nested in a list (the FAQ answers) resolved to document trees', async () => {
        const { getSingleton } = singletonsFromFixture('nested-rich-text')

        const faqPage = await getSingleton('faqPage')

        expect(faqPage.faqEntries.map((entry) => entry.answer)).toEqual([
            [
                {
                    type: 'paragraph',
                    children: [{ text: 'First fixture answer.' }],
                },
            ],
            [
                {
                    type: 'paragraph',
                    children: [{ text: 'Second fixture answer.' }],
                },
            ],
        ])
    })

    it('throws an error naming a singleton that is missing', async () => {
        const { getSingleton } = singletonsFromFixture('missing-singleton')

        await expect(getSingleton('astraPage')).rejects.toThrow(
            'Singleton "astraPage" not found'
        )
    })

    it('fails with Keystatic validation when a required field is empty', async () => {
        const { getSingleton } = singletonsFromFixture('empty-required-field')

        await expect(getSingleton('astraPage')).rejects.toThrow(
            /^Invalid data for singleton "astraPage":\nheroTagline: /
        )
    })
})
