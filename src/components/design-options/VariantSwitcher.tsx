'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface VariantSwitcherProps {
    current: 'v2' | 'v3'
}

const LABELS: Record<'v2' | 'v3', string> = {
    v2: 'Warm & Editorial',
    v3: 'Bold & Uplifting',
}

export default function VariantSwitcher({ current }: VariantSwitcherProps) {
    const pathname = usePathname()
    const other = current === 'v2' ? 'v3' : 'v2'
    const otherHref = pathname.replace(
        `/design-options/${current}`,
        `/design-options/${other}`,
    )

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-hvblue/10 bg-white/95 p-1 shadow-lg backdrop-blur">
            <span className="px-3 text-xs font-semibold text-hvblue">
                {current.toUpperCase()} · {LABELS[current]}
            </span>
            <Link
                href={otherHref}
                className="rounded-full bg-hvorange px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-hvorange-600"
            >
                See {other.toUpperCase()}
            </Link>
            <Link
                href="/design-options"
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-hvblue transition hover:bg-hvblue/5"
            >
                All options
            </Link>
        </div>
    )
}
