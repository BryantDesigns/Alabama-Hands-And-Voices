import Image from 'next/image'
import DHHRMForm from '@/components/pages/dhhrm/DHHRMForm'
import VideoPlayer from '@/components/pages/dhhrm/VideoPlayer'
import { getDhhCommitteePageContent } from '@/lib/keystatic/pages'
import { getVideosByPlacement } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/dhh-committee')

export default async function DHHCommitteePage() {
    const [data, videos] = await Promise.all([
        getDhhCommitteePageContent(),
        getVideosByPlacement('dhh-committee'),
    ])

    const description = data?.description ?? ''
    const benefits = data?.benefits ?? []
    const videoSectionHeading =
        data?.videoSectionHeading ?? 'Deaf & Hard of Hearing Role Models'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-100 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="mb-8 font-kaushan text-4xl text-gray-900 md:text-5xl">
                            DHH Committee
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Hero Image */}
                        <div className="mb-8">
                            <Image
                                src="/images/Retreat 2.jpg"
                                alt="Family retreat gathering"
                                width={800}
                                height={500}
                                className="mx-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Description */}
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            {description}
                        </p>

                        {/* Benefits Section */}
                        <div className="mb-12 text-left">
                            <h3 className="mb-6 text-center font-kaushan text-2xl text-gray-900">
                                Deaf or Hard of Hearing Committee Members can…
                            </h3>
                            <ul className="space-y-4 text-lg text-gray-700">
                                {benefits.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                        {item.benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center font-kaushan text-3xl text-gray-900">
                            Connect with a D/HH Committee Member
                        </h2>
                        <DHHRMForm />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            {videos.length > 0 && (
                <section className="bg-hvblue-600 py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-8 text-center font-kaushan text-3xl text-hvorange-400">
                            {videoSectionHeading}
                        </h2>
                        <VideoPlayer videos={videos} />
                    </div>
                </section>
            )}
        </div>
    )
}
