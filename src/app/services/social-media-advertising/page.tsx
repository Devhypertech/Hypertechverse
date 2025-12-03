"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function SocialMediaAdvertisingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Yellow background with black text (same as SEO) */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/SocialmediaAdversting/hero.png"
            alt="Paid advertising illustration"
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
                    className="leading-[.95] font-black uppercase text-2xl sm:text-3xl md:text-[36px] lg:text-[48px] xl:text-[56px] px-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    Boost Your Brand with Targeted
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                      Social Ads
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

                <p
                  className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed font-medium px-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  We are a national paid social advertising agency that considers digital media, as an advertising medium in which marketing message can be delivered holistically to your right audience.
                </p>

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

            {/* Right visual for mobile */}
            <div className="md:hidden mt-6 sm:mt-8">
              <div className="relative h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] w-full">
                <Image
                  src="/services/SocialmediaAdversting/hero.png"
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
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/SocialmediaAdversting/about.png"
                  alt="Paid advertising expert"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FBEAE2] leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                  Reach More of the <span className="text-[#EA7BBF]">Right People</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  As a reputable paid social agency, Hypertech Verse will build accuracy-based campaigns on major social media networks to get your brand in the news feed of the people that matter. A paid social marketing agency that is based on results, our mission is to make you more visible, get more engagement and deliver better results to your business.
                </p>

                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD350] text-black px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#d068a5] transition-colors"
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
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full bg-[#FFD350] transform -rotate-4 px-4 sm:px-8 md:px-16 lg:px-36 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-left">
                <span className="text-black font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Paid Advertising Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Paid Advertising Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Yellow Process (bg.png + vertical tabs) */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-white">
        <div className="absolute inset-0 -z-20 bg-[#FFD350]" />
        <Image
          src="/services/logo/bg.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none select-none"
        />

        <SMAProcessTabs />
      </section>

      {/* Wavy Bottom Section */}
      <section className="relative overflow-hidden">
        <div className="relative bg-[#EA7BBF] h-24 sm:h-32 md:h-40 lg:h-48">
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
      {/* ==== Why Paid Ads Work section (matches reference) ==== */}
      <section className="bg-[#1d1d1d] text-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          {/* 6-step chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Let’s Talk Goals",
              "Know Your Audience",
              "Plan the Strategy",
              "Create Your Ads",
              "Go Live",
              "Track & Improve",
            ].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-full bg-[#FFD350] font-bold px-4 py-3 text-black"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#EA7BBF] text-white font-bold">
                  {i + 1}
                </span>
                <span className="font-bold text-sm uppercase" style={{ fontFamily: "Recursive, sans-serif" }}>
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* strap + CTA */}


          {/* Section heading */}
          <div className="mt-10 text-center">
            <h2
              className="text-xl sm:text-2xl font-extrabold uppercase"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Our Seamless Ad Strategy
            </h2>
            <p
              className="mt-2 text-xs sm:text-sm text-white/80"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At Hypertech Verse, our smooth, collaborative process is the foundation of every successful campaign. As a results-driven paid social advertising agency, we combine clarity, creativity, and consistent performance to deliver the best possible outcomes for our clients.
            </p>
          </div>

          {/* Alternating rows */}
          <div className="mt-10 space-y-12">




          </div>
        </div>
      </section>

      <TestimonialsMasonry />
    </main>
  );
}

