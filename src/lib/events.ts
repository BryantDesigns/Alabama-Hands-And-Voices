import type { DocumentElement } from '@keystatic/core'

export interface EventContent {
    id: string
    title: string
    dateText: string
    location: string
    description: DocumentElement[]
    linkLabel: string
    linkUrl: string
}

export interface EventRecord extends EventContent {
    sortOrder: number
    active: boolean
}

export function selectActiveEvents(events: EventRecord[]): EventContent[] {
    return events
        .filter((event) => event.active)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((event) => ({
            id: event.id,
            title: event.title,
            dateText: event.dateText,
            location: event.location,
            description: event.description,
            linkLabel: event.linkLabel,
            linkUrl: event.linkUrl,
        }))
}
