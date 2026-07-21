import StaffCard from './StaffCard'
import { Staff } from '@/types/Staff'

interface StaffSectionProps {
    members: Staff[]
}

export default function StaffSection({ members }: StaffSectionProps) {
    // Group staff by category
    const groupedStaff = members.reduce(
        (acc, person) => {
            if (!acc[person.category]) {
                acc[person.category] = []
            }
            acc[person.category].push(person)
            return acc
        },
        {} as Record<string, Staff[]>
    )

    return (
        <section className="bg-slate-50 text-hvblue">
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
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            About Us
                        </p>
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Program Staff
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                            Alabama Hands &amp; Voices staff are all experienced
                            parents of deaf or hard of hearing children, or
                            professionals in the deaf/hard of hearing community.
                            We are ready to support you in your own journey.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                            Our Team
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                            Here for every family.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-5 block h-1.5 w-20 rounded-full bg-hvorange-600"
                        />
                    </div>

                    <div className="mt-12 flex flex-col gap-14">
                        {Object.entries(groupedStaff).map(
                            ([category, categoryMembers]) => (
                                <section
                                    key={category}
                                    aria-label={category}
                                >
                                    <div className="flex items-center gap-4">
                                        <span
                                            aria-hidden="true"
                                            className="h-8 w-1.5 shrink-0 rounded-full bg-hvorange-600"
                                        />
                                        <h3 className="text-sm font-extrabold uppercase tracking-widest text-hvblue">
                                            {category}
                                        </h3>
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                                    >
                                        {categoryMembers.map((person) => (
                                            <StaffCard
                                                key={person.name}
                                                staff={person}
                                            />
                                        ))}
                                    </ul>
                                </section>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
