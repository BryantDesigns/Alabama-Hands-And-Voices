import { getMembershipPageContent, getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import { createPageMetadata } from '@/lib/seo'
import Membership from '@/components/pages/membership/Membership'

export const metadata = createPageMetadata('/membership')

export default async function Page() {
    const [membership, choose] = await Promise.all([
        getMembershipPageContent(),
        getChooseMembershipPageContent(),
    ])
    if (!membership || !choose)
        return <main className="p-8">Membership content not found.</main>
    return <Membership membership={membership} choose={choose} />
}
