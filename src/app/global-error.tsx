'use client'

import PublicStatusPage from '@/components/common/PublicStatusPage'

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en">
            <body>
                <PublicStatusPage
                    eyebrow="Website error"
                    title="We could not load the website"
                    description="Please try again. If the problem continues, contact Alabama Hands & Voices."
                >
                    <button
                        type="button"
                        onClick={reset}
                        className="rounded-md bg-hvorange px-5 py-3 font-semibold text-white hover:bg-hvorange-700"
                    >
                        Try again
                    </button>
                </PublicStatusPage>
            </body>
        </html>
    )
}
