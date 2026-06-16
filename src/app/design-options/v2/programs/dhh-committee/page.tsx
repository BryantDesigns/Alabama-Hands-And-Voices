import { getDhhCommitteePageContent } from '@/lib/keystatic/pages'
import DhhCommitteeV2 from '@/components/design-options/v2/programs/DhhCommitteeV2'

export const metadata = { title: 'D/HH Committee — Warm & Editorial (v2)' }

export default async function Page() {
    const dhh = await getDhhCommitteePageContent()
    if (!dhh) return <main className="p-8">D/HH Committee content not found.</main>
    return <DhhCommitteeV2 dhh={dhh} />
}
