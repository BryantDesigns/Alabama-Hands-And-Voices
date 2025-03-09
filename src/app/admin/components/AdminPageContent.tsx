'use client'
import React from 'react'
import { useAdminContent } from '@/app/admin/hooks/useAdminContent'
import { updateFirestoreSection } from '@/services/firebase/database'
import { Section } from '@/types/pageTypes'

const AdminPageContent: React.FC = () => {
    // Assuming the hook returns an object with { content, isLoading } where content is of type PageData,
    // and that PageData has a sections property: { sections: Section[]; ... }
    const { content, loading } = useAdminContent('home')

    if (loading) return <p>Loading...</p>
    if (!content) return <p>No content available.</p>

    // Now we know content.sections exists and is an array of Section.
    const sections: Section[] = content.sections

    const handleSave = async (index: number, updatedSection: Section) => {
        await updateFirestoreSection('home', index, updatedSection)
    }

    return (
        <div className="mx-auto max-w-4xl bg-gray-900 p-4 text-white sm:p-6">
            <h1 className="mb-4 text-2xl font-bold">Edit Page</h1>

            {sections.map((section: Section, index: number) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold">{section.heading}</h2>

                    {(section.content ?? []).map((p: string, i: number) => (
                        <textarea
                            key={i}
                            className="w-full rounded bg-gray-800 p-2 text-white"
                            value={p}
                            onChange={(e) => {
                                const newContent = [...(section.content ?? [])]
                                newContent[i] = e.target.value
                                handleSave(index, {
                                    ...section,
                                    content: newContent,
                                })
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AdminPageContent
