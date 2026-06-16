import { getContactPageContent } from '@/lib/keystatic/pages'
import ContactV3 from '@/components/design-options/v3/about/ContactV3'

export const metadata = { title: 'Contact — Bold & Uplifting (v3)' }

export default async function Page() {
    const contact = await getContactPageContent()
    if (!contact) return <main className="p-8">Contact content not found.</main>
    return <ContactV3 contact={contact} />
}
