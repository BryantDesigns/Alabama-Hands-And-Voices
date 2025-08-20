import Image from 'next/image'

export default function ChooseMembershipPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-hvblue-600 pb-16 pt-24">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="font-kaushan text-5xl font-bold text-white">
                            Select Your Membership
                        </h1>
                    </div>
                </div>
            </section>

            {/* Membership Options */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* $25 Membership */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src="/images/alexander-dummer-uh-xs-fiztk-unsplash.jpg"
                                    alt="Parents and families"
                                    width={400}
                                    height={250}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    $25.00 MEMBERSHIPS
                                </h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Parents, Students, DHH Adults
                                </p>
                                <form
                                    action="https://www.paypal.com/cgi-bin/webscr"
                                    method="post"
                                    target="_top"
                                >
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="E5Q6YYU8F3M66" />
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-hvorange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-hvorange-700"
                                    >
                                        $25 Membership
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* $40 Professional Membership */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src="/images/monica-melton-oc_xtqwezp4-unsplash.jpg"
                                    alt="Professional membership"
                                    width={400}
                                    height={250}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    $40 PROFESSIONAL MEMBERSHIP
                                </h3>
                                <form
                                    action="https://www.paypal.com/cgi-bin/webscr"
                                    method="post"
                                    target="_top"
                                >
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="32NBUMV7CGXJE" />
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-hvorange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-hvorange-700"
                                    >
                                        $40 Membership
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* $50 Organization Membership */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl md:col-span-2 lg:col-span-1">
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIwOTIyfQq=85&fm=jpg&crop=faces&cs=srgb&w=448&h=298&fit=crop"
                                    alt="Organization membership"
                                    width={400}
                                    height={250}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="mb-4 text-xl font-bold text-gray-900">
                                    $50.00 ORGANIZATION MEMBERSHIPS
                                </h3>
                                <form
                                    action="https://www.paypal.com/cgi-bin/webscr"
                                    method="post"
                                    target="_top"
                                >
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="TN95YMB8QNGZN" />
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-hvorange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-hvorange-700"
                                    >
                                        $50 Membership
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
