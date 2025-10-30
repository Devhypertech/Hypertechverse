"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function PaidAdvertisingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Yellow background with black text (same as SEO) */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/paidadversting/hero.png"
            alt="Paid advertising illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 md:py-0">
              <div className="max-w-2xl">
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[56px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    PAID ADVERTISING
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      SCALABLE GROWTH
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

                <p
                  className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Launch high‑ROI ad campaigns across Google, Meta, and more. We plan, launch, and optimize ads to acquire customers efficiently with clear, measurable results.
                </p>

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

            {/* Right visual for mobile */}
            <div className="md:hidden mt-8">
              <div className="relative h-[260px] sm:h-[320px] w-full">
                <Image
                  src="/services/paidadversting/hero.png"
                  alt="Paid advertising illustration"
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

      {/* About Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/paidadversting/about.png"
                  alt="Paid advertising expert"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Ads that drive your <span className="text-[#EA7BBF]">Revenue Growth</span>
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#EA7BBF]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse delivers results
                </h3>

                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We design and manage campaigns across search, social, and display. With data‑driven targeting, creative testing, and ongoing optimization, we lower CAC and scale profitably.
                </p>

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
          <div className="absolute top-0 left-0 w-full h-102">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-36 py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-black font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Paid Advertising Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Paid Advertising Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tilted Slides */}
      <section className="relative bg-black overflow-hidden">
        <div className="mx-auto w-full max-w-[2000px] py-4 sm:py-6 lg:py-8">
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

          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[80vh] lg:h-[80vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/paidadversting/work.png"
                alt="Paid advertising portfolio"
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
        <div className="absolute inset-0 -z-20 bg-[#FFD350]" />
        <Image
          src="/services/logo/bg.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none select-none"
        />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your Paid Ads to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Building your paid acquisition becomes predictable with our approach—from discovery to targeting, creative testing, and scaling.
          </p>
        </div>

        <PAProcessTabs />
      </section>

      {/* Wavy Bottom Section */}
      <section className="relative overflow-hidden">
        <div className="relative bg-[#EA7BBF] h-32 sm:h-40 lg:h-48">
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

      {/* Advantages section (mirrors SEO) */}
      <section className="relative bg-black text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-12"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Unfair <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA7BBF] to-[#FFD350]">Advantages</span> You Will Gain from Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: "Recursive, sans-serif" }}>
                Multi-Platform Ad Strategy
              </h3>
              <p className="mt-3 text-sm text-white/80 max-w-md" style={{ fontFamily: "Poppins, sans-serif" }}>
                We combine search, social, and display with precise targeting, creative iteration, and budget control to maximize ROAS.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/services/paidadversting/cone.png"
                  alt="Paid ads platforms"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["Research & Targeting","Creative Testing","Budget & Bidding","Funnel Alignment","Landing Pages","Monitoring & Scale"].map((label, idx) => (
              <div key={label} className="flex items-center gap-3 rounded-full bg-[#FFD350] px-4 py-3 text-black">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EA7BBF] text-white font-bold">{idx + 1}</span>
                <span className="font-bold text-sm uppercase" style={{ fontFamily: "Recursive, sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-[16px] sm:text-[18px] tracking-wide uppercase text-white/70" style={{ fontFamily: "Recursive, sans-serif", fontWeight: "bold" }}>
              Our Seamless 6-step process for efficient and effective Results.
            </p>
            <Link href="/contact" className="mt-4 inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-white rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition" style={{ fontFamily: "Poppins, sans-serif" }}>
              GET STARTED
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl ">
              <Image src="/services/paidadversting/seoguys.png" alt="Campaign team working" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: "Recursive, sans-serif" }}>
                Why Paid Advertising matters for your business?
              </h3>
              <p className="mt-3 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                Paid ads provide immediate reach and measurable impact. With tight feedback loops, you can test offers, validate markets, and scale winners fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsMasonry />
    </main>
  );
}

function PAProcessTabs() {
  const steps = [
    { title: "Discover & Define", desc: "Clarify goals, audiences, and channels; design an ads roadmap.", logo: "/services/paidadversting/taba.png" },
    { title: "Audit & Analysis", desc: "Account, pixel, and funnel audit to identify optimization opportunities.", logo: "/services/logo/logoc.png" },
    { title: "Targeting & Creative", desc: "Audience hypotheses, creative angles, and messaging frameworks.", logo: "/services/logo/logod.png" },
    { title: "Launch & Optimize", desc: "Deploy campaigns with structured tests and rapid iteration.", logo: "/services/logo/logoe.png" },
    { title: "Measure & Scale", desc: "Track KPIs, attribution, and scale profitable segments.", logo: "/services/logo/logof.png" },
    { title: "Support & Growth", desc: "Ongoing improvements, reporting, and growth planning.", logo: "/services/paidadversting/cone.png" },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      <div className="relative mx-auto w-full max-w-[520px]">
        <Image src={steps[active].logo} alt={`Process for ${steps[active].title}`} width={400} height={400} className="w-full h-auto drop-shadow-[0_22px_40px_rgba(0,0,0,.25)]" priority />
      </div>

      <div className="max-w-xl">
        <h3 className="inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-black" style={{ fontFamily: 'Recursive, sans-serif' }}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" className="-translate-x-[1px]"><path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {steps[active].title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-black/90" style={{ fontFamily: 'Poppins, sans-serif' }}>{steps[active].desc}</p>
      </div>

      <nav aria-label="Process steps" className="lg:pl-4">
        <ul className="space-y-3">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={["group w-full text-left uppercase font-extrabold tracking-wide","transition rounded-xl px-4 py-2",isActive ? "text-black" : "text-black/75 hover:text-black"].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-3">
                    <span className={["h-2.5 w-2.5 rounded-full transition",isActive ? "bg-[#FFD350]" : "bg-black/50 group-hover:bg-[#FFD350]"].join(" ")}/>
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

function RibbonText() {
  return (
    <div className="flex items-center">
      <Image src="/services/smart.png" alt="Smart Solutions That Drive Success" width={800} height={68} className="h-full w-auto object-contain" />
    </div>
  );
}


