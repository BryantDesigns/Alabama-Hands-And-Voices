export interface ImageData {
    src: string
    alt: string
    width: number
    height: number
}

export interface ContentBlock {
    blockType: string
    heading?: string
    image?: ImageData
    htmlContent?: string
    // ...any other optional fields
}

// Existing sub-types for events, stats, etc.
export type EventItem = {
    title?: string
    descriptionHtml?: string
}

export type StatItem = {
    label: string
    value: string
}

export type QuoteItem = {
    text: string
    authors: string[]
}

export interface CTA {
    link?: string
    text?: string
}

// The Section type now includes *all* fields you store in Firestore.
// 'heading' and 'content' remain required for your validator, but everything
// else is optional (using '?' or '| null').
export type Section = {
    id?: string
    type?: string

    heading?: string
    content?: string[]

    subheading?: string
    description?: string
    htmlContent?: string
    introHtml?: string

    image?: string | null
    backgroundImage?: string | null
    events?: EventItem[]
    stats?: StatItem[]
    quote?: QuoteItem
    cta?: CTA

    // New field
    contentBlocks?: ContentBlock[]
}

export type PageData = {
    title: string
    sections: Section[]
    lastUpdated?: Date
}
