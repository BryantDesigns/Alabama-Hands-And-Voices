import { getGbysPageContent } from '@/lib/keystatic/pages'
import GbysV3 from '@/components/design-options/v3/programs/GbysV3'

export const metadata = { title: 'GBYS — Bold & Uplifting (v3)' }

export default async function Page() {
    const gbys = await getGbysPageContent()
    if (!gbys) return <main className="p-8">GBYS content not found.</main>
    return <GbysV3 gbys={gbys} />
}
