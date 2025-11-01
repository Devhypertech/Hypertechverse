"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("premium");

  // Pricing tiers data
  const pricingTiers: { [key: string]: any } = {
    premium: {
      title: "Bite-sized Brand",
      price: "$200",
      art: "/packages/speaker.png",
      features: [
        "Visual Brand",
        "Logo Design",
        "Brand Guidelines Document",
        "Color Scheme",
        "Typography",
        "Design Styles",
        "Deliverables",
        "Revisions",
        "Delivery of Final Files",
        "Source Files Included",
        "Mockups",
      ],
      services: ["3D ANIMATION", "EXPLAINER VIDEO", "PRODUCTION", "TRAINING VIDEO", "ANIMATION"],
      description: "Our animation services is a one-for-all affordable way to market your story...",
    },
    standard: {
      title: "Standard Package",
      price: "$400",
      art: "/packages/arrowboard.png",
      features: [
        "Visual Brand",
        "Logo Design",
        "Brand Guidelines Document",
        "Color Scheme",
        "Typography",
        "Design Styles",
        "Deliverables",
        "Revisions",
        "Delivery of Final Files",
        "Source Files Included",
      ],
      services: ["3D ANIMATION", "EXPLAINER VIDEO", "PRODUCTION", "TRAINING VIDEO"],
      description: "A comprehensive package that includes essential branding elements...",
    },
    basic: {
      title: "Basic Package",
      price: "$150",
      art: "/packages/speaker.png",
      features: [
        "Visual Brand",
        "Logo Design",
        "Brand Guidelines Document",
        "Color Scheme",
        "Typography",
        "Deliverables",
        "Revisions",
      ],
      services: ["3D ANIMATION", "EXPLAINER VIDEO", "PRODUCTION"],
      description: "Perfect for startups looking for essential branding services...",
    },
    custom: {
      title: "Custom Package",
      price: "Custom",
      art: "/packages/trophycupaward.png",
      features: [
        "Everything in Premium",
        "Custom Requirements",
        "Dedicated Account Manager",
        "Priority Support",
        "Unlimited Revisions",
        "Extended Delivery Time",
        "Custom Deliverables",
      ],
      services: ["CUSTOM SOLUTIONS", "DEDICATED TEAM", "PRIORITY SUPPORT", "CUSTOM TIMELINE"],
      description: "Tailored solutions designed specifically for your business needs...",
    },
    enterprise: {
      title: "Enterprise Package",
      price: "$999",
      art: "/packages/trophycupaward.png",
      features: [
        "Everything in Premium",
        "Enterprise-level Support",
        "Multiple Brand Variations",
        "White-label Solutions",
        "API Integration",
        "Advanced Analytics",
        "Custom Contracts",
      ],
      services: ["ENTERPRISE SOLUTIONS", "SCALABLE INFRASTRUCTURE", "24/7 SUPPORT", "CUSTOM INTEGRATIONS"],
      description: "Complete enterprise solution with advanced features and dedicated support...",
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
      <section className="relative overflow-hidden bg-[#EA7BBF]">
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-12 md:py-16">
            <h1
              className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px] text-white mb-8"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Pricing
            </h1>

            <Link
              href="/contact"
              aria-label="Get started"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#FFD350] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-black py-8 overflow-hidden">
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
      <section className="bg-black py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {["premium", "standard", "basic", "custom", "enterprise"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-[#FFD350] text-black shadow-lg"
                    : "bg-[#EA7BBF] text-white hover:opacity-90"
                }`}
              >
                {tab === "premium" ? "Premium" : tab === "standard" ? "Standard" : tab === "basic" ? "Basic" : tab === "custom" ? "Custom" : "Enterprise"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card and Services Section */}
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                className="text-2xl sm:text-3xl font-black uppercase text-center text-black mb-4"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                {currentPricing.title}
              </h2>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-black">
                  {currentPricing.price}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {currentPricing.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-black">
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
              <button className="w-full bg-[#EA7BBF] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-lg">
                Buy Now
              </button>
            </div>

            {/* Right: Services Section */}
            <div className="flex flex-col justify-center">
              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#FFD350] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">•</span>
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
        </div>
      </section>

      {/* Our Smooth Process Section */}
      <section className="bg-black text-white py-16">
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
                <span className="text-black font-black uppercase text-xs sm:text-sm lg:text-base">
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
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Phone Illustration */}
            <div className="mb-8">
              <Image
                src="/telephone.png"
                alt="Contact us"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Get in touch
            </h2>

            {/* Subtext */}
            <p
              className="text-white/80 mb-8 text-sm sm:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              I'll get back to you within 24hrs
            </p>

            {/* Get Started Button */}
            <Link
              href="/contact"
              className="inline-block rounded-xl px-8 py-4 font-bold text-black bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 text-base sm:text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

