import ChooseMembership from '@/components/pages/membership/ChooseMembership'
import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('/membership/choose-membership')

export default async function ChooseMembershipPage() {
    const [chooseMembershipPage, settings] = await Promise.all([
        getSingleton('chooseMembershipPage'),
        getSingleton('siteSettings'),
    ])

    return (
        <ChooseMembership
            choose={chooseMembershipPage}
            contactEmail={settings.contactEmail}
        />
    )
}
