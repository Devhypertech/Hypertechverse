"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — Yellow background with black text */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/seo/hero.png"
            alt="SEO illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container (centered vertically) */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 md:py-0">
              <div className="max-w-2xl">
                {/* Headline */}
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[56px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    SEO
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      SEARCH RANKING
                    </span>
                  </h1>

                  {/* Pink round arrow badge */}
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

                {/* Subtext */}
                <p
                  className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Boost your search engine rankings and drive organic traffic to your website. We specialize in crafting
                  strategic SEO campaigns that improve visibility, increase rankings, and deliver measurable business results through data-driven optimization and proven tactics.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#EA7BBF] px-7 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold text-white shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    LET&apos;S GET STARTED
                  </Link>
                </div>
              </div>
            </div>

            {/* Right visual for mobile (below content) */}
            <div className="md:hidden mt-8">
              <div className="relative h-[260px] sm:h-[320px] w-full">
                <Image
                  src="/services/seo/hero.png"
                  alt="SEO illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[56px] sm:h-[68px] overflow-hidden">
            <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee-x">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/seo/about.png"
                  alt="SEO Professional"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-6">
                {/* Main headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  SEO that drives your <span className="text-[#EA7BBF]">Search Success</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse delivers results
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What makes us the best SEO company? Hypertech Verse transforms your search presence into powerful SEO campaigns that connect with your audience. Our expert team creates strategic content, optimizes your site, and delivers results that grow your brand across all search engines. From strategy to execution, we build SEO that drives engagement and delivers results.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#EA7BBF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d068a5] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    start your free consultation today!
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Ribbon Section */}
      <section className="relative bg-black overflow-hidden py-16">
        <div className="relative w-full h-36">
          {/* Yellow tilted box - static bar */}
          <div className="absolute top-0 left-0 w-full h-102">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-36 py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-black font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of SEO Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of SEO Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tilted SEO Slides */}
      <section className="relative bg-black overflow-hidden">
        {/* total canvas height: ~65–72vh depending on breakpoint */}
        <div className="mx-auto w-full max-w-[2000px] py-4 sm:py-6 lg:py-8">

          {/* mask/fade at the sides so edges feel cropped */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
            }}
          />

          <div className="h-[3.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[80vh] lg:h-[80vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/seo/work.png"
                alt="SEO Portfolio"
                width={800}
                height={800}
                sizes="100vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Process (bg.png + vertical tabs) */}
      <section className="relative overflow-hidden py-16 sm:py-20 text-white">
        {/* solid yellow base + decorative shape */}
        <div className="absolute inset-0 -z-20 bg-[#FFD350]" />
        <Image
          src="/services/logo/bg.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none select-none"
        />

        {/* heading + intro (centered like reference) */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your SEO to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Building your SEO has become easy and pleasant. You&apos;ll have a pleasant and
            customized experience with us, from discovery to planning and creating your
            SEO strategy. We define your SEO strategy, plan the optimization, and craft a
            scalable SEO presence that speaks your brand—then deliver the complete solution you need.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <SEOProcessTabs />
      </section>

      {/* Wavy Bottom Section */}
      <section className="relative overflow-hidden">
        {/* Pink top section */}
        <div className="relative bg-[#EA7BBF] h-32 sm:h-40 lg:h-48">
          {/* Wavy SVG separator */}
          <div className="absolute bottom-0 left-0 w-full h-20">
            <svg
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,100 L0,100 Z"
                fill="#000000"
                className="w-full h-full"
              />
            </svg>
          </div>
        </div>
      </section>

{/* ===== Unfair Advantages section (place before <TestimonialsMasonry />) ===== */}
<section className="relative bg-black text-white py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    {/* Title */}
    <h2
      className="text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-12"
      style={{ fontFamily: "Recursive, sans-serif" }}
    >
      Unfair{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA7BBF] to-[#FFD350]">
        Advantages
      </span>{" "}
      You Will Gain from Us
    </h2>

    {/* Top row: copy + art + side arrows */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Left: copy */}
      <div>
        <h3
          className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Multi-Platform SEO Optimization
        </h3>
        <p
          className="mt-3 text-sm text-white/80 max-w-md"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          We combine technical SEO, on-page refinement, content strategy, and
          authority building to lift your rankings across Google, Bing, and
          more. Our team maps intent, clusters keywords, and optimizes site
          speed, Core Web Vitals, internal linking, and schema for durable wins.
        </p>
      </div>

      {/* Right: illustration with pink circle arrows */}
      <div className="relative">
        {/* left arrow */}
        <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>

        <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl">
          {/* use your existing asset */}
          <Image
            src="/services/seo/cone.png"
            alt="SEO multi-platform illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* right arrow */}
        <span className="absolute -right-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>

    {/* Six step pills */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {[
        "Audit & Analysis",
        "Keyword Strategy",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Monitoring & Growth",
      ].map((label, idx) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-full bg-[#FFD350] px-4 py-3 text-black"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EA7BBF] text-white font-bold">
            {idx + 1}
          </span>
          <span className="font-bold text-sm uppercase" style={{ fontFamily: "Recursive, sans-serif" }}>
            {label}
          </span>
        </div>
      ))}
    </div>

    {/* Sub-heading + CTA */}
    <div className="text-center mt-6">
      <p
        className="text-[16px] sm:text-[18px] tracking-wide uppercase text-white/70"
        style={{ fontFamily: "Recursive, sans-serif", fontWeight: "bold" }}
      >
        Our Seamless 6-step process for efficient and effective Results.
      </p>
      <Link
        href="/contact"
        className="mt-4 inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-white rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        GET STARTED
      </Link>
    </div>

    {/* Bottom split: art left, copy right */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Left art */}
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl ">
        <Image
          src="/services/seo/seoguys.png"
          alt="SEO team working"
          fill
          className="object-contain"
        />
      </div>

      {/* Right copy */}
      <div>
        <h3
          className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Why SEO is important for your business?
        </h3>
        <p
          className="mt-3 text-sm text-white/80"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          SEO compounds. It drives qualified traffic, reduces CAC, and boosts
          credibility by placing your brand where buyers search. With strong
          technical foundations, high-intent content, and healthy backlinks,
          your website turns into a 24/7 acquisition engine that keeps growing
          even when ads pause.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function SEOProcessTabs() {
  const steps = [
    {
      title: "Discover & Define",
      desc:
        "Your business goals are analyzed, your target keywords are identified, and your SEO strategy is refined. We understand what your SEO needs to achieve, who it serves, and the search experience to deliver—all distilled into a clear SEO roadmap.",
      logo: "/services/seo/taba.png"
    },
    { 
      title: "Audit & Analysis",
      desc:
        "Technical SEO audit and content analysis to identify optimization opportunities. We analyze your site structure, identify issues, and design SEO plans that increase rankings.",
      logo: "/services/logo/logoc.png"
    },
    { 
      title: "Keyword Strategy",
      desc:
        "Keyword research and content strategy. We choose the right keywords, topics, and content angles to rank effectively and drive qualified traffic.",
      logo: "/services/logo/logod.png"
    },
    { 
      title: "Content & Optimization",
      desc:
        "On-page optimization, content creation, and technical improvements. We build SEO-friendly content with clean, optimized HTML that search engines love.",
      logo: "/services/logo/logoe.png"
    },
    { 
      title: "Testing & Monitoring",
      desc:
        "Performance tracking, ranking monitoring, and analytics analysis. We ensure your SEO works flawlessly across all search engines and platforms.",
      logo: "/services/logo/logof.png"
    },
    { 
      title: "Launch & Support",
      desc:
        "SEO implementation, reporting delivery, and ongoing optimization. We provide comprehensive support to keep your SEO performing smoothly.",
      logo: "/services/seo/cone.png"
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      {/* Left: active tab logo image */}
      <div className="relative mx-auto w-full max-w-[520px]">
        <Image
          src={steps[active].logo}
          alt={`Process for ${steps[active].title}`}
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-[0_22px_40px_rgba(0,0,0,.25)]"
          priority
        />
      </div>

      {/* Middle: active step title with yellow circle + arrow and paragraph */}
      <div className="max-w-xl">
        <h3
          className="inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-black"
          style={{ fontFamily: 'Recursive, sans-serif' }}
        >
          {/* yellow circle with arrow */}
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" className="-translate-x-[1px]">
              <path d="M6 18L18 6M18 6H9M18 6V15"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {steps[active].title}
        </h3>
        <p
          className="mt-3 text-sm sm:text-base text-black/90" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {steps[active].desc}
        </p>
      </div>

      {/* Right: vertical tabs (simple list, no big card) */}
      <nav aria-label="Process steps" className="lg:pl-4">
        <ul className="space-y-3">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title}>
                <button
                  onMouseEnter={() => setActive(i)}   // desktop hover
                  onFocus={() => setActive(i)}         // keyboard
                  onClick={() => setActive(i)}         // mobile tap
                  className={[
                    "group w-full text-left uppercase font-extrabold tracking-wide",
                    "transition rounded-xl px-4 py-2",
                    isActive ? "text-black" : "text-black/75 hover:text-black",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        isActive ? "bg-[#FFD350]" : "bg-black/50 group-hover:bg-[#FFD350]"
                      ].join(" ")}
                    />
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

/** Single pass of scrolling text for the ribbon */
function RibbonText() {
  return (
    <div className="flex items-center">
      <Image
        src="/services/smart.png"
        alt="Smart Solutions That Drive Success"
        width={800}
        height={68}
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}
