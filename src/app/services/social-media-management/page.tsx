"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — Pink background with white text */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/smm/hero.png"
            alt="Social media management illustration"
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
                    SOCIAL MEDIA MANAGEMENT
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      GROW YOUR PRESENCE
                    </span>
                  </h1>

                  {/* Yellow round arrow badge */}
                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
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
                  Transform your social media presence with strategic content and engagement. We specialize in creating
                  dynamic social media campaigns that build your brand, drive traffic, and connect you with your audience across all platforms.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#FFD350] px-7 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold text-black shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
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
                  src="/services/smm/icons.png"
                  alt="Social media management illustration"
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

      {/* Social Media Management Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/smm/about.png"
                  alt="Social Media Management Professional"
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
                  Social media that drives <span className="text-[#EA7BBF]">Your Success</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse delivers engagement
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What makes us the best social media management company? Hypertech Verse transforms your digital presence into powerful social media campaigns that connect with your audience. Our expert team creates engaging content, manages your accounts, and delivers results that grow your brand across all platforms. From strategy to execution, we build social media that drives engagement and delivers results.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD350] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC107] transition-colors"
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
                  Our Collection of Social Media Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Social Media Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tilted Social Media Management Slides */}
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
            <div className="relative h-[120vh] sm:h-[120vh] lg:h-[120vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/smm/work.png"
                alt="Social Media Management Portfolio"
                width={800}
                height={800}
                sizes="100vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pink Process (bg.png + vertical tabs) */}
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
            Your Social Media to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Building your social media presence has become easy and pleasant. You&apos;ll have a pleasant and
            customized experience with us, from discovery to planning and creating your
            social media strategy. We define your digital strategy, plan the content, and craft a
            scalable social media presence that speaks your brand—then deliver the complete solution you need.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <SocialMediaProcessTabs />
      </section>

      {/* Wavy Bottom Section */}
      <section className="relative overflow-hidden">
        {/* Yellow top section */}
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


