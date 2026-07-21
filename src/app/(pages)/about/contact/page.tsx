import { getContactPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'
import Contact from '@/components/pages/aboutpage/Contact'

export const metadata = createPageMetadata('/about/contact')

export default async function Page() {
    const contact = await getContactPageContent()
    if (!contact) return <main className="p-8">Contact content not found.</main>
    return <Contact contact={contact} />
}
