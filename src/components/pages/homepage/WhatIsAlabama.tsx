import Image from 'next/image'

export default function WhatIsAlabama({ data }: { data: any }) {
    // data might look like:
    // {
    //   type: "whatIsAlabamaHandsAndVoices",
    //   heading: "What Is Alabama Hands & Voices?",
    //   htmlContent: "<p>Alabama Hands &amp; Voices is a parent-led ...</p>",
    //   image: "/images/retreat1.jpg"
    // }

    return (
        <section className="overflow-hidden bg-gray-100 py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-2xl font-semibold tracking-tight text-hvblue-600 sm:text-3xl">
                                {data.heading}
                            </h2>

                            {/* Render the HTML content safely */}
                            {data.htmlContent && (
                                <div
                                    className="mt-6 text-lg text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: data.htmlContent,
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div>
                        {data.image && (
                            <Image
                                src={data.image}
                                alt={data.heading || 'Hands & Voices Image'}
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
