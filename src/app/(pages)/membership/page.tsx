import { getMembershipPageContent, getChooseMembershipPageContent } from '@/lib/keystatic/pages'
import Membership from '@/components/pages/membership/Membership'

export const metadata = { title: 'Membership — Bold & Uplifting (v3)' }

export default async function Page() {
    const [membership, choose] = await Promise.all([
        getMembershipPageContent(),
        getChooseMembershipPageContent(),
    ])
    if (!membership || !choose)
        return <main className="p-8">Membership content not found.</main>
    return <Membership membership={membership} choose={choose} />
}
