"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function BrandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — Yellow background with black text */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/branding/hero.png"
            alt="Branding illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container (centered vertically) */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 sm:py-16 md:py-0">
              <div className="max-w-2xl">
                {/* Headline */}
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-2xl sm:text-3xl md:text-[36px] lg:text-[48px] xl:text-[56px] px-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    BRANDING
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                      IDENTITY
                    </span>
                  </h1>

                  {/* Pink round arrow badge */}
                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#EA7BBF] text-white shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6 translate-x-[1px]">
                      <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Subtext */}
                <p
                  className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed font-medium px-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Create a powerful brand identity that resonates with your audience. We specialize in crafting
                  memorable brands that tell your story, build trust, and drive business growth through strategic design and creative excellence.
                </p>

                {/* CTA */}
                <div className="mt-6 sm:mt-8 px-2">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#EA7BBF] px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 text-sm sm:text-base md:text-lg font-extrabold text-white shadow-[0_6px_0_rgba(0,0,0,0.25)] sm:shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    LET&apos;S GET STARTED
                  </Link>
                </div>
              </div>
            </div>

            {/* Right visual for mobile (below content) */}
            <div className="md:hidden mt-6 sm:mt-8">
              <div className="relative h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] w-full">
                <Image
                  src="/services/branding/hero.png"
                  alt="Branding illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#1d1d1d]">
          <div className="relative h-[56px] sm:h-[68px] overflow-hidden">
            <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee-x">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/branding/about.png"
                  alt="Branding Professional"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Main headline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FBEAE2] leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Brands that define your <span className="text-[#EA7BBF]">Digital Presence</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Where strategy meets creative excellence.
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What makes us the best branding company? Hypertech Verse transforms your brand vision into powerful identities that connect with your audience. Our expert designers create compelling brand experiences across all platforms, delivering cohesive solutions that grow with your business. From strategy to execution, we build brands that drive engagement and deliver results.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#EA7BBF] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#d068a5] transition-colors"
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
      <section className="relative bg-[#1d1d1d] overflow-hidden py-12 sm:py-14 md:py-16">
        <div className="relative w-full h-24 sm:h-28 md:h-36">
          {/* Yellow tilted box - static bar */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-4 sm:px-8 md:px-16 lg:px-36 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-black font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Branding Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Branding Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Branding Slides */}
      <section className="relative bg-[#1d1d1d] overflow-hidden">
        {/* total canvas height: ~65–72vh depending on breakpoint */}
        <div className="mx-auto w-full max-w-[2000px] py-3 sm:py-4 md:py-6 lg:py-8">

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

          <div className="h-[1vh] sm:h-[1.5vh] md:h-[2vh] lg:h-[3.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[100vh] md:h-[110vh] lg:h-[120vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/services/branding/work.png"
                alt="Branding Portfolio"
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
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-white">
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Brands to Life
          </h2>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-black/90 px-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hypertech Verse is a major creative branding and designing firm, which focuses on developing strong and memorable brands that are notable among competitive markets. We provide a full range of services, including brand strategy, logo design, brand naming, package design, rebranding, and the creation of custom collateral. We are a professional graphic design firm that assists companies to get success over the long term.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <BrandingProcessTabs />
      </section>

      {/* Wavy Bottom Section */}
      <section className="relative overflow-hidden">
        {/* Pink top section */}
        <div className="relative bg-[#EA7BBF] h-24 sm:h-32 md:h-40 lg:h-48">
          {/* Wavy SVG separator */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20">
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

      {/* Elite Branding Agency Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Section: Elite Branding Agency */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left side - Content */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Main headline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  BRANDING
                  <span className="text-[#EA7BBF]"> IDENTITY</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Create a powerful brand identity that resonates with your audience. We specialize in crafting
                  memorable brands that tell your story, build trust, and drive business growth through strategic design and creative excellence.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#EA7BBF] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#d068a5] transition-colors transform -rotate-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right side - Image */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="relative">
                <Image
                  src="/services/branding/gd.png"
                  alt="Elite Branding Team Collaboration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1d1d1d] py-6 sm:py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <BrandingSuccessCarousel />
        </div>
      </section>

      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function BrandingProcessTabs() {
  const steps = [
    {
      title: "Brand Strategy Services",
      desc:
        "Hypertech Verse provides strategic brand services that help businesses achieve their maximum results. The beginning of your brand development involves market research, audience analytics, and competitor analysis to establish current market conditions. We develop long-term strategic planning, establishing your brand's position in the market. Through this approach, your business will excel in competitive markets. We build consistent growth strategies through our team, which helps startups as well as established enterprises build strong customer relations and achieve lasting growth. We work together with our graphic design and branding services to develop enduring, recognizable identities that will leave a lasting impact.",
      logo: "/services/branding/tab.png"
    },
    {
      title: "Logo Design & Style Guiding",
      desc:
        "Your brand relies on its logo to represent it; therefore, we approach logo development with dignity. Our creative graphic design agency builds visual logo concepts that both showcase branding alignment as well as attractive aesthetics. Creating your logo follows a method that starts with extensive discovery meetings and continues through multiple design adaptations. Our service extends past logo development since we provide complete style direction. We provide rules for color selection, typestyle standards, graphical symbols, and their application within both digital and physical platforms. We will deliver assets that deliver appealing aesthetics and operational functionality through our position as a prominent graphic design company. ",
      logo: "/services/logo/logoc.png"
    },
    {
      title: "Brand Naming",
      desc:
        "In brand development, selecting a suitable name is a vital aspect that many fail to consider appropriately. Brand naming services form a part of our complete branding service portfolio, which we provide to our clients. Our research measures both linguistic patterns along with cultural relevance to domain availability and trademark conflicts in order to confirm the name's complete viability. Our professional branding agency recognizes how an effective name creates specific perceptions while building strong connections between people and brands. Our affordable graphic design services expand your brand visibility through influential logos and branding elements to create an industry-leading position.",
      logo: "/services/logo/logod.png"
    },
    {
      title: "Brand Package Designs",
      desc:
        "The first impression creates an essential impact that specifically affects retail stores, together with digital marketplaces. Our brand package design services dedicate themselves to elements beyond typical visual attractiveness. We operate as one of the most significant graphic design companies that develop both practical packaging utilities and engaging visual storytelling.  Through our position as a leading graphic designing company, we deliver packages that use your brand language through every design element, including fonts and colors. We customize every package according to your branding targets. Brands who want wholesale value with authentic professional graphic design solutions should turn to these solutions.",
      logo: "/services/logo/logoe.png"
    },
    {
      title: "Professional Rebranding Service",
      desc:
        "Hypertech Verse provides professional rebranding services as a comprehensive strategic transformation that helps businesses find new growth through relevant market positioning. I guide branding agencies through a custom approach to refine their brand voice, messaging, and visual identity based on present market demands. Our professional team uses brand identity services and professional graphic design services to simplify complex rebranding projects and achieve measurable outcomes. Our graphic design company guarantees that all elements. During the design process for your brand refreshment. The services provided by our company help businesses receive long-term value through improved brand perception and strengthened audience relationships.",
      logo: "/services/logo/logof.png"
    },
    {
      title: "Custom Collateral Design Service",
      desc:
        "Branded collateral is more than marketing material—it’s an extension of your brand identity. Our custom collateral design service incorporates complete products such as brochures, digital templates, presentation decks, together with flyers, business cards. The full-service aspect of our graphic design agency guarantees that every piece of collateral both captures your brand standard. Our professional experience in graphic design and branding services lets us create assets that fulfill business targets and resonate with specific audience needs. The company delivers motion graphics design services to enable your brand to achieve engaging visual movement during storytelling. As a graphic design agency, we provide cost-effective benefits to our clients.",
      logo: "/services/branding/webscale.png"
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      {/* Left: active tab logo image */}
      <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px]">
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
      <div className="max-w-xl text-center lg:text-left">
        <h3
          className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold text-black justify-center lg:justify-start"
          style={{ fontFamily: 'Recursive, sans-serif' }}
        >
          {/* yellow circle with arrow */}
          <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_3px_0_rgba(0,0,0,0.25)] sm:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] -translate-x-[1px]">
              <path d="M6 18L18 6M18 6H9M18 6V15"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {steps[active].title}
        </h3>
        <p
          className="mt-3 text-xs sm:text-sm md:text-base text-black/90 leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {steps[active].desc}
        </p>
      </div>

      {/* Right: vertical tabs (simple list, no big card) */}
      <nav aria-label="Process steps" className="lg:pl-4">
        <ul className="space-y-2 sm:space-y-3">
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
                    "transition rounded-xl px-3 py-2 sm:px-4 sm:py-2",
                    "text-sm sm:text-base",
                    isActive ? "text-black" : "text-black/75 hover:text-black",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span
                      className={[
                        "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition",
                        isActive ? "bg-[#FFD350]" : "bg-[#1d1d1d]/50 group-hover:bg-[#FFD350]"
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

function BrandingSuccessCarousel() {
  const slides = [
    {
      img: "/services/branding/cone.png",
      headlineLeft: "PRIORITIZING CLIENTS AND PARTNERS:",
      headlineRight: "DEDICATED TO YOUR SUCCESS AT EVERY STEP",
      sub:
        "Our Branding Strategy Ensures Seamless Brand Identity Design Services From Idea To Deployment, With Close Collaboration Resulting In Refined Details. Our Focus Is On Producing Beautiful, Fulfilling Brand Identities.",
      cta: { label: "GET STARTED", href: "/contact" },
    },
    {
      img: "/services/branding/work.png",
      headlineLeft: "DELIVERING VALUE:",
      headlineRight: "FAST ITERATIONS • CLEAR RESULTS",
      sub:
        "We Build In Tight Loops, Test On Real Audiences, And Ship Small Wins Frequently—So You See Momentum And Measurable Progress.",
      cta: { label: "LET'S TALK", href: "/contact" },
    },
    {
      img: "/services/branding/support.png",
      headlineLeft: "END-TO-END SUPPORT:",
      headlineRight: "STRATEGY • DESIGN • BUILD • GROW",
      sub:
        "From Discovery To Launch And Beyond—We Handle Brand Strategy, Visual Identity, Performance, Applications, And Ongoing Improvements.",
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
              idx === i ? "bg-[#EA7BBF]" : "bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>

      {/* stage */}
      <div
        className="relative rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#000000] p-2 sm:p-3 md:p-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* image frame */}
        <div className="relative mx-auto aspect-[16/8.8] w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#000000]">
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
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 place-items-center rounded-full bg-[#EA7BBF] text-white shadow-md hover:scale-105 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="sm:w-5 sm:h-5 md:w-[26px] md:h-[26px]">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={() => go(i + 1)}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 place-items-center rounded-full bg-[#EA7BBF] text-white shadow-md hover:scale-105 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="sm:w-5 sm:h-5 md:w-[26px] md:h-[26px]">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>

        {/* captions + CTA */}
        <div className="px-2 sm:px-4 pb-4 sm:pb-6 pt-4 sm:pt-5 text-center">
          <h3
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight uppercase tracking-wide px-2"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            <span className="text-white">{slides[i].headlineLeft}&nbsp;</span>
            <span className="text-[#EA7BBF]">{slides[i].headlineRight}</span>
          </h3>
          <p
            className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] text-white/80 max-w-3xl mx-auto leading-tight capitalize px-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {slides[i].sub}
          </p>

          <Link
            href={slides[i].cta.href}
            className="mt-3 sm:mt-4 inline-block -rotate-3 bg-[#EA7BBF] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base text-white font-extrabold rounded-md shadow-[0_4px_0_rgba(0,0,0,.25)] sm:shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {slides[i].cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
