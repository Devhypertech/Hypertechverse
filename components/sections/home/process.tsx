"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function UnfairAdvantage() {
    const features = [
        {
            title: "Industry Experts",
            description: "150+ brands transformed. Average 300% increase in engagement. 4.9/5 rating across 75+ reviews. We have receipts.",
            icon: "/experts.png",
        },
        {
            title: "Timely Delivery",
            description: "3-week turnaround on branding. 6-week delivery on websites. We move fast because we know what we're doing.",
            icon: "/del.png",
        },
        {
            title: "Increase in ROI",
            description: "Our clients see an average 47% revenue increase within 90 days of launch. Your investment pays for itself fast.",
            icon: "/roi.png",
        },
        {
            title: "Dedicated Support",
            description: "Unlimited revisions until you're thrilled. Post-launch support included. We're in this for the long haul.",
            icon: "/support.png",
        },
        {
            title: "Protective measures",
            description: "We treat every project like our brand depends on it, because it does. Your win is our win.",
            icon: "/protective.png",
        },
    ];

    return (
        <section className="bg-[#FBEAE2] py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top Section: Heading and Paragraph */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Left: Heading */}
                    <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 rounded-full bg-black"></div>
                            <span className="text-black font-black text-sm md:text-base uppercase tracking-wide" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                Let's Build Your Brand
                            </span>
                        </div>
                        <h2 className="text-[#EA7BBF] text-[40px] leading-[1.05] font-black tracking-tighter md:text-6xl lg:text-7xl" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>
                            What Makes Us Different? Results.
                        </h2>
                    </ScrollAnimation>

                    {/* Right: Paragraph and Button */}
                    <ScrollAnimation animation="fadeInRight" delay={300}>
                        <div className="flex flex-col justify-center">
                            <p className="text-black text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                We're not just another design agency. We're the team that makes your phone ring with customers, your inbox flood, and your revenue grow.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-sm md:text-base hover:bg-[#1d1d1d] transition-colors w-fit"
                                style={{ fontFamily: "'Recent Grotesk', sans-serif" }}
                            >
                                Get Started Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Features Grid */}
                <div className="space-y-6 md:space-y-8">
                    {/* First Row: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {features.slice(0, 3).map((feature, index) => (
                            <ScrollAnimation key={index} animation="fadeInUp" delay={400 + index * 100}>
                                <div className="p-6 md:p-8 flex flex-col items-center text-center">
                                    <div className="mb-4">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-black text-xl md:text-2xl font-black mb-3" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-black/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* Second Row: 2 cards centered */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
                            {features.slice(3).map((feature, index) => (
                                <ScrollAnimation key={index + 3} animation="fadeInUp" delay={700 + index * 100}>
                                    <div className="p-6 md:p-8 flex flex-col items-center text-center">
                                        <div className="mb-4">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={80}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="text-black text-xl md:text-2xl font-black mb-3" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-black/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
