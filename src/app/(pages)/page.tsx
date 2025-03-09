import HeroSection from '@/components/pages/homepage/HeroSection'
import { fetchPageContent } from '@/services/firebase/database'
import SectionsRenderer from '@/components/SectionsRenderer'

// Revalidate the static page every 60 seconds (for example)
export const revalidate = 60

export default async function Home() {
    // Fetch data for the 'home' page from Firestore
    const pageData = await fetchPageContent('home')

    // If there's no data, you can show a fallback or error
    if (!pageData) {
        return <div>No data found for home page.</div>
    }

    const { sections = [] } = pageData

    return (
        <main>
            <HeroSection />

            <SectionsRenderer sections={sections} />
        </main>
    )
}
