import { getContactPageContent } from '@/lib/keystatic/pages'
import Contact from '@/components/pages/aboutpage/Contact'

export const metadata = { title: 'Contact — Bold & Uplifting (v3)' }

export default async function Page() {
    const contact = await getContactPageContent()
    if (!contact) return <main className="p-8">Contact content not found.</main>
    return <Contact contact={contact} />
}
