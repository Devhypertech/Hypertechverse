"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Work" },
  { 
    href: "/services", 
    label: "Services",
    dropdown: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/app-development", label: "App Development" },
      { href: "/services/logo-design", label: "Logo Design" },
      { href: "/services/branding", label: "Branding" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/social-media-management", label: "Social Media" },
      { href: "/services/video-animation", label: "Video Animation" },
      { href: "/services/software-development", label: "Software Development" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
                  <li key={n.href} className="relative">
                    {n.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`text-base font-extrabold tracking-tight transition-all duration-300 flex items-center gap-1 ${
                            active ? "text-white" : "text-white/90 hover:text-white"
                          }`}
                        >
                          {n.label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {servicesOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 py-2">
                            {n.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={n.href}
                        className={`text-base font-extrabold tracking-tight transition-all duration-300 ${
                          active ? "text-white" : "text-white/90 hover:text-white"
                        }`}
                      >
                        {n.label}
                      </Link>
                    )}
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
                    {n.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`block rounded-md px-1 py-1 text-base font-semibold transition flex items-center gap-2 ${
                            active ? "text-white" : "text-white/90 hover:text-white"
                          }`}
                        >
                          {n.label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {servicesOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {n.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="block rounded-md px-1 py-1 text-sm text-white/80 hover:text-white transition"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-1 py-1 text-base font-semibold transition ${
                          active ? "text-white" : "text-white/90 hover:text-white"
                        }`}
                      >
                        {n.label}
                      </Link>
                    )}
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
