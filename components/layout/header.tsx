"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const servicesList = [
  {
    href: "/custom-website-development-service/",
    label: "Web Development",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Build your dream website with modern technologies."
  },
  {
    href: "/custom-app-development-service/",
    label: "App Development",
    icon: "/icons/support.png",
    iconBg: "bg-[#FFD350]",
    description: "Mobile apps that engage and convert users."
  },
  {
    href: "/logo-design-2/",
    label: "Logo Design",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Create memorable brand identities."
  },
  {
    href: "/branding",
    label: "Branding",
    icon: "/icons/businessgrowth.png",
    iconBg: "bg-[#FFD350]",
    description: "Complete brand identity solutions."
  },
  {
    href: "/seo",
    label: "SEO",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Boost your search engine visibility."
  },
  {
    href: "/social-media-management",
    label: "Social Media",
    icon: "/icons/smie.png",
    iconBg: "bg-[#FFD350]",
    description: "Grow your presence on social platforms."
  },
  {
    href: "/paid-advertising-services/",
    label: "Paid Advertising",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Drive results with targeted ad campaigns."
  },
  {
    href: "/social-media-advertising-services/",
    label: "Social Media Advertising",
    icon: "/icons/support.png",
    iconBg: "bg-[#FFD350]",
    description: "Maximize your reach with strategic social ads."
  },
  {
    href: "/pay-per-click-services",
    label: "Pay Per Click",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Drive targeted traffic with PPC campaigns."
  },
  {
    href: "/ui-ux-design/",
    label: "UI/UX",
    icon: "/icons/support.png",
    iconBg: "bg-[#FFD350]",
    description: "Create intuitive and engaging user experiences."
  },
  {
    href: "/animation",
    label: "Animation",
    icon: "/icons/support.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Engaging animated content for your brand."
  },
  {
    href: "/custom-software-development",
    label: "Custom Software",
    icon: "/icons/expert.png",
    iconBg: "bg-[#EA7BBF]",
    description: "Tailored software solutions for your business."
  },
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
  { href: "/blogs", label: "Blogs" },
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
      <div className="bg-[#1d1d1d]/30 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
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
                              className={`text-base font-extrabold tracking-tight transition-all duration-300 ${active ? "text-white" : "text-white/90 hover:text-white"
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
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-7xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white shadow-xl border-t border-gray-100 overflow-hidden rounded-xl">
                              <div className="mx-auto px-8 py-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                                <div className="grid grid-cols-6 gap-6">
                                  {n.dropdown.map((item: any, index: number) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="group/item flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                                    >
                                      {/* Icon Circle */}
                                      <div className={`w-16 h-16 rounded-full ${item.iconBg || 'bg-[#EA7BBF]'} flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform duration-200`}>
                                        {item.icon ? (
                                          <Image
                                            src={item.icon}
                                            alt={item.label}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8 object-contain filter brightness-0 invert"
                                          />
                                        ) : (
                                          <div className="w-8 h-8 bg-white rounded-full"></div>
                                        )}
                                      </div>
                                      {/* Title */}
                                      <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover/item:text-[#EA7BBF] transition-colors duration-200">
                                        {item.label}
                                      </h4>
                                      {/* Description */}
                                      <p className="text-xs text-gray-600 leading-snug">
                                        {item.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={n.href}
                          className={`text-base font-extrabold tracking-tight transition-all duration-300 ${active ? "text-white" : "text-white/90 hover:text-white"
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
              className="rounded-lg px-5 py-2 font-semibold text-black shadow-lg bg-[#FFD350] hover:bg-[#EA7BBF] transition-all duration-300"
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
        <div className="md:hidden bg-[#1d1d1d]/90 backdrop-blur-xl border-t border-white/10">
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
                            className={`block rounded-md px-1 py-1 text-base font-semibold transition ${active ? "text-white" : "text-white/90 hover:text-white"
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
                        className={`block rounded-md px-1 py-1 text-base font-semibold transition ${active ? "text-white" : "text-white/90 hover:text-white"
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
