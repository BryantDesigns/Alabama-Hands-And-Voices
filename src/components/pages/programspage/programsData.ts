import type {
    getNavigation,
    getGbysPageContent,
    getAstraPageContent,
    getSafetyPageContent,
    getDhhCommitteePageContent,
} from '@/lib/keystatic/pages'
import type { DocumentElement, DocumentNode } from '@keystatic/core'

export interface ProgramSummary {
    key: 'gbys' | 'astra' | 'safety' | 'dhh'
    title: string
    description: string // short tagline (from navigation)
    detail: string // a fuller sentence from the program's own content
    points: string[] // 3 highlight bullets
    href: string // live detail route
    logo?: string // optional logo image path
}

type Nav = NonNullable<Awaited<ReturnType<typeof getNavigation>>>
type Gbys = Awaited<ReturnType<typeof getGbysPageContent>>
type Astra = Awaited<ReturnType<typeof getAstraPageContent>>
type Safety = Awaited<ReturnType<typeof getSafetyPageContent>>
type Dhh = Awaited<ReturnType<typeof getDhhCommitteePageContent>>

export function documentToPlainText(doc: DocumentElement[]): string {
    function flattenNode(node: DocumentNode): string {
        if ('text' in node && typeof node.text === 'string') {
            return node.text
        }

        if (node.type === 'soft-break') {
            return ' '
        }

        const children = Array.isArray(node.children)
            ? (node.children as DocumentNode[])
            : []
        const content = children.map(flattenNode).join('')
        const blockTypes = [
            'paragraph',
            'list-item',
            'ordered-list',
            'unordered-list',
        ]

        return blockTypes.includes(String(node.type)) ? `${content} ` : content
    }

    return doc.map(flattenNode).join(' ').replace(/\s+/g, ' ').trim()
}

export function buildProgramSummaries(
    nav: Nav,
    gbys: Gbys,
    astra: Astra,
    safety: Safety,
    dhh: Dhh,
): ProgramSummary[] {
    const gbysPoints =
        gbys?.services
            ?.slice(0, 3)
            .map((s) => s.service)
            .filter(Boolean) ?? []

    const astraPoints =
        astra?.questions
            ?.slice(0, 3)
            .map((q) => q.question)
            .filter(Boolean) ?? []

    const safetyPoints =
        safety?.actionCards
            ?.slice(0, 3)
            .map((c) => c.title)
            .filter(Boolean) ?? []

    const dhhPoints =
        dhh?.benefits
            ?.slice(0, 3)
            .map((b) => b.benefit)
            .filter(Boolean) ?? []

    return [
        {
            key: 'gbys',
            title: nav.programs.gbys.title,
            description: nav.programs.gbys.description,
            detail:
                documentToPlainText(gbys?.programIntro ?? []) ||
                nav.programs.gbys.description,
            points: gbysPoints,
            href: '/programs/gbys',
            logo: '/images/gbys-logo.png',
        },
        {
            key: 'astra',
            title: nav.programs.astra.title,
            description: nav.programs.astra.description,
            detail:
                documentToPlainText(astra?.programDescription ?? []) ||
                nav.programs.astra.description,
            points: astraPoints,
            href: '/programs/astra',
            logo: '/images/AstraLogo.png',
        },
        {
            key: 'safety',
            title: nav.programs.safety.title,
            description: nav.programs.safety.description,
            detail:
                documentToPlainText(safety?.introCopy ?? []) ||
                nav.programs.safety.description,
            points: safetyPoints,
            href: '/programs/safety',
        },
        {
            key: 'dhh',
            title: nav.programs.dhhCommittee.title,
            description: nav.programs.dhhCommittee.description,
            detail:
                documentToPlainText(dhh?.description ?? []) ||
                nav.programs.dhhCommittee.description,
            points: dhhPoints,
            href: '/programs/dhh-committee',
        },
    ]
}
