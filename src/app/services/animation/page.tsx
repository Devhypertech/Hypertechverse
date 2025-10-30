"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function AnimationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Pink background with white text (same as CSD) */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/animation/hero.png"
            alt="Animation illustration"
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
                    ANIMATION
                    <br />
                    <span className="text-[56px] sm:text-[72px] lg:text-[88px] block">
                      BRING STORIES TO LIFE
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
                  We craft animated videos, explainers, and motion graphics that clarify ideas and elevate brands. From storyboard to final render, our team handles the entire pipeline.
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
                  src="/services/animation/hero.png"
                  alt="Animation"
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

        {/* Icons strip directly after marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative w-full aspect-[16/2.8] overflow-hidden">
              <Image
                src="/services/animation/icons.png"
                alt="Animation tools"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/animation/about.png"
                  alt="Animation studio"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Motion that <span className="text-[#EA7BBF]">moves people</span>
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse delivers impact
                </h3>
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Explainers, product demos, logo animations, and social reels—built with crisp pacing, clear story, and standout visuals tailored to your brand.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-block bg-[#FFD350] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFC107] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                  Our Collection of Animation Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-52 z-10 pb-20 ">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-8 py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Animation Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Showcase */}
      <section className="relative bg-black overflow-hidden">
        <div className="mx-auto w-full max-w-[2000px] py-4 sm:py-6 lg:py-8">
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)" }} />
          <div className="h-[3.5vh]" />
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[120vh] sm:h-[120vh] lg:h-[120vh] overflow-hidden rounded-2xl">
              <Image src="/services/animation/work.png" alt="Animation showcase" width={800} height={800} sizes="100vw" className="h-full w-[140vw] max-w-none object-cover animate-pan-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="relative overflow-hidden py-16 sm:py-20 text-white">
        <div className="absolute inset-0 -z-20 bg-[#FFD350]" />
        <Image src="/services/logo/bg.png" alt="" fill priority className="absolute inset-0 -z-10 object-cover object-center pointer-events-none select-none" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: 'Recursive, sans-serif' }}>
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your Animation to Life
          </h2>
          <p className="mt-3 text-sm sm:text-base/7 text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            From concept to final render, our process keeps quality high and timelines predictable.
          </p>
        </div>

        <AnimationProcessTabs />
      </section>

      {/* Wavy Bottom Separator */}
      <section className="relative overflow-hidden">
        <div className="relative bg-[#EA7BBF] h-32 sm:h-40 lg:h-48">
          <div className="absolute bottom-0 left-0 w-full h-20">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,100 L0,100 Z" fill="#000000" className="w-full h-full" />
            </svg>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-black text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-10" style={{ fontFamily: "Recursive, sans-serif" }}>
            Benefits of Professional Animation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: "Recursive, sans-serif" }}>
                Explain Complex Ideas Clearly
              </h3>
              <p className="mt-3 text-sm text-white/80 max-w-md" style={{ fontFamily: "Poppins, sans-serif" }}>
                Animation makes abstract or technical topics easy to grasp, increasing retention and conversions.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </span>
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl ">
                <Image src="/services/animation/cone.png" alt="Animation concepts" fill className="object-contain" priority />
              </div>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </span>
            </div>
          </div>

          <div className="text-center mt-2">
            <Link href="/contact" className="inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-black rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition" style={{ fontFamily: "Poppins, sans-serif" }}>
              GET STARTED
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl">
              <Image src="/services/animation/clock.png" alt="Efficient delivery" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: "Recursive, sans-serif" }}>
                Fast Iterations, On-Time Delivery
              </h3>
              <p className="mt-3 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                Tight feedback loops, clear stages, and robust tooling keep projects moving smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsMasonry />
    </main>
  );
}

function AnimationProcessTabs() {
  const steps = [
    { title: "Concept & Script", desc: "Clarify message and outline the story.", logo: "/services/animation/phone.png" },
    { title: "Storyboard", desc: "Plan scenes, transitions, and pacing.", logo: "/services/logo/logoc.png" },
    { title: "Design", desc: "Craft characters, scenes, and style frames.", logo: "/services/logo/logod.png" },
    { title: "Animation", desc: "Bring visuals to life with motion and timing.", logo: "/services/logo/logoe.png" },
    { title: "Sound & Mix", desc: "Voiceover, music, and sound design.", logo: "/services/logo/logof.png" },
    { title: "Render & Deliver", desc: "Export formats and finalize for platforms.", logo: "/services/animation/target.png" },
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
                <button onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} className={["group w-full text-left uppercase font-extrabold tracking-wide","transition rounded-xl px-4 py-2",isActive ? "text-black" : "text-black/75 hover:text-black"].join(" ")} style={{ fontFamily: 'Recursive, sans-serif' }}>
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


