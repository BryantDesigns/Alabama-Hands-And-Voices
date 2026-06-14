import Image from 'next/image'
import GBYSForm from '@/components/pages/gbyspage/GBYSForm'
import { getGbysPageContent } from '@/lib/keystatic/pages'

export default async function GBYSPage() {
    const data = await getGbysPageContent()

    const programIntro = data?.programIntro ?? ''
    const services = data?.services ?? []
    const enrollmentNote = data?.enrollmentNote ?? ''

    return (
        <main>
            <div className="bg-gray-200 pb-5">
                <section className="bg-gray-100 text-center text-gray-700">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center pt-5">
                            <div className="mb-[-1.25rem] mt-5 rounded-lg bg-white p-5 shadow-lg">
                                <Image
                                    src="/images/gbys-logo.png"
                                    alt="GBYS Logo"
                                    width={300}
                                    height={100}
                                    className="mx-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full"></div>
            </div>
            <section className="bg-hvorange py-12 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold">
                        Alabama Hands & Voices Guide By Your Side
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg">
                        {programIntro}
                    </p>
                </div>
            </section>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center">
                        <hr className="flex-grow border-gray-400" />
                        <h3 className="mx-4 text-xl text-hvorange font-semibold uppercase">
                            Services Available
                        </h3>
                        <hr className="flex-grow border-gray-400" />
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-white p-6 shadow-md"
                            >
                                <p className="text-lg">{item.service}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-lg">
                        {enrollmentNote}
                    </p>
                </div>
            </section>
            <GBYSForm />
        </main>
    )
}
