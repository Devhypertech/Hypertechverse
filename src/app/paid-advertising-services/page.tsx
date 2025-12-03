"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../components/sections/home/cardreviews";

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
          <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-12 sm:py-16 md:py-0">
              <div className="max-w-2xl">
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-2xl sm:text-3xl md:text-[36px] lg:text-[48px] xl:text-[56px] px-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    PAID ADVERTISING
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                      SCALABLE GROWTH
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
                  Launch high‑ROI ad campaigns across Google, Meta, and more. We plan, launch, and optimize ads to acquire customers efficiently with clear, measurable results.
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
                  src="/services/paidadversting/about.png"
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
                  Ads that drive your <span className="text-[#EA7BBF]">Revenue Growth</span>
                </h2>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Turning audience insights into Customers
                </h3>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We design and manage campaigns across search, social, and display. With data‑driven targeting, creative testing, and ongoing optimization, we lower CAC and scale profitably.
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

        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            The Signature Flow that Brings<br className="hidden sm:block" />
            Your Paid Ads to Life
          </h2>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-[#1d1d1d]/90 px-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We offer professional advertising solutions that ensure your business reaches its target customers at the right moments. We build high-converting advertising strategies on Google Ads, along with Meta networking systems and display campaigns, to achieve maximum ROI and deliver actionable outcomes. The campaigns we develop specifically match your business targets and result in measurable ROI from every financial investment.
          </p>
        </div>

        <PAProcessTabs />
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
              "Let's plan goals",
              "Know your customer",
              "Plan the strategy",
              "Craft great creatives",
              "Launch & test",
              "Track & scale",
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
          <div className="mt-5 text-center">
            <p
              className="text-[11px] sm:text-xs tracking-wide uppercase text-white/70"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              A clear, reliable strategy → test → learn → scale
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-white rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GET STARTED
            </Link>
          </div>

          {/* Section heading */}
          <div className="mt-10 text-center">
            <h2
              className="text-xl sm:text-2xl font-extrabold uppercase"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Why Paid Ads Work?
            </h2>
            <p
              className="mt-2 text-xs sm:text-sm text-white/80"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              A balanced media plan that delivers fast, measurable growth
            </p>
          </div>

          {/* Alternating rows */}
          <div className="mt-10 space-y-12">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div>
                <h3 className="font-extrabold uppercase text-base sm:text-lg" style={{ fontFamily: "Recursive, sans-serif" }}>
                  Measurable Results
                </h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Track every click, view, and conversion. We wire analytics and
                  attribution so budgets move to what works—and away from what
                  doesn't.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/services/paidadversting/Measurable.png" // replace with your asset
                  alt="Measurable results"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Row 2 (reversed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:[&>*:first-child]:order-2">
              <div>
                <h3 className="font-extrabold uppercase text-base sm:text-lg" style={{ fontFamily: "Recursive, sans-serif" }}>
                  What is PPC?
                </h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Pay-Per-Click puts you in front of high-intent audiences at the top
                  of search and across social. You pay only when users engage.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/services/paidadversting/ppc.png" // replace with your asset
                  alt="What is PPC"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div>
                <h3 className="font-extrabold uppercase text-base sm:text-lg" style={{ fontFamily: "Recursive, sans-serif" }}>
                  Why PPC Ads Are Game-Changers
                </h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Rapid testing, precise targeting, and immediate feedback loops let
                  us find winning angles fast and scale them profitably.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/services/paidadversting/Illustration.png" // replace with your asset
                  alt="Game changer"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Row 4 (reversed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:[&>*:first-child]:order-2">
              <div>
                <h3 className="font-extrabold uppercase text-base sm:text-lg" style={{ fontFamily: "Recursive, sans-serif" }}>
                  What Is Search Engine Marketing?
                </h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                  SEM blends paid search with landing-page optimization and
                  conversion strategy to own the SERP and turn clicks into revenue.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/services/paidadversting/semgraphic.png" // replace with your asset
                  alt="SEM"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div>
                <h3 className="font-extrabold uppercase text-base sm:text-lg" style={{ fontFamily: "Recursive, sans-serif" }}>
                  Discover the Potential of Retargeting
                </h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Stay top-of-mind with warm audiences. Smart sequences recover
                  abandoned carts, re-engage visitors, and lift overall ROAS.
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/services/paidadversting/sem.png" // replace with your asset
                  alt="Retargeting"
                  fill
                  className="object-contain"
                />
              </div>
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
    { title: "Google Ads", desc: "As a top-rated Google Ads agency that places your brand where it matters most, at the top of the world's most frequently used search engine, we first conduct in-depth research with keywords so we can know which search terms our target audience is using. They work on getting more website traffic, lead generation, or product sales.We handle many Google campaigns, including Search, Display, Shopping, and YouTube ads. A/B testing, conversion tracking, and guilty performance analysis are used daily to refine and monitor every campaign to keep cost per click down and ROI up. As a trusted Google Ads company and paid marketing agency, our goal is not to bring in traffic but the right traffic. ", logo: "/services/paidadversting/googleadd.png" },
    { title: "Social Ads", desc: "As a result-focused paid social advertising agency, we combine creative visuals with powerful copy and precision audience segmentation for effective targeting. You can discover social ads for different business needs, ranging from product launches to service promotion and community growth, and they lead users to specific destinations. Our agency provides complete paid social media service, covering audience analysis in addition to creating advertisements for their placement with continuous optimization activities. Our social media advertising services generate deep insights and analytics about every campaign structure, which we optimize for peak performance through continuous enhancements. Hypertech Verse maximizes each advertising dollar to build your brand and produce quantifiable achievement through their paid social marketing agency. ", logo: "/services/logo/logoc.png" },
    { title: "Bing Ads", desc: "The search engine market belongs to Google, yet Bing Ads (now Microsoft Ads) represents an underutilized yet enormously valuable method of targeting professional and older customer groups. Hypertech Verse's Bing Ad campaigns capitalize on lower market competition while maintaining budget control to help brand visibility rise.  The advertising platform of Bing Ads can connect your business to Yahoo and MSN platforms which provide you with greater market penetration possibilities. Our full range of services includes determining the appropriate keywords and continuously optimizing these campaigns. Bing Ads function as an astute choice for your paid media plan when managed by our team, so they operate as valuable additions to your marketing mix. ", logo: "/services/logo/logod.png" },
    { title: "Display Ads", desc: "A vast collection of websites, apps, and video platforms can benefit from your brand presentation by implementing Display Ads. Our designers work together with our strategic team to develop marketing materials that attract viewers and generate both website clicks and sales. The Display Ads programs in our company help maintain brand recognition by reaching new customers and engaging visitors who have shown interest before. Our platform uses sophisticated audience targeting methods, including demographic screening, contextual matching, behavioral patterns, and specific interests to direct your messages toward appropriate customer groups. We continuously monitor the results and conduct performance tests that enhance click-through rates and minimize wasted spending. ", logo: "/services/logo/logoe.png" },
    { title: "PPC Audit", desc: "We not only run ads but also offer paid advertising services that create smart, data-driven campaigns customized to your brand's objectives. As a results-focused paid ads agency, we combine creative storytelling with technical expertise so every ad hits and delivers results. You can expect robust financial returns on your investment through comprehensive investigations coupled with A/B testing and precise optimization. Our core mission differs from the rest since we emphasize complete transparency and project collaboration to track concrete performance results. The trusted agency provides PPC and paid advertising services, which turn complicated platforms into effective solutions for clients. Our team also offers expert PPC management services to ensure every ad dollar works harder.  ", logo: "/services/logo/logof.png" },
    { title: "Amazon Advertising", desc: "Selling on Amazon? The Amazon Advertising services provided by our company help you find your items to be excellent in overcrowded market areas. The team develops and oversees sponsored product ads, sponsored brand ads, and sponsored display ads to enhance product visibility and increase clicks, which leads to sales growth. Our team members optimize the entire aspect of your Amazon advertising journey. We check your cost of advertising sales (ACoS) in addition to your click-through rates and conversion statistics to maintain profitability for your campaigns. The Amazon Ad strategies at We provide structured solutions for new launches as well as established brand expansion strategies that will help your Amazon store succeed among its powerful e-commerce competitors. ", logo: "/services/paidadversting/cone.png" },
    { title: "Google Shopping", desc: "Online retailers must use Google Shopping Ads by law since Hypertech Verse, as both a Google Ads agency and a Google PPC agency, solves the problem by delivering optimal benefits. Our company functions as a complete Google Ads service provider and AdWords management provider to create and optimize product feeds that match precisely what customers search for.  Our qualified staff at the esteemed Google PPC management company executes product bidding procedures alongside audience segmentation while optimizing campaign organization to optimize your investment returns. Our organization provides reliable PPC services through complete management assistance. We provide search intent to sales conversion services based on data-driven paid advertising agency strategies. ", logo: "/services/logo/logof.png" },
    { title: "Remarketing", desc: "As a focused paid social marketing agency, we create powerful remarketing campaigns that follow consumers through online channels. The advertisements we create are designed to meet the specific pages a user has visited, enabling these users to see the value in returning and completing a conversion activity. Our platform, which many rely on as a top paid social media agency, segments audiences based on real-time behavioral data. With assistance from our design team, we produce scroll-stopping banners and messages. As a full-service paid social advertising agency, we make sure your ads are placed on high-traffic spots. Through our full-scale social media advertising services, we ensure that all chances to reconnect and convert your audience are fully maximized.", logo: "/services/paidadversting/cone.png" },
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


