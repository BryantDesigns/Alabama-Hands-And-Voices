import type { SingletonContent } from '@/lib/keystatic/singletons'
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
    navigation: SingletonContent<'navigation'>,
    gbysPage: SingletonContent<'gbysPage'>,
    astraPage: SingletonContent<'astraPage'>,
    safetyPage: SingletonContent<'safetyPage'>,
    dhhCommitteePage: SingletonContent<'dhhCommitteePage'>
): ProgramSummary[] {
    const gbysPoints = gbysPage.services
        .slice(0, 3)
        .map((serviceItem) => serviceItem.service)

    const astraPoints = astraPage.questions
        .slice(0, 3)
        .map((questionItem) => questionItem.question)

    const safetyPoints = safetyPage.actionCards
        .slice(0, 3)
        .map((actionCard) => actionCard.title)

    const dhhPoints = dhhCommitteePage.benefits
        .slice(0, 3)
        .map((benefitItem) => benefitItem.benefit)

    return [
        {
            key: 'gbys',
            title: navigation.programs.gbys.title,
            description: navigation.programs.gbys.description,
            detail:
                documentToPlainText(gbysPage.programIntro) ||
                navigation.programs.gbys.description,
            points: gbysPoints,
            href: '/programs/gbys',
            logo: '/images/gbys-logo.png',
        },
        {
            key: 'astra',
            title: navigation.programs.astra.title,
            description: navigation.programs.astra.description,
            detail:
                documentToPlainText(astraPage.programDescription) ||
                navigation.programs.astra.description,
            points: astraPoints,
            href: '/programs/astra',
            logo: '/images/AstraLogo.png',
        },
        {
            key: 'safety',
            title: navigation.programs.safety.title,
            description: navigation.programs.safety.description,
            detail:
                documentToPlainText(safetyPage.introCopy) ||
                navigation.programs.safety.description,
            points: safetyPoints,
            href: '/programs/safety',
        },
        {
            key: 'dhh',
            title: navigation.programs.dhhCommittee.title,
            description: navigation.programs.dhhCommittee.description,
            detail:
                documentToPlainText(dhhCommitteePage.description) ||
                navigation.programs.dhhCommittee.description,
            points: dhhPoints,
            href: '/programs/dhh-committee',
        },
    ]
}
