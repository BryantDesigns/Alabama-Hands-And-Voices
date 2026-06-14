import Link from 'next/link'

const navLinks = [
    { label: 'Home', href: '/design-options/v3' },
    { label: 'About', href: '/design-options/v3/about' },
    { label: 'Membership', href: '/design-options/v3/membership' },
    { label: 'Programs', href: '/design-options/v3/programs' },
    { label: 'Resources', href: '/design-options/v3/resources' },
]

export default function FooterV3() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-hvblue text-white">
            {/* ── Top accent: bold orange stripe ── */}
            <div className="h-1 w-full bg-hvorange-600" />

            {/* ── Main footer body ── */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-14 md:py-20">
                    {/* ── Grid: org info + nav + CTA ── */}
                    <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">

                        {/* Column 1 — Org identity */}
                        <div className="lg:col-span-1">
                            {/* Eyebrow label */}
                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-hvorange-600">
                                Alabama
                            </p>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
                                Hands &amp; Voices
                            </h2>
                            <div
                                aria-hidden="true"
                                className="mt-4 h-[3px] w-12 rounded-full bg-hvorange-600"
                            />
                            <p className="mt-5 text-base leading-relaxed text-white/80">
                                Parent-driven support for families of children
                                who are deaf or hard of hearing.
                            </p>
                        </div>

                        {/* Column 2 — Navigation */}
                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/50">
                                Navigate
                            </h3>
                            <ul className="space-y-1" role="list">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex min-h-[44px] items-center gap-2 text-base font-semibold text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                        >
                                            {/* Geometric bullet — grows on hover */}
                                            <span
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-hvorange-600 transition-transform duration-150 group-hover:scale-125"
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — Contact + CTA */}
                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/50">
                                Connect
                            </h3>

                            {/* Contact */}
                            <div className="mb-8">
                                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-white/50">
                                    Email
                                </p>
                                <a
                                    href="mailto:info@alhandsandvoices.org"
                                    className="text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                                >
                                    info@alhandsandvoices.org
                                </a>
                            </div>

                            {/* Donate CTA — white-on-dark per v3 system */}
                            <Link
                                href="/design-options/v3/membership"
                                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-hvorange-600 px-7 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hvblue"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                                    />
                                </svg>
                                Donate Now
                            </Link>

                            <p className="mt-3 text-xs text-white/50">
                                Your gift supports Alabama families
                                directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Copyright bar ── */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p className="text-xs text-white/40">
                        &copy; {currentYear} Alabama Hands &amp; Voices. All
                        rights reserved.
                    </p>
                    <p className="text-xs text-white/40">
                        A nonprofit organization serving Alabama families.
                    </p>
                </div>
            </div>
        </footer>
    )
}
