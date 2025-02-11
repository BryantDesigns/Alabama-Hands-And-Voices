'use client'
import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth } from '@/services/firebase/auth'
import { db } from '@/services/firebase/database'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/common/RichTextEditor'
import { updateCacheAfterSave } from '@/services/firebase/database'

const AdminPage = () => {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)

    const [pages, setPages] = useState([
        { id: 'home', title: 'Home Page' },
        { id: 'about', title: 'About Page' },
        { id: 'contact', title: 'Contact Page' },
    ])
    const [selectedPageId, setSelectedPageId] = useState('home')

    // Sections array is the core state we edit
    const [sections, setSections] = useState<any[]>([])
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0)

    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)

    // --------------------------------------------------------------------------
    // Auth check
    // --------------------------------------------------------------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/auth')
            } else {
                setUser(currentUser)
            }
        })
        return () => unsubscribe()
    }, [router])

    // --------------------------------------------------------------------------
    // Fetch the selected page's sections
    // --------------------------------------------------------------------------
    useEffect(() => {
        const fetchPageContent = async () => {
            setIsLoading(true)
            try {
                const docRef = doc(db, 'pages', selectedPageId)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    const fetchedData = docSnap.data()
                    // If there is no sections array, default to empty
                    const fetchedSections = fetchedData.sections || []

                    setSections(fetchedSections)
                    setSelectedSectionIndex(0)
                } else {
                    setSections([])
                }
            } catch (error) {
                console.error('Error fetching page content:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPageContent()
    }, [selectedPageId])

    // --------------------------------------------------------------------------
    // Handle Save
    // --------------------------------------------------------------------------
    async function handleSave(pageId: string, sections: any[]) {
        try {
            const pageRef = doc(db, 'pages', pageId)

            // 1. Update the doc
            await updateDoc(pageRef, {
                sections,
                lastUpdated: serverTimestamp(),
            })

            // 2. Re-fetch the updated doc
            const updatedSnap = await getDoc(pageRef)
            if (!updatedSnap.exists()) {
                console.error(`No document found for '${pageId}' after save.`)
                return
            }

            // 3. Format or store the updated data in local state
            const freshData = updatedSnap.data()
            await updateCacheAfterSave(pageId, freshData)

            alert('✅ Content saved! Using updated data now.')
        } catch (error) {
            console.error('Error saving sections:', error)
        }
    }

    // --------------------------------------------------------------------------
    // Handle Logout
    // --------------------------------------------------------------------------
    const handleLogout = async () => {
        await signOut(auth)
        router.push('/auth')
    }

    // --------------------------------------------------------------------------
    // Render
    // --------------------------------------------------------------------------
    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-4">
                <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-4xl bg-gray-900 p-4 text-white sm:p-6">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Page</h1>
                <button
                    onClick={handleLogout}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                    Logout
                </button>
            </div>

            {/* Page Selector */}
            <div className="mb-4">
                <label
                    htmlFor="page-select"
                    className="block text-sm font-medium text-gray-300"
                >
                    Select Page to Edit
                </label>
                <select
                    id="page-select"
                    value={selectedPageId}
                    onChange={(e) => setSelectedPageId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                    {pages.map((page) => (
                        <option key={page.id} value={page.id}>
                            {page.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Section Selector */}
            <div className="mb-4">
                <label
                    htmlFor="section-select"
                    className="block text-sm font-medium text-gray-300"
                >
                    Select Section to Edit
                </label>
                <select
                    id="section-select"
                    value={selectedSectionIndex}
                    onChange={(e) =>
                        setSelectedSectionIndex(Number(e.target.value))
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                    {sections.map((section, index) => (
                        <option key={index} value={index}>
                            {section.heading || `Section ${index + 1}`}
                        </option>
                    ))}
                </select>
            </div>

            {/* Editor for the Chosen Section */}
            <SectionEditor
                section={sections[selectedSectionIndex]}
                onChange={(updatedSection) => {
                    const updatedSections = [...sections]
                    updatedSections[selectedSectionIndex] = updatedSection
                    setSections(updatedSections)
                }}
            />

            {/* Save Button */}
            <button
                onClick={() => handleSave(selectedPageId, sections)}
                className={`mt-4 w-full rounded px-4 py-2 sm:w-auto ${
                    isSaving
                        ? 'cursor-not-allowed bg-gray-500'
                        : 'bg-blue-500 hover:bg-blue-400'
                } text-white`}
                disabled={isSaving}
            >
                {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
        </div>
    )
}

/**
 * Component that renders form fields based on the section's structure.
 * We detect known fields like 'htmlContent', 'content', etc.
 */
function SectionEditor({
    section,
    onChange,
}: {
    section: any
    onChange: (updatedSection: any) => void
}) {
    if (!section) {
        return <p>No section selected.</p>
    }

    const handleFieldChange = (field: string, value: any) => {
        onChange({ ...section, [field]: value })
    }

    return (
        <div className="mb-4 rounded bg-gray-800 p-4">
            {/* Heading Field */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300">
                    Heading
                </label>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={section.heading || ''}
                    onChange={(e) =>
                        handleFieldChange('heading', e.target.value)
                    }
                />
            </div>

            {/* If we have 'htmlContent', show a single ReactQuill editor */}
            {typeof section.htmlContent === 'string' && (
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">
                        HTML Content
                    </label>
                    <RichTextEditor
                        value={section.htmlContent}
                        onChange={(val) =>
                            handleFieldChange('htmlContent', val)
                        }
                    />
                </div>
            )}

            {/* If we have 'introHtml', show another editor */}
            {typeof section.introHtml === 'string' && (
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">
                        Intro HTML
                    </label>
                    <RichTextEditor
                        value={section.introHtml}
                        onChange={(val) => handleFieldChange('introHtml', val)}
                    />
                </div>
            )}

            {/* If 'content' is an array of paragraphs */}
            {Array.isArray(section.content) && (
                <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                        Paragraphs
                    </h3>
                    {section.content.map((paragraph: string, idx: number) => (
                        <div key={idx} className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">
                                Paragraph {idx + 1}
                            </label>
                            <RichTextEditor
                                value={paragraph}
                                onChange={(val) => {
                                    const newContent = [...section.content]
                                    newContent[idx] = val
                                    handleFieldChange('content', newContent)
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* If you want to show an image field editor */}
            {typeof section.image === 'string' && (
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">
                        Image URL
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 p-2 text-white"
                        value={section.image}
                        onChange={(e) =>
                            handleFieldChange('image', e.target.value)
                        }
                    />
                </div>
            )}

            {/* And so on for events, stats, quote, etc. */}
            {/* You can create custom editors or repeat a pattern like above. */}
            {Array.isArray(section.events) && (
                <div>
                    <h3 className="text-lg font-semibold text-white">Events</h3>
                    {section.events.map((evt, idx) => (
                        <div key={idx} className="mt-2 bg-gray-700 p-2">
                            <label className="block text-sm text-gray-300">
                                Event Title
                            </label>
                            <input
                                type="text"
                                className="mb-2 w-full rounded border-gray-600 bg-gray-600 text-white"
                                value={evt.title}
                                onChange={(e) => {
                                    const newEvents = [...section.events]
                                    newEvents[idx].title = e.target.value
                                    handleFieldChange('events', newEvents)
                                }}
                            />
                            <label className="block text-sm text-gray-300">
                                Description
                            </label>
                            <RichTextEditor
                                value={evt.descriptionHtml || ''}
                                onChange={(val) => {
                                    const newEvents = [...section.events]
                                    newEvents[idx].descriptionHtml = val
                                    handleFieldChange('events', newEvents)
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}

            {Array.isArray(section.stats) && (
                <div>
                    <h3 className="text-lg font-semibold text-white">Stats</h3>
                    {section.stats.map((stat, idx) => (
                        <div key={idx} className="mb-2">
                            <label className="block text-sm text-gray-300">
                                Label
                            </label>
                            <input
                                type="text"
                                className="mb-1 w-full rounded border-gray-600 bg-gray-600 p-1 text-white"
                                value={stat.label}
                                onChange={(e) => {
                                    const newStats = [...section.stats]
                                    newStats[idx].label = e.target.value
                                    handleFieldChange('stats', newStats)
                                }}
                            />
                            <label className="block text-sm text-gray-300">
                                Value
                            </label>
                            <input
                                type="text"
                                className="mb-2 w-full rounded border-gray-600 bg-gray-600 p-1 text-white"
                                value={stat.value}
                                onChange={(e) => {
                                    const newStats = [...section.stats]
                                    newStats[idx].value = e.target.value
                                    handleFieldChange('stats', newStats)
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AdminPage
