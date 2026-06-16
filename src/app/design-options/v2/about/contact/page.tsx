import { getContactPageContent } from '@/lib/keystatic/pages'
import ContactV2 from '@/components/design-options/v2/about/ContactV2'

export const metadata = { title: 'Contact — Warm & Editorial (v2)' }

export default async function Page() {
    const contact = await getContactPageContent()
    if (!contact) return <main className="p-8">Contact content not found.</main>
    return <ContactV2 contact={contact} />
}
