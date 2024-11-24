import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/services/firebase/database";

interface HistoryEntry {
  id: string;
  content: string;
  timestamp: any; 
}

export const useChangeHistory = (pageId: string) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const historyRef = collection(db, "pages", pageId, "history");
        const q = query(historyRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        const historyData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as HistoryEntry[];

        setHistory(historyData);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [pageId]);

  const addHistory = async (content: string) => {
    try {
      const historyRef = collection(db, "pages", pageId, "history");
      await addDoc(historyRef, {
        content,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding history:", error);
    }
  };

  return { history, loading, addHistory };
};
