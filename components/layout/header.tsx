"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const servicesList = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/app-development", label: "App Development" },
  { href: "/services/logo-design", label: "Logo Design" },
  { href: "/services/branding", label: "Branding" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/social-media-management", label: "Social Media" },
  { href: "/services/paid-advertising", label: "Paid Advertising" },
  { href: "/services/video-animation", label: "Video Animation" },
  { href: "/services/animation", label: "Animation" },
  { href: "/services/custom-software-development", label: "Custom Software" },
  { href: "/services/software-development", label: "Software Development" },
];

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    dropdown: servicesList
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Case Studies" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

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

          {/* Right side: Nav + CTA (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-6">
                {nav.map((n) => {
                  const active = pathname === n.href || (n.href !== "/" && pathname?.startsWith(n.href));
                  return (
                    <li key={n.href} className="relative">
                      {n.dropdown ? (
                        <div className="relative group">
                          <div className="flex items-center">
                            <Link
                              href={n.href}
                              className={`text-base font-extrabold tracking-tight transition-all duration-300 ${
                                active ? "text-white" : "text-white/90 hover:text-white"
                              }`}
                            >
                              {n.label}
                            </Link>
                            <svg 
                              className="ml-1 w-4 h-4 text-white/90 group-hover:text-white transition-all duration-200 group-hover:rotate-180"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {/* Desktop Mega Menu - Hover Triggered */}
                          <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-0">
                                {/* Left Side - Services Grid */}
                                <div className="p-8">
                                  <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {n.dropdown.map((item: any) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item hover:scale-[1.02] transform origin-left"
                                      >
                                        <span className="text-sm font-semibold text-gray-800 group-hover/item:text-[#ff5a1f] transition-colors duration-200">
                                          {item.label}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Right Side - Promo Box */}
                                <div className="bg-gradient-to-br from-gray-50 to-white border-l border-gray-100 p-8 lg:rounded-tr-xl">
                                  <div className="space-y-6">
                                    <div>
                                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                                        Experience Real Results
                                      </h4>
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        Partner with Hypertech Verse and scale your business.
                                      </p>
                                    </div>
                                    
                                    <form onSubmit={handleSubscribe} className="space-y-4">
                                      <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5a1f] focus:border-transparent text-sm"
                                      />
                                      <button
                                        type="submit"
                                        className="w-full bg-[#ff5a1f] hover:bg-[#e04a16] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                                      >
                                        Subscribe
                                      </button>
                                    </form>
                                    
                                    <div className="pt-4 border-t border-gray-200">
                                      <p className="text-base font-bold text-gray-900">
                                        GET 10% OFF
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                        <div className="flex items-center gap-2">
                          <Link
                            href={n.href}
                            onClick={() => setOpen(false)}
                            className={`block rounded-md px-1 py-1 text-base font-semibold transition ${
                              active ? "text-white" : "text-white/90 hover:text-white"
                            }`}
                          >
                            {n.label}
                          </Link>
                          <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="p-1 hover:bg-white/10 rounded transition-colors duration-200"
                          >
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                        {servicesOpen && (
                          <div className="ml-4 mt-2 bg-white rounded-lg shadow-lg p-4">
                            <h3 className="text-base font-bold text-gray-900 mb-3">Our Services</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {n.dropdown.map((item: any) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setServicesOpen(false);
                                  }}
                                  className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200 group/item hover:scale-[1.02]"
                                >
                                  <span className="text-sm font-semibold text-gray-800 group-hover/item:text-[#ff5a1f] transition-colors duration-200">
                                    {item.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
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
