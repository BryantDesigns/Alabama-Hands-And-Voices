'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface AboutSectionProps {
    heading: string
    content: string[]
    image: string
}

const AboutSection: React.FC<AboutSectionProps> = ({
    heading,
    content,
    image,
}) => {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return (
        <section>
            <div className="overflow-hidden bg-gray-100 py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {/* Left Column - Text Content */}
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-2xl font-semibold tracking-tight text-hvblue-600 sm:text-3xl">
                                    {heading}
                                </h2>
                                {content.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className={`mt-6 text-lg text-gray-700 transition-opacity duration-500 ${
                                            hydrated
                                                ? 'opacity-100 blur-0'
                                                : 'opacity-0 blur-md'
                                        }`}
                                        dangerouslySetInnerHTML={
                                            hydrated
                                                ? { __html: paragraph }
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <Image
                            src={image}
                            alt={heading}
                            width={500}
                            height={400}
                            className="max-h-[25rem] w-[38rem] max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
