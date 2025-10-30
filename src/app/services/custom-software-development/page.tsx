"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Pink background with white text (same styling as SMM) */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/softwaredev/hero.png"
            alt="Custom software development illustration"
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
                    CUSTOM SOFTWARE DEVELOPMENT
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      BUILD SCALABLE SOLUTIONS
                    </span>
                  </h1>

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

                <p
                  className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  We design and build secure, scalable, and high performance software tailored to your business. From discovery and architecture to deployment and support, we deliver reliable systems that grow with you.
                </p>

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

            {/* Right visual for mobile */}
            <div className="md:hidden mt-8">
              <div className="relative h-[260px] sm:h-[320px] w-full">
                <Image
                  src="/services/smm/icons.png"
                  alt="Software development illustration"
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
      

      {/* About Section (keeps layout/colors) */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/smm/about.png"
                  alt="Custom software engineering"
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
                  Software built to <span className="text-[#EA7BBF]">accelerate growth</span>
                </h2>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse delivers reliability
                </h3>

                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We craft web, mobile, and platform applications with clean architecture, robust security, and exceptional UX. Whether modernizing legacy systems or building from scratch, our teams ship fast, iterate safely, and focus on measurable outcomes.
                </p>

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
          <div className="absolute top-0 left-0 w-full h-102">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-36 py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-black font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Engineering Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Engineering Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Showcase (reuse layout/images for now) */}
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
            <div className="relative h-[120vh] sm:h-[120vh] lg:h-[120vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/smm/work.png"
                alt="Software project showcase"
                width={800}
                height={800}
                sizes="100vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Tabs (renamed for software lifecycle) */}
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
            Your Software to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            From discovery to deployment, we build maintainable, scalable products with a strong delivery cadence and transparent communication.
          </p>
        </div>

        <SoftwareProcessTabs />
      </section>

      {/* Wavy Bottom Separator (kept) */}
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

      {/* Benefits Section (same layout/colors, software copy) */}
      <section className="relative bg-black text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="text-center text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-10"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Benefits of Custom Software Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10">
            <div>
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Built for Your Business
              </h3>
              <p
                className="mt-3 text-sm text-white/80 max-w-md"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Align software with workflows, integrate with existing systems, and unlock efficiencies impossible with off‑the‑shelf tools.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/services/smm/caone.png"
                  alt="Engineering illustration"
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

          <div className="relative py-10 mx-auto max-w-4xl">
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl">
              <Image
                src="/services/smm/icons.png"
                alt="Tech stack icons"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <Link
              href="/contact"
              className="inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-black rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GET STARTED
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl">
              <Image
                src="/services/smm/target.png"
                alt="Scalable architecture"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Scale Confidently
              </h3>
              <p
                className="mt-3 text-sm text-white/80"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Modern architectures, cloud‑native patterns, and strong DevOps give your product headroom to grow without slowing down delivery.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="order-2 md:order-1">
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Why Custom Software?
              </h3>
              <p
                className="mt-3 text-sm text-white/80"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Own your roadmap, avoid vendor lock‑in, and differentiate faster. Tailored products let teams move with clarity and confidence.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/services/smm/annoucement.png"
                  alt="Roadmap announcement"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function SoftwareProcessTabs() {
  const steps = [
    {
      title: "Discovery & Planning",
      desc:
        "We clarify goals, map requirements, and define architecture and scope to de‑risk delivery.",
      logo: "/services/smm/rocket.png",
    },
    {
      title: "UI/UX Design",
      desc:
        "Design systems and user flows that are intuitive, accessible, and aligned with your brand.",
      logo: "/services/logo/logoc.png",
    },
    {
      title: "Development",
      desc:
        "Clean, testable code with CI/CD, code reviews, and high standards for reliability and security.",
      logo: "/services/logo/logod.png",
    },
    {
      title: "Testing & QA",
      desc:
        "Automated and manual testing to ensure performance, correctness, and a smooth user experience.",
      logo: "/services/logo/logoe.png",
    },
    {
      title: "Deployment",
      desc:
        "Cloud‑ready releases with infrastructure as code, monitoring, and rollback strategies.",
      logo: "/services/logo/logof.png",
    },
    {
      title: "Maintenance & Support",
      desc:
        "Ongoing improvements, observability, and support so your product keeps delivering value.",
      logo: "/services/smm/target.png",
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

      {/* Middle: active step title + paragraph */}
      <div className="max-w-xl">
        <h3
          className="inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-black"
          style={{ fontFamily: 'Recursive, sans-serif' }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" className="-translate-x-[1px]">
              <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Right: vertical tabs */}
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

function RibbonText() {
  return (
    <div className="flex items-center">
      <Image
        src="/services/smart.png"
        alt="Smart Software That Drives Success"
        width={800}
        height={68}
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}


