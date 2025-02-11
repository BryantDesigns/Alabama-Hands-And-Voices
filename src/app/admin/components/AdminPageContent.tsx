'use client'
import { useAdminContent } from '@/app/admin/hooks/useAdminContent'
import { updateFirestoreSection } from '@/services/firebase/database'
import { Section } from '@/types/pageTypes'

const AdminPageContent = ({ pageData }) => {
    const { sections, isLoading } = useAdminContent('home')

    if (isLoading) return <p>Loading...</p>

    const handleSave = async (index: number, updatedSection: Section) => {
        await updateFirestoreSection('home', index, updatedSection)
    }

    return (
        <div className="mx-auto max-w-4xl bg-gray-900 p-4 text-white sm:p-6">
            <h1 className="mb-4 text-2xl font-bold">Edit Page</h1>

            {sections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold">{section.heading}</h2>
                    {section.content.map((p, i) => (
                        <textarea
                            key={i}
                            className="w-full rounded bg-gray-800 p-2 text-white"
                            value={p}
                            onChange={(e) => {
                                const newContent = [...section.content]
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
