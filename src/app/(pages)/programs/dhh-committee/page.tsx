import Image from 'next/image'
import DHHRMForm from '@/components/pages/dhhrm/DHHRMForm'
import VideoPlayer from '@/components/pages/dhhrm/VideoPlayer'

export default function DHHCommitteePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-100 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="font-kaushan mb-8 text-4xl text-gray-900 md:text-5xl">
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
                            The inclusion of Deaf and Hard of Hearing committee members can
                            have a profound impact for everyone, child, parent and professional. Deaf and Hard of
                            Hearing (DHH) committee members are uniquely qualified to provide the child, parents,
                            professionals, and the family's broader community with a positive and hopeful
                            perspective drawn from their day-to-day real life experiences as a person who lives with
                            hearing loss.
                        </p>

                        {/* Benefits Section */}
                        <div className="mb-12 text-left">
                            <h3 className="font-kaushan mb-6 text-center text-2xl text-gray-900">
                                Deaf or Hard of Hearing Committee Members can…
                            </h3>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                    Provide exposure to a variety of communication modes and methods to families with
                                    children who are deaf or hard of hearing.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                    Increase awareness of and sensitivity to issues faced by individuals who are deaf or
                                    hard of hearing.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                    Share information through personal experiences.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                    Create a safe place in which children, parents and professionals can ask questions
                                    about hearing loss.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvblue-500"></span>
                                    Provide input to families seeking a better understanding of hearing loss.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="font-kaushan mb-8 text-center text-3xl text-gray-900">
                            Connect with a D/HH Committee Member
                        </h2>
                        <DHHRMForm />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="bg-hvblue-600 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="font-kaushan mb-8 text-center text-3xl text-hvorange-400">
                        Deaf & Hard of Hearing Role Models
                    </h2>
                    <VideoPlayer />
                </div>
            </section>
        </div>
    )
}
