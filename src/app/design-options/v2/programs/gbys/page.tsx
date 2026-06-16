import { getGbysPageContent } from '@/lib/keystatic/pages'
import GbysV2 from '@/components/design-options/v2/programs/GbysV2'

export const metadata = { title: 'GBYS — Warm & Editorial (v2)' }

export default async function Page() {
    const gbys = await getGbysPageContent()
    if (!gbys) return <main className="p-8">GBYS content not found.</main>
    return <GbysV2 gbys={gbys} />
}
