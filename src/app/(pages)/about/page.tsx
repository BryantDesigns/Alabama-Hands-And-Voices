import Image from 'next/image'
import Link from 'next/link'

const AboutPage = async () => {
    return (
        <>
            <div className="bg-white">
                {/* Who We Are Section */}
                <section>
                    {/* Who We Are Section */}
                    <div className="overflow-hidden bg-gradient-to-t from-hvblue via-white to-white py-24">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                                <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                    <h2 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                                        WHO WE ARE
                                    </h2>
                                    <p className="mt-6 text-lg/8 text-gray-600 sm:text-xl/8">
                                        We are parents of kids who are deaf or
                                        hard of hearing (to whatever degree). We
                                        are parents of ASL and other visual
                                        language signers, kids who use listening
                                        and spoken language, cued speech users,
                                        total communicators, kids with hearing
                                        aids and/or cochlear implants, and kids
                                        who do not use technology to hear. We
                                        are people who have common interests
                                        connected through the community of
                                        deafness.
                                    </p>
                                    <p className="mt-6 text-lg/8 text-gray-600 sm:text-xl/8">
                                        Hands & Voices is a safe place to
                                        explore options, get unemotional
                                        support, learn from one another and
                                        share what we have in common. We value
                                        diversity and honor the role of parents
                                        and family as the single greatest factor
                                        in raising a well-adjusted, successful
                                        kid.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                        <Image
                                            alt=""
                                            src="/images/aboutUsWhoWeAre1.jpg"
                                            width={600}
                                            height={500}
                                            className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                            <Image
                                                alt=""
                                                src="/images/retreat6.jpg"
                                                width={600}
                                                height={500}
                                                className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                            <Image
                                                alt=""
                                                src="/images/retreat5.jpg"
                                                width={600}
                                                height={500}
                                                className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                            <Image
                                                alt=""
                                                src="/images/retreat2.jpg"
                                                width={600}
                                                height={500}
                                                className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative isolate overflow-hidden bg-hvblue-500 px-6 py-8">
                        <div className="mx-auto max-w-7xl text-center text-white sm:text-left">
                            <p className="mt-4 text-pretty text-lg/8 font-medium sm:text-xl/8">
                                There is room in the community of deafness for
                                an organization like Hands & Voices, and in
                                fact, I think parents, and many professionals,
                                have been crying out for a group like this” says
                                Leeanne Seaver, of Hands & Voices. &quot;Somehow
                                parents connecting to other parents provides an
                                element of credibility; there&rsquo;s a level of
                                &quot;knowing & feeling&quot; that only a parent
                                experiences. And parents, especially parents of
                                babies newly identified with deafness or hearing
                                loss, need a way to connect like this without
                                being wary of a sponsoring agenda from a service
                                provider.&quot;
                            </p>

                            <p className="mt-4 text-pretty text-lg/8 font-medium sm:text-xl/8">
                                Hands & Voices is a non-profit, parent-driven
                                national organization dedicated to supporting
                                families of children who are deaf or hard of
                                hearing. We are non-biased about communication
                                methodologies and believe that families can make
                                the best choices for their child if they have
                                access to good information and support. Our
                                membership includes families who communicate
                                manually and/or orally. From American Sign
                                Language to cochlear implants and spoken
                                language, our organization represents people
                                from all different approaches to, and
                                experiences with, deafness or hearing loss. We
                                are one of over 40 Hands & Voices chapters
                                comprised mainly of parents along with
                                professionals.
                            </p>
                            <button className="mt-6 inline-block rounded-lg bg-hvorange-500 px-6 py-3 text-lg/8 font-semibold transition hover:bg-hvorange-700">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                {/* Why We Are Here Section */}
                <section>
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <h2 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                            Why We are Here
                        </h2>
                        <div className="mt-10 flex items-center gap-x-6">
                            <p className="text-pretty text-lg/8 font-medium text-gray-500 sm:text-xl/8">
                                Many organizations for the deaf or hard of
                                hearing rally around a philosophy of
                                communication. Hands & Voices does not promote
                                specific communication choices or methodologies,
                                but we have information about them and can
                                direct families or professionals to support
                                organizations for specific information. Our
                                rallying points are areas of interest that are
                                common to all people, but especially parents,
                                connected by the interests of the deaf or hard
                                of hearing, and include these values ….
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
                            {/* Responsive Image */}
                            <div className="relative h-64 w-full overflow-hidden rounded-lg lg:h-96 lg:w-1/2">
                                <Image
                                    src="/images/aboutUsWhoWeAreFamily.jpg"
                                    alt="Our Mission"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover object-center shadow-lg"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-1/2">
                                <ul className="list-disc space-y-4 pl-4 text-center text-lg text-gray-700 sm:pl-6 sm:text-left">
                                    <li>
                                        We all want the best for our children
                                        who are deaf or hard of hearing.
                                    </li>
                                    <li>
                                        We deserve respect and honor for our
                                        role as parents/families. We require a
                                        beneficial, successful educational
                                        experience for our kids.
                                    </li>
                                    <li>
                                        We need information from a wide variety
                                        of sources.
                                    </li>
                                    <li>
                                        We want to know about opportunities and
                                        resources.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                            <div className="lg:w-1/2">
                                <ul className="list-disc space-y-4 pl-6 text-lg text-gray-700">
                                    <li>
                                        We need training and support to become
                                        effective advocates for our kids.
                                    </li>
                                    <li>
                                        We are stronger united by our common
                                        interests than divided by differing
                                        communication choices.
                                    </li>
                                    <li>
                                        We must lend our organized support to
                                        all kinds of efforts that promote our
                                        common interests - strength in numbers!
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-64 w-full overflow-hidden lg:h-96 lg:w-1/2">
                                <Image
                                    src="/images/aboutUsWhoWeAreTrail.jpeg"
                                    alt="Our Mission"
                                    fill
                                    className="rounded-lg object-cover object-center shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gray-200 py-16 text-black">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-semibold uppercase tracking-tight text-hvorange sm:text-4xl">
                            Join Hands & Voices
                        </h2>
                        <p className="mt-4 text-lg">
                            Whether you&apos;re signing up for the first time or
                            renewing your membership to Alabama Hands & Voices,
                            please take time now to download the membership form
                            or visit our online membership page. Your
                            contribution helps us to continue developing and
                            disseminating resources designed to give families
                            unbiased information for their children who are deaf
                            or hard-of-hearing. We are grateful for your
                            support. Thank you!
                        </p>
                        <p className="mt-4 text-lg">
                            Scholarships are available for parents upon request
                        </p>
                        <p className="mt-4 text-lg">
                            Download our{' '}
                            <Link
                                href="/assets/membership-form.pdf"
                                className="py-3 text-lg font-semibold text-hvorange transition hover:text-hvorange-700"
                            >
                                Membership Form
                            </Link>{' '}
                            or visit our{' '}
                            <Link
                                href="/membership"
                                className="py-3 text-lg font-semibold text-hvorange transition hover:text-hvorange-700"
                            >
                                membership
                            </Link>{' '}
                            sign-up page to pay online.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutPage
