import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp,
    DocumentData,
} from 'firebase/firestore'
import { db } from './config'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface PageData {
    title: string
    sections: SectionData[]
    lastUpdated?: any | null // e.g., serverTimestamp or Firestore Timestamp
}

export interface SectionData {
    heading?: string
    content?: string[] 
    image?: string
    stats?: Array<any> 
    quote?: {
        text: string
        authors: string[]
    }
}

/* -------------------------------------------------------------------------- */
/*                          Formatting & Validation                           */
/* -------------------------------------------------------------------------- */

/**
 * Ensure that the Firestore data has all required fields,
 * even if the document is missing them or has partial data.
 */
function formatPageData(data: Partial<PageData> | undefined): PageData {
    return {
        title: data?.title ?? 'Untitled',
        sections: Array.isArray(data?.sections)
            ? data.sections.map((section) => ({
                  // Spread the original to keep *all* fields, including type, htmlContent, etc.
                  ...section,

                  // Then safely provide defaults for known fields:
                  heading: section.heading ?? '',
                  content: Array.isArray(section.content)
                      ? section.content.filter((p) => typeof p === 'string')
                      : [],
                  image: section.image ?? '',
                  stats: section.stats ?? [],
                  quote: {
                      text: section.quote?.text ?? '',
                      authors: section.quote?.authors ?? [],
                  },

                  // If 'section.type' or 'section.htmlContent' is missing, it remains undefined,
                  // but if they exist, they'll be preserved.
              }))
            : [],
        lastUpdated: data?.lastUpdated ?? null,
    }
}



/* -------------------------------------------------------------------------- */
/*                                In-Memory Cache                             */
/* -------------------------------------------------------------------------- */
const cache = new Map<string, PageData>();

export async function updateCacheAfterSave(pageId: string, docData: any) {
  const formatted = formatPageData(docData);
  cache.set(pageId, formatted);
  console.log(`✅ Cache updated for '${pageId}' after save.`);
}
/* -------------------------------------------------------------------------- */
/*                           Firestore Operations                             */
/* -------------------------------------------------------------------------- */

/**
 * Fetch page content from Firestore with a cache check.
 * @param pageId Document ID (e.g. "about", "contact")
 * @returns A `PageData` object with fallback values.
 */
export const fetchPageContent = async (pageId: string): Promise<PageData> => {
    try {
        // Return cached data if available
        if (cache.has(pageId)) {
            return cache.get(pageId)!
        }

        const docRef = doc(db, 'pages', pageId)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            console.warn(
                `⚠️ Page '${pageId}' does not exist. Returning defaults.`
            )
            const defaultData: PageData = { title: 'Untitled', sections: [] }
            cache.set(pageId, defaultData)
            return defaultData
        }

        const rawData = docSnap.data() as Partial<PageData>
        const formattedData = formatPageData(rawData)

        cache.set(pageId, formattedData)
        return formattedData
    } catch (error) {
        console.error(`❌ Error fetching content for '${pageId}':`, error)
        return { title: 'Error Loading Page', sections: [] }
    }
}

/**
 * Add or update page content in Firestore.
 * @param pageId Document ID (e.g. "about", "contact")
 * @param content Page content object adhering to `PageData` shape.
 */
export const addOrUpdatePageContent = async (
    pageId: string,
    content: Partial<PageData>
): Promise<void> => {
    try {
        if (!content.title || !Array.isArray(content.sections)) {
            throw new Error(
                "Invalid content structure. 'title' and 'sections' are required."
            )
        }

        const pageDoc = doc(db, 'pages', pageId)
        const data: PageData = {
            ...content,
            lastUpdated: serverTimestamp(),
        } as PageData

        await setDoc(pageDoc, data, { merge: true })
        console.log(
            `✅ Content for page '${pageId}' added or updated successfully!`
        )

        // Invalidate/update the cache with the latest data
        const formattedData = formatPageData(data)
        cache.set(pageId, formattedData)
    } catch (error) {
        console.error(
            `❌ Error adding/updating content for page '${pageId}':`,
            error
        )
    }
}

/**
 * A more generic getter (similar to fetchPageContent) if needed.
 * This returns a PageData object with minimal fallback.
 */
export const getFirestoreData = async (pageId: string) => {
    // Return cache if available
    if (cache.has(pageId)) {
        return cache.get(pageId)
    }

    const docRef = doc(db, 'pages', pageId)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        const defaultData: PageData = { title: 'Untitled', sections: [] }
        cache.set(pageId, defaultData)
        return defaultData
    }

    const rawData = docSnap.data() as Partial<PageData>
    const structuredData = formatPageData(rawData)
    cache.set(pageId, structuredData)
    return structuredData
}

/**
 * Update a single section's `content` in Firestore by index.
 * @param pageId   Document ID (e.g. "about", "contact")
 * @param sectionIndex Index of the section in the `sections` array
 * @param content  The new content (usually a string[] or similar)
 */
export const updateFirestoreSection = async (
    pageId: string,
    sectionIndex: number,
    content: any
) => {
    try {
        const pageRef = doc(db, 'pages', pageId)
        const docSnap = await getDoc(pageRef)

        if (!docSnap.exists()) {
            console.warn(
                `⚠️ Document '${pageId}' does not exist. No update performed.`
            )
            return
        }

        const data = docSnap.data()
        if (!Array.isArray(data.sections)) {
            console.warn(
                `⚠️ Document '${pageId}' has no 'sections' field. No update performed.`
            )
            return
        }

        // Only updating the `content` field of the specified section
        await updateDoc(pageRef, {
            [`sections.${sectionIndex}.content`]: content,
            lastUpdated: serverTimestamp(),
        })

        console.log('✅ Section updated successfully!')

        // Optionally update the cache
        const cachedPage = cache.get(pageId)
        if (cachedPage && cachedPage.sections[sectionIndex]) {
            cachedPage.sections[sectionIndex].content = content
            cachedPage.lastUpdated = null // or new Date(), etc.
            cache.set(pageId, cachedPage)
        }
    } catch (error) {
        console.error('❌ Error updating section:', error)
    }
}

export { db }
