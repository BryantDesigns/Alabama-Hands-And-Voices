import Image from 'next/image'

export default function EventsSection({ data }: { data: any }) {
    /*
    Data example:
    {
      heading: "Events",
      backgroundImage: "/images/family.jpg",
      introHtml: "<p>We are hosting events/gatherings ...</p>",
      events: [
        {
          title: "Family Retreat at Lake Martin",
          descriptionHtml: "August 9th - 11th, registration..."
        },
        {
          title: "Virtual & In-Person Events",
          descriptionHtml: "We are always planning events..."
        },
        ...
      ]
    }
  */

    return (
        <section>
            <div className="bg-white">
                {/* Background Image */}
                <div aria-hidden="true" className="relative">
                    {data.backgroundImage && (
                        <Image
                            alt="Community gathering event"
                            src={data.backgroundImage}
                            width={1200}
                            height={400}
                            className="h-64 w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white" />
                </div>

                {/* Content Section */}
                <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    {/* Heading + Intro */}
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-hvorange sm:text-4xl">
                            {data.heading}
                        </h2>
                        {data.introHtml && (
                            <div
                                className="mt-4 text-lg text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: data.introHtml,
                                }}
                            />
                        )}
                    </div>

                    {/* Events list */}
                    {Array.isArray(data.events) && data.events.length > 0 && (
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                            {data.events.map((evt: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="border-t border-gray-200 pt-4"
                                >
                                    <dt className="text-lg font-semibold text-gray-900">
                                        {evt.title}
                                    </dt>
                                    {evt.descriptionHtml && (
                                        <dd
                                            className="mt-2 text-sm text-gray-600"
                                            dangerouslySetInnerHTML={{
                                                __html: evt.descriptionHtml,
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>
        </section>
    )
}
