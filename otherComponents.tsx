import React from 'react'
import Image from 'next/image'

function otherComponents() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-hvblue-100/20 pt-14">
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-hvblue-600/10 ring-1 ring-hvblue-50 sm:-mr-80 lg:-mr-96"
                />
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h3 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-hvorange sm:text-4xl lg:col-span-2 xl:col-auto">
                            WHO WE ARE
                        </h3>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                We are parents of kids who are deaf or hard of
                                hearing (to whatever degree). We are parents of
                                ASL and other visual language signers, kids who
                                use listening and spoken language, cued speech
                                users, total communicators, kids with hearing
                                aids and/or cochlear implants, and kids who do
                                not use technology to hear. We are people who
                                have common interests connected through the
                                community of deafness.
                            </p>
                            <p className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                Hands & Voices is a safe place to explore
                                options, get unemotional support, learn from one
                                another and share what we have in common. We
                                value diversity and honor the role of parents
                                and family as the single greatest factor in
                                raising a well-adjusted, successful kid.
                            </p>
                        </div>
                        <Image
                            alt=""
                            src="/images/aboutUsWhoWeAre1.jpg"
                            width={600}
                            height={500}
                            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
                        />
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </>
    )
}

export default otherComponents
