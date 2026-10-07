import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import Faq from '@/components/pages/faqpage/Faq'

export const metadata = createPageMetadata('/faq')

export default async function Page() {
    const faqPage = await getSingleton('faqPage')
    return (
        <Faq
            heading={faqPage.heading}
            introCopy={faqPage.introCopy}
            faqs={faqPage.faqEntries}
        />
    )
}
