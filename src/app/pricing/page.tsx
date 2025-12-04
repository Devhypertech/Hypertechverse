"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

import {
  websitePackages,
  ecommercePackages,
  brandingPackages,
  videoAnimationPackages,
  seoPackages,
  smmPackages,
  comboPackages
} from "../../../data/packages";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("website");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  // Auto-scroll functionality for desktop
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if desktop
    const checkDesktop = () => window.innerWidth >= 1024;
    if (!checkDesktop()) return;

    // Small delay to ensure DOM is ready
    const startTimeout = setTimeout(() => {
      const scrollInterval = setInterval(() => {
        const container = scrollContainerRef.current;
        if (!container || isPausedRef.current) return;

        // Only scroll on desktop
        if (!checkDesktop()) return;

        // Check if there's content to scroll
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        container.scrollLeft += 1;

        // Reset to start when reaching the end
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
      }, 30);

      // Store interval ID for cleanup
      (window as unknown as { scrollIntervalId?: ReturnType<typeof setInterval> }).scrollIntervalId = scrollInterval;
    }, 500);

    return () => {
      clearTimeout(startTimeout);
      const intervalId = (window as unknown as { scrollIntervalId?: ReturnType<typeof setInterval> }).scrollIntervalId;
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeTab]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  // Pricing tiers data
  const pricingTiers: { [key: string]: any } = {
    website: {
      title: "Website Package",
      price: "$200",
      art: "/packages/speaker.png",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "Content Management",
        "Contact Forms",
        "Social Media Integration",
        "Mobile Friendly",
        "Fast Loading",
        "Security Features",
        "Support & Maintenance",
      ],
      services: ["WEB DEVELOPMENT", "RESPONSIVE DESIGN", "SEO OPTIMIZATION", "CMS INTEGRATION"],
      description: "Professional website development services tailored to your business needs...",
    },
    "e-commerce": {
      title: "E-Commerce Package",
      price: "$400",
      art: "/packages/arrowboard.png",
      features: [
        "Online Store Setup",
        "Product Management",
        "Payment Gateway Integration",
        "Shopping Cart",
        "Order Management",
        "Inventory Tracking",
        "Shipping Integration",
        "Customer Accounts",
        "Security & SSL",
        "Analytics Integration",
      ],
      services: ["E-COMMERCE DEVELOPMENT", "PAYMENT GATEWAY", "PRODUCT MANAGEMENT", "ORDER TRACKING"],
      description: "Complete e-commerce solutions to launch and grow your online store...",
    },
    branding: {
      title: "Branding Package",
      price: "$300",
      art: "/packages/speaker.png",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography Selection",
        "Brand Identity",
        "Business Cards",
        "Letterhead Design",
        "Social Media Assets",
        "Brand Strategy",
        "Style Guide",
      ],
      services: ["LOGO DESIGN", "BRAND IDENTITY", "BRAND GUIDELINES", "VISUAL ASSETS"],
      description: "Comprehensive branding services to establish your unique brand identity...",
    },
    "video-animation": {
      title: "Video Animation Package",
      price: "$500",
      art: "/packages/trophycupaward.png",
      features: [
        "2D/3D Animation",
        "Explainer Videos",
        "Motion Graphics",
        "Video Editing",
        "Voiceover",
        "Music & Sound Effects",
        "Script Writing",
        "Storyboarding",
        "Multiple Revisions",
        "Final Delivery",
      ],
      services: ["2D ANIMATION", "3D ANIMATION", "EXPLAINER VIDEO", "MOTION GRAPHICS"],
      description: "Professional video animation services to bring your ideas to life...",
    },
    seo: {
      title: "SEO Package",
      price: "$250",
      art: "/packages/arrowboard.png",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
        "Local SEO",
        "SEO Audit",
        "Performance Tracking",
        "Monthly Reports",
        "Ongoing Support",
      ],
      services: ["SEO OPTIMIZATION", "KEYWORD RESEARCH", "LINK BUILDING", "SEO AUDIT"],
      description: "Comprehensive SEO services to improve your search engine rankings...",
    },
    "smm-package": {
      title: "SMM Package",
      price: "$350",
      art: "/packages/speaker.png",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Post Scheduling",
        "Community Management",
        "Analytics & Reporting",
        "Ad Campaign Management",
        "Platform Optimization",
        "Engagement Growth",
        "Brand Awareness",
        "Monthly Reports",
      ],
      services: ["SOCIAL MEDIA MANAGEMENT", "CONTENT CREATION", "AD MANAGEMENT", "ANALYTICS"],
      description: "Complete social media management to grow your online presence...",
    },
    "combo-packages": {
      title: "Combo Packages",
      price: "Custom",
      art: "/packages/trophycupaward.png",
      features: [
        "Multiple Services Combined",
        "Custom Package Options",
        "Discounted Pricing",
        "Dedicated Account Manager",
        "Priority Support",
        "Flexible Terms",
        "Scalable Solutions",
        "Comprehensive Strategy",
        "Integrated Services",
        "Best Value",
      ],
      services: ["CUSTOM SOLUTIONS", "MULTI-SERVICE PACKAGES", "DEDICATED SUPPORT", "FLEXIBLE PLANS"],
      description: "Custom combo packages combining multiple services for maximum value...",
    },
  };

  const currentPricing = pricingTiers[activeTab];

  // Growth process steps
  const processSteps = [
    { number: 1, label: "DISCOVERY & BRIEFING" },
    { number: 2, label: "SCRIPTWRITING & STORYBOARDING" },
    { number: 3, label: "VISUAL DESIGN & STYLE FRAMES" },
    { number: 4, label: "VOICEOVER & AUDIO SELECTION" },
    { number: 5, label: "ANIMATION & MOTION EDITING" },
    { number: 6, label: "FINAL REVIEW & DELIVERY" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-8 sm:py-8 bg-[#EA7BBF]">
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-12 md:py-16">
            <h1
              className="leading-[1.1] sm:leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px] text-white mb-8"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Pricing
            </h1>

            <Link
              href="/contact"
              aria-label="Get started"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#FFD350] hover:bg-[#EA7BBF] hover:text-[#fff9f1] hover:border-[#fff9f1] hover:border-2 hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-[#1d1d1d] py-8 overflow-hidden">
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          <div className="relative h-[80px] sm:h-[100px] overflow-hidden">
            <div className="absolute inset-0 flex items-center animate-marquee-x whitespace-nowrap">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#EA7BBF] mr-12 inline-block">
                SOLUTIONS THAT DRIVE{" "}
                <span className="text-[#FFD350]">SUCCESS</span> SMART SOLUTIONS THAT DRIVE SUCCESS
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#EA7BBF] mr-12 inline-block">
                SOLUTIONS THAT DRIVE{" "}
                <span className="text-[#FFD350]">SUCCESS</span> SMART SOLUTIONS THAT DRIVE SUCCESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="bg-[#1d1d1d] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { key: "website", label: "Website" },
              { key: "e-commerce", label: "E- Commerce" },
              { key: "branding", label: "Branding" },
              { key: "video-animation", label: "Video Animation" },
              { key: "seo", label: "SEO" },
              { key: "smm-package", label: "SMM PACKAGE" },
              { key: "combo-packages", label: "COMBO PACKAGES" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === tab.key
                  ? "bg-[#FFD350] text-[#1d1d1d] shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card and Services Section */}
      <section className="bg-[#1d1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "website" ? (
            // Website Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {websitePackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "e-commerce" ? (
            // E-Commerce Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {ecommercePackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "branding" ? (
            // Branding Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {brandingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "video-animation" ? (
            // Video Animation Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {videoAnimationPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "seo" ? (
            // SEO Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "smm-package" ? (
            // SMM Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {smmPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "combo-packages" ? (
            // Combo Packages - Vertical on mobile, horizontal scroll on sm+, 2 visible on lg+
            <div
              ref={scrollContainerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col sm:flex-row sm:overflow-x-scroll gap-6 lg:gap-8 sm:pb-4 scrollbar-thin scrollbar-thumb-[#EA7BBF] scrollbar-track-[#2d2d2d]"
            >
              {comboPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col w-full sm:min-w-[90%] lg:min-w-[calc(50%-16px)] lg:w-[calc(50%-16px)] sm:flex-shrink-0"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-[#1d1d1d] mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-[#1d1d1d]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#1d1d1d]/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-[#1d1d1d]">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Other tabs - Original layout
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Pricing Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                {/* Illustration */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <Image
                      src={currentPricing.art}
                      alt={currentPricing.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl font-black uppercase text-center text-[#1d1d1d] mb-4"
                  style={{ fontFamily: "Recursive, sans-serif" }}
                >
                  {currentPricing.title}
                </h2>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-[#1d1d1d]">
                    {currentPricing.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {currentPricing.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-[#1d1d1d]">
                      <svg
                        className="w-5 h-5 mr-3 text-[#EA7BBF] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buy Now Button */}
                <Link
                  href="/contact"
                  className="w-full bg-[#EA7BBF] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-lg text-center block"
                >
                  Buy Now
                </Link>
              </div>

              {/* Right: Services Section */}
              <div className="flex flex-col justify-center">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#FFD350] rounded-full flex items-center justify-center">
                    <span className="text-[#1d1d1d] font-bold text-sm">•</span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase text-white"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {currentPricing.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-white/80 mb-6 leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {currentPricing.description}
                </p>

                {/* Services List */}
                <div className="space-y-3">
                  {currentPricing.services.map((service: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                    >
                      <span className="text-white uppercase font-semibold text-sm sm:text-base">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Smooth Process Section */}
      <section className="bg-[#1d1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-center mb-12"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Our Smooth Process
          </h2>

          {/* Process Steps Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#FFD350] rounded-full px-4 sm:px-6 py-4 flex items-center gap-4"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                {/* Pink circular number badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EA7BBF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl sm:text-2xl">
                    {step.number}
                  </span>
                </div>
                {/* Step label */}
                <span className="text-[#1d1d1d] font-black uppercase text-xs sm:text-sm lg:text-base">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description Text */}
          <p
            className="text-white/80 text-center max-w-3xl mx-auto mb-8 leading-relaxed text-sm sm:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            STARTING WITH THE SIMPLEST ACT OF MAKING SOMETHING BEAUTIFULLY SMOOTH AND COLLABORATIVE, WE BELIEVE GREAT ANIMATION BEGINS WITH A GREAT WORKFLOW. OUR PRODUCTION PROCESS IS DESIGNED FOR CLARITY, CREATION, AND CONSISTENCY. YET, IT INVOLVES THE WAY YOU ARE FROM THE FIRST CONCEPT TO THE FINAL DELIVERY—IT'S JUST AS MUCH FUN GOING AS THE RESULT.
          </p>

          {/* Get Started Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-8 py-4 font-bold uppercase text-white bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1d1d1d] text-white py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Phone visual */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="mb-8 hover-scale">
                <Image
                  src="/telephone.png"
                  alt="Orange retro rotary phone"
                  width={200}
                  height={200}
                  className="h-100 w-auto object-contain animate-float"
                />
              </div>
            </ScrollAnimation>

            {/* Content */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="space-y-4">
                <h2 className="text-7xl font-extrabold text-[#fff9f1] font-recent-grotesk">
                  Get in touch
                </h2>
                <p className="text-lg font-semibold text-[#EA7BBF]">
                  I&apos;ll get back to you within 24hrs
                </p>
                {/* Get Started Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#fff9f1] text-[#1d1d1d] px-8 py-4 rounded-xl hover:bg-[#FFD350] hover:text-[#1d1d1d] transition-all duration-300 font-bold hover-scale hover-lift"
                  >
                    <span style={{
                      fontSize: "24px",
                      fontWeight: "bold",

                    }}>

                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Platforms Image */}
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="mt-8">
                <Image
                  src="/platforms.png"
                  alt="Platforms and partnerships"
                  width={800}
                  height={100}
                  className="h-auto w-full max-w-5xl object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}

