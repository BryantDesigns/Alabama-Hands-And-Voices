export type Section = {
  heading: string;
  content: string[];
  image?: string;
  stats?: { label: string; value: string }[];
  quote?: { text: string; authors: string[] };
};

export type PageData = {
  title: string;
  sections: Section[];
  lastUpdated?: any;
};

/**
 * Validates Firestore section data structure before updating.
 */
export const validateSection = (section: Section) => {
  if (!section.heading || !Array.isArray(section.content)) {
    throw new Error("❌ Invalid section format! 'heading' and 'content' are required.");
  }
};
