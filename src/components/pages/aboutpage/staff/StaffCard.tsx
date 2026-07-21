import Image from 'next/image'
import { Staff } from '@/types/Staff'

interface StaffCardProps {
    staff: Staff
}

export default function StaffCard({ staff }: StaffCardProps) {
    return (
        <li className="list-none">
            <article className="group flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                {staff.imageUrl && (
                    <div className="overflow-hidden rounded-full ring-2 ring-slate-200 ring-offset-2 transition duration-200 group-hover:ring-hvorange-600">
                        <Image
                            src={staff.imageUrl}
                            alt={`Photo of ${staff.name}`}
                            width={96}
                            height={96}
                            sizes="96px"
                            className="h-24 w-24 rounded-full object-cover"
                        />
                    </div>
                )}
                <h4 className="mt-5 text-lg font-extrabold tracking-tight text-hvblue">
                    {staff.name}
                </h4>
                <p className="mt-2 text-sm leading-snug text-slate-600">
                    {staff.role}
                </p>
                <p className="mt-3 text-xs font-bold uppercase leading-snug tracking-widest text-slate-600">
                    {staff.category}
                </p>
            </article>
        </li>
    )
}
