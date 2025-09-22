"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0f]/70 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold tracking-tight text-white">HTV</span>
                    <span className="hidden text-sm font-semibold text-white/80 sm:block">
                        Hypertech <span className="text-white">Verse</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {nav.map((n) => (
                        <Link
                            key={n.href}
                            href={n.href}
                            className="text-sm font-medium text-white/80 hover:text-white transition"
                        >
                            {n.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 px-4 py-2 text-sm font-semibold text-black shadow hover:opacity-95 transition"
                    >
                        Get started
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    aria-label="Menu"
                    onClick={() => setOpen(!open)}
                    className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </button>
            </div>

            {/* Mobile sheet */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-[#0b0b0f]/95">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                        <div className="flex flex-col gap-4">
                            {nav.map((n) => (
                                <Link
                                    key={n.href}
                                    href={n.href}
                                    className="text-base font-medium text-white/90"
                                    onClick={() => setOpen(false)}
                                >
                                    {n.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-1 rounded-lg bg-gradient-to-br from-amber-300 to-orange-400 px-4 py-2 text-center font-semibold text-black"
                                onClick={() => setOpen(false)}
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
