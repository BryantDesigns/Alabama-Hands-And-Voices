import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/services/firebase/auth'
import { db } from '@/services/firebase/database'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { PageData, Section } from '@/types/pageTypes'

export const useAdminContent = (pageId: string) => {
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState<PageData | null>(null)
    const [canEdit, setCanEdit] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // (Optional) Check for admin claim
                // ...
                setCanEdit(true)
                await fetchPageContent()
            } else {
                router.push('/auth')
            }
        })

        return () => unsubscribe()
    }, [pageId])

    const fetchPageContent = async () => {
        setLoading(true)
        try {
            const docRef = doc(db, 'pages', pageId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const data = docSnap.data() as PageData

                // Optionally ensure that 'content' is an array only if it actually needs to be
                const formattedSections = data.sections.map((section) => {
                    // If 'content' is a string, convert to array. Otherwise, keep it as is.
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
    }

    const updatePageContent = async () => {
        if (!content) return

        try {
            const docRef = doc(db, 'pages', pageId)
            // update the entire doc or just 'sections'
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
