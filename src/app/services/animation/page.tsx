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
      <section className="relative overflow-hidden bg-[#EA7BBF] text-[#fff9f1]">
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
          <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 sm:py-16 md:py-0">
              <div className="max-w-2xl">
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-sm sm:text-base md:text-[18px] lg:text-[30px] xl:text-[38px] px-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    Best Animation Studio in the
                    <br />
                    <span className="text-3xl sm:text-4xl md:text-[36px] lg:text-[52px] xl:text-[68px] block">
                      United States
                    </span>
                  </h1>

                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#FFD350] text-[#1d1d1d] shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6 translate-x-[1px]">
                      <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <p
                  className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed font-medium px-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  We deliver breathtaking 2D & 3D animation services, offering customized packages to bring your stories to life with stunning visuals.
                </p>

                <div className="mt-6 sm:mt-8 px-2">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#FFD350] px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 text-sm sm:text-base md:text-lg font-extrabold text-[#1d1d1d] shadow-[0_6px_0_rgba(0,0,0,0.25)] sm:shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    LET&apos;S GET STARTED
                  </Link>
                </div>
              </div>
            </div>

            {/* Right visual for mobile */}
            <div className="md:hidden mt-6 sm:mt-8">
              <div className="relative h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] w-full">
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
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#1d1d1d]">
          <div className="relative h-[56px] sm:h-[68px] overflow-hidden">
            <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee-x">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-[#fff9f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
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
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FBEAE2] leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Add a Spark of Animation to Your World
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Transforming ideas into visually captivating experiences.
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We specialize in turning people's imagination into visual reality. We focus on serving brands by providing high-quality animated video production services to effectively communicate, engage their audiences, and share compelling stories. Be it a startup or a mature enterprise, our dedicated video animation services are well-designed to boost your brand credibility and charm your viewers.
                </p>
                <div className="pt-2 sm:pt-4">
                  <Link href="/contact" className="inline-block bg-[#FFD350] text-[#1d1d1d] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#FFC107] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-4 sm:px-8 md:px-16 lg:px-36 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-[#1d1d1d] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Animation Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-[#fff9f1] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Animation Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Showcase */}
      <section className="relative bg-[#1d1d1d] overflow-hidden">
        <div className="mx-auto w-full max-w-[2000px] py-3 sm:py-4 md:py-6 lg:py-8">
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)" }} />
          <div className="h-[1vh] sm:h-[1.5vh] md:h-[2vh] lg:h-[3.5vh]" />
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[100vh] md:h-[110vh] lg:h-[120vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image src="/services/animation/work.png" alt="Animation showcase" width={800} height={800} sizes="100vw" className="h-full w-[140vw] max-w-none object-cover animate-pan-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-[#fff9f1]">
        <div className="absolute inset-0 -z-20 bg-[#FFD350]" />
        <Image src="/services/logo/bg.png" alt="" fill priority className="absolute inset-0 -z-10 object-cover object-center pointer-events-none select-none" />

        {/* <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#fff9f1]" style={{ fontFamily: 'Recursive, sans-serif' }}>
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your Animation to Life
          </h2>
          <p className="mt-3 text-sm sm:text-base/7 text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            From concept to final render, our process keeps quality high and timelines predictable.
          </p>
        </div> */}

        <AnimationProcessTabs />
      </section>

      {/* Wavy Bottom Separator */}
      <section className="relative overflow-hidden">
        <div className="relative bg-[#EA7BBF] h-24 sm:h-32 md:h-40 lg:h-48">
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,100 L0,100 Z" fill="#000000" className="w-full h-full" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================== Animation Value + 6-Step Process (matches reference) ================== */}
      <section className="bg-[#1d1d1d] text-[#fff9f1] py-14 sm:py-16">
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
              className="mt-3 text-[11px] sm:text-xs leading-relaxed text-[#fff9f1]/80 max-w-3xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Animation can revolutionize our methods of interaction, where an attractive visual can create a lasting impact on the viewer, making it more comprehensive. Through animation, every subject becomes more accessible, transforming advanced material into visible and memorable content that appeals to viewers.

            </p>
            <p
              className="mt-2 text-[11px] sm:text-xs leading-relaxed text-[#fff9f1]/80 max-w-3xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Animation allows people to engage passionately with its content. The medium unites linguistic variations and cultural traits, so the content becomes accessible to everybody and sticks in their minds. The medium goes beyond narration to present visual stories that use movement combined with vibrant hues and creativity

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
                className="inline-block -rotate-6 bg-[#EA7BBF] px-5 py-2 text-[#1d1d1d] rounded-md font-extrabold shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-3 transition"
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
                Custom Animation Solutions
              </h4>
              <p
                className="mt-2 text-[12px] sm:text-sm leading-relaxed text-[#fff9f1]/80"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Some of our animations are as different as every brand. We don’t believe in one-size-fits-all. What you want to say and who you aim to tell it to guide our process in building the pieces of your brand and the pre-designed frame of your website is just one example of that uniqueness. We always deliver results that match the vision perfectly, whether it is 2D or 3D animation services or a blend of both.
              </p>
            </div>

            <div className="relative">
              {/* optional side arrows like reference */}
              <button
                aria-label="Previous"
                className="absolute -left-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#EA7BBF] text-[#1d1d1d]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
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
                className="absolute -right-4 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#EA7BBF] text-[#1d1d1d]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
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
                className="flex items-center gap-3 rounded-full bg-[#FFD350] px-4 py-3 text-[#1d1d1d]"
              >
                <span className="grid h-8 w-8 place-items-center bg-[#EA7BBF] rounded-full text-[#fff9f1] font-bold">
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
          <div className="mt-16 text-center">
            <h4
              className="text-lg sm:text-xl font-extrabold uppercase"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              24/7 Support & Collaboration
            </h4>
            <p
              className="text-[11px] sm:text-xs text-[#fff9f1]/70 max-w-3xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our creative team works with you from the first brainstorming session until the final delivery. Every project is treated as a partnership, and you are heard, supported, and 100% satisfied with the final product.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block -rotate-6 bg-[#EA7BBF] text-[#1d1d1d] px-6 py-3 rounded-md font-extrabold shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
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
    { title: "2D ANIMATION", desc: "Our animation services are a dynamite but affordable way to narrate your story clearly and creatively. We are a 2D animation company with extensive experience creating explainer videos, product showcases, infographics, and social media content that relates to viewers via clean visuals and interesting motion. The chief use of this service is launching a new product or reducing a complicated idea to a simple message. Hypertech Verse has an in-house 2D animation studio that breathes life into ideas with smooth flowing movements, bright ideas, and conniving stories. Still debating 2D vs 3D animation? Our team will also guide you through the process to ensure that you get the creative decision most effectively to let your brand message come through. Stunning 2D visuals: Choose our video company that moves viewers and drives results.", logo: "/services/animation/tabo.png" },
    { title: "3D ANIMATION", desc: "If you are looking for high-end 3D animation services, you are in the right place. As the world’s leading 3D animation company, we create top-quality 3D animation that delivers depth, realism, and detail. This allows for accurate, lifelike product visualizations, virtual tours, medical animations, and tech explainers that grab the user’s attention in a way that no other form of communication can. We take an artistic vision paired with state-of-the-art technology in our offering of professional animated video production services. Our video animation service guarantees you the best modeling and rendering services as an expert in the media. Stay tuned and allow our animation company to provide world-class 3D content.", logo: "/services/logo/logod.png" },
    { title: "EXPLAINER VIDEO PRODUCTON", desc: "Our explainer video services make your message easy and captivate your audience. With extensive experience in creating concise, compelling animations that educate your business, product, or service in under two minutes, we’re a trusted, top-rated video animation company. Explainer videos are a proven means of raising engagement and increasing conversions. Animated video production serves as our strategic storytelling, and our professionals produce informative and entertaining explainer videos. We do 2D and 3D animation based on the brand style and the message's complexity. An explainer video is not just a video but an innovative communication way developed by an expert team from the fields of animation and brand messaging.", logo: "/services/logo/logod.png" },
    { title: "TRAINING VIDEO ANIMATION", desc: "Get our animated training video solutions to increase employee onboarding, eLearning, automate corporate compliance, and more. We produce video animation services to eliminate complexity, simplify our audience’s understanding of it & in a meaningful way. Our training videos make dry content dynamic by bringing in product tutorials as well as safety protocols. Whether you prefer simple 2D or complex 3D animation services for immersive learning environments. As an experienced animation company, we produce personalized training content that fits your goals and company culture. If you are looking to build a smarter and more interactive training ecosystem, then work with us, the best video animation company partner. ", logo: "/services/logo/logoe.png" },


  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px]">
        <Image src={steps[active].logo} alt={`Process for ${steps[active].title}`} width={400} height={400} className="w-full h-auto drop-shadow-[0_22px_40px_rgba(0,0,0,.25)]" priority />
      </div>

      <div className="max-w-xl text-center lg:text-left">
        <h3 className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold text-[#1d1d1d] justify-center lg:justify-start" style={{ fontFamily: 'Recursive, sans-serif' }}>
          <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#FFD350] text-[#1d1d1d] shadow-[0_3px_0_rgba(0,0,0,0.25)] sm:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] -translate-x-[1px]"><path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          {steps[active].title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-[#1d1d1d]/90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>{steps[active].desc}</p>
      </div>

      <nav aria-label="Process steps" className="lg:pl-4">
        <ul className="space-y-2 sm:space-y-3">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title}>
                <button onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} className={["group w-full text-left uppercase font-extrabold tracking-wide", "transition rounded-xl px-3 py-2 sm:px-4 sm:py-2", "text-sm sm:text-base", isActive ? "text-[#1d1d1d]" : "text-[#1d1d1d]/75 hover:text-[#1d1d1d]"].join(" ")} style={{ fontFamily: 'Recursive, sans-serif' }}>
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span className={["h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition", isActive ? "bg-[#FFD350]" : "bg-[#1d1d1d]/50 group-hover:bg-[#FFD350]"].join(" ")} />
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