function SMAProcessTabs() {
  const steps = [
    { title: "Facebook Ads", desc: "The Facebook campaign that we offer is much more than a mere post boost as a paid social advertising firm. Our data-driven team makes sure that your message goes to the right people at the right moment. Maximizing every investment to get the best ROI. Using social media as an advertising platform, we are able to maximize our investment in advertising. Our Facebook ads are compelling and will inspire action with scroll-stopping visuals to compelling copywriting. Whether the goals are lead generation, e-commerce running through to brand awareness, our specialists ensure your ads run steadily on one of the best programmatic advertising platforms of today.", logo: "/services/SocialmediaAdversting/taba.png" },
    { title: "TikTok Ads", desc: " TikTok is a revolutionary tool for brands that need quick attention, and as a social media agency, we are experts in running native-style adverts that will mix well with other viral content. Our unique advertising formats and targeting features enable us to bring your brand to the attention of the audience who are willing to interact. Our ability to blend crafted storytelling is how we create TikTok campaigns that are entertaining and converting. As a paid social marketing agency, our task is to allow your advertisements to be not only viewed but also have a positive, measurable impact by using one of the most captivating programmatic advertising platforms in the world.", logo: "/services/logo/logoc.png" },
    { title: "Instagram Ads", desc: "Our Instagram social media advertising services at Hypertech Verse are based upon the concepts of high-impact visual storytelling. We produce visually appealing campaigns using in-feed posts, Stories, and Reels to ensure that your brand remains at the top of your audience's psyche.Using sophisticated targeting, retargeting, and customized grouping, and our paid social media agency will make sure your promos get the right demographics to respond to your adverts. Irrespective of whether you want sales, traffic, or engagement, we turn Instagram into a central component of your multi-platform programmatic advertising program.", logo: "/services/logo/logod.png" },
    { title: "LinkedIn Ads", desc: "Great choice to achieve success in B2B, LinkedIn will always be a leading preference, and our paid social ad agency will create a campaign that lets you reach professionals, decision-makers, and industry leaders. We promote your brand as an expert with high quality leads being generated by selecting the right ad formats. Our social media advertisement options are Sponsored Content, Message Ads, and precise audience targeting to optimize ROI. LinkedIn is an important component in your overall programmatic advertising strategy to ensure the best exposure using multiple platforms as we are a paid social marketing agency.", logo: "/services/logo/logoe.png" },
    { title: "Twitter (X) Ads", desc: "Our Twitter (X) campaigns that will place your brand at the center of real-time discussions. Proper interest targeting, trending topics, and promoted tweets are utilized to ensure your brand is involved in whatever is trending at the time. By leveraging Twitter's dynamic platform, we help you engage with audiences in real-time, driving immediate interaction and boosting brand visibility. Our Twitter paid social media agency develops Twitter advertisement that initiates their own interaction, campaign promotion, and web traffic generation. We leverage such a programmatic advertising platform to build breakthrough responsive and conversation-based strategies that are measurable.  ", logo: "/services/logo/logof.png" },
    { title: "Threads Ads", desc: "As a rapidly growing platform, Threads offers unique opportunities to connect with engaged, niche audiences. Threads provides companies with a new, community-driven platform, and our paid social advertising agency can assist you in making an early impression. Our ad solutions are built with the priority of authenticity, yet they will move your marketing objectives. Combining thoughtful copy, impactful imagery, and the right placement, our paid social marketing agency can have your Threads ads look natural but perform well. By incorporating Threads in your programmed advertising platform strategy, you rid yourself of reaching an audience that is growing in numbers ahead of your competition.", logo: "/services/SocialmediaAdversting/taba.png" },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_320px] lg:items-start">
      <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[450px] md:max-w-[520px]">
        <Image src={steps[active].logo} alt={`Process for ${steps[active].title}`} width={400} height={400} className="w-full h-auto drop-shadow-[0_22px_40px_rgba(0,0,0,.25)]" priority />
      </div>

      <div className="max-w-xl text-center lg:text-left">
        <h3 className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold text-black justify-center lg:justify-start" style={{ fontFamily: 'Recursive, sans-serif' }}>
          <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_3px_0_rgba(0,0,0,0.25)] sm:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
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
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={["group w-full text-left uppercase font-extrabold tracking-wide", "transition rounded-xl px-3 py-2 sm:px-4 sm:py-2", "text-sm sm:text-base", isActive ? "text-black" : "text-[#1d1d1d]/75 hover:text-black"].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
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


