"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section — Yellow background with black text */}
      <section className="relative overflow-hidden bg-[#FFD350] text-[#1d1d1d]">
        {/* Right half image (fills exactly 50% of the viewport width) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/seo/hero.png"
            alt="SEO illustration"
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
                    Best SEO Agency
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                      In United States.
                    </span>
                  </h1>

                  {/* Pink round arrow badge */}
                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#EA7BBF] text-[#fff9f1] shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
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
                  We contribute to SEO services, offering a variety of packages for all kinds of tools and strategies to rank your website
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
                  src="/services/seo/hero.png"
                  alt="SEO illustration"
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

        {/* Logos image after ribbon */}
        <div className="relative w-full bg-[#1d1d1d] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
            <div className="flex justify-center">
              <Image
                src="/services/seo/seologos.png"
                alt="Company Logos"
                width={1200}
                height={200}
                className="w-full h-auto max-w-6xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1d1d1d] text-[#fff9f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/seo/about.png"
                  alt="SEO Professional"
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
                  Comprehensive SEO <span className="text-[#EA7BBF]">Services</span>
                </h2>

                {/* Sub headline */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Driven by research, powered by results.
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Hypertech Verse is a leading organic SEO agency in the USA that boosts brand online visibility, leading to enduring business growth. It operates as a reliable and affordable SEO services provider, delivering enterprise SEO solutions. Our agency avoids obsolete guessing methods using research-based data strategies and established methodologies for every project. Team members use detailed evaluations of business facts to generate specialized approaches that produce quantitative outcomes.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#EA7BBF] text-[#fff9f1] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#d068a5] transition-colors"
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
                  Our Collection of SEO Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          {/* Pink straight box - static bar */}
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-[#fff9f1] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of SEO Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted SEO Slides */}
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

          <div className="h-[1vh] sm:h-[1.5vh] md:h-[2vh] lg:h-[3.5vh]" />

          {/* ============ ROW 2 (opposite pan, lighter tilt) ============ */}
          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/services/seo/work.png"
                alt="SEO Portfolio"
                width={800}
                height={800}
                sizes="100vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Process (bg.png + vertical tabs) */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 text-[#fff9f1]">
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1d1d1d] leading-tight"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            Our In-Depth-Services to <br className="hidden sm:block" />
            Rank Your Website
          </h2>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-[#1d1d1d]/90 px-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our SEO services are designed to boost your online visibility, drive organic traffic, and position your business at the top of search engine results. We use data-driven strategies, keyword research, and on-page optimization to ensure your website ranks. Our SEO experts help you grow sustainably by attracting the right traffic and turning visitors into loyal customers.
          </p>
        </div>

        {/* content grid: logos + active text + vertical tabs */}
        <SEOProcessTabs />
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

      {/* ===== Unfair Advantages section (place before <TestimonialsMasonry />) ===== */}
      <section className="relative bg-[#1d1d1d] text-[#fff9f1] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Title */}
          <h2
            className="text-center text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Unfair{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA7BBF] to-[#FFD350]">
              Advantages
            </span>{" "}
            You Will Gain from Us
          </h2>

          {/* Top row: copy + art + side arrows */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10">
            {/* Left: copy */}
            <div>
              <h3
                className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wide leading-tight"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Multi-Platform SEO Optimization
              </h3>
              <p
                className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#fff9f1]/80 max-w-md leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We combine technical SEO, on-page refinement, content strategy, and
                authority building to lift your rankings across Google, Bing, and
                more. Our team maps intent, clusters keywords, and optimizes site
                speed, Core Web Vitals, internal linking, and schema for durable wins.
              </p>
            </div>

            {/* Right: illustration with pink circle arrows */}
            <div className="relative">
              {/* left arrow */}
              <span className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-[#EA7BBF] text-[#1d1d1d]">
                <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-[18px] sm:h-[18px]">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>

              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl">
                {/* use your existing asset */}
                <Image
                  src="/services/seo/cone.png"
                  alt="SEO multi-platform illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* right arrow */}
              <span className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-[#EA7BBF] text-[#1d1d1d]">
                <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-[18px] sm:h-[18px]">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* Six step pills */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {[
              "Audit & Analysis",
              "Keyword Strategy",
              "On-Page Optimization",
              "Technical SEO",
              "Link Building",
              "Monitoring & Growth",
            ].map((label, idx) => (
              <div
                key={label}
                className="flex items-center gap-2 sm:gap-3 rounded-full bg-[#FFD350] px-3 py-2 sm:px-4 sm:py-3 text-[#1d1d1d]"
              >
                <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#EA7BBF] text-[#fff9f1] font-bold text-xs sm:text-sm">
                  {idx + 1}
                </span>
                <span className="font-bold text-xs sm:text-sm uppercase leading-tight" style={{ fontFamily: "Recursive, sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Sub-heading + CTA */}
          <div className="text-center mt-6 sm:mt-8">
            <p
              className="text-sm sm:text-base md:text-[16px] lg:text-[18px] tracking-wide uppercase text-[#fff9f1]/70 px-2"
              style={{ fontFamily: "Recursive, sans-serif", fontWeight: "bold" }}
            >
              Our Seamless 6-step process for efficient and effective Results.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block -rotate-3 bg-[#EA7BBF] px-5 py-2.5 sm:px-6 sm:py-3 font-extrabold text-sm sm:text-base text-[#fff9f1] rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GET STARTED
            </Link>
          </div>

          {/* Bottom split: art left, copy right */}
          <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10">
            {/* Left art */}
            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/services/seo/seoguys.png"
                alt="SEO team working"
                fill
                className="object-contain"
              />
            </div>

            {/* Right copy */}
            <div>
              <h3
                className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wide leading-tight"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Why SEO is important for your business?
              </h3>
              <p
                className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#fff9f1]/80 leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                SEO compounds. It drives qualified traffic, reduces CAC, and boosts
                credibility by placing your brand where buyers search. With strong
                technical foundations, high-intent content, and healthy backlinks,
                your website turns into a 24/7 acquisition engine that keeps growing
                even when ads pause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Card Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function SEOProcessTabs() {
  const steps = [
    {
      title: "Shopify SEO",
      desc:
        "Hypertech Verse dedicates its services to enhance Shopify stores. Our Shopify SEO agency works on product titles and descriptions, and Meta tag optimization to enable search engine content discovery and page ranking. The implementation of structured data, combined with increased site speed fulfillment and mobile compatibility improvement, results in an optimized user experience. Hypertech provides on-page SEO services where our team works on strengthening site structure by improving the internal linking system, fixing broken links, and optimizing URLs. Our small businesses' SEO services guarantee that new and existing Shopify stores secure a relentless sales performance while maintaining an industry leadership position.",
      logo: "/services/seo/taba.png"
    },
    {
      title: "Ecommerce SEO",
      desc:
        "Traditional SEO practices do not suffice for Ecommerce since optimizing product pages and checking out processes and category structures leads to better conversion rates. The SEO agency at Hypertech Verse delivers personalized eCommerce SEO solutions for different platforms, including Shopify, Magento, WooCommerce, and BigCommerce.  Our production of schema markup enables search engines to enhance their ability to show your products. We provide content optimization through our on-page SEO services, together with backlink creation as a part of our off-page SEO services, to increase your store's authority standing. Our work on your eCommerce site SEO will draw additional customers while generating maximum profitable results.",
      logo: "/services/logo/logoc.png"
    },
    {
      title: "AI SEO",
      desc:
        "Modern SEO implementation adopts new ways through artificial intelligence technology. Our company's AI SEO services combine automation with machine learning technologies to operate websites more efficiently. The use of AI-generated keyword research applications, predictive analytics, and natural language processing (NLP) enables us to develop content that is both strongly relevant and highly appealing to readers.   The AI-powered SEO portfolio we offer automatically produces content and optimizes metadata dynamically while employing AI to develop link-building methods. The personalization enabled by artificial intelligence allows you to achieve exact targeting with SEO tools that adapt well to constantly evolving search engine rules.",
      logo: "/services/logo/logod.png"
    },
    {
      title: "Local SEO",
      desc:
        "Local SEO is the best SEO service for small businesses to generate customer engagement in their target geographic market area. Our local search engine optimization service's prices help your business appear in Google Local Pack, Google Maps, and chosen local search result pages. Our service optimizes your Google My Business (GMB) profile, which includes detailed business information verification with well-written descriptions and eye-catching images.  Our team dedicates efforts to establish local citations, obtains favorable customer evaluations, and deploys location-specific search word approaches. Our B2B SEO service for small businesses helps any establishment with physical or service-based operations to effectively attract and maintain a local customer base through appropriate location strategies.",
      logo: "/services/logo/logoe.png"
    },
    {
      title: "Amazon SEO",
      desc:
        "Amazon sells more than product listings because sellers must invest in Amazon SEO services to achieve market leadership in the competitive arena. Hypertech Verse dedicates its expertise to optimizing product titles and bullet points together with descriptions and backend search terms so Amazon's search algorithm can discover your products more easily.  Hypertech Verse optimizes conversion rates through CRO methods involving A+ content, improved product images, and compelling calls to action for better click-through rates and improved sales results. We provide optimization for your Amazon Seller Central. Our SEO audit solution enables businesses to locate their Amazon listing weaknesses while deploying data-based solutions.",
      logo: "/services/logo/logof.png"
    },
    {
      title: "Enterprise SEO",
      desc:
        "Major corporations need customized enterprise SEO services for their extensive websites containing numerous pages. The enterprise SEO agency at our firm designs unique SEO approaches for companies running multiple franchises with multiple locations. Enterprise SEO services from our agency include complete website audits alongside fixing search indexing and crawling problems. The services include AI-driven keyword analysis, automation tools, and advanced schema markup. We provide content writing solutions and SEO copywriting services that develop compelling material that connects with your current marketplace. We deploy long-term growth schemes through enterprise SEO that help your company establish lasting expansion and industry leadership status.",
      logo: "/services/seo/cone.png"
    },
    {
      title: "Link Building",
      desc:
        "Your website’s authority depends heavily on backlinks, as search engines use them to rank your website. The links you acquire from reliable websites are recommendations to search engines that your content is valuable and trustworthy. The white-label SEO services from our company apply ethical link-building approaches that construct domain authority while stimulating organic website traffic. Our team builds authoritative backlinks through successful guest blogging initiatives, niche edits, and planned outreach methods towards relevant websites with high positions. We deliver sustainable long-term search engine success and lasting online growth by implementing complete off-page SEO approaches that establish your site with strong natural backlink networks.",
      logo: "/services/seo/cone.png"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc:
        "Through search engine optimization, businesses achieve more than top rankings by enabling genuine business success through visitor transformation into customers. Our company's Conversion Rate Optimization (CRO) services work to improve website elements for better user experience and conversion results.  We improve every piece of content and optimize landing pages together with site speed to create a smooth journey that leads visitors towards taking desired actions. In our practice, we unite SEO and CRO efforts to bring in targeted visitors who successfully convert into customers. Data-driven analytics enable your digital marketing strategy to produce quantifiable business expansion, yielding superior results in an online market competition.",
      logo: "/services/seo/cone.png"
    },
    {
      title: "Technical SEO",
      desc:
        "Our technical SEO services implement strategies for website speed optimization, mobile responsiveness, and structured data implementation while fixing all indexing errors. Our work on these core elements produces better website performance and usage experience with improved search engine discoverability.   Our detailed SEO audit lets us locate and solve ranking obstacles caused by technical problems. Our optimization work addresses all types of website optimization, including duplicate content elimination, site structure development, and Core Web Vitals enhancement to provide a full search engine and user-friendly configuration. Our expert implementation of technical SEO approaches enhances users' search rankings, keeping your site in optimal condition for smooth experiences.",
      logo: "/services/seo/cone.png"
    },
    {
      title: "Content Writing",
      desc:
        "The foundation of SEO achieves success through content, while our SEO content writing services produce high-quality text that optimizes keywords for better search engine positioning. Our company's WordPress SEO service optimization involves enhancement of content readability through internal link insertion and structural SEO optimization. Our company provides two different services for search engine optimization, including on-page SEO services and SEO copywriting services. Hypertech Verse is an international SEO agency that delivers effective solutions to enhance your online reach. The platform Hypertech Verse provides SEO services, content optimization, and technical SEO solutions to boost brand visibility and increase website traffic, leads, and conversion rates.",
      logo: "/services/seo/cone.png"
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
          className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold text-[#1d1d1d] justify-center lg:justify-start"
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
          className="mt-3 text-xs sm:text-sm md:text-base text-[#1d1d1d]/90 leading-relaxed"
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
                    isActive ? "text-[#1d1d1d]" : "text-[#1d1d1d]/75 hover:text-[#1d1d1d]",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span
                      className={[
                        "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition",
                        isActive ? "bg-[#FFD350]" : "bg-[#1d1d1d]/50 group-hover:bg-[#FFD350]"
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
