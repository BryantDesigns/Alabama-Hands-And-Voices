import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "My child was referred for additional hearing tests or I suspect that my child is not hearing/hearing well?",
        answer: (
            <div className="space-y-4">
                <p>
                    Follow up and have your child's hearing tested by an audiologist! Most babies are born with hearing, so many
                    pediatricians are not used to seeing this. Often people will speculate that it's fluid on the ear causing the hearing test
                    result. A pediatric audiologist can get you the right information. If the tests are inconclusive, make sure that you
                    have a follow-up plan in place. These early years are critical for your child's learning, so you need to know as soon as
                    possible if she is learning through hearing.
                </p>
                <div className="space-y-2">
                    <p>
                        <a
                            href="http://ehdipals.org/SmartTool/EP_SmartTool.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            EHDIPALS.ORG
                        </a>{' '}
                        (Find an audiologist)
                    </p>
                    <p>
                        <a
                            href="http://www.alabamapublichealth.gov/newbornscreening/newborn-hearing-screening.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            Alabama Early Hearing Detection & Intervention/Alabama Department of Public Health (EHDI)
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.infanthearing.org/states"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            www.infanthearing.org/states
                        </a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        question: "My child is deaf or hard of hearing, now what?",
        answer: (
            <div className="space-y-4">
                <p>
                    If you are feeling emotions around your child's diagnosis, acknowledge them. Be kind to yourself and find someone to share
                    your emotions. Fellow parents in this chapter can help. Start building a community of parents. If you feel that you need
                    professional assistance, seek it. Your child needs you to take care of yourself so that you can care for him. And, while you
                    are caring for yourself, take action for your child! Children who are deaf or hard of hearing often need extra help to learn in the early years. Under the
                    Individuals with Disabilities Education Act (IDEA), children who are deaf or hard of hearing receive "early intervention"
                    services from ages 0-3. In Alabama, the{' '}
                    <a
                        href="https://www.rehab.alabama.gov/services/ei"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        Alabama Department of Rehabilitation Services (ADRS)
                    </a>{' '}
                    provides these services.
                </p>
                <p>
                    ADRS has developed a resource manual for families of deaf and hard of hearing children
                    "Pathways for Families" which we include as a pdf.{' '}
                    <a
                        href="/assets/Pathways.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        Download the ADRS "Pathways" PDF
                    </a>
                </p>
                <p>
                    Children who are diagnosed as deaf or hard of hearing after age 3 receive services from their school district. Please reach out
                    to your local school district even if your child has not yet enrolled there. For more information go to:{' '}
                    <a
                        href="http://www.alsde.edu/sec/ses/Pages/home.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        Alabama State Department of Education
                    </a>
                </p>
                <p>
                    The Parent to Parent Committee of Early Hearing Detection and Intervention (EDHI) has developed a parent guide with D/HH early
                    intervention recommendations.
                </p>
                <p>
                    <a
                        href="https://www.handsandvoices.org/resources/pubs/Final_8-30-2017.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        "A PARENTS GUIDE TO DEAF AND HARD OF HEARING EARLY INTERVENTION RECOMMENDATIONS"
                    </a>
                </p>
            </div>
        ),
    },
    {
        question: "Will we seek technology to enhance our child's hearing?",
        answer: (
            <div className="space-y-4">
                <p>
                    Professionals can evaluate whether your child is a candidate to access hearing through{' '}
                    <a
                        href="https://www.nidcd.nih.gov/health/hearing-aids"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        hearing aids
                    </a>{' '}
                    or{' '}
                    <a
                        href="http://www.acialliance.org/page/CochlearImplant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        cochlear implants
                    </a>
                    . If your child is a candidate for the technology, you must decide whether you want your child to hear and whether you are
                    willing to put in the work to make sure that the technology continually provides your child with access to hearing. It's not
                    automatic, you must help him learn to listen with his technology, make sure that the technology stays in working
                    order, and if speech is a goal teach spoken language.
                </p>
                <p>
                    Some choose not to hear to immerse their child in Deaf culture using a visual language such as{' '}
                    <a
                        href="https://www.nad.org/resources/american-sign-language/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        American Sign Language (ASL)
                    </a>
                    . Some choose a combination.
                </p>
                <div className="space-y-1 text-sm">
                    <p>
                        <a
                            href="https://deafalabama.org/home/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            Alabama Association of the Deaf (AAD)
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.cla.auburn.edu/speechandhearingclinic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            Auburn Speech & Hearing Clinic
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.rehab.alabama.gov/services/crs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            Children's Rehabilitation Service (CRS) (Hearing Aids and Audiology)
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://all-forchildren.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            All for Children
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.eaent.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            East Alabama Ear Nose & Throat
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.childrensal.org/hear-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            The HEAR Center of Children's Hospital– Birmingham (hearing aids, cochlear implants, audiology)
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.hhwomenandchildren.org/pediatric-audiology"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            Huntsville Cochlear Implant Center
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.southalabama.edu/colleges/alliedhealth/speechandhearing/clinic.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-hvorange-600 underline hover:text-hvorange-700"
                        >
                            University of South Alabama Speech & Hearing Center
                        </a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        question: "How will we communicate with our child?",
        answer: (
            <div className="space-y-4">
                <p>
                    Ok, here's where the controversy is. People have some very strong opinions on this
                    topic based on what has worked well or not well for them or their child. Everyone wants the very best for
                    all children who are deaf or hard of hearing. But, here's the thing, you are your child's parent and you
                    have to decide what's best for her. So, take it all in – all of the life experiences that people will
                    share with you and all of the professional opinions that you seek. And, after you have visited and
                    listened and read and thought and talked about it, take a good look at your family and your child and
                    decide what you think is the best path to take. Then start moving down that path! It's going to be a lot
                    of work, and you may decide that you need to take a different path once your start down the road. But,
                    your child needs to make the most of these early years so start moving! Whichever path you choose, there
                    are people willing to help you. I hope that Alabama Hands & Voices can help you find them.
                </p>
                <p>
                    <a
                        href="http://www.handsandvoices.org/comcon/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        Hands & Voices Communication Considerations A-Z
                    </a>
                </p>
            </div>
        ),
    },
    {
        question: "How do I start building my child's team?",
        answer: (
            <div className="space-y-4">
                <p>
                    Alabama Hands & Voices would love be a part of your team. Please reach out to us at{' '}
                    <a
                        href="mailto:alabamahinfo@gmail.com"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        alabamahinfo@gmail.com
                    </a>{' '}
                    and/or request a parent guide from our{' '}
                    <a
                        href="/gbys"
                        className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                    >
                        Guide By Your Side Program
                    </a>
                    .
                </p>
            </div>
        ),
    },
]

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8">
                            <h1 className="font-kaushan mb-4 text-5xl font-bold text-white">
                                "What works for your child is what makes the choice right."™
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12 text-center">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                FAQ
                            </p>
                            <h2 className="font-kaushan text-4xl font-semibold tracking-tight text-gray-900">
                                Frequently Asked Questions
                            </h2>
                            <div className="mx-auto mt-4 h-1 w-24 bg-hvblue-600"></div>
                        </div>
                        
                        <dl className="mt-16 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure
                                    key={faq.question}
                                    as="div"
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                            <span className="text-base/7 font-semibold">
                                                {faq.question}
                                            </span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusSmallIcon
                                                    aria-hidden="true"
                                                    className="size-6 text-hvblue-600 group-data-[open]:hidden"
                                                />
                                                <MinusSmallIcon
                                                    aria-hidden="true"
                                                    className="size-6 text-hvblue-600 group-[:not([data-open])]:hidden"
                                                />
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                                        <div className="text-base/7 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}
