import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import Contact from '@/components/pages/aboutpage/Contact'

export const metadata = createPageMetadata('/about/contact')

export default async function Page() {
    const contactPage = await getSingleton('contactPage')
    return <Contact contact={contactPage} />
}
