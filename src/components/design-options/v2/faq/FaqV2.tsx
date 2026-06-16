import FaqAccordionV2 from './FaqAccordionV2'

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function LeafMark({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M12 21c0-6 0-9 3.5-12.5C18 6 21 5 21 5s-1 3-3.5 5.5C14 14 12 15 12 21Z"
                fill="currentColor"
                opacity="0.9"
            />
            <path
                d="M12 21c0-5-1-7.5-4-10.5C5.5 8 3 7 3 7s.5 3 3 5.5C9 15.5 12 16 12 21Z"
                fill="currentColor"
                opacity="0.55"
            />
            <path
                d="M12 21V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
            />
        </svg>
    )
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface FaqV2Props {
    heading: string
    introCopy: string
    faqs: { question: string; answer: string }[]
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function FaqV2({ heading, introCopy, faqs }: FaqV2Props) {
    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — warm gradient, serif headline, gentle editorial tone */}
            {/* ================================================================ */}
            <section className="relative isolate overflow-hidden bg-linear-to-b from-hvorange-50 via-hvorange-50/30 to-white">
                {/* Decorative blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-hvorange-100/70 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full bg-hvblue/5 blur-3xl"
                />

                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Eyebrow */}
                        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            FAQ
                        </p>

                        {/* h1 */}
                        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-hvblue md:text-6xl">
                            {heading}
                        </h1>

                        {/* Divider rule */}
                        <span
                            aria-hidden="true"
                            className="mx-auto mt-8 block h-1 w-16 rounded-full bg-hvorange-600"
                        />

                        {/* Intro copy — only if present */}
                        {introCopy && (
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
                                {introCopy}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom divider */}
                <div
                    aria-hidden="true"
                    className="h-px w-full bg-linear-to-r from-transparent via-hvorange-200 to-transparent"
                />
            </section>

            {/* ================================================================ */}
            {/* FAQ ACCORDION — white, max-w-4xl centered column */}
            {/* ================================================================ */}
            <section className="bg-white py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Section label */}
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                        Your questions, answered
                    </p>
                    <h2 className="font-serif text-2xl font-bold tracking-tight text-hvblue md:text-3xl">
                        Common questions
                    </h2>
                    <span
                        aria-hidden="true"
                        className="mt-4 block h-1 w-12 rounded-full bg-hvorange-600"
                    />

                    <div className="mt-10">
                        <FaqAccordionV2 faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* CONTACT NUDGE — warm tint band */}
            {/* ================================================================ */}
            <section className="bg-hvorange-50 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/70 md:p-12">
                        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            <LeafMark className="h-4 w-4 text-hvorange-600" />
                            Still have questions?
                        </p>
                        <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-hvblue md:text-3xl">
                            We&rsquo;re here to help.
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-4 block h-1 w-12 rounded-full bg-hvorange-600"
                        />
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                            Can&rsquo;t find what you&rsquo;re looking for? Reach
                            out to us directly — our family advocates are always
                            glad to help.
                        </p>
                        <div className="mt-7">
                            <a
                                href="/design-options/v2/about/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
