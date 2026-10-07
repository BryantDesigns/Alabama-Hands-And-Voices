import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import { buildProgramSummaries } from '@/components/pages/programspage/programsData'
import Programs from '@/components/pages/programspage/Programs'

export const metadata = createPageMetadata('/programs')

export default async function Page() {
    const [navigation, gbysPage, astraPage, safetyPage, dhhCommitteePage] =
        await Promise.all([
            getSingleton('navigation'),
            getSingleton('gbysPage'),
            getSingleton('astraPage'),
            getSingleton('safetyPage'),
            getSingleton('dhhCommitteePage'),
        ])
    const programs = buildProgramSummaries(
        navigation,
        gbysPage,
        astraPage,
        safetyPage,
        dhhCommitteePage
    )
    return <Programs programs={programs} />
}
