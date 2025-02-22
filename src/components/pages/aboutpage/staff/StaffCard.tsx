import Image from 'next/image'
import { Staff } from '@/types/Staff'

interface StaffCardProps {
    staff: Staff
}

export default function StaffCard({ staff }: StaffCardProps) {
    return (
        <li className="overflow-hidden rounded-xl bg-white shadow-md list-none">
            <Image
                src={staff.imageUrl}
                alt={`Photo of ${staff.name}`}
                width={300}
                height={200}
                className="h-56 w-full object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                    {staff.name}
                </h3>
                <p className="text-sm text-gray-600">{staff.role}</p>
            </div>
        </li>
    )
}
