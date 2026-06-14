import { getMembershipPageContent, getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import MembershipV2 from '@/components/design-options/v2/membership/MembershipV2'

export const metadata = { title: 'Membership — Warm & Editorial (v2)' }

export default async function Page() {
    const [membership, choose] = await Promise.all([
        getMembershipPageContent(),
        getChooseMembershipPageContent(),
    ])
    if (!membership || !choose)
        return <main className="p-8">Membership content not found.</main>
    return <MembershipV2 membership={membership} choose={choose} />
}
