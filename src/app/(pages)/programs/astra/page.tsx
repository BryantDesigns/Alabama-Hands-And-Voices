import Image from 'next/image'
import AstraForm from '@/components/pages/astrapage/AstraForm'
import { getAstraPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/astra')

export default async function AstraPage() {
    const data = await getAstraPageContent()

    const programDescription = data?.programDescription ?? ''
    const questions = data?.questions ?? []
    const resourceLinks = data?.resourceLinks ?? []
    const trainingCtaLabel = data?.trainingCtaLabel ?? 'here'
    const trainingCtaHref = data?.trainingCtaHref ?? 'https://forms.office.com/r/5AjZw87bMV'

    return (
        <main>
            {/* Logo Section */}
            <div className="bg-gray-200 pb-5">
                <section className="bg-gray-100 text-center text-gray-700">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center pt-5">
                            <div className="mb-[-1.25rem] mt-5 rounded-lg bg-white p-5 shadow-lg">
                                <Image
                                    src="/images/07_astra-2019-png.png"
                                    alt="ASTra Program Logo"
                                    width={300}
                                    height={100}
                                    className="mx-auto"
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
                        All About ASTra!
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg">
                        {programDescription}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    {/* Questions Section */}
                    <div className="flex items-center justify-center mb-8">
                        <hr className="grow border-gray-400" />
                        <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase text-center">
                            Do you have questions like this?
                        </h3>
                        <hr className="grow border-gray-400" />
                    </div>

                    <div className="grid items-center gap-8 lg:grid-cols-2 mb-16">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/images/retreat12.jpeg"
                                alt="Family retreat"
                                width={500}
                                height={310}
                                className="h-80 w-full rounded-lg object-cover shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <ul className="space-y-4 text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md">
                                {questions.map((item) => (
                                    <li key={item.question} className="flex items-start">
                                        <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-hvorange shrink-0"></span>
                                        {item.question}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="flex items-center justify-center mb-8">
                        <hr className="grow border-gray-400" />
                        <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase text-center">
                            Favorite resources available on <a href="https://www.handsandvoices.org/astra/index.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-hvorange-700">Hands & Voices HQ</a>
                        </h3>
                        <hr className="grow border-gray-400" />
                    </div>

                    <div className="grid items-center gap-8 lg:grid-cols-2 mb-16">
                        <div className="order-1">
                            <ul className="space-y-4 text-lg text-gray-700 bg-white p-6 rounded-lg shadow-md">
                                {resourceLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-hvorange underline hover:text-hvorange-700 flex items-start"
                                        >
                                            <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-hvorange shrink-0"></span>
                                            <span className="flex-1">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-2">
                            <Image
                                src="/images/retreat13.jpeg"
                                alt="Educational resources"
                                width={500}
                                height={310}
                                className="h-80 w-full rounded-lg object-cover shadow-lg"
                            />
                        </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="rounded-lg bg-white p-8 text-center shadow-md max-w-4xl mx-auto">
                        <p className="mb-4 text-lg text-gray-700 font-semibold">
                            Help is Here! Ask for an ASTra advocate by completing an advocacy
                            request form below.
                        </p>
                        <p className="text-lg text-gray-700">
                            Join the wait list for Level 1 Educational Advocacy training class
                            by registering{' '}
                            <a
                                href={trainingCtaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-hvorange underline hover:text-hvorange-700"
                            >
                                {trainingCtaLabel}
                            </a>
                            .
                        </p>
                    </div>

                </div>
            </section>
            
            <section className="bg-white py-12">
                <AstraForm />
            </section>
        </main>
    )
}
