"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../components/sections/home/cardreviews";

export default function PayPerClickPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Yellow background with black text (same as SEO) */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/payperclick/hero.png"
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
                    Maximize Your ROI with PPC
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                    Driven Paid Advertising
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
                 Our PPC campaigns are high converting as we do the right thing, at the right time and on the right platforms. Our tactics are built to win, we have lapped your niche.
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
                  src="/services/payperclick/hero.png"
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
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/payperclick/about.png"
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
                Reach a Wider <span className="text-[#EA7BBF]">Audience</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our areas of expertise lie in constructing hyper-targeted ad campaigns using platforms such as Google, Facebook, and Instagram. We are more than a place to run ads at Hypertech Verse. We design smarter strategies to take your brand up another notch toward visibility and quantifiable results. With each campaign, we run on your behalf, you enjoy sustained ROI and increased growth.
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
      <section className="relative bg-black overflow-hidden py-12 sm:py-14 md:py-16">
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

        <PPCProcessTabs />
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
<section className="bg-black text-white py-14 sm:py-16">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    {/* 6-step chips */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {[
        "Measurable Results",
        "Fast and Targeted Reach",
        "Cost Efficiency and Budget Control",
        "Cross-Platform Visibility",
        "Advanced Audience Insights",
        "High Intent Traffic",
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

    {/* FAQs Section */}
    <div className="mt-10 sm:mt-12 md:mt-16">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center mb-8 sm:mb-10 md:mb-12"
        style={{ fontFamily: "Recursive, sans-serif" }}
      >
        FAQs
      </h2>
      
      <div className="space-y-4 sm:space-y-5">
        <FAQItem 
          question="What is PPC and how does it work?"
          answer="PPC stands for Pay-Per-Click, an online advertising model where you pay only when someone clicks on your ad. It allows you to instantly reach potential customers on platforms like Google, Facebook, Bing, and Amazon."
        />
        <FAQItem 
          question="How much does PPC advertising cost?"
          answer="PPC costs vary based on your budget, competition in your industry, and the platforms you use. You control your ad spend with daily or monthly limits, making it flexible and scalable for businesses of all sizes."
        />
        <FAQItem 
          question="How soon can I see results from a PPC campaign?"
          answer="You can start seeing traffic almost immediately after your ads go live. However, optimal performance usually takes a couple of weeks of testing, learning, and refining the campaign for the best results."
        />
        <FAQItem 
          question="Which platforms do you manage PPC ads on?"
          answer="We manage PPC campaigns across multiple platforms, including Google Ads, Meta (Facebook & Instagram), Bing Ads, Amazon Ads, and more, depending on where your audience spends time."
        />
      </div>
    </div>
  </div>  
</section>

      <TestimonialsMasonry />
    </main>
  );
}

function PPCProcessTabs() {
  const steps = [
    { title: "Google Ads", desc: "Pay-per-click. The most effective platforms to utilize are Google Ads, as a business can target active customers who are searching online to find particular services or products. These include search ads, display banners, shopping ads, and YouTube placements. These advertisement classes bring you unequalled opportunities to target your audience with perfection. We are Google Ads experts in designing ROI-based campaigns at Hypertech Verse. We conduct thorough keyword research, bidding tactics, and constantly optimize the campaigns to reduce cost and maximize conversion. We make every dollar work in terms of setup to growth.", logo: "/services/payperclick/aone.png" },
    { title: "Social Ads", desc: "Social media advertising helps you reach people using platforms such as Facebook, Instagram, LinkedIn, and TikTok with your brand. Their targeting capabilities include interests, behaviors, demographics, and location, and are strong, which makes them a perfect choice to use in brand awareness, engagement, and lead generation activities. We develop appealing, platform-specific ad creatives that are capable of penetrating through the clutter. We use data-driven strategies and optimize them according to the behavior of your audience on each platform. Whether you are introducing a new product or growing a service, we get you to where your audience is scrolling.", logo: "/services/payperclick/smm.png" },
    { title: "Bing Ads", desc: "Other than Google Ads, Bing Ads, traditionally Microsoft Advertising, can be used in the form of lower competition and cost-per-click in many cases. It allows the companies to place their ads on the networks of Bing, Yahoo and AOL, allowing it to be a clever extension of a varied PPC campaign. Bing Ads allow getting a grip on a potential yet underestimated audience at a high value. Finally, our campaigns are strategically designed to replicate your success on Google ads but modified to account for the specifics of the Microsoft ecosystem, driving conversions at an affordable cost.", logo: "/services/payperclick/bing.png" },
    { title: "Display Ads", desc: "Visual-based display ads are presented on websites, applications, and video as banners within the Google Display Network. They are perfect for establishing brand awareness, retargeting a visitor, or introducing a product to a new audience. With continuous optimization and real-time performance tracking, we make sure every display ad delivers maximum impact and measurable results. We create eye-pleasing banners that attract clicks and impressions. Coupled with smart audience targeting, including contextual, demographic, and behavioral filters, our display campaigns will deliver your brand in front of the right people and at the right time.", logo: "/services/payperclick/display.png" },
    { title: "PPC Audit", desc: "You should conduct a PPC audit when you feel that your existing campaigns are under-converting or costing you too much money. It assists in pinpointing the loopholes, inefficiencies, and areas of enhancement in your current ad strategy. Hypertech Verse offers comprehensive audits that examine all aspects of the campaign, including the structure of the campaign, ad copy, the keyword strategy, landing pages, and tracking. You will get a clear report with actions that can be taken to increase ROI and reduce lost spend.", logo: "/services/payperclick/audit.png" },
    { title: "Amazon Ads", desc: "Amazon Ads provide a very efficient method of advertising products to buyers who are already actively shopping. Sellers will be able to display their ads at the top of the shopping pages for customers with high purchase intent, such as Sponsored Products and Sponsored Brands. We optimize your Amazon campaigns to maximize product visibility, keywords, and conversions. Whether it is a new launch or speeding up an existing product, we ensure your advertisements are shown to shoppers with immediate intent to purchase.", logo: "/services/payperclick/amazon.png" },
    { title: "Google Shopping", desc: "The Google Shopping Ads show the products with the visuals, price, and product description directly in the search results. The promos are an important source of traffic that results in high intent and are critical to the e-commerce brands that want to increase sales. We take care of the entire setup- this starts with setting up a clean product feed to arranging bids and campaigns. We intend to display your products to those users who are actually comparing the products and are ready to make a purchase decision.", logo: "/services/payperclick/shopping.png" },
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
            <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] -translate-x-[1px]"><path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {steps[active].title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-black/90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>{steps[active].desc}</p>
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
                  className={["group w-full text-left uppercase font-extrabold tracking-wide","transition rounded-xl px-3 py-2 sm:px-4 sm:py-2","text-sm sm:text-base",isActive ? "text-black" : "text-black/75 hover:text-black"].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span className={["h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition",isActive ? "bg-[#FFD350]" : "bg-black/50 group-hover:bg-[#FFD350]"].join(" ")}/>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-white/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h3
          className="text-base sm:text-lg md:text-xl font-bold text-white pr-4"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          {question}
        </h3>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-[#FFD350] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-5">
          <p
            className="text-sm sm:text-base text-white/80 leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {answer}
          </p>
        </div>
      )}
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


