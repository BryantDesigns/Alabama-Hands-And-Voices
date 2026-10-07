import {
    getNavigation,
    getGbysPageContent,
    getSafetyPageContent,
    getDhhCommitteePageContent,
} from '@/lib/keystatic/pages'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import { buildProgramSummaries } from '@/components/pages/programspage/programsData'
import Programs from '@/components/pages/programspage/Programs'

export const metadata = createPageMetadata('/programs')

export default async function Page() {
    const [nav, gbys, astra, safety, dhh] = await Promise.all([
        getNavigation(),
        getGbysPageContent(),
        getSingleton('astraPage'),
        getSafetyPageContent(),
        getDhhCommitteePageContent(),
    ])
    if (!nav) return <main className="p-8">Programs content not found.</main>
    const programs = buildProgramSummaries(nav, gbys, astra, safety, dhh)
    return <Programs programs={programs} />
}
