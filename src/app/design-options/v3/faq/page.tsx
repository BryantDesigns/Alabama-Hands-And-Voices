import { getFaqPageContent } from '@/lib/keystatic/pages'
import FaqV3 from '@/components/design-options/v3/faq/FaqV3'

export const metadata = { title: 'FAQ — Bold & Uplifting (v3)' }

export default async function Page() {
    const data = await getFaqPageContent()
    if (!data) return <main className="p-8">FAQ content not found.</main>
    const faqs = (data.faqEntries ?? []).map((e) => ({
        question: e.question,
        answer: e.answer,
    }))
    return (
        <FaqV3
            heading={data.heading ?? 'Frequently Asked Questions'}
            introCopy={data.introCopy ?? ''}
            faqs={faqs}
        />
    )
}
