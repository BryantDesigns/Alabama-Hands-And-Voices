import { getResourcesPageContent } from '@/lib/keystatic/pages'
import Resources from '@/components/pages/resourcespage/Resources'

export const metadata = { title: 'Resources — Bold & Uplifting (v3)' }

export default async function Page() {
    const data = await getResourcesPageContent()
    if (!data) return <main className="p-8">Resources content not found.</main>
    return <Resources data={data} />
}
