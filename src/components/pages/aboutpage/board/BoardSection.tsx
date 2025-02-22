import Image from 'next/image'
import { boardMembers } from '@/data/aboutPages/boardMembers'

export default function BoardSection() {
    return (
        <section>
            {/* Banner Section */}
            <div className="bg-hvorange py-8 shadow-md">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <h1 className="font-kaushan text-3xl font-bold text-white sm:text-4xl">
                        Alabama Hands & Voices Board of Directors
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-white">
                        The Alabama Hands & Voices Board of Directors oversees
                        the programs, staff, and fundraising efforts of our
                        nonprofit in support of families raising children who
                        are deaf or hard of hearing. The Board comprises
                        parents, professionals, and Deaf/Hard of Hearing adults
                        who represent a diverse community. The President of
                        every Hands & Voices Chapter Board must be a parent of a
                        child who is deaf or hard of hearing. We are always
                        looking to develop parent leaders, whether serving on
                        the board, as Parent Guides, or on committees locally
                        and statewide.
                    </p>
                    <p className="mt-4 text-lg text-white">
                        For more information about board positions, please
                        contact the Executive Director at{' '}
                        <a
                            href="mailto:alabamahinfo@gmail.com"
                            className="text-white underline hover:text-gray-700"
                        >
                            alabamahinfo@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Board Members Section */}
            <div className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <ul
                        role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {boardMembers.map((member) => (
                            <li
                                key={member.name}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={member.imageUrl}
                                        alt={`Photo of ${member.name}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="rounded-2xl object-cover"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-base text-gray-600">
                                    {member.role}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
