import { getFaqPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'
import Faq from '@/components/pages/faqpage/Faq'

export const metadata = createPageMetadata('/faq')

export default async function Page() {
    const data = await getFaqPageContent()
    if (!data) return <main className="p-8">FAQ content not found.</main>
    const faqs = (data.faqEntries ?? []).map((e) => ({
        question: e.question,
        answer: e.answer,
    }))
    return (
        <Faq
            heading={data.heading ?? 'Frequently Asked Questions'}
            introCopy={data.introCopy ?? ''}
            faqs={faqs}
        />
    )
}
