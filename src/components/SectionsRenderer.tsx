'use client' // If you need interactivity; remove if purely presentational

import Link from 'next/link'
import Image from 'next/image'

import WhatIsAlabama from '@/components/pages/homepage/WhatIsAlabama'
import WhereToStart from '@/components/pages/homepage/WhereToStart'
import LearnMoreAboutUs from '@/components/pages/homepage/LearnMoreAboutUs'
import SupportOurMission from '@/components/pages/homepage/SupportOurMission'
import EventsSection from '@/components/pages/homepage/EventsSection'

export default function SectionsRenderer({ sections }: { sections: any[] }) {
    if (!sections) return null

    return (
        <>
            {sections.map((section, index) => {
                switch (section.type) {
                    case 'whatIsAlabamaHandsAndVoices':
                        return <WhatIsAlabama key={index} data={section} />

                    case 'whereToStart':
                        return <WhereToStart key={index} data={section} />

                    case 'learnMoreAboutUs':
                        return <LearnMoreAboutUs key={index} data={section} />

                    case 'supportOurMission':
                        return <SupportOurMission key={index} data={section} />

                    case 'events':
                        return <EventsSection key={index} data={section} />

                    default:
                        // In case there's an unknown type
                        return (
                            <div key={index}>
                                <p>Unsupported section type: {section.type}</p>
                            </div>
                        )
                }
            })}
        </>
    )
}