{/* Benefits of using Social Media Services */}
<section className="relative bg-black text-white py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    {/* Title */}
    <h2
      className="text-center text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-10"
      style={{ fontFamily: "Recursive, sans-serif" }}
    >
      Benefits of using Social Media Services
    </h2>

    {/* Targeted Audience Reach + Illustration + side arrows */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10">
      {/* Left copy */}
      <div>
        <h3
          className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Targeted Audience Reach
        </h3>
        <p
          className="mt-3 text-sm text-white/80 max-w-md"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Get in front of people who matter with hyper-focused content, smart
          scheduling, and analytics-driven optimizations. Target by interests,
          location, behavior, look-alikes, and more.
        </p>
      </div>

      {/* Right art with pink circle arrows (decorative) */}
      <div className="relative">
        {/* left arrow */}
        <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        {/* image */}
        <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl ">
          <Image
            src="/services/smm/caone.png"  // hero art for this block
            alt="Targeted audience illustration"
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

    {/* Icons grid (single image from your assets, like in ref) */}
    <div className="relative py-10 mx-auto max-w-4xl">
      <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl">
        <Image
          src="/services/smm/icons.png"
          alt="Social platforms"
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-2">
      <Link
        href="/contact"
        className="inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-black rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        GET STARTED
      </Link>
    </div>

    {/* ---- Feature row 1: Left image, right copy ---- */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl">
        <Image
          src="/services/smm/target.png"
          alt="Reach your target audience"
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h3
          className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Reach Your Target Audience
        </h3>
        <p
          className="mt-3 text-sm text-white/80"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Pinpoint the right demographics, interests, and behaviors. We use
          audience insights, content pillars, and paid boosts to put every post
          in front of the people who convert.
        </p>
      </div>
    </div>

    {/* ---- Feature row 2: Left copy, right image ---- */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div className="order-2 md:order-1">
        <h3
          className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Do you really need Social Media &amp; Digital Marketing
        </h3>
        <p
          className="mt-3 text-sm text-white/80"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Absolutely. From brand trust to sales, social is the fastest path to
          awareness and growth. Strategy + creative + analytics = compound
          returns across your funnel.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl ">
          <Image
            src="/services/smm/annoucement.png"
            alt="Digital marketing announcement"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function SocialMediaProcessTabs() {
  const steps = [
    {
      title: "Strategy & Planning",
      desc:
        "Your business goals are analyzed, your target audience is identified, and your social media strategy is refined. We understand what your social media needs to achieve, who it serves, and the engagement experience to deliver—all distilled into a clear content roadmap.",
      logo: "/services/smm/rocket.png"
    },
    { 
      title: "Content Creation",
      desc:
        "Creative content design and visual content to create engaging posts and viral layouts. We design social media content that feels natural and conversion-focused.",
      logo: "/services/logo/logoc.png"
    },
    { 
      title: "Platform Optimization",
      desc:
        "Platform-specific optimization and content scheduling. We choose the right content format, posting times, and engagement strategies for optimal reach and engagement.",
      logo: "/services/logo/logod.png"
    },
    { 
      title: "Community Management",
      desc:
        "Real-time engagement, comment responses, and community building. We build responsive, engaged communities with authentic interactions that grow your presence.",
      logo: "/services/logo/logoe.png"
    },
    { 
      title: "Analytics & Reporting",
      desc:
        "Performance tracking, engagement analysis, and ROI measurement. We ensure your social media delivers measurable results and continuous improvement.",
      logo: "/services/logo/logof.png"
    },
    { 
      title: "Growth & Optimization",
      desc:
        "Campaign scaling, A/B testing, and ongoing optimization. We provide comprehensive support to keep your social media growing steadily.",
      logo: "/services/smm/target.png"
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
function SocialMediaSuccessCarousel() {
  const slides = [
    {
      img: "/services/smm/caone.png", // change to your image path
      headlineLeft: "PRIORITIZING CLIENTS AND PARTNERS:",
      headlineRight: "DEDICATED TO YOUR SUCCESS AT EVERY STEP",
      sub:
        "OUR SOCIAL MEDIA STRATEGY ENSURES SEAMLESS CAMPAIGN MANAGEMENT FROM IDEA TO DEPLOYMENT, WITH CLOSE COLLABORATION RESULTING IN REFINED DETAILS. OUR FOCUS IS ON PRODUCING BEAUTIFUL, FULFILLING SOCIAL MEDIA CAMPAIGNS.",
      cta: { label: "GET STARTED", href: "/contact" },
    },
    {
      img: "/services/smm/work.png",
      headlineLeft: "DELIVERING VALUE:",
      headlineRight: "FAST ITERATIONS • CLEAR RESULTS",
      sub:
        "WE BUILD IN TIGHT LOOPS, TEST ON REAL AUDIENCES, AND SHIP SMALL WINS FREQUENTLY—SO YOU SEE MOMENTUM AND MEASURABLE PROGRESS.",
      cta: { label: "LET'S TALK", href: "/contact" },
    },
    {
      img: "/services/smm/rocket.png",
      headlineLeft: "END-TO-END SUPPORT:",
      headlineRight: "STRATEGY • CONTENT • ENGAGEMENT • GROW",
      sub:
        "FROM DISCOVERY TO LAUNCH AND BEYOND—WE HANDLE CONTENT, ENGAGEMENT, PERFORMANCE, ANALYTICS, AND ONGOING IMPROVEMENTS.",
      cta: { label: "BOOK A CALL", href: "/contact" },
    },
  ];

  const [i, setI] = React.useState(0);
  const len = slides.length;

  // autoplay (pause on hover)
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % len), 4000);
    return () => clearInterval(t);
  }, [paused, len]);

  // keyboard
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setI((p) => (p + 1) % len);
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + len) % len);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  // swipe
  const startX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) {
      setI((p) => (dx < 0 ? (p + 1) % len : (p - 1 + len) % len));
    }
    startX.current = null;
  };

  const go = (n: number) => setI(((n % len) + len) % len);

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* dots */}
      <div className="flex justify-center gap-2 pb-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
            className={[
              "h-2.5 w-2.5 rounded-full transition",
              idx === i ? "bg-[#FFD350]" : "bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>

      {/* stage */}
      <div
        className="relative rounded-3xl bg-[#000000] p-3 sm:p-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* image frame */}
        <div className="relative mx-auto aspect-[16/8.8] w-full overflow-hidden rounded-3xl bg-[#000000]">
          {/* simple fade */}
          {slides.map((s, idx) => (
            <Image
              key={idx}
              src={s.img}
              alt=""
              fill
              priority={idx === i}
              className={[
                "object-contain transition-opacity duration-500",
                idx === i ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>

        {/* arrows */}
        <button
          aria-label="Previous"
          onClick={() => go(i - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-[#EA7BBF] text-black shadow-md hover:scale-105 transition"
        >
          <svg width="26" height="26" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => go(i + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-[#EA7BBF] text-black shadow-md hover:scale-105 transition"
        >
          <svg width="26" height="26" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>

        {/* captions + CTA */}
        <div className="px-2 pb-6 pt-5 text-center">
          <h3
            className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold uppercase tracking-wide"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            <span className="text-white">{slides[i].headlineLeft}&nbsp;</span>
            <span className="text-[#EA7BBF]">{slides[i].headlineRight}</span>
          </h3>
          <p
            className="mt-2 text-[11px] sm:text-[12px] text-white/80 max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {slides[i].sub}
          </p>

          <Link
            href={slides[i].cta.href}
            className="mt-4 inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 text-black font-extrabold rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {slides[i].cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
