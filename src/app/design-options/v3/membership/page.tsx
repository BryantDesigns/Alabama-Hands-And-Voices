import { getMembershipPageContent, getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import MembershipV3 from '@/components/design-options/v3/membership/MembershipV3'

export const metadata = { title: 'Membership — Bold & Uplifting (v3)' }

export default async function Page() {
    const [membership, choose] = await Promise.all([
        getMembershipPageContent(),
        getChooseMembershipPageContent(),
    ])
    if (!membership || !choose)
        return <main className="p-8">Membership content not found.</main>
    return <MembershipV3 membership={membership} choose={choose} />
}
