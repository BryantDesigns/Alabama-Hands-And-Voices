import Link from 'next/link'
import type { ReactNode } from 'react'

interface PublicStatusPageProps {
    eyebrow: string
    title: string
    description: string
    children?: ReactNode
}

export default function PublicStatusPage({
    eyebrow,
    title,
    description,
    children,
}: PublicStatusPageProps) {
    return (
        <main className="flex min-h-[70vh] items-center bg-gray-50 px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
                <p className="font-semibold uppercase tracking-wide text-hvorange">
                    {eyebrow}
                </p>
                <h1 className="mt-3 font-kaushan text-4xl font-bold text-hvblue sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-6 text-lg text-gray-700">{description}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {children}
                    <Link
                        href="/"
                        className="rounded-md bg-hvblue px-5 py-3 font-semibold text-white hover:bg-hvblue-400"
                    >
                        Return home
                    </Link>
                </div>
            </div>
        </main>
    )
}
