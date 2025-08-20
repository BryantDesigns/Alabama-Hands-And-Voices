import Image from 'next/image'

export default function SafetyProjectPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gray-100 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center">
                        <div className="max-w-3xl text-center">
                            <h1 className="font-kaushan mb-8 text-4xl text-gray-900 md:text-5xl">
                                O.U.R. Children's Safety Project
                            </h1>
                            <div className="relative -mb-12 rounded-lg bg-white p-8 shadow-xl">
                                <Image
                                    src="/images/09_OUR logo.png"
                                    alt="O.U.R. Children's Safety Project Logo"
                                    width={400}
                                    height={200}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Introduction */}
                        <div className="mb-12 space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>
                                We don't like to think about it, but our kids who are deaf or hard of hearing
                                are at a higher risk for both abuse and neglect. Like any children, they are at risk. As
                                children who might not always be able to communicate easily and fluently, or understand the
                                nuances of conversation with neighbors, caregivers, or strangers, they are at an even higher
                                risk of being victims of someone, somewhere.
                            </p>
                            <p>
                                There is more you can do as parents. Start with reading the{' '}
                                <a
                                    href="https://handsandvoices.org/resources/OUR/index.htm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                                >
                                    Parent Safety Toolkit
                                </a>
                                . Below are resources that will be useful
                                to parents in developing skills that will prepare us to share effectively with their own
                                children. But don't just stop at your own child or student, here are some things that you
                                can do to help others be prepared:
                            </p>
                        </div>

                        {/* Action Cards */}
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                                <div className="mb-4">
                                    <Image
                                        src="/images/01_hv logo.png"
                                        alt="Hands & Voices Logo"
                                        width={40}
                                        height={40}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <h3 className="font-kaushan mb-4 text-xl text-gray-900">Pass-It-On</h3>
                                <p className="text-gray-700">
                                    Share the articles on our{' '}
                                    <a
                                        href="https://handsandvoices.org/resources/OUR/index.htm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-hvblue-600 underline hover:text-hvblue-700"
                                    >
                                        Hands & Voices website
                                    </a>{' '}
                                    and its related resources, with at least one other parent, and
                                    then ask them to "pass-it-on."
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
                                <div className="mb-4">
                                    <Image
                                        src="/images/04_GBYS-logo-png.png"
                                        alt="GBYS Logo"
                                        width={40}
                                        height={40}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <h3 className="font-kaushan mb-4 text-xl text-gray-900">Share the Story</h3>
                                <p className="text-gray-700">
                                    Have a conversation with your child about abuse and neglect (see attached "Helping
                                    Parents Talk to Children" below) then share the story of how it went so that other parents can
                                    learn from your experience.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl md:col-span-2">
                                <div className="mb-4 flex justify-center">
                                    <Image
                                        src="/images/alabamahvlogo_poster_.png"
                                        alt="Alabama Hands & Voices Logo"
                                        width={200}
                                        height={100}
                                        className="h-16 w-auto"
                                    />
                                </div>
                                <h3 className="font-kaushan mb-4 text-center text-xl text-gray-900">
                                    Recognize the Best and Challenge Everyone Else
                                </h3>
                                <p className="text-center text-gray-700">
                                    Ask the professionals who work with your child what they are doing to protect your child
                                    from abuse and neglect, then share the resulting reactions, information, resources, programs, and
                                    questions so that we recognize the best and challenge everyone else.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Retreats Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-kaushan mb-6 text-3xl text-hvblue-600">Family Retreats</h2>
                        <p className="text-lg text-gray-700">
                            Alabama H&V hosts two family retreats a year. Retreats allow for in-person
                            support of families by providing parent sessions on topics related to raising a child who is deaf or hard of hearing and an
                            opportunity for families to build bonds with their parent guide and with each other. Contact your parent guide or connect with
                            one today for more information on registration for our{' '}
                            <a
                                href="/gbys"
                                className="font-bold text-hvblue-600 underline hover:text-hvblue-700"
                            >
                                Guide By Your Side Program
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
