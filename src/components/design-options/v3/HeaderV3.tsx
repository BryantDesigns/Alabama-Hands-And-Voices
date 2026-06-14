'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
    { label: 'Home', href: '/design-options/v3' },
    { label: 'About', href: '/design-options/v3/about' },
    { label: 'Membership', href: '/design-options/v3/membership' },
    { label: 'Programs', href: '/design-options/v3/programs' },
    { label: 'Resources', href: '/design-options/v3/resources' },
]

export default function HeaderV3() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 4)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu when pathname changes — driven by the Link onClick handlers
    // (closeMenu is called directly in each mobile Link, so no effect needed here)

    // Close on outside click
    useEffect(() => {
        if (!menuOpen) return
        const handleClick = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target as Node)
            ) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)

    const isActive = (href: string) => {
        if (href === '/design-options/v3') return pathname === href
        return pathname.startsWith(href)
    }

    return (
        <>
            {/* ── Top accent bar: bold hvblue stripe ── */}
            <div className="h-1 w-full bg-hvblue" />

            <header
                className={`sticky top-1 z-40 bg-white transition-all duration-200 ${
                    scrolled
                        ? 'shadow-[0_2px_16px_rgba(20,27,75,0.12)]'
                        : 'shadow-none'
                }`}
            >
                {/* Structural left-edge accent — geometric marker */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav
                        aria-label="Main navigation"
                        className="flex h-16 items-center justify-between md:h-20"
                    >
                        {/* ── Logo + wordmark ── */}
                        <Link
                            href="/design-options/v3"
                            aria-label="Alabama Hands & Voices — home"
                            className="group flex shrink-0 items-center gap-3 pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2"
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

                        {/* ── Desktop nav ── */}
                        <div className="hidden items-center gap-0 md:flex">
                            {navLinks.map((link) => {
                                const active = isActive(link.href)
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative flex h-20 items-center px-4 text-sm font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hvorange-600 lg:px-5 lg:text-base ${
                                            active
                                                ? 'text-hvblue'
                                                : 'text-slate-500 hover:text-hvblue'
                                        }`}
                                    >
                                        {link.label}
                                        {/* Active indicator: bottom border bar */}
                                        <span
                                            aria-hidden="true"
                                            className={`absolute inset-x-4 bottom-0 h-[3px] rounded-t-full bg-hvorange-600 transition-transform duration-200 lg:inset-x-5 ${
                                                active
                                                    ? 'scale-x-100'
                                                    : 'scale-x-0'
                                            }`}
                                        />
                                    </Link>
                                )
                            })}
                        </div>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden items-center gap-3 md:flex">
                            <Link
                                href="/design-options/v3/membership"
                                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-hvblue px-6 py-2.5 text-sm font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2 lg:px-7 lg:py-3 lg:text-base"
                            >
                                {/* Arrow icon — forward/action */}
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
                                Donate
                            </Link>
                        </div>

                        {/* ── Mobile hamburger ── */}
                        <button
                            ref={toggleRef}
                            type="button"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="v3-mobile-menu"
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="flex h-11 w-11 items-center justify-center rounded-xl text-hvblue transition-colors duration-150 hover:bg-hvblue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvorange-600 focus-visible:ring-offset-2 md:hidden"
                        >
                            <span aria-hidden="true" className="block">
                                {menuOpen ? (
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
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

                {/* Bottom border — structural separator */}
                <div className="h-[2px] w-full bg-slate-100" />
            </header>

            {/* ── Mobile menu panel ── */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    id="v3-mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    className="fixed inset-x-0 top-[calc(4rem+6px)] z-30 border-b-2 border-slate-100 bg-white md:hidden"
                >
                    {/* Orange left-edge accent carries through to mobile panel */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-hvorange-600"
                    />

                    <nav
                        aria-label="Mobile navigation"
                        className="mx-auto max-w-7xl px-6 py-4"
                    >
                        <ul className="space-y-0" role="list">
                            {navLinks.map((link) => {
                                const active = isActive(link.href)
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`flex min-h-[52px] items-center gap-3 border-b border-slate-100 text-base font-bold uppercase tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hvorange-600 ${
                                                active
                                                    ? 'text-hvblue'
                                                    : 'text-slate-500 hover:text-hvblue'
                                            }`}
                                        >
                                            {/* Active: small square bullet */}
                                            <span
                                                aria-hidden="true"
                                                className={`h-2 w-2 shrink-0 rounded-sm transition-colors duration-150 ${
                                                    active
                                                        ? 'bg-hvorange-600'
                                                        : 'bg-transparent'
                                                }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Mobile CTA — full-width, bold */}
                        <div className="mt-5 pb-2">
                            <Link
                                href="/design-options/v3/membership"
                                onClick={closeMenu}
                                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-hvblue px-6 py-3.5 text-base font-bold text-white transition duration-150 hover:bg-hvblue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hvblue focus-visible:ring-offset-2"
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
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}
