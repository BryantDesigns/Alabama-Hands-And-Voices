import Image from 'next/image'

interface CardProps {
    title: string
    description: string
    imageSrc?: string
    altText?: string
    children?: React.ReactNode
}

export default function Card({
    title,
    description,
    imageSrc,
    altText,
    children,
}: CardProps) {
    return (
        <div className="rounded-lg border bg-white p-6 shadow-md">
            {imageSrc && (
                <div className="mb-4">
                    <Image
                        src={imageSrc}
                        alt={altText || 'Card image'}
                        width={300}
                        height={200}
                        className="w-full rounded-lg"
                    />
                </div>
            )}
            <h3 className="mb-2 text-lg font-bold text-hvblue-500">{title}</h3>
            <p className="mb-4 text-gray-600">{description}</p>
            {children && <div className="mt-4">{children}</div>}
        </div>
    )
}
