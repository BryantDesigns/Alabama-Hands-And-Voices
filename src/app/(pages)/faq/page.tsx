import { getFaqPageContent } from '@/lib/keystatic/pages'
import Faq from '@/components/pages/faqpage/Faq'

export const metadata = { title: 'FAQ — Bold & Uplifting (v3)' }

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
