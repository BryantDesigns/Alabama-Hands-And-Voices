import Image from 'next/image'

interface EventsSectionProps {
    heading: string
    intro: string
    backgroundImage: string
    events: { title: string; description: string }[]
}

export default function EventsSection({ heading, intro, backgroundImage, events }: EventsSectionProps) {
    return (
        <section>
            <div className="bg-white">
                {/* Background Image */}
                <div aria-hidden="true" className="relative">
                    {backgroundImage && (
                        <Image
                            alt="Community gathering event"
                            src={backgroundImage}
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
                            {heading}
                        </h2>
                        {intro && (
                            <p className="mt-4 text-lg text-gray-600">
                                {intro}
                            </p>
                        )}
                    </div>

                    {/* Events list */}
                    {Array.isArray(events) && events.length > 0 && (
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                            {events.map((evt, idx) => (
                                <div
                                    key={idx}
                                    className="border-t border-gray-200 pt-4"
                                >
                                    <dt className="text-lg font-semibold text-gray-900">
                                        {evt.title}
                                    </dt>
                                    {evt.description && (
                                        <dd className="mt-2 text-sm text-gray-600">
                                            {evt.description}
                                        </dd>
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
