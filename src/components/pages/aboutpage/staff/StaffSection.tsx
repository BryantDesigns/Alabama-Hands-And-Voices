import StaffCard from './StaffCard'
import { staff } from '@/data/aboutPages/staff'
import { Staff } from '@/types/Staff'

export default function StaffSection() {
    // Group staff by category
    const groupedStaff = staff.reduce(
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
        <section>
            {/* Banner Section */}
            <div className="bg-hvorange py-16 text-center text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-5xl font-bold font-kaushan">Staff</h1>
                    <p className="mt-4 text-lg font-semibold leading-relaxed">
                        Alabama Hands & Voices staff are all experienced parents
                        of deaf or hard of hearing children, or professionals in
                        the deaf/hard of hearing community. We are ready to
                        support you in your own journey.
                    </p>
                </div>
            </div>

            {/* Staff List Section */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {Object.entries(groupedStaff).map(([category, members]) => (
                        <div key={category} className="mt-12">
                            <h2 className="text-center text-3xl font-semibold text-hvorange">
                                {category}
                            </h2>
                            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {members.map((person) => (
                                    <StaffCard
                                        key={person.name}
                                        staff={person}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
