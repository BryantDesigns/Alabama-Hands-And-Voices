import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/services/firebase/auth'
import { db } from '@/services/firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { PageData } from '@/types/pageTypes'

export const useAdminContent = (pageId: string) => {
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState<PageData | null>(null)
    const [canEdit, setCanEdit] = useState(false)
    const router = useRouter()

    // 1. Convert fetchPageContent into a memoized callback
    const fetchPageContent = useCallback(async () => {
        setLoading(true)
        try {
            const docRef = doc(db, 'pages', pageId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const data = docSnap.data() as PageData

                // Optionally format sections
                const formattedSections = data.sections.map((section) => {
                    if (typeof section.content === 'string') {
                        return { ...section, content: [section.content] }
                    }
                    return { ...section }
                })

                setContent({ ...data, sections: formattedSections })
            } else {
                console.warn(`⚠️ Page '${pageId}' does not exist.`)
            }
        } catch (error) {
            console.error(
                `❌ Error fetching content for page '${pageId}':`,
                error
            )
        } finally {
            setLoading(false)
        }
    }, [pageId]) // Re-create the callback if pageId changes

    // 2. UseEffect depends on router + fetchPageContent
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCanEdit(true)
                await fetchPageContent()
            } else {
                router.push('/auth')
            }
        })

        return () => unsubscribe()
    }, [router, fetchPageContent])

    // 3. If needed, a method to update content
    const updatePageContent = async () => {
        if (!content) return

        try {
            const docRef = doc(db, 'pages', pageId)
            await updateDoc(docRef, { sections: content.sections })
            alert('✅ Page content updated successfully!')
        } catch (error) {
            console.error(
                `❌ Error updating page content for '${pageId}':`,
                error
            )
        }
    }

    return {
        loading,
        content,
        canEdit,
        setContent,
        updatePageContent,
    }
}
