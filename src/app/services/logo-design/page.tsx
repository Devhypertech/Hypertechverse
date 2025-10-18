"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function LogoDesignPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FF69B4] text-white">
        {/* Fixed blurred background image */}
        <div className="absolute bottom-0 right-0 opacity-100 z-0">
          <Image
            src="/services/logo/heroside.png"
            width={400}
            height={350}
            alt="Background Design Element"
            className="object-cover object-right-bottom"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid items-center justify-center gap-10 pt-20 pb-4 lg:grid-cols-2 lg:pt-40 lg:pb-8">
            {/* Left copy */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                {/* headline + arrow badge */}
                <div className="relative inline-block">
                  <h1 className="leading-[0.9] font-black uppercase text-[32px] sm:text-[48px] lg:text-[64px] text-white" style={{ fontFamily: "Recursive, sans-serif" }}>
                    BUILD YOUR IDENTITY WITH THE BEST LOGO DESIGN AGENCY
                  </h1>

                  {/* yellow arrow badge overlapping the word */}
                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-10 top-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-[#FFD700] text-black shadow-[0_10px_0_rgba(0,0,0,0.25)] hover:translate-y-[-48%] transition-transform"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="translate-x-[1px] translate-y-[-1px]">
                      <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* description */}
                <p className="mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed font-medium text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  NEED A LOGO THAT STANDS OUT? OUR EXPERT LOGO DESIGN SERVICES CREATE MEMORABLE, IMPACTFUL LOGOS THAT PERFECTLY REPRESENT YOUR BRAND.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#FFD700] px-8 py-4 text-lg font-extrabold text-black shadow-[0_8px_0_rgba(0,0,0,0.25)] transition hover:-rotate-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    LET'S GET STARTED
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right art */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[560px]">
                  {/* Main hero image */}
                  <Image
                    src="/services/logo/heroimg.png"
                    alt="Logo Design Woman Illustration"
                    width={900}
                    height={900}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            </ScrollAnimation>
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

      {/* Logo Design Section */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/logo/about.png"
                  alt="Logo Design Professional"
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
                  Logo that defines your <span className="text-[#EA7BBF]">Destiny</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse blends innovation
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What makes us the best logo design company? Hypertech Verse brings your brand to life with attractive logos that represent it. Our expert designers work with you to grasp your business aims and goals and make a place with your target crowd. From a newly launched business to the resurgence of an old-aged brand, our logo design services give you creative, unique, and memorable solutions to help your public remember you.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC107] transition-colors"
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
                  Our Collection of Branding Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Branding Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Tilted Logo Slides — fits screen like reference */}
<section className="relative bg-black overflow-hidden">
  {/* total canvas height: ~65–72vh depending on breakpoint */}
  <div className="mx-auto w-full max-w-[2000px] py-8 sm:py-10 lg:py-12">

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

    {/* ============ ROW 1 ============ */}
    <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
      <div className="relative h-[38vh] sm:h-[30vh] lg:h-[42vh] overflow-hidden rounded-2xl">
        <Image
          src="/services/logo/slide1.png"
          alt="Logo strip 1"
          width={2000}
          height={800}
          priority
          sizes="140vw"
          className="h-full w-[140vw] max-w-none object-cover animate-pan-left"
        />
      </div>
    </div>

    <div className="h-[2.5vh]" />

    {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
    <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
      <div className="relative h-[38vh] sm:h-[30vh] lg:h-[42vh] overflow-hidden rounded-2xl">
        <Image
          src="/services/logo/slide2.png"
          alt="Logo strip 2"
          width={2000}
          height={800}
          sizes="140vw"
          className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
        />
      </div>
    </div>

    <div className="h-[2.5vh]" />

    {/* ============ ROW 3 ============ */}
    <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
      <div className="relative h-[38vh] sm:h-[30vh] lg:h-[42vh] overflow-hidden rounded-2xl">
        <Image
          src="/services/logo/slide3.png"
          alt="Logo strip 3"
          width={2000}
          height={800}
          sizes="140vw"
          className="h-full w-[140vw] max-w-none object-cover animate-pan-left"
        />
      </div>
    </div>  
  </div>
</section>

      {/* Pink Process (bg.png + vertical tabs) */}
      <section className="relative overflow-hidden py-16 sm:py-20 text-white">
        {/* solid pink base + decorative shape */}
        <div className="absolute inset-0 -z-20 bg-[#EA7BBF]" />
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
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Brands to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-white/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Designing your brand logo has become easy and pleasant. You'll have a pleasant and
            customized experience with us, from discovery to concepting and creating your
            logo design experience. We define your visual identity, plan the concept, and craft a
            scalable logo that speaks your brand—then deliver the brand toolkit you need.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <PinkProcessTabs />
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

      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function PinkProcessTabs() {
  const steps = [
    {
      title: "Discover & Define",
      desc:
        "Your brand is interpreted, your logo and core values are refined. We identify what your brand stands for, who it serves, and the tone to communicate—all distilled into a clear direction before sketching.",
      logo: "/services/logo/logob.png"
    },
    { 
      title: "Inspiration Ignition",
      desc:
        "Mood boards and theme exploration to spark styles, colors, and typography that align with the strategy. We pick visual lanes that feel uniquely you.",
      logo: "/services/logo/logoc.png"
    },
    { 
      title: "Sketch the Spark",
      desc:
        "Low-fidelity thumbnails and quick iterations explore shapes and symbolism. We chase the strongest ideas and test readability early.",
      logo: "/services/logo/logod.png"
    },
    { 
      title: "Design & Refine",
      desc:
        "Vectorization, spacing, weights, and color tuning. We build viable variations and stress-test across sizes and backgrounds.",
      logo: "/services/logo/logoe.png"
    },
    { 
      title: "Collaborate & Polish",
      desc:
        "Tight feedback loops, accessibility checks, and finishing touches. When it's right, you'll feel it immediately.",
      logo: "/services/logo/logof.png"
    },
    { 
      title: "Deliver Your Identity",
      desc:
        "Exports for every context (SVG/PNG/PDF), color specs, typography, usage notes, and a simple brand guide.",
      logo: "/services/logo/logob.png"
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      {/* Left: active tab logo image */}
      <div className="relative mx-auto w-full max-w-[520px]">
        <Image
          src={steps[active].logo}
          alt={`Logo for ${steps[active].title}`}
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-[0_22px_40px_rgba(0,0,0,.25)]"
          priority
        />
      </div>

      {/* Middle: active step title with yellow circle + arrow and paragraph */}
      <div className="max-w-xl">
        <h3
          className="inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold"
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
          className="mt-3 text-sm sm:text-base text-white/90" 
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
                    isActive ? "text-white" : "text-white/75 hover:text-white",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        isActive ? "bg-[#FFD350]" : "bg-white/50 group-hover:bg-[#FFD350]"
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

/** Ribbon image component for marquee */
function RibbonImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mx-4">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={128}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
