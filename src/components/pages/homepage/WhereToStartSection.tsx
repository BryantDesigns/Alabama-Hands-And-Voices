import Image from 'next/image'
import Link from 'next/link'

interface WhereToStartProps {
    heading: string
    subheading: string
    paragraphs: string[]
    links: { text: string; url: string }[]
    quote: {
        text: string
        authors: string
        role: string
    }
    backgroundImage: string
    logoImage: string
}

const WhereToStartSection: React.FC<WhereToStartProps> = ({
    heading,
    subheading,
    paragraphs,
    links,
    quote,
    backgroundImage,
    logoImage,
}) => (
    <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {/* Left Column - Background Image and Quote */}
                <div className="lg:pr-4">
                    <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                        <Image
                            alt=""
                            src={backgroundImage}
                            fill
                            className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                        />
                        <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                        <figure className="relative isolate text-center text-white">
                            <Image
                                alt="Alabama Hands & Voices Logo"
                                src={logoImage}
                                width={162}
                                height={48}
                                className="mx-auto h-24 w-auto"
                            />
                            <blockquote className="mt-6 text-xl/8 font-semibold">
                                <p>{quote.text}</p>
                            </blockquote>
                            <figcaption className="mt-6 text-sm/6 text-gray-300">
                                <strong className="font-semibold">
                                    {quote.authors}
                                </strong>
                                <br />- {quote.role}
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="text-base/7 text-gray-700 lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-hvorange-600">
                        {heading}
                    </p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {subheading}
                    </h1>
                    <div className="max-w-xl">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mt-6">
                                {paragraph}
                            </p>
                        ))}

                        {/* Links */}
                        {links && links.length > 0 && (
                            <div className="mt-6">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block font-bold text-hvorange-500 underline hover:text-hvorange-700"
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Closing Remarks */}
                        <p className="mt-6 italic text-gray-700">
                            You can do this, and there&apos;s a whole community here
                            to help!
                        </p>
                        <p className="mt-6 font-bold text-gray-700">
                            Standing with you,
                        </p>
                        <p className="text-gray-700">
                            Your fellow parents at Alabama Hands & Voices
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default WhereToStartSection
