import { getSingleton } from '@/lib/keystatic/singletons'
import { createPageMetadata } from '@/lib/seo'
import Membership from '@/components/pages/membership/Membership'

export const metadata = createPageMetadata('/membership')

export default async function Page() {
    const [membershipPage, chooseMembershipPage] = await Promise.all([
        getSingleton('membershipPage'),
        getSingleton('chooseMembershipPage'),
    ])
    return (
        <Membership membership={membershipPage} choose={chooseMembershipPage} />
    )
}
