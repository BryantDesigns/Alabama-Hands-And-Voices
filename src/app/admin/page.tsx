"use client";

import { useState, useEffect } from "react";
import RichTextEditor from "@/components/common/RichTextEditor";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase/database";

const AdminPage = () => {
  const [pages, setPages] = useState([
    { id: "home", title: "Home Page" },
    { id: "about", title: "About Page" },
    { id: "contact", title: "Contact Page" },
  ]);
  const [selectedPageId, setSelectedPageId] = useState("home");
  const [sections, setSections] = useState([]);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchPageContent = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, "pages", selectedPageId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedSections = docSnap.data().sections || [];
          setSections(fetchedSections);
          setSelectedSectionIndex(0);
        } else {
          setSections([]);
        }
      } catch (error) {
        console.error("Error fetching page content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageContent();
  }, [selectedPageId]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const docRef = doc(db, "pages", selectedPageId);
      await updateDoc(docRef, { sections });
      alert("Sections saved successfully!");
    } catch (error) {
      console.error("Error saving sections:", error);
      alert("Failed to save sections.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-4">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (sections.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No sections available to edit.
      </p>
    );
  }

  const currentSection = sections[selectedSectionIndex];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Edit Page</h1>

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
          onChange={(e) => setSelectedSectionIndex(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {sections.map((section, index) => (
            <option key={index} value={index}>
              {section.heading || `Section ${index + 1}`}
            </option>
          ))}
        </select>
      </div>

      {/* RichTextEditor for Current Section */}
      <RichTextEditor
        value={currentSection?.content || ""}
        onChange={(value) => {
          const updatedSections = [...sections];
          updatedSections[selectedSectionIndex].content = value;
          setSections(updatedSections);
        }}
      />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`mt-4 w-full sm:w-auto px-4 py-2 rounded ${
          isSaving
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-400"
        } text-white`}
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>

      {/* Live Preview */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
        <div
          className="p-4 border rounded-md bg-gray-800 text-white"
          dangerouslySetInnerHTML={{ __html: currentSection?.content || "" }}
        />
      </div>
    </div>
  );
};

export default AdminPage;
