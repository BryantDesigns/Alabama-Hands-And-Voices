import Image from 'next/image'

interface AboutSectionProps {
    content: string
    image?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ content, image }) => {
    return (
        <section className="bg-gray-100 py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="lg:max-w-lg">
                        <h2 className="text-2xl font-semibold text-hvblue-600">
                            About Us
                        </h2>
                        <p className="mt-6 text-lg text-gray-700">{content}</p>
                    </div>
                    {image && (
                        <Image
                            src={image}
                            alt="About Image"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
