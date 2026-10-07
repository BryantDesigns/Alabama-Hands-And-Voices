import DhhCommittee from '@/components/pages/dhhrm/DhhCommittee'
import { getSingleton } from '@/lib/keystatic/singletons'
import { getVideosByPlacement } from '@/lib/keystatic/collections'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/programs/dhh-committee')

export default async function DHHCommitteePage() {
    const [dhhCommitteePage, videos, settings] = await Promise.all([
        getSingleton('dhhCommitteePage'),
        getVideosByPlacement('dhh-committee'),
        getSingleton('siteSettings'),
    ])

    return (
        <DhhCommittee
            dhh={dhhCommitteePage}
            videos={videos}
            contactEmail={settings.contactEmail}
        />
    )
}
