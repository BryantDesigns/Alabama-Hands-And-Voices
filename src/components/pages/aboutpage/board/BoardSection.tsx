import Image from 'next/image'

interface BoardMemberData {
    name: string
    role: string
    imageUrl: string
}

interface BoardSectionProps {
    members: BoardMemberData[]
}

export default function BoardSection({ members }: BoardSectionProps) {
    return (
        <section className="bg-white text-hvblue">
            <div className="relative isolate overflow-hidden bg-hvblue text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-hvblue-50/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
                    <div className="max-w-4xl">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            About Us
                        </p>
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Board of Directors
                        </h1>
                        <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                            The Alabama Hands &amp; Voices Board of Directors
                            oversees the programs, staff, and fundraising efforts
                            of our nonprofit in support of families raising
                            children who are deaf or hard of hearing. The Board
                            comprises parents, professionals, and Deaf/Hard of
                            Hearing adults who represent a diverse community. The
                            President of every Hands &amp; Voices Chapter Board must
                            be a parent of a child who is deaf or hard of hearing.
                            We are always looking to develop parent leaders,
                            whether serving on the board, as Parent Guides, or on
                            committees locally and statewide.
                        </p>
                        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                            For more information about board positions, please
                            contact the Executive Director at{' '}
                            <a
                                href="mailto:alabamahinfo@gmail.com"
                                className="font-bold text-white underline decoration-hvorange-400 decoration-2 underline-offset-4 transition hover:text-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                alabamahinfo@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvorange-700">
                            Leadership
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Meet our board.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <ul
                        role="list"
                        className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {members.map((member) => (
                            <li key={member.name}>
                                <article className="group flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="overflow-hidden rounded-full ring-2 ring-slate-200 ring-offset-2 transition duration-200 group-hover:ring-hvorange-600">
                                        <Image
                                            src={member.imageUrl}
                                            alt={`Photo of ${member.name}`}
                                            width={96}
                                            height={96}
                                            sizes="96px"
                                            className="h-24 w-24 rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-5 text-lg font-extrabold tracking-tight text-hvblue">
                                        {member.name}
                                    </h3>
                                    <p className="mt-2 text-xs font-bold uppercase leading-snug tracking-widest text-slate-600">
                                        {member.role}
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
