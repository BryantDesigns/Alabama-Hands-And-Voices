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

describe('getSingleton for Site Settings and Navigation', () => {
    it('returns Site Settings values trimmed', async () => {
        const { getSingleton } = singletonsFromFixture('padded-text')

        const siteSettings = await getSingleton('siteSettings')

        expect(siteSettings).toEqual({
            siteName: 'Fixture Hands & Voices',
            contactEmail: 'fixture@example.org',
            phone: '205-555-0100',
            address: 'P.O. Box 1, Fixture City, AL 35000',
            facebookUrl: 'https://www.facebook.com/fixture/',
            donationButtonLabel: 'Give',
            footerCopyright: 'Fixture copyright.',
            footerTagline: 'Fixture tagline.',
        })
    })

    it('throws naming the field when a Site Settings value is only whitespace', async () => {
        const { getSingleton } = singletonsFromFixture(
            'whitespace-only-setting'
        )

        await expect(getSingleton('siteSettings')).rejects.toThrow(
            '[Keystatic] Required field "Site Settings > Phone" is empty.'
        )
    })

    it('fails with Keystatic validation when a required Site Settings value is empty', async () => {
        const { getSingleton } = singletonsFromFixture('empty-required-setting')

        await expect(getSingleton('siteSettings')).rejects.toThrow(
            /^Invalid data for singleton "siteSettings":\nphone: /
        )
    })

    it('throws when the Site Settings Facebook URL is relative', async () => {
        const { getSingleton } = singletonsFromFixture('relative-facebook-url')

        await expect(getSingleton('siteSettings')).rejects.toThrow(
            '[Keystatic] Site Settings > Facebook URL must be a valid URL.'
        )
    })

    it('returns Navigation titles and descriptions trimmed', async () => {
        const { getSingleton } = singletonsFromFixture('padded-text')

        const navigation = await getSingleton('navigation')

        expect(navigation).toEqual({
            about: {
                whoWeAre: {
                    title: 'Fixture Who We Are',
                    description: 'Fixture who we are description.',
                },
                boardMembers: {
                    title: 'Fixture Board',
                    description: 'Fixture board description.',
                },
                staff: {
                    title: 'Fixture Staff',
                    description: 'Fixture staff description.',
                },
                contact: {
                    title: 'Fixture Contact',
                    description: 'Fixture contact description.',
                },
            },
            programs: {
                gbys: {
                    title: 'Fixture GBYS',
                    description: 'Fixture GBYS description.',
                },
                astra: {
                    title: 'Fixture ASTra',
                    description: 'Fixture ASTra description.',
                },
                safety: {
                    title: 'Fixture Safety',
                    description: 'Fixture safety description.',
                },
                dhhCommittee: {
                    title: 'Fixture DHH Committee',
                    description: 'Fixture DHH Committee description.',
                },
            },
        })
    })

    it('throws naming the item when a Navigation title is only whitespace', async () => {
        const { getSingleton } = singletonsFromFixture(
            'whitespace-only-navigation-title'
        )

        await expect(getSingleton('navigation')).rejects.toThrow(
            '[Keystatic] Required field "Navigation > Program Menu Items > Educational Advocacy (ASTra) > Title" is empty.'
        )
    })

    it('throws naming the item when a Navigation description is only whitespace', async () => {
        const { getSingleton } = singletonsFromFixture(
            'whitespace-only-navigation-description'
        )

        await expect(getSingleton('navigation')).rejects.toThrow(
            '[Keystatic] Required field "Navigation > About Menu Items > Staff > Description" is empty.'
        )
    })
})
