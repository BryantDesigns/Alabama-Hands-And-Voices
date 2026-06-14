export default function Loading() {
    return (
        <div
            data-route-loading
            className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-6 py-24"
            role="status"
            aria-live="polite"
        >
            <div className="text-center">
                <div
                    className="mx-auto h-12 w-12 animate-pulse rounded-full bg-hvorange motion-reduce:animate-none"
                    aria-hidden="true"
                />
                <p className="mt-5 text-lg font-semibold text-hvblue">
                    Loading Alabama Hands & Voices…
                </p>
            </div>
        </div>
    )
}
