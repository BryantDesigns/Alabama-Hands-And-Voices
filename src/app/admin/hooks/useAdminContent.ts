import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/services/firebase/auth";
import { db } from "@/services/firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

interface PageContent {
  title: string;
  sections: Array<{ heading: string; content: string; image?: string }>;
}

export const useAdminContent = (pageId: string) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<PageContent | null>(null);
  const [canEdit, setCanEdit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        setCanEdit(!!tokenResult.claims.admin); // Check for admin claims
        await fetchPageContent();
      } else {
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [pageId]);

  const fetchPageContent = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "pages", pageId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setContent(docSnap.data() as PageContent);
        console.log(`Fetched content for page '${pageId}':`, docSnap.data());
      } else {
        console.warn(`Page '${pageId}' does not exist.`);
      }
    } catch (error) {
      console.error(`Error fetching content for page '${pageId}':`, error);
    } finally {
      setLoading(false);
    }
  };

  const updatePageContent = async () => {
    if (!content) return;
    try {
      const docRef = doc(db, "pages", pageId);
      await updateDoc(docRef, content);
      alert("Page content updated successfully!");
    } catch (error) {
      console.error(`Error updating page content for '${pageId}':`, error);
    }
  };

  return {
    loading,
    content,
    canEdit,
    setContent,
    updatePageContent,
  };
};
