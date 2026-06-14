import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
    { label: 'Home', href: '/design-options/v2' },
    { label: 'About', href: '/design-options/v2/about' },
    { label: 'Membership', href: '/design-options/v2/membership' },
    { label: 'Programs', href: '/design-options/v2/programs' },
    { label: 'Resources', href: '/design-options/v2/resources' },
]

export default function FooterV2() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-hvorange-50">
            {/* Top accent rule */}
            <div className="h-0.5 w-full bg-linear-to-r from-hvorange-600 via-hvorange to-hvorange-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="py-12 md:py-16 lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Brand column */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <Link
                            href="/design-options/v2"
                            aria-label="Alabama Hands & Voices — home"
                            className="group inline-flex items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange-50"
                        >
                            <Image
                                src="/images/alabamahvlogo.svg"
                                alt="Alabama Hands & Voices logo"
                                width={148}
                                height={48}
                                className="h-12 w-auto transition-opacity duration-150 group-hover:opacity-80"
                            />
                        </Link>

                        <p className="mt-5 max-w-xs text-base leading-relaxed text-slate-700">
                            Parent-driven support for families of children who
                            are deaf or hard of hearing.
                        </p>

                        {/* Decorative thin rule */}
                        <div
                            aria-hidden="true"
                            className="mt-6 h-px w-16 bg-hvorange-600"
                        />

                        {/* Contact */}
                        <div className="mt-6 space-y-2 text-sm text-slate-600">
                            <p className="flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0 text-hvorange-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                                <a
                                    href="mailto:info@alhandsandvoices.org"
                                    className="font-medium transition-colors duration-150 hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-1 focus-visible:ring-offset-hvorange-50"
                                >
                                    info@alhandsandvoices.org
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0 text-hvorange-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                Alabama, United States
                            </p>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="mt-12 lg:col-span-1 lg:mt-0" aria-hidden="true" />

                    {/* Nav links column */}
                    <div className="mt-12 lg:col-span-3 lg:mt-0">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Navigate
                        </h2>
                        <ul className="mt-4 space-y-3" role="list">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-medium text-slate-700 transition-colors duration-150 hover:text-hvblue focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-1 focus-visible:ring-offset-hvorange-50"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission / CTA column */}
                    <div className="mt-12 lg:col-span-3 lg:mt-0">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-hvorange-700">
                            Get Involved
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-700">
                            Every family deserves support from someone who truly
                            understands — another parent who has been there.
                        </p>
                        <Link
                            href="/design-options/v2/membership"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-hvorange-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-hvorange-50"
                        >
                            Become a Member
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Copyright row */}
                <div className="border-t border-slate-200/70 py-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-slate-500">
                            &copy; {year} Alabama Hands &amp; Voices. All rights
                            reserved.
                        </p>
                        <p className="text-xs text-slate-400">
                            A nonprofit organization supporting deaf and
                            hard-of-hearing children across Alabama.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
