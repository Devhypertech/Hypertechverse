"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "../../../components/ScrollAnimationSimple";
import TestimonialsMasonry from "../../../../components/sections/home/cardreviews";

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Pink background with white text (same styling as SMM) */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/services/softwaredev/hero.png"
            alt="Custom software development illustration"
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
                   Scalable & User
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[88px] block">
                    Friendly Apps for All Platforms
                    </span>
                  </h1>

                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
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
               Keep in touch with your clients by using intelligent, approachable applications that are compatible with all devices. Make purchasing simpler and the competitors obsolete.
                </p>

                <div className="mt-6 sm:mt-8 px-2">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#FFD350] px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 lg:px-8 lg:py-4 text-sm sm:text-base md:text-lg font-extrabold text-black shadow-[0_6px_0_rgba(0,0,0,0.25)] sm:shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-rotate-3 transition"
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
                  src="/services/smm/icons.png"
                  alt="Software development illustration"
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
                src="/services/softwaredev/icons.png"
                alt="Tech stack icons"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* About Section (keeps layout/colors) */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Image */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="relative">
                <Image
                  src="/services/softwaredev/about.png"
                  alt="Custom software engineering"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollAnimation>

            {/* Right side - Content */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FBEAE2] leading-tight" style={{ fontFamily: 'Recursive, sans-serif' }}>
                Machine Learning <span className="text-[#EA7BBF]">Services</span>
                </h2>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FBEAE2]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Transforming data into business intelligence
                </h3>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Utilize the power of Machine Learning to learn things and get the best out of Business performance. Learn from data and make predictive decisions so your business always stays ahead. Get more innovative strategies through customized machine learning solutions.
                </p>

                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FFD350] text-black px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#FFC107] transition-colors"
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
                  Our Collection of Engineering Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="w-full bg-[#EA7BBF] transform rotate-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 overflow-hidden">
              <div className="text-marquee-right">
                <span className="text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider whitespace-nowrap inline-block">
                  Our Collection of Engineering Excellence | HYPERTECH VERSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Showcase (reuse layout/images for now) */}
      <section className="relative bg-black overflow-hidden">
        <div className="mx-auto w-full max-w-[2000px] py-3 sm:py-4 md:py-6 lg:py-8">
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

          <div className="-rotate-6 sm:-rotate-5 lg:-rotate-4">
            <div className="relative h-[80vh] sm:h-[100vh] md:h-[110vh] lg:h-[120vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/services/softwaredev/work.png"
                alt="Software project showcase"
                width={800}
                height={800}
                sizes="100vw"
                className="h-full w-[140vw] max-w-none object-cover animate-pan-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Tabs (renamed for software lifecycle) */}
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Recursive, sans-serif' }}
          >
            Limitless Possibilities with our Custom
            <br className="hidden sm:block" />
            Software Development Services
          </h2>
          <p
            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-white/90 px-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
           With Custom Software Development Services, you discover the freedom to build exactly what your business needs. We create robust, scalable, and user-centric solutions that best help you achieve your goals at Hypertech Verse. Our innovative software is easy to use and adapts to your unique processes without any limitations.
          </p>
        </div>

        <SoftwareProcessTabs />
      </section>

      {/* Wavy Bottom Separator (kept) */}
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

      {/* Benefits Section (same layout/colors, software copy) */}
      <section className="relative bg-black text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            className="text-center text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-10"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Benefits of Custom Software Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10">
            <div>
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Built for Your Business
              </h3>
              <p
                className="mt-3 text-sm text-white/80 max-w-md"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Align software with workflows, integrate with existing systems, and unlock efficiencies impossible with off‑the‑shelf tools.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/services/softwaredev/cone.png"
                  alt="Engineering illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>


          <div className="text-center mt-2">
            <Link
              href="/contact"
              className="inline-block -rotate-3 bg-[#EA7BBF] px-6 py-3 font-extrabold text-black rounded-md shadow-[0_6px_0_rgba(0,0,0,.25)] hover:-rotate-1 transition"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GET STARTED
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl">
              <Image
                src="/services/softwaredev/clock.png"
                alt="Scalable architecture"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Scale Confidently
              </h3>
              <p
                className="mt-3 text-sm text-white/80"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Modern architectures, cloud‑native patterns, and strong DevOps give your product headroom to grow without slowing down delivery.
              </p>
            </div>
          </div>
          <h2
            className="text-center text-lg sm:text-xl font-extrabold uppercase tracking-wide mb-10"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Benefits of Custom Software Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-10">
            <div>
              <h3
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                Built for Your Business
              </h3>
              <p
                className="mt-3 text-sm text-white/80 max-w-md"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Align software with workflows, integrate with existing systems, and unlock efficiencies impossible with off‑the‑shelf tools.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/services/softwaredev/Datasecurity.png"
                  alt="Engineering illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#EA7BBF] text-black">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
      
        </div>
      </section>

      {/* Reviews Section */}
      <TestimonialsMasonry />
    </main>
  );
}

