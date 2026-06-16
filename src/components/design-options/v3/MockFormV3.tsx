'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

interface MockFormProps {
    successTitle: string
    successBody: string
    submitLabel?: string
    children: ReactNode
}

export default function MockFormV3({
    successTitle,
    successBody,
    submitLabel = 'Submit',
    children,
}: MockFormProps) {
    const [submitted, setSubmitted] = useState(false)

    if (submitted) {
        return (
            <div
                role="status"
                className="mx-auto max-w-3xl rounded-3xl bg-hvblue p-8 text-center text-white"
            >
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                    {successTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/90">
                    {successBody}
                </p>
                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-white px-7 py-3.5 font-bold text-hvblue transition hover:bg-hvorange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                >
                    Reset preview
                </button>
            </div>
        )
    }

    return (
        <form
            aria-label="Design preview form"
            onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
            }}
            className="mx-auto max-w-3xl rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8"
        >
            <div className="space-y-4">{children}</div>
            <div className="mt-8 flex flex-col items-center gap-2">
                <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5 text-base font-bold text-white transition hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                >
                    {submitLabel}
                </button>
                <p className="text-sm text-slate-500">
                    Design preview — not submitted in this showcase
                </p>
            </div>
        </form>
    )
}
