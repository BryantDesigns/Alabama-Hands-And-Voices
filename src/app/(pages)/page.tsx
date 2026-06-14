import { getHomePageContent, getSiteSettings } from '@/lib/keystatic/pages'
import HeroSection from '@/components/pages/homepage/HeroSection'
import WhatIsAlabama from '@/components/pages/homepage/WhatIsAlabama'
import WhereToStart from '@/components/pages/homepage/WhereToStart'
import LearnMoreAboutUs from '@/components/pages/homepage/LearnMoreAboutUs'
import SupportOurMission from '@/components/pages/homepage/SupportOurMission'
import EventsSection from '@/components/pages/homepage/EventsSection'

export default async function Home() {
    const [data, settings] = await Promise.all([
        getHomePageContent(),
        getSiteSettings(),
    ])

    if (!data) {
        return (
            <div>
                Homepage content not found. Run the dev server and check
                Keystatic.
            </div>
        )
    }

    return (
        <main>
            <HeroSection
                quote={data?.heroQuote ?? ''}
                logoImage={data?.heroLogoImage ?? ''}
            />

            <WhatIsAlabama
                heading={data?.intro?.heading ?? ''}
                body={data?.intro?.body ?? ''}
                image={data?.intro?.image ?? ''}
                imageAlt={data?.intro?.imageAlt ?? ''}
            />

            <WhereToStart
                heading={data?.whereToStart?.heading ?? ''}
                subheading={data?.whereToStart?.subheading ?? ''}
                body={data?.whereToStart?.body ?? ''}
                quoteText={data?.whereToStart?.quoteText ?? ''}
                quoteAuthors={data?.whereToStart?.quoteAuthors ?? ''}
                backgroundImage={data?.whereToStart?.backgroundImage ?? ''}
                stats={[...(data?.whereToStart?.stats ?? [])]}
                ctaLabel={data?.whereToStart?.ctaLabel ?? ''}
                ctaHref={data?.whereToStart?.ctaHref ?? ''}
            />

            <LearnMoreAboutUs
                heading={data?.learnMore?.heading ?? ''}
                featureBlocks={[...(data?.learnMore?.featureBlocks ?? [])]}
            />

            <SupportOurMission
                heading={data?.support?.heading ?? ''}
                body={data?.support?.body ?? ''}
                donationLabel={settings.donationButtonLabel}
            />

            <EventsSection
                heading={data?.events?.heading ?? ''}
                intro={data?.events?.intro ?? ''}
                backgroundImage={data?.events?.backgroundImage ?? ''}
                events={[...(data?.events?.events ?? [])]}
            />
        </main>
    )
}
