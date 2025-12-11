"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../components/sections/home/cardreviews";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — like the screenshot */}
      <section className="relative overflow-hidden bg-[#FFD350] text-[#1d1d1d]">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/web/hero.png"
            alt="Web design illustration"
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
                    GO ONLINE WITH STUNNING
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                      WEB DESIGN
                    </span>
                  </h1>

                  {/* Pink round arrow badge */}
                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#EA7BBF] text-[#1d1d1d] shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
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
                  We craft beautiful websites that help customers take the desired action.
                  Our company leads web design and development services in the USA, delivering custom
                  digital solutions for businesses of all sizes.
                </p>

                {/* CTA */}
                <div className="mt-6 sm:mt-8 px-2">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#EA7BBF] px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 text-sm sm:text-base md:text-lg font-extrabold text-[#fff9f1] shadow-[0_6px_0_rgba(0,0,0,0.25)] sm:shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
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
                  src="/services/web/hero.png"
                  alt="Web design illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee (kept from your page) */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#1d1d1d]">
          <div className="relative h-[56px] sm:h-[68px] overflow-hidden">
            <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee-x">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>

        {/* Logos image after ribbon */}
        <div className="relative w-full bg-[#1d1d1d] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
            <div className="flex justify-center">
              <Image
                src="/services/logos.png"
                alt="Company Logos"
                width={1200}
                height={200}
                className="w-full h-auto max-w-6xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Web Development Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-[#fff9f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/web/dev.png"
                  alt="Web Development Professional"
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
                  Transforming Your Vision into a Powerful <span className="text-[#EA7BBF]">Brand Identity</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-lg sm:text-xl font-bold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We design with purpose. We build with passion.
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our web design strategy ensures seamless web app development services from idea to deployment, with close collaboration resulting in refined details. Our focus is on producing beautiful, fulfilling websites.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD700] text-[#1d1d1d] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#FFC107] transition-colors"
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
                <span className="text-[#1d1d1d] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Web Development Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-[#fff9f1] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Web Development Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Web Development Slides — fits screen like reference */}
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

          {/* ============ ROW 1 ============ */}
          {/* <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
      <div className="relative h-[38vh] sm:h-[30vh] lg:h-[42vh] overflow-hidden rounded-2xl">
        <Image
          src="/services/web/webscale.png"
          alt="Web Development Portfolio 1"
          width={2000}
          height={800}
          priority
          sizes="140vw"
          className="h-full w-[140vw] max-w-none object-cover animate-pan-left"
        />
      </div>
    </div> */}

          <div className="h-[1vh] sm:h-[1.5vh] md:h-[2vh] lg:h-[2.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[100vh] md:h-[120vh] lg:h-[140vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/services/web/uis.png"
                alt="Web Development Portfolio 2"
                width={1000}
                height={1200}
                sizes="140vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>

          {/* <div className="h-[2.5vh]" /> */}

          {/* ============ ROW 3 ============ */}
          {/* <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
      <div className="relative h-[38vh] sm:h-[30vh] lg:h-[42vh] overflow-hidden rounded-2xl">
        <Image
          src="/services/web/dev.png"
          alt="Web Development Portfolio 3"
          width={2000}
          height={800}
          sizes="140vw"
          className="h-full w-[140vw] max-w-none object-cover animate-pan-left"
        />
      </div>
    </div>   */}
        </div>
      </section>

      {/* Pink Process (bg.png + vertical tabs) */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-[#fff9f1]">
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Websites to Life
          </h2>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-[#fff9f1]/90 px-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hypertech Verse offers more than just website creation. We build digital platforms that attract users and drive successful outcomes. As the top web development company in the USA, we deliver digital excellence tailored to your goals. A dedicated Project Manager guides each project, ensuring optimal design and development aligned with your business vision.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <PinkProcessTabs />
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

      {/* Elite Web Design Agency Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-[#fff9f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Section: Elite Web Design Agency */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left side - Content */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Main headline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Go Online With Stunning
                  <span className="text-[#EA7BBF]"> WEB DESIGN</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We craft beautiful websites that help customers take the desired action. Our company leads web design and development services in the USA, delivering custom digital solutions for businesses of all sizes.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD700] text-[#1d1d1d] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#FFC107] transition-colors transform -rotate-3"
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
                  src="/services/web/devs.png"
                  alt="Elite Web Design Team Collaboration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Section: Responsive Web Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/web/manworking.png"
                  alt="Responsive Web Development Professional"
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
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  RESPONSIVE WEB DESIGN FOR A SMOOTH EXPERIENCE

                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We craft responsive websites that adapt seamlessly to any screen, ensuring a smooth and engaging user experience. Our designs focus on speed and mobile optimization to keep visitors engaged. We prioritize performance by aligning with Google's core web vitals, improving load times and SEO rankings. Enhance your online presence with a convenient and user-friendly design. Let's create something exceptional together!
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

function PinkProcessTabs() {
  const steps = [
    {
      title: "Discover & Define",
      desc:
        "Your business goals are analyzed, your target audience is identified, and your digital strategy is refined. We understand what your website needs to achieve, who it serves, and the user experience to deliver—all distilled into a clear development roadmap.",
      logo: "/services/web/webscale.png"
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
        "Technical architecture and technology stack selection. We choose the right frameworks, databases, and hosting solutions for optimal performance and scalability.",
      logo: "/services/logo/logod.png"
    },
    {
      title: "Development & Build",
      desc:
        "Frontend and backend development, API integration, and database setup. We build responsive, fast-loading websites with clean, maintainable code.",
      logo: "/services/logo/logoe.png"
    },
    {
      title: "Testing & Optimization",
      desc:
        "Quality assurance, performance optimization, and cross-browser testing. We ensure your website works flawlessly across all devices and platforms.",
      logo: "/services/logo/logof.png"
    },
    {
      title: "Launch & Support",
      desc:
        "Deployment, domain setup, SSL configuration, and ongoing maintenance. We provide comprehensive support to keep your website running smoothly.",
      logo: "/services/logo/logob.png"
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
          className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold justify-center lg:justify-start"
          style={{ fontFamily: 'Recursive, sans-serif' }}
        >
          {/* yellow circle with arrow */}
          <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#FFD350] text-[#1d1d1d] shadow-[0_3px_0_rgba(0,0,0,0.25)] sm:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] -translate-x-[1px]">
              <path d="M6 18L18 6M18 6H9M18 6V15"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {steps[active].title}
        </h3>
        <p
          className="mt-3 text-xs sm:text-sm md:text-base text-[#fff9f1]/90 leading-relaxed"
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
                    isActive ? "text-[#fff9f1]" : "text-[#fff9f1]/75 hover:text-[#fff9f1]",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span
                      className={[
                        "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition",
                        isActive ? "bg-[#FFD350]" : "bg-[#fff9f1]/50 group-hover:bg-[#FFD350]"
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

