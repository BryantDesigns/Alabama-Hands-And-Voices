'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

interface MockFormProps {
    successTitle: string
    successBody: string
    submitLabel?: string
    children: ReactNode
}

export default function MockFormV2({
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
                className="mx-auto max-w-3xl rounded-2xl bg-hvorange-50 p-8 text-center shadow-sm ring-1 ring-hvorange-200"
            >
                <h3 className="font-serif text-2xl font-bold text-hvblue">
                    {successTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {successBody}
                </p>
                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex min-h-[44px] items-center rounded-full border-2 border-hvblue px-6 py-2 font-semibold text-hvblue transition hover:bg-hvblue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
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
            className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 md:p-8"
        >
            <div className="space-y-6">{children}</div>
            <div className="mt-8 flex flex-col items-center gap-2">
                <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-hvorange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-hvorange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
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
