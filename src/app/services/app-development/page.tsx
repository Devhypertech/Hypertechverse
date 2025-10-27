"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — Pink background with white text */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/app/hero.png"
            alt="App development illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container (centered vertically) */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-16 md:py-0">
              <div className="max-w-2xl">
                {/* Headline */}
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[56px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    APP DEVELOPMENT
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      MOBILE FIRST
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
                  Transform your ideas into powerful mobile and web applications. We specialize in creating
                  innovative apps that engage users, drive business growth, and deliver exceptional digital experiences across all platforms.
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
                  src="/services/app/hero.png"
                  alt="App development illustration"
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

      {/* App Development Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/app/about.png"
                  alt="App Development Professional"
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
                  Apps that define your <span className="text-[#EA7BBF]">Digital Presence</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse blends innovation
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What makes us the best app development company? Hypertech Verse transforms your digital vision into powerful mobile and web applications that connect with your audience. Our expert developers create seamless user experiences across iOS, Android, and web platforms, delivering scalable solutions that grow with your business. From concept to deployment, we build apps that drive engagement and deliver results.
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
                  Our Collection of App Development Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of App Development Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tilted App Development Slides */}
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

          <div className="h-[2.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[140vh] sm:h-[140vh] lg:h-[140vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/app/work.png"
                alt="App Development Portfolio"
                width={1000}
                height={1200}
                sizes="140vw"
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
            Apps to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Building your app has become easy and pleasant. You&apos;ll have a pleasant and
            customized experience with us, from discovery to planning and creating your
            app development experience. We define your digital strategy, plan the architecture, and craft a
            scalable app that speaks your brand—then deliver the complete solution you need.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <AppProcessTabs />
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

      {/* Elite App Development Agency Section */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Section: Elite App Development Agency */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Content */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="space-y-6">
                {/* Main headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                APP DEVELOPMENT
                <span className="text-[#EA7BBF]">MOBILE FIRST</span>
                </h2>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Transform your ideas into powerful mobile and web applications. We specialize in creating
                innovative apps that engage users, drive business growth, and deliver exceptional digital experiences across all platforms.       
                  </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD350] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC107] transition-colors transform -rotate-3"
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
                  src="/services/app/devs.png"
                  alt="Elite App Development Team Collaboration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Section: Native App Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/app/manworking.png"
                  alt="Native App Development Professional"
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  NATIVE APP DEVELOPMENT FOR A SEAMLESS EXPERIENCE
                </h2>

                {/* Description */}
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  HYPERTECH VERSE CRAFTS NATIVE APPLICATIONS THAT DELIVER OPTIMAL PERFORMANCE, SEAMLESS USER EXPERIENCES, AND CROSS-PLATFORM INTEGRATION. OUR DESIGNS FOCUS ON SPEED, INTUITIVE NAVIGATION, AND MOBILE OPTIMIZATION TO KEEP USERS ENGAGED AND DRIVE CONVERSIONS. WE PRIORITIZE PERFORMANCE BY ALIGNING WITH INDUSTRY BEST PRACTICES, IMPROVING LOAD TIMES, APP RANKINGS, AND OVERALL FUNCTIONALITY. ENHANCE YOUR DIGITAL PRESENCE WITH A CONVENIENT AND USER-FRIENDLY APP. LET'S CREATE SOMETHING EXCEPTIONAL TOGETHER!
                </p>
              </div>
            </ScrollAnimation>
          </div>
      </div>
      </section>

      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function AppProcessTabs() {
  const steps = [
    {
      title: "Discover & Define",
      desc:
        "Your business goals are analyzed, your target audience is identified, and your app strategy is refined. We understand what your app needs to achieve, who it serves, and the user experience to deliver—all distilled into a clear development roadmap.",
      logo: "/services/app/taba.png"
    },
    { 
      title: "Design & Prototype",
      desc:
        "User experience design and visual mockups to create intuitive interfaces and engaging layouts. We design user flows that feel natural and conversion-focused.",
      logo: "/services/logo/logoc.png"
    },
    { 
      title: "Architecture Planning",
      desc:
        "Technical architecture and technology stack selection. We choose the right frameworks, databases, and infrastructure solutions for optimal performance and scalability.",
      logo: "/services/logo/logod.png"
    },
    { 
      title: "Development & Build",
      desc:
        "Native and cross-platform development, API integration, and backend setup. We build responsive, fast-loading apps with clean, maintainable code.",
      logo: "/services/logo/logoe.png"
    },
    { 
      title: "Testing & Optimization",
      desc:
        "Quality assurance, performance optimization, and cross-device testing. We ensure your app works flawlessly across all devices and platforms.",
      logo: "/services/logo/logof.png"
    },
    { 
      title: "Launch & Support",
      desc:
        "App store deployment, backend setup, and ongoing maintenance. We provide comprehensive support to keep your app running smoothly.",
      logo: "/services/app/webscale.png"
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
