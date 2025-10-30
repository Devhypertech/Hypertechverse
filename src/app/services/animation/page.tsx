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
                    className="leading-[.95] font-black uppercase text-[18px] sm:text-[30px] lg:text-[38px]"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                 Best Animation Studio in the
                    <br />
                    <span className="text-[36px] sm:text-[52px] lg:text-[68px] block">
                    United States
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
                 We deliver breathtaking 2D & 3D animation services, offering customized packages to bring your stories to life with stunning visuals.
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

      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/animation/car.png"
                  alt="Animation studio"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap" style={{ fontFamily: 'Recursive, sans-serif' }}>
                Add a Spark of Animation to Your World
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD350]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Hypertech Verse blends innovation
                </h3>
                <p className="text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                We specialize in turning people’s imagination into visual reality. We focus on serving brands by providing high-quality animated video production services to effectively communicate, engage their audiences, and share compelling stories. Be it a startup or a mature enterprise, our dedicated video animation services are well-designed to boost your brand credibility and charm your viewers.
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

        {/* <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: 'Recursive, sans-serif' }}>
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your Animation to Life
          </h2>
          <p className="mt-3 text-sm sm:text-base/7 text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            From concept to final render, our process keeps quality high and timelines predictable.
          </p>
        </div> */}

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

{/* ================== Animation Value + 6-Step Process (matches reference) ================== */}
<section className="bg-black text-white py-14 sm:py-16">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    {/* Top: Why animation matters */}
    <div className="text-center">
      <h2
        className="text-2xl sm:text-3xl font-extrabold"
        style={{ fontFamily: "Recursive, sans-serif" }}
      >
        How Animation Can Make a Difference?
      </h2>
      <p
        className="mt-3 text-[11px] sm:text-xs leading-relaxed text-white/80 max-w-3xl mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
    Animation can revolutionize our methods of interaction, where an attractive visual can create a lasting impact on the viewer, making it more comprehensive. Through animation, every subject becomes more accessible, transforming advanced material into visible and memorable content that appeals to viewers. Animation is a powerful resource because it quickly engages viewers, effortlessly expresses emotions, and creates enduring effects, on which multiple groups, such as brands and creative professionals, rely.
      </p>
      <p
        className="mt-2 text-[11px] sm:text-xs leading-relaxed text-white/80 max-w-3xl mx-auto"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
     Animation allows people to engage passionately with its content. The medium unites linguistic variations and cultural traits, so content becomes accessible to everybody and sticks in their minds. Animation converts regular messages into extraordinary journeys, which boost conversions through explainer videos and stir emotions through storytelling. The medium goes beyond narration to present visual stories that use movement combined with vibrant hues and creativity.
      </p>
    </div>

    {/* Rounded showcase frame + CTA (center, like screenshot) */}
    <div className="mt-6 sm:mt-8 relative mx-auto max-w-4xl">
      <div className="relative w-full aspect-[16/8.5] overflow-hidden rounded-[28px] ">
        <Image
          src="/services/animation/cone.png" // replace with your composite frame (e.g. toy+aladdin)
          alt="Animation scenes"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
        <Link
          href="/contact"
          className="inline-block -rotate-6 bg-[#EA7BBF] px-5 py-2 text-black rounded-md font-extrabold shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-3 transition"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          GET STARTED
        </Link>
      </div>
    </div>

    {/* Mid title */}
    <div className="mt-12 text-center">
      <h3
        className="text-xl sm:text-2xl font-extrabold"
        style={{ fontFamily: "Recursive, sans-serif" }}
      >
        Unfair <span className="text-[#EA7BBF]">Advantage</span> You Will Gain from Us
      </h3>
    </div>

    {/* Fast Turnarounds row (left text, right astronaut art with small arrows) */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <div>
        <h4
          className="text-lg sm:text-xl font-extrabold uppercase"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Fast Turnarounds Without Compromise
        </h4>
        <p
          className="mt-2 text-[12px] sm:text-sm leading-relaxed text-white/80"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Tight timelines? No problem. Our pipeline is built for speed—clear briefs, rapid style frames,
          and parallelized production—so you get cinematic quality, delivered faster.
        </p>
      </div>

      <div className="relative">
        {/* optional side arrows like reference */}
        <button
          aria-label="Previous"
          className="absolute -left-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#EA7BBF] text-black"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>

        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3x1">
          <Image
            src="/services/animation/rocketman.png" // replace with your running astronaut artwork
            alt="Fast animation delivery"
            fill
            className="object-contain"
          />
        </div>

        <button
          aria-label="Next"
          className="absolute -right-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#EA7BBF] text-black"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>

    {/* 6 yellow numbered chips (two rows of three, like screenshot) */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "Discovery & Briefing",
        "Scriptwriting & Storyboarding",
        "Visual Design & Style Frames",
        "Voiceover & Audio Selection",
        "Animation & Motion Editing",
        "Final Review & Delivery",
      ].map((t, idx) => (
        <div
          key={t}
          className="flex items-center gap-3 rounded-full bg-[#FFD350] px-4 py-3 text-black"
        >
          <span className="grid h-8 w-8 place-items-center bg-[#EA7BBF] rounded-full text-white font-bold">
            {idx + 1}
          </span>
          <span
            className="font-bold text-[13px] uppercase"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            {t}
          </span>
        </div>
      ))}
    </div>

    {/* Bottom microcopy + CTA */}
    <div className="mt-6 text-center">
    <h4
          className="text-lg sm:text-xl font-extrabold uppercase"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Our Smooth Process
        </h4>
      <p
        className="text-[11px] sm:text-xs text-white/70"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
      Starting with the simplest act of making something beautifully smooth and collaborative, we believe great animation begins with a great workflow. Our production process is designed for clarity, creation, and consistency. Yet, it involves the way you are from the first concept to the final delivery—it’s just as much fun going as the result.
      </p>
      <Link
        href="/contact"
        className="mt-3 inline-block -rotate-6 bg-[#EA7BBF] text-black px-6 py-3 rounded-md font-extrabold shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        GET STARTED
      </Link>
    </div>

  </div>
</section>


      <TestimonialsMasonry />
    </main>
  );
}

function AnimationProcessTabs() {
  const steps = [
    { title: "2D ANIMATION", desc: "Our animation services are a dynamite but affordable way to narrate your story clearly and creatively. We are a 2D animation company with extensive experience creating explainer videos, product showcases, infographics, and social media content that relates to viewers via clean visuals and interesting motion. The chief use of this service is launching a new product or reducing a complicated idea to a simple message.", 
        logo: "/services/animation/tabo.png" },
    { title: "3D ANIMATION", desc: "Plan scenes, transitions, and pacing.", logo: "/services/logo/logoc.png" },
    { title: "EXPLAINER VIDEO PRODUCTON", desc: "Craft characters, scenes, and style frames.", logo: "/services/logo/logod.png" },
    { title: "TRAINING VIDEO ANIMATION", desc: "Bring visuals to life with motion and timing.", logo: "/services/logo/logoe.png" },
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


