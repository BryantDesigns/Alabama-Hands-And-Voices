import Image from 'next/image'
import AstraForm from '@/components/pages/astrapage/AstraForm'

export default function AstraPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center">
                        <div className="max-w-2xl text-center">
                            <h1 className="font-kaushan mb-8 text-4xl text-white md:text-5xl">
                                All About ASTra!
                            </h1>
                            <div className="relative -mb-12 rounded-lg bg-white p-8 shadow-xl">
                                <Image
                                    src="/images/07_astra-2019-png.png"
                                    alt="ASTra Program Logo"
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
            <section className="bg-hvblue-600 pb-16 pt-16">
                <div className="container mx-auto px-6">
                    {/* Program Description */}
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-lg leading-relaxed text-white">
                            ASTra is an educational advocacy program that embodies the mission
                            and vision of Hands & Voices. ASTra stands for the Advocacy
                            Support and Training Program. We provide support to families with
                            children who are deaf or hard of hearing (d/hh) without bias
                            around communication mode, method, or educational setting so that
                            every child has the opportunity to achieve their full potential.
                            We foster collaboration and build partnerships with school
                            districts and other professionals who serve deaf or hard of
                            hearing students.
                        </p>
                    </div>

                    {/* Questions Section */}
                    <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/images/retreat12.jpeg"
                                alt="Family retreat"
                                width={500}
                                height={310}
                                className="h-80 w-full rounded-lg object-cover shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="font-kaushan mb-6 text-2xl text-white">
                                Do you have questions like this?
                            </h3>
                            <ul className="space-y-3 text-lg text-white">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvorange-500"></span>
                                    What laws support my child's education?
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvorange-500"></span>
                                    I don't understand what my child might be eligible for.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvorange-500"></span>
                                    What is a Communication Plan? Safety Plan? Health Plans?
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvorange-500"></span>
                                    I need to learn the difference between an IEP and a 504 Plan.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-hvorange-500"></span>
                                    What rights do I have as a parent?
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 rounded-lg bg-hvblue-700 p-8 text-center">
                        <p className="mb-4 text-lg text-white">
                            Help is Here! Ask for an ASTra advocate by completing an advocacy
                            request form below.
                        </p>
                        <p className="text-lg text-white">
                            Join the wait list for Level 1 Educational Advocacy training class
                            by registering{' '}
                            <a
                                href="https://forms.office.com/r/5AjZw87bMV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-hvorange-400 underline hover:text-hvorange-300"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>

                    {/* Resources Section */}
                    <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
                        <div className="order-1">
                            <h3 className="font-kaushan mb-6 text-center text-2xl text-white lg:text-left">
                                Take a look at our favorite resources available on{' '}
                                <a
                                    href="https://www.handsandvoices.org/astra/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-hvorange-400 underline hover:text-hvorange-300"
                                >
                                    Hands & Voices HQ website
                                </a>
                            </h3>
                            <ul className="space-y-4 text-white">
                                <li>
                                    <a
                                        href="https://handsandvoices.org/IEPmeetingplanner/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        IEP Meeting Planner
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://handsandvoices.org/pdf/IEP_Checklist.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        IEP/504 Checklist
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/assets/ALHV V17 4.13.24 Communication Plan - fillable form.docx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        Communication Plan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://handsandvoices.org/articles/education/popup/pop_index.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        Pop-Up IEP
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://handsandvoices.org/pdf/SAIInventory.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        D/HH Student Self-Advocacy Inventory
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://handsandvoices.org/pdf/func_eval.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-hvorange-400 underline hover:text-hvorange-300"
                                    >
                                        Functional Listening Evaluation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="order-2">
                            <Image
                                src="/images/retreat13.jpeg"
                                alt="Educational resources"
                                width={500}
                                height={310}
                                className="h-80 w-full rounded-lg object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="font-kaushan mb-8 text-center text-3xl text-gray-900">
                            Request ASTra Advocacy Support
                        </h2>
                        <AstraForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
