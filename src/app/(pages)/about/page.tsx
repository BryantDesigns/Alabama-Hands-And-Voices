import { fetchPageContent } from "@/services/firebase/database";

const AboutPage = async () => {
  const content = await fetchPageContent("about");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {content?.title || "About Us"}
      </h1>
      {content?.sections.map((section: { heading?: string; content: string; image?: string }, index: number) => (
        <section key={index} className="mb-6">
          {section.heading && (
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          )}
          <p className="mb-4">{section.content}</p>
          {section.image && (
            <img src={section.image} alt={section.heading || "Section image"} />
          )}
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
