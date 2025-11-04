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
            <div className="py-12 md:py-0">
              <div className="max-w-2xl">
                {/* Headline */}
                <div className="relative inline-block">
                  <h1
                    className="leading-[.99] font-black uppercase text-[16px] sm:text-[28px] lg:text-[32px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    Mobile Application Development 
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                    for Android & IOS.
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
                  Hypertech Verse specializes in business-centric application development. It utilizes expert developers to create 
                  high-performance mobile and web applications for various businesses, including yours.
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
                  src="/services/app/support.png"
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
        
        {/* Logos image after ribbon */}
        <div className="relative w-full bg-black py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
            <div className="flex justify-center">
              <Image
                src="/services/app/applogos.png"
                alt="Company Logos"
                width={1200}
                height={200}
                className="w-full h-auto max-w-6xl object-contain"
              />
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
                Designing the apps that define tomorrow.
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

          <div className="h-[3.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[120vh] sm:h-[120vh] lg:h-[120vh] overflow-hidden rounded-2xl">
              <Image
                src="/services/app/work.png"
                alt="App Development Portfolio"
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
            Apps to Life
          </h2>
          <p
            className="mt-3 text-sm sm:text-base/7 text-black/90"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
           We provide businesses with full-fledged Custom app development solutions that match individual business specifications. We provide top-notch designs that prioritize quality that ultimately produce high-performance, user-friendly solutions. Our team builds innovative apps with the current technology landscape, through which we develop website applications and robust cross-platform mobile applications that improve user experience while boosting business accomplishment.
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
      <section className="py-10 bg-black text-white">
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
                  src="/services/app/support.png"
                  alt="Elite App Development Team Collaboration"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>
      </div>
      </section>

      <section className="relative bg-black py-6 sm:py-6">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">
    <AppSuccessCarousel />
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
      title: "UI/UX Design",
      desc:
        " The user engagement and retention levels strongly depend on having an intuitive and visually appealing design structure, which our team understands entirely. The user interface and user experience design solutions we provide are dedicated to developing smooth interactive systems that improve system usability while enhancing functionality.  We design mobile application development interfaces to give users an attractive interface with easy navigation paths. Our design approach delivers responsive interfaces, accessible solutions, and optimized performance to companies developing web and mobile applications across multiple platforms. ",
      logo: "/services/app/taba.png"
    },
    { 
      title: "Software Quality Testing",
      desc:
        "Any app requires optimal performance to succeed in the market. Through its testing services, we provide guaranteed optimal user service by finding and solving issues before deployment. Recent research confirms that subpar user experiences send many users away, so our company carries out extensive review frameworks to boost mobile application development and web application development practice success.  Our company's testing process incorporates functional testing, performance testing, usability checking, and security verification to guarantee consistent operation between all platforms. Companies gain assurance through our expertise to produce high-quality applications that combine reliability with security and scalability features, which increase customer satisfaction and retention.",
      logo: "/services/logo/logoc.png"
    },
    { 
      title: "Hybrid App Development",
      desc:
        "Business organizations seeking maximum market penetration should consider hybrid application development, combining cost-effectiveness with operational effectiveness. Hypertech Verse builds platforms for developing mobile applications that deliver flawless operation between iOS and Android systems. Our company's hybrid app solutions use React Native and Flutter frameworks to enable quick development cycles, reduced costs, and a uniform user experience. Our team uses web technology to optimize custom application performance while preserving a native smartphone user experience for our apps. From startups to enterprises, our agency helps you get hybrid apps that meet performance needs while offering a captivating, scalable solution.",
      logo: "/services/logo/logod.png"
    },
    { 
      title: "iOS App Development",
      desc:
        "Hypertech Verse is a leading iPhone app development company that produces superior quality, performance-oriented applications for different business markets. The expert developers at our company create feature-rich applications that develop scalability while maximizing performance for Apple’s native environment. Clients can rely on our custom web application development services because we guarantee security, responsiveness, and complete adherence to Apple's specifications. We emphasize delivering motionless user experiences from application conceptualization through deployment, leading to improved customer interaction. We assist businesses in succeeding in the iOS market competition through our complete mobile application development support for advanced features implementation and the App Store approval process.",
      logo: "/services/logo/logoe.png"
    },
    { 
      title: "Android App Development",
      desc:
        "A business requires a practical Android application to succeed because Android maintains over 3 billion global users. We develop Android applications through our operations to strengthen scalability alongside total security and application performance. Our expert engineers create complete application features that suit your company's requirements while maintaining compatibility across different devices and resolutions.  Our experts transform application development projects and enterprise website applications for maximum speed performance and optimal user experience. Our team integrates components from all stages of development to construct Android applications that maintain user engagement throughout, resulting in increased business expansion. ",
      logo: "/services/logo/logof.png"
    },
    { 
      title: "Progressive Web App Development",
      desc:
        "PWAs function as platforms that unite web applications with mobile applications to provide users with swift, dependable, and interactive encounters. Progressive Web Apps (PWAs) form the core service of our company, allowing businesses to develop web applications with download-free app-like features.  Our web application development services guarantee that your PWA functions appropriately and provides both security features and optimal performance. Implementing modern technologies through our company helps businesses create seamless experiences between all devices. We work to achieve top standards in web application development projects, regardless of your goal to enhance or develop new web solutions.",
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
function AppSuccessCarousel() {
  const slides = [
    {
      img: "/services/app/cone.png", // change to your image path
      headlineLeft: "PRIORITIZING CLIENTS AND PARTNERS:",
      headlineRight: "DEDICATED TO YOUR SUCCESS AT EVERY STEP",
      sub:
        "Our App Design Strategy Ensures Seamless Mobile App Design Services From Idea To Deployment, With Close Collaboration Resulting In Refined Details. Our Focus Is On Producing Beautiful, Fulfilling Mobile Apps.",
      cta: { label: "GET STARTED", href: "/contact" },
    },
    {
      img: "/services/app/work.png",
      headlineLeft: "DELIVERING VALUE:",
      headlineRight: "FAST ITERATIONS • CLEAR RESULTS",
      sub:
        "We Build In Tight Loops, Test On Real Devices, And Ship Small Wins Frequently—So You See Momentum And Measurable Progress.",
      cta: { label: "LET'S TALK", href: "/contact" },
    },
    {
      img: "/services/app/support.png",
      headlineLeft: "END-TO-END SUPPORT:",
      headlineRight: "STRATEGY • DESIGN • BUILD • GROW",
      sub:
        "From Discovery To Launch And Beyond—We Handle UX, UI, Performance, Store Submissions, And Ongoing Improvements.",
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
            className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight uppercase tracking-wide"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            <span className="text-white">{slides[i].headlineLeft}&nbsp;</span>  
            <span className="text-[#EA7BBF]">{slides[i].headlineRight}</span>
          </h3>
          <p
            className="mt-2 text-[11px] sm:text-[12px] text-white/80 max-w-3xl mx-auto leading-tight capitalize"
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
