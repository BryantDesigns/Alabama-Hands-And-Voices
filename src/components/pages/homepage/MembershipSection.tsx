interface MembershipSectionProps {
    heading: string
    paragraphs: string[]
    links: { text: string; url: string }[]
}

const MembershipSection: React.FC<MembershipSectionProps> = ({
    heading,
    paragraphs,
    links,
}) => (
    <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-hvblue">{heading}</h2>
            {paragraphs.map((p, index) => (
                <p key={index} className="mt-4 text-gray-700">
                    {p}
                </p>
            ))}
            <div className="mt-6">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className="block text-hvorange underline"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    </section>
)

export default MembershipSection
