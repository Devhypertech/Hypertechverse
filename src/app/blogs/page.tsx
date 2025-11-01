"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState("technology");

  // Filter blogs based on active tab
  const filteredBlogs = blogs.filter(blog => {
    const categoryMap: { [key: string]: string[] } = {
      "technology": ["Technology", "Tech"],
      "design": ["Design", "UI/UX"],
      "marketing": ["Marketing", "SEO"],
      "business": ["Business", "Strategy"],
      "tutorials": ["Tutorials", "Guide"],
    };
    const tags = categoryMap[activeTab] || [];
    return blog.tags.some(tag => tags.some(cat => tag.toLowerCase().includes(cat.toLowerCase())));
  });
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[60vh] lg:min-h-[70vh] flex flex-col items-center justify-center text-center py-12 md:py-0">
            <h1
              className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px] text-white mb-8"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Blog
            </h1>

            <Link
              href="/contact"
              aria-label="Get started"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
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
              onClick={() => setActiveTab("technology")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "technology"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              TECHNOLOGY
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "design"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              DESIGN
            </button>
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "marketing"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              MARKETING
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "business"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              BUSINESS
            </button>
            <button
              onClick={() => setActiveTab("tutorials")}
              className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                activeTab === "tutorials"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              TUTORIALS
            </button>
          </div>
        </div>
      </section>

      {/* ====== Blog Posts ====== */}
<section className="bg-black text-white py-16">
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
          className="mt-1 text-sm text-white/70"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          A curated selection of articles, insights, and tutorials.
        </p>
      </div>
      {/* optional filter stub (hide on mobile) */}
      {/* <div className="hidden md:flex items-center gap-2 text-sm">
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">All</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">Tech</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">Design</button>
        <button className="rounded-full border border-white/15 px-3 py-1.5 bg-white/5 hover:bg-white/10">Marketing</button>
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
                <span className="absolute right-2 top-2 rounded-full bg-white/90 text-black text-[11px] font-bold px-2 py-0.5">
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
              {blog.title}
            </h3>

            <p
              className="mt-1 text-[12px] leading-snug text-white/70 line-clamp-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {blog.blurb}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <Link
                href={blog.href}
                className="text-[12px] font-semibold text-white/90 hover:text-white"
              >
                Read more →
              </Link>
              {blog.meta && (
                <span className="text-[11px] text-white/50">{blog.meta}</span>
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
    slug: "nextjs-best-practices",
    title: "Next.js Best Practices for 2024",
    blurb:
      "Discover the latest Next.js optimization techniques, server components, and performance improvements.",
    image: "/portfolio/c1.png",
    tags: ["Technology", "Web"],
    href: "/blogs/nextjs-best-practices",
    meta: "5 min read",
    badge: "New",
  },
  {
    slug: "ui-design-trends",
    title: "UI Design Trends to Watch",
    blurb:
      "Explore the cutting-edge UI design trends that are shaping the digital landscape in 2024.",
    image: "/portfolio/c2.png",
    tags: ["Design", "UI/UX"],
    href: "/blogs/ui-design-trends",
  },
  {
    slug: "seo-strategy-guide",
    title: "Complete SEO Strategy Guide",
    blurb:
      "Learn how to build a comprehensive SEO strategy that drives organic traffic and improves rankings.",
    image: "/portfolio/c3.png",
    tags: ["Marketing", "SEO"],
    href: "/blogs/seo-strategy-guide",
  },
  {
    slug: "business-growth-tips",
    title: "10 Tips for Business Growth",
    blurb:
      "Actionable strategies and insights to scale your business and achieve sustainable growth.",
    image: "/portfolio/c4.png",
    tags: ["Business", "Strategy"],
    href: "/blogs/business-growth-tips",
  },
  {
    slug: "react-tutorial-basics",
    title: "React Tutorial: Getting Started",
    blurb:
      "A beginner-friendly guide to React, covering components, hooks, and state management basics.",
    image: "/portfolio/c5.png",
    tags: ["Tutorials", "Technology"],
    href: "/blogs/react-tutorial-basics",
  },
  {
    slug: "brand-identity-guide",
    title: "Building a Strong Brand Identity",
    blurb:
      "Essential steps to create a memorable brand identity that resonates with your target audience.",
    image: "/portfolio/c6.png",
    tags: ["Design", "Brand"],
    href: "/blogs/brand-identity-guide",
  },
  {
    slug: "content-marketing-tips",
    title: "Content Marketing That Converts",
    blurb:
      "Learn how to create content that engages your audience and drives conversions.",
    image: "/portfolio/c7.png",
    tags: ["Marketing", "Content"],
    href: "/blogs/content-marketing-tips",
  },
  {
    slug: "startup-funding-guide",
    title: "Startup Funding Guide",
    blurb:
      "Navigate the world of startup funding with this comprehensive guide to investors and capital.",
    image: "/portfolio/c8.png",
    tags: ["Business", "Startup"],
    href: "/blogs/startup-funding-guide",
  },
  {
    slug: "css-grid-tutorial",
    title: "Mastering CSS Grid Layout",
    blurb:
      "A complete tutorial on CSS Grid, from basics to advanced techniques for modern layouts.",
    image: "/portfolio/c9.png",
    tags: ["Tutorials", "Design"],
    href: "/blogs/css-grid-tutorial",
  },
  {
    slug: "digital-marketing-101",
    title: "Digital Marketing 101",
    blurb:
      "Everything you need to know about digital marketing to grow your online presence.",
    image: "/portfolio/c10.png",
    tags: ["Marketing", "Guide"],
    href: "/blogs/digital-marketing-101",
  },
  {
    slug: "productivity-tools",
    title: "Essential Productivity Tools for Developers",
    blurb:
      "Top tools and apps that can help developers stay organized and boost productivity.",
    image: "/portfolio/c11.png",
    tags: ["Technology", "Tools"],
    href: "/blogs/productivity-tools",
  },
];

