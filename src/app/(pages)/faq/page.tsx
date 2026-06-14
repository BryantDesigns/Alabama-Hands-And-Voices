import { getFaqPageContent } from '@/lib/keystatic/pages'
import FaqAccordion from '@/components/pages/faqpage/FaqAccordion'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/faq')

export default async function FAQPage() {
    const data = await getFaqPageContent()

    const heading = data?.heading ?? 'Frequently Asked Questions'
    const introCopy = data?.introCopy ?? ''
    const faqEntries = (data?.faqEntries ?? []).map((entry) => ({
        question: entry.question,
        answer: entry.answer,
    }))

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8">
                            <p className="font-kaushan mb-4 text-5xl font-bold text-white">
                                &quot;What works for your child is what makes the choice right.&quot;™
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12 text-center">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                FAQ
                            </p>
                            <h1 className="font-kaushan text-4xl font-semibold tracking-tight text-gray-900">
                                {heading}
                            </h1>
                            {introCopy && (
                                <p className="mt-4 text-lg text-gray-600">{introCopy}</p>
                            )}
                            <div className="mx-auto mt-4 h-1 w-24 bg-hvblue-600"></div>
                        </div>

                        <FaqAccordion faqs={faqEntries} />
                    </div>
                </div>
            </section>
        </main>
    )
}
