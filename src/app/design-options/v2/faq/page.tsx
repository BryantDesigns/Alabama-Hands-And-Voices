import { getFaqPageContent } from '@/lib/keystatic/pages'
import FaqV2 from '@/components/design-options/v2/faq/FaqV2'

export const metadata = { title: 'FAQ — Warm & Editorial (v2)' }

export default async function Page() {
    const data = await getFaqPageContent()
    if (!data) return <main className="p-8">FAQ content not found.</main>
    const faqs = (data.faqEntries ?? []).map((e) => ({
        question: e.question,
        answer: e.answer,
    }))
    return (
        <FaqV2
            heading={data.heading ?? 'Frequently Asked Questions'}
            introCopy={data.introCopy ?? ''}
            faqs={faqs}
        />
    )
}
