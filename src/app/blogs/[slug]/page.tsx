"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Blog data - in production, this would come from a CMS or API
const allBlogs = [
  {
    slug: "drivelodge",
    title: "Drivelodge",
    blurb:
      "E-commerce revamp with modular product builder, blazing PDPs, and streamlined checkout.",
    image: "/portfolio/c1.png",
    tags: ["Technology", "Web"],
    href: "/blogs/drivelodge",
    meta: "5 min read",
    badge: "New",
    content: {
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      paragraph2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    }
  },
  {
    slug: "nextjs-best-practices",
    title: "Next.js Best Practices for 2024",
    blurb:
      "Discover the latest Next.js optimization techniques, server components, and performance improvements.",
    image: "/portfolio/c2.png",
    tags: ["Technology", "Web"],
    href: "/blogs/nextjs-best-practices",
    meta: "5 min read",
    badge: "New",
    content: {
      paragraph1: "Next.js has revolutionized web development with its powerful features and optimization capabilities. In this comprehensive guide, we'll explore the best practices for building modern web applications using Next.js 14 and beyond.",
      paragraph2: "From server components to edge functions, we'll cover everything you need to know to build fast, scalable, and maintainable applications. Learn how to optimize your bundle size, improve Core Web Vitals, and leverage the full power of React Server Components.",
    }
  },
  {
    slug: "ui-design-trends",
    title: "UI Design Trends to Watch",
    blurb:
      "Explore the cutting-edge UI design trends that are shaping the digital landscape in 2024.",
    image: "/portfolio/c3.png",
    tags: ["Design", "UI/UX"],
    href: "/blogs/ui-design-trends",
    content: {
      paragraph1: "The world of UI design is constantly evolving, with new trends emerging each year that shape how we interact with digital products. This year brings exciting developments in minimalist design, bold typography, and immersive user experiences.",
      paragraph2: "From glassmorphism to neumorphism, we'll dive deep into the design trends that are capturing attention and setting new standards in user interface design. Understanding these trends will help you create more engaging and modern user experiences.",
    }
  },
  {
    slug: "seo-strategy-guide",
    title: "Complete SEO Strategy Guide",
    blurb:
      "Learn how to build a comprehensive SEO strategy that drives organic traffic and improves rankings.",
    image: "/portfolio/c4.png",
    tags: ["Marketing", "SEO"],
    href: "/blogs/seo-strategy-guide",
    content: {
      paragraph1: "Search Engine Optimization is more important than ever in today's competitive digital landscape. A well-executed SEO strategy can dramatically increase your website's visibility and drive qualified traffic to your business.",
      paragraph2: "This comprehensive guide covers everything from keyword research to technical SEO, content optimization, and link building strategies. Learn how to create an SEO plan that delivers measurable results and sustainable growth.",
    }
  },
  {
    slug: "business-growth-tips",
    title: "10 Tips for Business Growth",
    blurb:
      "Actionable strategies and insights to scale your business and achieve sustainable growth.",
    image: "/portfolio/c5.png",
    tags: ["Business", "Strategy"],
    href: "/blogs/business-growth-tips",
    content: {
      paragraph1: "Growing a business requires a strategic approach, dedication, and the ability to adapt to changing market conditions. Whether you're a startup or an established company, these proven strategies can help accelerate your growth trajectory.",
      paragraph2: "From customer acquisition to operational efficiency, we'll explore ten actionable tips that successful businesses use to scale. Each strategy is backed by real-world examples and can be implemented immediately to see results.",
    }
  },
  {
    slug: "react-tutorial-basics",
    title: "React Tutorial: Getting Started",
    blurb:
      "A beginner-friendly guide to React, covering components, hooks, and state management basics.",
    image: "/portfolio/c6.png",
    tags: ["Tutorials", "Technology"],
    href: "/blogs/react-tutorial-basics",
    content: {
      paragraph1: "React has become one of the most popular JavaScript libraries for building user interfaces. This beginner-friendly tutorial will guide you through the fundamentals of React, from components to hooks and everything in between.",
      paragraph2: "We'll start with the basics of JSX and components, then move on to state management with hooks, event handling, and component composition. By the end of this tutorial, you'll have a solid foundation to start building React applications.",
    }
  },
  {
    slug: "brand-identity-guide",
    title: "Building a Strong Brand Identity",
    blurb:
      "Essential steps to create a memorable brand identity that resonates with your target audience.",
    image: "/portfolio/c7.png",
    tags: ["Design", "Brand"],
    href: "/blogs/brand-identity-guide",
    content: {
      paragraph1: "A strong brand identity is the foundation of successful marketing and customer recognition. It goes beyond just a logo or color scheme - it's the complete visual and emotional representation of your business.",
      paragraph2: "In this guide, we'll walk you through the essential steps to create a cohesive brand identity that tells your story and connects with your audience. From logo design to brand voice, learn how to build a brand that stands out in a crowded market.",
    }
  },
  {
    slug: "content-marketing-tips",
    title: "Content Marketing That Converts",
    blurb:
      "Learn how to create content that engages your audience and drives conversions.",
    image: "/portfolio/c8.png",
    tags: ["Marketing", "Content"],
    href: "/blogs/content-marketing-tips",
    content: {
      paragraph1: "Content marketing is one of the most effective ways to attract, engage, and convert your target audience. But creating content that actually drives results requires strategy, understanding your audience, and consistent execution.",
      paragraph2: "This comprehensive guide will teach you how to create content that not only captures attention but also drives meaningful actions. From blog posts to social media content, learn the secrets of content marketing that converts.",
    }
  },
  {
    slug: "startup-funding-guide",
    title: "Startup Funding Guide",
    blurb:
      "Navigate the world of startup funding with this comprehensive guide to investors and capital.",
    image: "/portfolio/c9.png",
    tags: ["Business", "Startup"],
    href: "/blogs/startup-funding-guide",
    content: {
      paragraph1: "Securing funding is one of the biggest challenges facing startups today. Whether you're looking for seed funding, Series A, or growth capital, understanding the funding landscape is crucial for success.",
      paragraph2: "This guide covers everything from preparing your pitch deck to understanding different types of investors and funding rounds. Learn how to navigate the complex world of startup financing and secure the capital you need to grow.",
    }
  },
  {
    slug: "css-grid-tutorial",
    title: "Mastering CSS Grid Layout",
    blurb:
      "A complete tutorial on CSS Grid, from basics to advanced techniques for modern layouts.",
    image: "/portfolio/c10.png",
    tags: ["Tutorials", "Design"],
    href: "/blogs/css-grid-tutorial",
    content: {
      paragraph1: "CSS Grid is a powerful layout system that has revolutionized how we create web layouts. Unlike Flexbox, which is one-dimensional, CSS Grid allows you to create complex two-dimensional layouts with ease.",
      paragraph2: "This tutorial will take you from the basics of grid containers and items to advanced techniques like named grid lines and responsive grid layouts. Master CSS Grid and unlock new possibilities for your web designs.",
    }
  },
  {
    slug: "digital-marketing-101",
    title: "Digital Marketing 101",
    blurb:
      "Everything you need to know about digital marketing to grow your online presence.",
    image: "/portfolio/c11.png",
    tags: ["Marketing", "Guide"],
    href: "/blogs/digital-marketing-101",
    content: {
      paragraph1: "Digital marketing encompasses all marketing efforts that use the internet or electronic devices. In today's digital-first world, understanding digital marketing is essential for any business looking to succeed online.",
      paragraph2: "From SEO and social media marketing to email campaigns and content marketing, this comprehensive guide covers all the key aspects of digital marketing. Learn how to create a digital marketing strategy that drives results.",
    }
  },
  {
    slug: "productivity-tools",
    title: "Essential Productivity Tools for Developers",
    blurb:
      "Top tools and apps that can help developers stay organized and boost productivity.",
    image: "/portfolio/c1.png",
    tags: ["Technology", "Tools"],
    href: "/blogs/productivity-tools",
    content: {
      paragraph1: "As a developer, staying productive and organized is crucial for delivering quality work on time. The right tools can make all the difference in your workflow, from code editors to project management and collaboration tools.",
      paragraph2: "This comprehensive list of productivity tools covers everything from development environments to time tracking, note-taking, and communication tools. Discover the tools that successful developers use to maximize their efficiency.",
    }
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the current blog post
  const blog = allBlogs.find((b) => b.slug === params.slug);

  // If blog not found, show 404
  if (!blog) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-[#EA7BBF] hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  // Get related posts (exclude current post and get 3 random ones)
  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

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

        {/* Bottom marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[56px] sm:h-[88px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Blog Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-center mb-8"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            {blog.title}
          </h2>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* Blog Content Paragraphs */}
          <div className="space-y-6 mb-8">
            <p
              className="text-base sm:text-lg text-white/90 leading-relaxed text-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {blog.content.paragraph1}
            </p>
            <p
              className="text-base sm:text-lg text-white/90 leading-relaxed text-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {blog.content.paragraph2}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>

          {/* Related Blog Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
            {relatedBlogs.map((relatedBlog) => (
              <article
                key={relatedBlog.slug}
                className="group relative overflow-hidden rounded-2xl bg-[#0E0E10] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)]"
              >
                {/* Media */}
                <div className="p-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      width={640}
                      height={400}
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    {relatedBlog.badge && (
                      <span className="absolute right-2 top-2 rounded-full bg-white/90 text-black text-[11px] font-bold px-2 py-0.5">
                        {relatedBlog.badge}
                      </span>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 pb-4 pt-0">
                  {/* tags */}
                  <div className="mb-2 flex flex-wrap gap-2">
                    {relatedBlog.tags.map((t) => (
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
                    {relatedBlog.title}
                  </h3>

                  <p
                    className="mt-1 text-[12px] leading-snug text-white/70 line-clamp-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {relatedBlog.blurb}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={relatedBlog.href}
                      className="text-[12px] font-semibold text-white/90 hover:text-white"
                    >
                      Read more →
                    </Link>
                    {relatedBlog.meta && (
                      <span className="text-[11px] text-white/50">{relatedBlog.meta}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              See More
            </Link>
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

