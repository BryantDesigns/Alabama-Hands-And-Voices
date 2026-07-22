'use client'

import { useState } from 'react'

interface Faq {
    question: string
    answer: string
    resourceLinks: readonly {
        label: string
        url: string
    }[]
}

function toParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
}

function ChevronDownIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    function handleToggle(index: number) {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <dl className="space-y-3">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                const buttonId = `faq-v3-btn-${index}`
                const panelId = `faq-v3-panel-${index}`

                return (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-3xl ring-1 transition-all duration-200 ${
                            isOpen
                                ? 'bg-hvblue ring-hvblue'
                                : 'bg-white ring-slate-200 hover:ring-slate-300'
                        }`}
                    >
                        {/* Question */}
                        <dt>
                            <button
                                type="button"
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => handleToggle(index)}
                                className={`group flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 min-h-[44px] ${
                                    isOpen ? 'text-white' : 'text-hvblue'
                                }`}
                            >
                                <span className="text-base font-extrabold leading-snug tracking-tight md:text-lg">
                                    {faq.question}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                                        isOpen
                                            ? 'bg-hvorange-700 text-white'
                                            : 'bg-slate-100 text-hvblue group-hover:bg-slate-200'
                                    }`}
                                >
                                    <ChevronDownIcon
                                        className={`h-5 w-5 motion-safe:transition-transform motion-safe:duration-200 ${
                                            isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </span>
                            </button>
                        </dt>

                        {/* Answer */}
                        <dd
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            hidden={!isOpen}
                            className="px-6 pb-6"
                        >
                            <div
                                aria-hidden="true"
                                className="mb-4 h-px w-full bg-white/20"
                            />
                            <div className="space-y-4 text-base font-medium leading-relaxed text-white/90 md:text-lg">
                                {toParagraphs(faq.answer).map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                            {faq.resourceLinks.length > 0 && (
                                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                    {faq.resourceLinks.map((resource) => {
                                        const isNewTab =
                                            resource.url.startsWith('http') ||
                                            resource.url.includes('/assets/') ||
                                            resource.url.endsWith('.pdf')
                                        return (
                                            <li key={resource.url}>
                                                <a
                                                    href={resource.url}
                                                    target={
                                                        isNewTab
                                                            ? '_blank'
                                                            : undefined
                                                    }
                                                    rel={
                                                        isNewTab
                                                            ? 'noopener noreferrer'
                                                            : undefined
                                                    }
                                                    className="inline-flex min-h-[44px] w-full items-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-hvblue transition hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                                >
                                                    {resource.label}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </dd>
                    </div>
                )
            })}
        </dl>
    )
}
