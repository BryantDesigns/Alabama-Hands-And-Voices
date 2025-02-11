import { fetchPageContent } from '@/services/firebase/database'
import Image from 'next/image'

const AboutPage = async () => {
    const content = await fetchPageContent('about')

    // Find the "Who We Are" and "Why We Are Here" sections
    const whoWeAreSection = content?.sections.find(
        (section) => section.heading === 'Who We Are'
    )
    const whyWeAreHereSection = content?.sections.find(
        (section) => section.heading === 'Why We Are Here'
    )

    return (
        <>
            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">
                    {content?.title || 'About Us'}
                </h1>

                {/* Who We Are Section */}
                

                {/* Why We Are Here Section */}
                {whyWeAreHereSection && (
                    <div className="mx-auto mt-12 max-w-4xl text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 ">
                            {whyWeAreHereSection.heading}
                        </h2>
                        <div
                            className="mt-4 text-lg text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html: whyWeAreHereSection.content,
                            }}
                        />
                    </div>
                )}
            </div>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative isolate overflow-hidden bg-hvblue-500 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="max-w-3xl text-center sm:text-left">
                            <h1 className="text-5xl font-semibold text-white sm:text-6xl">
                                Who We Are
                            </h1>
                            <p className="mt-6 text-lg text-white sm:max-w-lg">
                                Alabama Hands & Voices is a **parent-driven,
                                non-profit organization** dedicated to
                                supporting families with children who are deaf
                                or hard of hearing, **regardless of
                                communication choice**.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="relative h-64 w-full lg:h-96 lg:w-1/2">
                            <Image
                                src="/images/our-mission.jpg"
                                alt="Our Mission"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover shadow-md"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-semibold text-hvblue-600">
                                Our Mission
                            </h2>
                            <p className="mt-4 text-lg text-gray-700">
                                We provide families with the **resources,
                                networks, and information** they need to improve
                                communication access and **educational
                                outcomes** for their children.
                            </p>
                            <p className="mt-4 text-lg text-gray-700">
                                Our outreach activities, parent/professional
                                collaboration, and advocacy efforts focus on
                                enabling **deaf and hard of hearing children to
                                reach their highest potential**.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="bg-gray-100 py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-hvblue-600">
                                Our Values
                            </h2>
                            <p className="mt-6 text-lg text-gray-700">
                                Alabama Hands & Voices is **unbiased about
                                communication modes or methodology**. Our goal
                                is to support families and their choices for
                                their children.
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Family Support',
                                    description:
                                        'Connecting parents with other families for guidance and support.',
                                },
                                {
                                    name: 'Educational Advocacy',
                                    description:
                                        'Ensuring access to quality education for all children.',
                                },
                                {
                                    name: 'Inclusivity',
                                    description:
                                        'Serving families regardless of communication preference or hearing level.',
                                },
                                {
                                    name: 'Collaboration',
                                    description:
                                        'Working with professionals to provide the best resources for families.',
                                },
                                {
                                    name: 'Empowerment',
                                    description:
                                        'Equipping parents with the knowledge and tools they need.',
                                },
                                {
                                    name: 'Community',
                                    description:
                                        'Building a network of support across Alabama and beyond.',
                                },
                            ].map((value) => (
                                <div key={value.name}>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {value.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                

                {/* Call to Action */}
                <section className="bg-hvblue-600 py-16 text-white">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl font-semibold">Join Us</h2>
                        <p className="mt-4 text-lg">
                            Become a part of our community and help support
                            families with children who are deaf or hard of
                            hearing.
                        </p>
                        <a
                            href="/membership"
                            className="mt-6 inline-block rounded-lg bg-hvorange-500 px-6 py-3 text-lg font-semibold transition hover:bg-hvorange-700"
                        >
                            Become a Member
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage
