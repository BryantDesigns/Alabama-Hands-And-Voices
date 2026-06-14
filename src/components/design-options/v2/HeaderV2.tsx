'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
    { label: 'Home', href: '/design-options/v2' },
    { label: 'About', href: '/design-options/v2/about' },
    { label: 'Membership', href: '/design-options/v2/membership' },
    { label: 'Programs', href: '/design-options/v2/programs' },
    { label: 'Resources', href: '/design-options/v2/resources' },
]

export default function HeaderV2() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false)

    const isActive = (href: string) => {
        if (href === '/design-options/v2') return pathname === href
        return pathname.startsWith(href)
    }

    return (
        <>
            <header
                className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm transition-shadow duration-200 ${
                    scrolled ? 'shadow-sm' : ''
                }`}
            >
                {/* Thin orange top accent rule */}
                <div className="h-0.5 w-full bg-gradient-to-r from-hvorange-600 via-hvorange to-hvorange-50" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav
                        aria-label="Main navigation"
                        className="flex h-16 items-center justify-between md:h-20"
                    >
                        {/* Logo */}
                        <Link
                            href="/design-options/v2"
                            aria-label="Alabama Hands & Voices — home"
                            className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                        >
                            <Image
                                src="/images/alabamahvlogo.svg"
                                alt="Alabama Hands & Voices logo"
                                width={148}
                                height={48}
                                className="h-10 w-auto transition-opacity duration-150 group-hover:opacity-80 md:h-12"
                                priority
                            />
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden items-center gap-1 md:flex lg:gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 lg:text-base ${
                                        isActive(link.href)
                                            ? 'text-hvblue'
                                            : 'text-slate-600 hover:text-hvblue'
                                    }`}
                                >
                                    {link.label}
                                    {/* Active underline */}
                                    {isActive(link.href) && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-hvorange-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <Link
                                href="/design-options/v2/membership"
                                className="inline-flex items-center gap-2 rounded-full bg-hvorange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-hvorange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 lg:px-7 lg:py-3 lg:text-base"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-2.046C4.447 12.613 3 10.558 3 8a5 5 0 0114 0c0 2.558-1.447 4.613-2.885 6.174a22.061 22.061 0 01-2.582 2.046 20.759 20.759 0 01-1.162.682l-.019.01-.005.003-.003.001a.752.752 0 01-.695 0l-.003-.001z" />
                                </svg>
                                Give
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="flex h-11 w-11 items-center justify-center rounded-lg text-hvblue transition-colors duration-150 hover:bg-hvblue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 md:hidden"
                        >
                            <span aria-hidden="true" className="block">
                                {menuOpen ? (
                                    /* X icon */
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    /* Hamburger icon */
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                    </nav>
                </div>

                {/* Bottom separator */}
                <div className="h-px w-full bg-slate-100" />
            </header>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    role="dialog"
                    aria-label="Navigation menu"
                    className="fixed inset-x-0 top-[calc(4rem+2px)] z-30 bg-white shadow-lg md:hidden"
                >
                    {/* Thin accent top rule */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-hvorange-600 via-hvorange to-hvorange-50" />

                    <nav
                        aria-label="Mobile navigation"
                        className="mx-auto max-w-7xl px-4 py-4"
                    >
                        <ul className="divide-y divide-slate-100" role="list">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`flex min-h-[44px] items-center py-3 text-base font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hvorange-600 ${
                                            isActive(link.href)
                                                ? 'text-hvblue'
                                                : 'text-slate-700 hover:text-hvblue'
                                        }`}
                                    >
                                        {isActive(link.href) && (
                                            <span
                                                aria-hidden="true"
                                                className="mr-3 h-4 w-0.5 rounded-full bg-hvorange-600"
                                            />
                                        )}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 pb-2">
                            <Link
                                href="/design-options/v2/membership"
                                onClick={closeMenu}
                                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-hvorange-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition duration-150 hover:bg-hvorange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-2.046C4.447 12.613 3 10.558 3 8a5 5 0 0114 0c0 2.558-1.447 4.613-2.885 6.174a22.061 22.061 0 01-2.582 2.046 20.759 20.759 0 01-1.162.682l-.019.01-.005.003-.003.001a.752.752 0 01-.695 0l-.003-.001z" />
                                </svg>
                                Give / Donate
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}