function SoftwareProcessTabs() {
  const steps = [
    {
      title: "Mobile App & Web Development",
      desc:
        "With our Mobile App Development services, we create unique, brief yet effective apps for our users on Android and iOS platforms. Our goal is seamless performance from launch to concept, which means forming an app that is suitable for all smartphone devices and delivers on its promise of an engaging and exceptional user experience. Hypertech Verse has expert web developers who provide stunning looks and flawless performance. Whether you have an e-commerce platform or a corporate site, our websites are responsive, high-performing, and captivate your visitors to drive conversions. You cannot have an online presence that stands out with your brand.",
      logo: "/services/softwaredev/phone.png",
    },
    {
      title: "Machine Learning & Artificial Intelligence",
      desc:
        "Utilize the power of Machine Learning to learn things and get the best out of business performance. Learn from data and make predictive decisions so your business always stays ahead. Get more innovative strategies through customized machine learning solutions. Empower your organization with intelligent automation that enhances efficiency, accuracy, and long-term growth. Use the grip of Artificial Intelligence to make better decisions and increase process optimization. Our AI solutions are made to serve automation, data insight, and a better user experience for your business. Change technology that scales with your needs by taking a step into the future with cutting-edge AI technology.",
      logo: "/services/logo/logoc.png",
    },
    {
      title: "Product Design with Quality Assurance",
      desc:
        "Great design starts with great products. Given that we are focused on creating intuitive, functional, visually stunning designs that resonate with your Users, we have come to understand that our Product Design services are as much of a need for your product as your actual product itself. Blending creativity and strategy together, deriving products that would look good and work even better. The quality assurance service assured us that the software was bug-free and ready for production. To that end, we relentlessly test your product thoroughly and carefully, identifying and resolving any possible problems to ensure it meets the best performance and security standards. Our quality is guaranteed.",
      logo: "/services/logo/logod.png",
    },
    {
      title: "AR & VR Software Development",
      desc:
        "Get started with the development of an Augmented Reality (AR) app. We bring life into immersive experiences, making them interactive so users are intrigued and inspired to learn differently. Use AR technology to change how your customers relate to your products and services. Elevate your brand with innovative AR solutions that blend creativity and technology for unmatched engagement. Virtual Reality Software Development will help you take your business to the next level. With us, we build fully immersive virtual environments aiming to engage and educate users across the gaming, education, and training industries. Get inside a new reality through the cutting-edge VR solutions.",
      logo: "/services/logo/logoe.png",
    },
    {
      title: "SaaS & Custom CRM",
      desc:
        "Our SaaS Development service can build cloud-based solutions, giving you flexible, scalable, and accessible software for your customers. We create and develop secure platforms that allow your business and please your customers. Turn your idea into a reliable service on the cloud. Empower your operations with seamless integrations, automated updates, and performance-driven architecture that ensures consistent growth and reliability. Through our CRM service, you will achieve more efficient customer organization and automation capabilities that drive increased sales performance. Our service platform provides practical tools that enable relationship management and personalized communication to enhance satisfaction while boosting business growth at speed.",
      logo: "/services/logo/logof.png",
    },
    {
      title: "Cloud & Blockchain Development",
      desc:
        "Cloud Services from our team deliver easy, secure, and scalable cloud solutions for your organization. We offer flexible services, from infrastructure management to cloud storage, to meet the demands of your developing business. Enable cloud computing and take your business to success. Experience unmatched efficiency and agility with cloud solutions designed to grow with your business. Blockchain Development will transform your business. Trust is essential; hence, we create secure, transparent, and decentralized blockchain solutions that allow you to build it and streamline your operations. Blockchain technology allows us to present innovative blockchain solutions. Empower your enterprise with cutting-edge blockchain systems that enhance security, traceability, and business integrity.",
      logo: "/services/smm/target.png",
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

      {/* Middle: active step title + paragraph */}
      <div className="max-w-xl text-center lg:text-left">
        <h3
          className="inline-flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-extrabold text-black justify-center lg:justify-start"
          style={{ fontFamily: 'Recursive, sans-serif' }}
        >
          <span className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 place-items-center rounded-full bg-[#FFD350] text-black shadow-[0_3px_0_rgba(0,0,0,0.25)] sm:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            <svg width="14" height="14" viewBox="0 0 24 24" className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] -translate-x-[1px]">
              <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {steps[active].title}
        </h3>
        <p
          className="mt-3 text-xs sm:text-sm md:text-base text-black/90 leading-relaxed" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {steps[active].desc}
        </p>
      </div>

      {/* Right: vertical tabs */}
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
                  className={[
                    "group w-full text-left uppercase font-extrabold tracking-wide",
                    "transition rounded-xl px-3 py-2 sm:px-4 sm:py-2",
                    "text-sm sm:text-base",
                    isActive ? "text-black" : "text-black/75 hover:text-black",
                  ].join(" ")}
                  style={{ fontFamily: 'Recursive, sans-serif' }}
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span
                      className={[
                        "h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition",
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

function RibbonText() {
  return (
    <div className="flex items-center">
      <Image
        src="/services/smart.png"
        alt="Smart Software That Drives Success"
        width={800}
        height={68}
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}


