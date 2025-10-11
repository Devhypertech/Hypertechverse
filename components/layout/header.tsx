"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* frosted translucent bar */}
      <div className="bg-black/30 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold leading-none text-white">HTV</span>
            <span className="hidden text-white/90 font-semibold sm:block">
              Hypertech <span className="text-white">Verse</span>
            </span>
          </Link>

          {/* Centered nav (desktop) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {nav.map((n) => {
                const active = pathname === n.href || (n.href !== "/" && pathname?.startsWith(n.href));
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={`text-base font-extrabold tracking-tight transition-all duration-300 ${
                        active ? "text-white" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-xl px-5 py-2 font-semibold text-black shadow-lg bg-[#FFD350] hover:bg-[#EA7BBF] transition-all duration-300"
            >
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-4">
              {nav.map((n) => {
                const active = pathname === n.href || (n.href !== "/" && pathname?.startsWith(n.href));
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-1 py-1 text-base font-semibold transition ${
                        active ? "text-white" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-gradient-to-b from-amber-300 to-yellow-400 px-4 py-2 text-center font-semibold text-black shadow"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
