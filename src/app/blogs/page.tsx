"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter blogs based on active tab
  const filteredBlogs = blogs.filter(blog => {
    if (activeTab === "all") {
      return true; // Show all blogs
    }
    const categoryMap: { [key: string]: string[] } = {
      "technology": ["Technology", "Tech"],
      "design": ["Design", "UI/UX"],
      "marketing": ["Marketing", "SEO"],
      "business": ["Business", "Strategy"],
    };
    const tags = categoryMap[activeTab] || [];
    return blog.tags.some(tag => tags.some(cat => tag.toLowerCase().includes(cat.toLowerCase())));
  });
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFD350] text-[#1d1d1d]">
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[60vh] lg:min-h-[70vh] flex flex-col items-center justify-center text-center py-12 md:py-0">
            <h1
              className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px] text-[#fff9f1] mb-8"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Blog's
            </h1>

            <Link
              href="/contact"
              aria-label="Get started"
              className="inline-block rounded-xl px-8 py-4 font-bold text-[#fff9f1] bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>
        </div>

        {/* Bottom marquee (duplicated from SEO) */}
        {/* <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[56px] sm:h-[88px] overflow-hidden">
            <div className="absolute inset-0 flex items-center ">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div> */}
      </section>

      {/* Category Tabs */}
      <section className="bg-[#1d1d1d] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === "all"
                ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                : "bg-[#EA7BBF] text-[#fff9f1] hover:opacity-90"
                }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveTab("technology")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === "technology"
                ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                : "bg-[#EA7BBF] text-[#fff9f1] hover:opacity-90"
                }`}
            >
              TECHNOLOGY
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === "design"
                ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                : "bg-[#EA7BBF] text-[#fff9f1] hover:opacity-90"
                }`}
            >
              DESIGN
            </button>
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === "marketing"
                ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                : "bg-[#EA7BBF] text-[#fff9f1] hover:opacity-90"
                }`}
            >
              MARKETING
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === "business"
                ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                : "bg-[#EA7BBF] text-[#fff9f1] hover:opacity-90"
                }`}
            >
              BUSINESS
            </button>
          </div>
        </div>
      </section>

      {/* ====== Blog Posts ====== */}
      <section className="bg-[#1d1d1d] text-[#fff9f1] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Recent Blog Posts
              </h2>
              <p
                className="mt-1 text-sm text-[#fff9f1]/70"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                A curated selection of articles, insights, and tutorials.
              </p>
            </div>
            {/* optional filter stub (hide on mobile) */}
            {/* <div className="hidden md:flex items-center gap-2 text-sm">
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-[#fff9f1]/5 hover:bg-[#fff9f1]/10">All</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-[#fff9f1]/5 hover:bg-[#fff9f1]/10">Tech</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-[#fff9f1]/5 hover:bg-[#fff9f1]/10">Design</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-[#fff9f1]/5 hover:bg-[#fff9f1]/10">Marketing</button>
      </div> */}
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="group relative overflow-hidden rounded-2xl bg-[#0E0E10] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)]"
              >
                {/* Media */}
                <div className="p-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={640}
                      height={400}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority
                    />
                    {blog.badge && (
                      <span className="absolute right-2 top-2 rounded-full bg-[#fff9f1]/90 text-[#1d1d1d] text-[11px] font-bold px-2 py-0.5">
                        {blog.badge}
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
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#fff9f1]/5 text-[#fff9f1]/70 text-[11px] px-2 py-1 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="text-[15px] font-extrabold"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="mt-1 text-[12px] leading-snug text-[#fff9f1]/70 line-clamp-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {blog.blurb}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={blog.href}
                      className="text-[12px] font-semibold text-[#fff9f1]/90 hover:text-[#fff9f1]"
                    >
                      Read more →
                    </Link>
                    {blog.meta && (
                      <span className="text-[11px] text-[#fff9f1]/50">{blog.meta}</span>
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
// Simple data source — update image paths to your actual files in /public/blogs/...
const blogs = [
  {
    slug: "which-delivery-app-pays-the-most-top-paying-options-in-2025",
    title: "Which Delivery App Pays the Most? Top Paying Options in 2025",
    blurb:
      "Discover the highest-paying delivery apps in 2025 and learn how drivers across America are earning smarter, not harder. A comprehensive guide to choosing the best delivery platform.",
    image: "/blogs/delapps.jpg",
    tags: ["Business", "Guide"],
    href: "/blogs/which-delivery-app-pays-the-most-top-paying-options-in-2025",
    meta: "12 min read",
    badge: "New",
  },
  {
    slug: "decoding-whatsapp-online-status-calls-typing-or-reading",
    title: "Decoding WhatsApp Online Status: Calls, Typing, or Reading?",
    blurb:
      "Understand what WhatsApp's online status really means and learn how to decode when someone is calling, typing, or reading your messages. A comprehensive guide to WhatsApp privacy and communication.",
    image: "/blogs/dwhatsapp.jpg",
    tags: ["Technology", "Guide"],
    href: "/blogs/decoding-whatsapp-online-status-calls-typing-or-reading",
    meta: "8 min read",
    badge: "New",
  },
  {
    slug: "top-20-check-cashing-apps-that-dont-use-ingo-in-2025",
    title: "Top 20 Check Cashing Apps That Don't Use Ingo in 2025",
    blurb:
      "Discover the best check-cashing apps that don't use Ingo in 2025. Find safe, fast, and fee-friendly alternatives for mobile check deposits without the high costs and delays of Ingo-based services.",
    image: "/blogs/cashingapps.jpg",
    tags: ["Business", "Finance"],
    href: "/blogs/top-20-check-cashing-apps-that-dont-use-ingo-in-2025",
    meta: "15 min read",
    badge: "New",
  },
  {
    slug: "best-time-to-post-on-tiktok-in-2025-research-backed-guide-for-engagement",
    title: "Best Time to Post on TikTok in 2025: Research-Backed Optimal Times for Engagement",
    blurb:
      "Discover the research-backed best times to post on TikTok in 2025. Learn how to maximize engagement, reach, and conversions with data-driven posting schedules tailored to your audience.",
    image: "/blogs/tiktok.jpg",
    tags: ["Marketing", "Social Media"],
    href: "/blogs/best-time-to-post-on-tiktok-in-2025-research-backed-guide-for-engagement",
    meta: "18 min read",
    badge: "New",
  },
];

