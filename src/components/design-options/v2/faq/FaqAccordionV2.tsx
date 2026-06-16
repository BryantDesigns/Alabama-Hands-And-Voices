'use client'

import { useState } from 'react'

interface Faq {
    question: string
    answer: string
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

export default function FaqAccordionV2({ faqs }: { faqs: Faq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    function handleToggle(index: number) {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <dl className="divide-y divide-slate-200">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                const buttonId = `faq-v2-btn-${index}`
                const panelId = `faq-v2-panel-${index}`

                return (
                    <div key={index} className="group">
                        {/* Question */}
                        <dt>
                            <button
                                type="button"
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => handleToggle(index)}
                                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 min-h-[44px]"
                            >
                                <span className="font-serif text-base font-semibold leading-snug text-hvblue md:text-lg">
                                    {faq.question}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hvorange-50 text-hvorange-700 ring-1 ring-hvorange-200 transition-colors duration-200 group-hover:bg-hvorange-100"
                                >
                                    <ChevronDownIcon
                                        className={`h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 ${
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
                            className="pb-6 pr-14"
                        >
                            <div className="space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
                                {toParagraphs(faq.answer).map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </dd>
                    </div>
                )
            })}
        </dl>
    )
}
