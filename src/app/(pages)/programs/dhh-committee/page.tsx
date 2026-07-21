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
        <main>
            {/* Logo Section */}
            <div className="bg-gray-200 pb-5">
                <section className="bg-gray-100 text-center text-gray-700">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center pt-5">
                            <div className="mb-[-1.25rem] mt-5 rounded-lg bg-white p-3 shadow-lg w-full max-w-[424px]">
                                <Image
                                    src="/images/retreat2.jpg"
                                    alt="DHH Committee"
                                    width={400}
                                    height={250}
                                    className="mx-auto rounded-lg object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full"></div>
            </div>

            {/* Hero Section */}
            <section className="bg-hvorange py-12 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold">
                        DHH Committee
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg">
                        {description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center mb-8">
                        <hr className="grow border-gray-400" />
                        <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase text-center">
                            Deaf or Hard of Hearing Committee Members can…
                        </h3>
                        <hr className="grow border-gray-400" />
                    </div>

                    <div className="mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md mb-12">
                        <ul className="space-y-4 text-lg text-gray-700">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-hvorange shrink-0"></span>
                                    {item.benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Video Section */}
                    {videos.length > 0 && (
                        <div className="mt-12">
                            <div className="flex items-center justify-center mb-8">
                                <hr className="grow border-gray-400" />
                                <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase text-center">
                                    {videoSectionHeading}
                                </h3>
                                <hr className="grow border-gray-400" />
                            </div>
                            <div className="mx-auto max-w-4xl">
                                <VideoPlayer videos={videos} />
                            </div>
                        </div>
                    )}

                </div>
            </section>
            
            <section className="bg-white py-12">
                <DHHRMForm />
            </section>
        </main>
    )
}
