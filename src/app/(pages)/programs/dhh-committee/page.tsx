import DhhCommittee from '@/components/pages/dhhrm/DhhCommittee'
import {
    getDhhCommitteePageContent,
    getSiteSettings,
} from '@/lib/keystatic/pages'
import { getVideosByPlacement } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/dhh-committee')

export default async function DHHCommitteePage() {
    const [data, videos, settings] = await Promise.all([
        getDhhCommitteePageContent(),
        getVideosByPlacement('dhh-committee'),
        getSiteSettings(),
    ])

    if (!data) {
        throw new Error(
            '[Keystatic] Required DHH Committee Page content is missing.'
        )
    }

    return (
        <DhhCommittee
            dhh={data}
            videos={videos}
            contactEmail={settings.contactEmail}
        />
    )
}
