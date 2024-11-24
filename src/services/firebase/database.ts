import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

/**
 * Fetch page content from Firestore
 * @param {string} page - Document ID (e.g., "about", "contact")
 * @returns {Promise<any | null>}
 */
export const fetchPageContent = async (page: string): Promise<any | null> => {
  try {
    const docRef = doc(db, "pages", page);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Return the document data
    }
    console.warn(`Document '${page}' does not exist in 'pages' collection.`);
    return null;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return null;
  }
};

/**
 * Add or update page content in Firestore
 * @param {string} docId - Document ID (e.g., "about", "contact")
 * @param {any} content - Page content object
 * @returns {Promise<void>}
 */
export const addOrUpdatePageContent = async (
  docId: string,
  content: any
): Promise<void> => {
  try {
    // Validate required fields
    if (!content.title || !Array.isArray(content.sections)) {
      throw new Error(
        "Invalid content structure. 'title' and 'sections' are required."
      );
    }

    const pageDoc = doc(db, "pages", docId);
    const data = {
      ...content,
      lastUpdated: serverTimestamp(), // Automatically set/update the timestamp
    };

    await setDoc(pageDoc, data, { merge: true }); // Merge with existing content if present
    console.log(`Content for page '${docId}' added or updated successfully!`);
  } catch (error) {
    console.error(`Error adding/updating content for page '${docId}':`, error);
  }
};

export { db }; 
