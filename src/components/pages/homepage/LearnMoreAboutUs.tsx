import Image from 'next/image'

export default function LearnMoreAboutUs({ data }: { data: any }) {
    /*
    Data might look like:
    {
      heading: "Learn More About Us",
      description: "Our mission is to support families...",
      contentBlocks: [
        {
          blockType: "mission",
          heading: "Our Mission",
          image: {
            src: "/images/homePagePersonPic.jpg",
            alt: "A child participating...",
            width: 700,
            height: 400
          },
          htmlContent: "<p>Hands & Voices is dedicated...</p>"
        },
        {
          blockType: "membership",
          heading: "Membership",
          image: { ... },
          htmlContent: "<p>Thank you for your interest...</p>"
        }
      ]
    }
  */

    return (
        <section>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/* Main heading + description */}
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {data.heading}
                        </h2>
                        {data.description && (
                            <p className="mt-4 text-gray-500">
                                {data.description}
                            </p>
                        )}
                    </div>

                    {/* Render each contentBlock */}
                    {Array.isArray(data.contentBlocks) &&
                        data.contentBlocks.map((block: any, index: number) => {
                            // We can alternate layout based on index or blockType
                            const isFlipped = block.blockType === 'membership'
                            // or use index % 2 === 1 to flip every other block

                            return (
                                <div
                                    key={index}
                                    className={`mt-16 flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 ${
                                        isFlipped ? '' : ''
                                    }`}
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
                                        {/* Render block.htmlContent as HTML */}
                                        {block.htmlContent && (
                                            <div
                                                className="mt-4 text-gray-700"
                                                dangerouslySetInnerHTML={{
                                                    __html: block.htmlContent,
                                                }}
                                            />
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
                                                alt={block.image.alt}
                                                src={block.image.src}
                                                width={block.image.width || 700}
                                                height={
                                                    block.image.height || 400
                                                }
                                                className="aspect-[4/2] w-full rounded-lg bg-gray-100 object-cover"
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
