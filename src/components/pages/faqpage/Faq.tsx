import FaqAccordion from './FaqAccordion'
import type { DocumentElement } from '@keystatic/core'

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function QuestionBubbleIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
        </svg>
    )
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface FaqProps {
    heading: string
    introCopy: string
    faqs: {
        question: string
        answer: DocumentElement[]
        resourceLinks: readonly { label: string; url: string }[]
    }[]
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Faq({ heading, introCopy, faqs }: FaqProps) {
    return (
        <main className="bg-white text-hvblue">
            {/* ================================================================ */}
            {/* HERO — full-bleed hvblue block, extrabold headline */}
            {/* ================================================================ */}
            <section className="relative isolate overflow-hidden bg-hvblue text-white">
                {/* Geometric accents */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rotate-12 rounded-[3rem] bg-hvorange/15"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-hvblue-50/20 blur-3xl"
                />
                {/* Left-edge bar — v3 signature */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-hvorange-50 ring-1 ring-white/20">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-sm bg-hvorange-600"
                            />
                            FAQ
                        </p>

                        {/* h1 */}
                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            {heading}
                            <span aria-hidden="true" className="text-hvorange">
                                .
                            </span>
                        </h1>

                        {/* Intro copy — only if present */}
                        {introCopy && (
                            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                                {introCopy}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* FAQ ACCORDION — slate-50 section, max-w-4xl centered */}
            {/* ================================================================ */}
            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="flex items-start gap-5">
                        <span
                            aria-hidden="true"
                            className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-hvblue text-white"
                        >
                            <QuestionBubbleIcon className="h-6 w-6" />
                        </span>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Your questions, answered
                            </p>
                            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-hvblue md:text-3xl">
                                Common questions
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-1.5 w-16 rounded-full bg-hvorange-600"
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <FaqAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* ================================================================ */}
            {/* CONTACT CTA — full-bleed orange block, hvblue text ✓ */}
            {/* ================================================================ */}
            <section className="relative isolate overflow-hidden bg-hvorange py-14 text-hvblue md:py-20">
                {/* Geometric accents on orange */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rotate-12 rounded-[3rem] bg-hvblue/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-hvblue/10"
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-hvblue">
                                Still have questions?
                            </p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-hvblue md:text-5xl">
                                We&rsquo;re here to help.
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-5 block h-1.5 w-20 rounded-full bg-hvblue"
                            />
                            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-hvblue/90 md:text-lg">
                                Can&rsquo;t find what you&rsquo;re looking for?
                                Reach out to our family advocates — we&rsquo;re
                                always ready to help you find the answers you
                                need.
                            </p>
                        </div>

                        {/* CTA — blue button on orange ✓ */}
                        <div>
                            <a
                                href="/about/contact"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-hvblue px-8 py-4 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange whitespace-nowrap"
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
