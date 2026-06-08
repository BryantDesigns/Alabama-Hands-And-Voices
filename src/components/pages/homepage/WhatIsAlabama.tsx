import Image from 'next/image'

interface IntroSectionProps {
    heading: string
    body: string
    image: string
    imageAlt: string
}

export default function WhatIsAlabama({ heading, body, image, imageAlt }: IntroSectionProps) {
    return (
        <section className="overflow-hidden bg-gray-100 py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-2xl font-semibold tracking-tight text-hvblue-600 sm:text-3xl">
                                {heading}
                            </h2>

                            <p className="mt-6 text-lg text-gray-700">
                                {body}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div>
                        {image && (
                            <Image
                                src={image}
                                alt={imageAlt || heading}
                                width={500}
                                height={400}
                                className="max-h-[25rem] w-[38rem] max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
