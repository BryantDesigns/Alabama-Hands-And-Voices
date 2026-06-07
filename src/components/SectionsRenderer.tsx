// SectionsRenderer is no longer used by any active route.
// It is preserved here for Phase 5 cleanup.
// The homepage now reads from Keystatic and renders typed section components directly.

import { Section } from '@/types/pageTypes'

interface SectionsRendererProps {
    sections: Section[]
}

export default function SectionsRenderer({ sections }: SectionsRendererProps) {
    if (!sections) return null

    return (
        <>
            {sections.map((section, index) => (
                <div key={index}>
                    <p>Section: {section.type}</p>
                </div>
            ))}
        </>
    )
}
