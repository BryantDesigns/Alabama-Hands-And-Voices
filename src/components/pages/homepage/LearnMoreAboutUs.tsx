import Image from 'next/image'

interface LearnMoreProps {
    heading: string
    featureBlocks: { heading: string; body: string; image: string; imageAlt: string }[]
}

export default function LearnMoreAboutUs({ heading, featureBlocks }: LearnMoreProps) {
    return (
        <section>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/* Main heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {heading}
                        </h2>
                    </div>

                    {/* Render each feature block */}
                    {Array.isArray(featureBlocks) &&
                        featureBlocks.map((block, index) => {
                            const isFlipped = index % 2 === 1

                            return (
                                <div
                                    key={index}
                                    className="mt-16 flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                >
                                    {/* Text Content */}
                                    <div
                                        className={`mt-6 lg:mt-0 ${
                                            isFlipped
                                                ? 'lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9'
                                                : 'lg:col-span-5 xl:col-span-4'
                                        }`}
                                    >
                                        <h3 className="text-left text-3xl font-semibold uppercase tracking-tight text-hvorange-500 sm:text-4xl">
                                            {block.heading}
                                        </h3>
                                        {block.body && (
                                            <p className="mt-4 text-gray-700">
                                                {block.body}
                                            </p>
                                        )}
                                    </div>

                                    {/* Image */}
                                    <div
                                        className={`flex-auto ${
                                            isFlipped
                                                ? 'lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                                : 'lg:col-span-7 xl:col-span-8'
                                        }`}
                                    >
                                        {block.image && (
                                            <Image
                                                alt={block.imageAlt || block.heading}
                                                src={block.image}
                                                width={700}
                                                height={400}
                                                className="aspect-4/2 w-full rounded-lg bg-gray-100 object-cover"
                                            />
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
