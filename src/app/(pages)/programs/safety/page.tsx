import Image from 'next/image'
import { getSafetyPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/safety')

export default async function SafetyProjectPage() {
    const data = await getSafetyPageContent()

    const introCopy = data?.introCopy ?? ''
    const actionCards = data?.actionCards ?? []
    const familyRetreatsHeading = data?.familyRetreatsHeading ?? 'Family Retreats'
    const familyRetreatsBody = data?.familyRetreatsBody ?? ''
    const familyRetreatsLink = data?.familyRetreatsLink ?? '/programs/gbys'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-100 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center">
                        <div className="max-w-3xl text-center">
                            <h1 className="font-kaushan mb-8 text-4xl text-gray-900 md:text-5xl">
                                O.U.R. Children&apos;s Safety Project
                            </h1>
                            <div className="relative -mb-12 rounded-lg bg-white p-8 shadow-xl">
                                <Image
                                    src="/images/09_OUR logo.png"
                                    alt="O.U.R. Children's Safety Project Logo"
                                    width={400}
                                    height={200}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Introduction */}
                        <div className="mb-12 space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>{introCopy}</p>
                        </div>

                        {/* Action Cards */}
                        <div className="grid gap-8 md:grid-cols-2">
                            {actionCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                                >
                                    <h3 className="font-kaushan mb-4 text-xl text-gray-900">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-700">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Retreats Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-kaushan mb-6 text-3xl text-hvblue-600">
                            {familyRetreatsHeading}
                        </h2>
                        <p className="text-lg text-gray-700">
                            {familyRetreatsBody}{' '}
                            <a
                                href={familyRetreatsLink}
                                className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                            >
                                Guide By Your Side Program
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
