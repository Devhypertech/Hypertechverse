"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("web");

  // Filter studies based on active tab
  const filteredStudies = studies.filter(study => {
    const categoryMap: { [key: string]: string[] } = {
      "web": ["Web"],
      "logo": ["Brand", "Logo"],
      "branding": ["Brand", "Branding"],
      "video": ["Video", "Animation"],
      "mobile": ["App", "iOS/Android", "Mobile"],
    };
    const tags = categoryMap[activeTab] || [];
    return study.tags.some(tag => tags.some(cat => tag.toLowerCase().includes(cat.toLowerCase())));
  });
  return (
    <main className="min-h-screen">
      {/* Hero Section (duplicated from SEO, with headings adjusted) */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/portfolio/hero.png"
            alt="Portfolio showcase illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[60vh] lg:min-h-[70vh] grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 md:py-0">
              <div className="max-w-2xl">
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
               Our
               <br />
               Portfolio
               <br />
                  </h1>

                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#EA7BBF] text-white shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" className="translate-x-[1px]">
                      <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div> 
              </div>
            </div>

            {/* Right visual for mobile */}
            <div className="md:hidden mt-8">
              <div className="relative h-[260px] sm:h-[320px] w-full">
                <Image
                  src="/portfolio/bar.png"
                  alt="Portfolio illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee (duplicated from SEO) */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[56px] sm:h-[88px] overflow-hidden">
            <div className="absolute inset-0 flex items-center ">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-black py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "web"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              WEB DESIGNS
            </button>
            <button
              onClick={() => setActiveTab("logo")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "logo"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              LOGO DESIGNS
            </button>
            <button
              onClick={() => setActiveTab("branding")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "branding"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              BRANDING
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "video"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              VIDEO ANIMATION
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "mobile"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              MOBILE APPLICATIONS
            </button>
          </div>
        </div>
      </section>

      {/* ====== Case Studies ====== */}
<section className="bg-black text-white py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
      <div>
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Recent Case Studies
        </h2>
        <p
          className="mt-1 text-sm text-white/70"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          A curated selection of product, brand, and commerce builds.
        </p>
      </div>
      {/* optional filter stub (hide on mobile) */}
      {/* <div className="hidden md:flex items-center gap-2 text-sm">
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">All</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">Web</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">App</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">Brand</button>
      </div> */}
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
      {filteredStudies.map((s) => (
        <article
          key={s.slug}
          className="group relative overflow-hidden rounded-2xl bg-[#0E0E10] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)]"
        >
          {/* Media */}
          <div className="p-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={s.image}
                alt={s.title}
                width={640}
                height={400}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
              {s.badge && (
                <span className="absolute right-2 top-2 rounded-full bg-white/90 text-black text-[11px] font-bold px-2 py-0.5">
                  {s.badge}
                </span>
              )}
              {/* subtle vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* Body */}
          <div className="px-4 pb-4 pt-0">
            {/* tags */}
            <div className="mb-2 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 text-white/70 text-[11px] px-2 py-1 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <h3
              className="text-[15px] font-extrabold"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              {s.title}
            </h3>

            <p
              className="mt-1 text-[12px] leading-snug text-white/70 line-clamp-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {s.blurb}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <Link
                href={s.href}
                className="text-[12px] font-semibold text-white/90 hover:text-white"
              >
                See full case →
              </Link>
              {s.meta && (
                <span className="text-[11px] text-white/50">{s.meta}</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


    </main>
  );
}

function RibbonText() {
  return (
    <div className="flex items-center">
      <Image
        src="/portfolio/bar.png"
        alt="Smart Solutions That Drive Success"
        width={1000}
        height={68}
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}
// Simple data source — update image paths to your actual files in /public/portfolio/...
const studies = [
  {
    slug: "drivelodge",
    title: "Drivelodge",
    blurb:
      "E-commerce revamp with modular product builder, blazing PDPs, and streamlined checkout.",
    image: "/portfolio/c1.png",
    tags: ["Web", "Commerce", "UI"],
    href: "/portfolio/drivelodge",
    meta: "v2",
    badge: "New",
  },
  {
    slug: "majenta",
    title: "Majenta",
    blurb:
      "Lead-gen marketing site + CMS with component library and rapid landing-page iteration.",
    image: "/portfolio/c2.png",
    tags: ["Web", "CMS"],
    href: "/portfolio/majenta",
  },
  {
    slug: "dropship-io",
    title: "Dropship.io",
    blurb:
      "SaaS dashboard refresh, dark mode, and conversion-focused marketing pages.",
    image: "/portfolio/c3.png",
    tags: ["SaaS", "Design", "Web"],
    href: "/portfolio/dropship-io",
  },
  {
    slug: "hacen-tequila",
    title: "Hacien Tequila",
    blurb:
      "Premium brand site with rich imagery, motion micro-interactions, and store finder.",
    image: "/portfolio/c4.png",
    tags: ["Brand", "Web"],
    href: "/portfolio/hacien-tequila",
  },
  {
    slug: "mobileo",
    title: "Mobileo",
    blurb:
      "React Native app launch: onboarding flow, subscriptions, and analytics pipeline.",
    image: "/portfolio/c5.png",
    tags: ["App", "iOS/Android"],
    href: "/portfolio/mobileo",
  },
  {
    slug: "honest-watch-dealer",
    title: "Honest Watch Dealer",
    blurb:
      "Auction platform UX, trust signals, and bid flow optimization to increase GMV.",
    image: "/portfolio/c6.png",
    tags: ["Product", "Web"],
    href: "/portfolio/honest-watch-dealer",
  },
  {
    slug: "bay-2-campers",
    title: "Bay 2 Campers",
    blurb:
      "Booking engine with calendar sync and a high-impact visual catalog.",
    image: "/portfolio/c7.png",
    tags: ["Web", "Booking"],
    href: "/portfolio/bay-2-campers",
  },
  {
    slug: "box-iq",
    title: "Box IQ",
    blurb:
      "B2B web app redesign—tables, filters, and bulk actions with enterprise polish.",
    image: "/portfolio/c8.png",
    tags: ["SaaS", "App", "UX"],
    href: "/portfolio/box-iq",
  },
  {
    slug: "mannson-freight",
    title: "Mannson Freight",
    blurb:
      "Corporate site refresh and quote flow streamlining for faster lead capture.",
    image: "/portfolio/c9.png",
    tags: ["Web", "Lead-gen"],
    href: "/portfolio/mannson-freight",
  },
  {
    slug: "fresh-and-go",
    title: "Fresh & Go",
    blurb:
      "Branding system, packaging, and storefront powered by a flexible CMS.",
    image: "/portfolio/c10.png",
    tags: ["Brand", "Commerce"],
    href: "/portfolio/fresh-and-go",
  },
  {
    slug: "breaking-bread",
    title: "Breaking Bread",
    blurb:
      "Restaurant site with online ordering, menu CMS, and irresistible photography.",
    image: "/portfolio/c11.png",
    tags: ["Web", "F&B"],
    href: "/portfolio/breaking-bread",
  },
  {
    slug: "mannson-app",
    title: "Mannson Freight (App)",
    blurb:
      "Shipment tracking mobile app: live status, push alerts, and document vault.",
    image: "/portfolio/c3.png",
    tags: ["App", "Logistics"],
    href: "/portfolio/mannson-freight-app",
    meta: "v1.3",
  },
];
