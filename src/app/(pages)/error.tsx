'use client'

import PublicStatusPage from '@/components/common/PublicStatusPage'

export default function ErrorPage({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <PublicStatusPage
            eyebrow="Something went wrong"
            title="This page could not be loaded"
            description="Please try the page again. If the problem continues, return to the home page and contact us."
        >
            <button
                type="button"
                onClick={reset}
                className="rounded-md bg-hvorange px-5 py-3 font-semibold text-white hover:bg-hvorange-700"
            >
                Try again
            </button>
        </PublicStatusPage>
    )
}
