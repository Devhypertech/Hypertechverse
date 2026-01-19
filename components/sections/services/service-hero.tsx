"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimationSimple";

export default function ServiceHero() {
    return (
        <section className="relative overflow-hidden bg-[#EA7BBF] text-[#fff9f1]">
            <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid items-center justify-center gap-10 pt-32 pb-4 lg:grid-cols-2 lg:pt-40 lg:pb-8">

                    {/* Left copy */}
                    <ScrollAnimation animation="fadeInLeft" delay={150}>
                        <div className="relative text-center lg:text-left">
                            {/* eyebrow */}
                            <p
                                className="mb-4 text-sm sm:text-xl md:text-2xl font-extrabold tracking-[0.05em] sm:tracking-[0.08em] uppercase whitespace-nowrap"
                                style={{ fontFamily: "Recursive, sans-serif" }}
                            >
                                {"{ BEYOND SERVICES WE DRIVE }"}
                            </p>

                            {/* headline + arrow badge */}
                            <div className="relative inline-block pr-16 sm:pr-0 mx-auto lg:mx-0">
                                <h1
                                    className="leading-[0.78] font-black uppercase text-[clamp(36px,11vw,64px)] sm:text-[108px] lg:text-[136px]"
                                    style={{ fontFamily: "Recursive, sans-serif" }}
                                >
                                    Success
                                </h1>

                                {/* yellow arrow badge overlapping the word */}
                                <Link
                                    href="/contact"
                                    aria-label="Start a project"
                                    className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#FFD350] text-[#1d1d1d] shadow-[0_10px_0_rgba(0,0,0,0.25)] hover:translate-y-[-48%] transition-transform"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="translate-x-[1px] translate-y-[-1px]"
                                    >
                                        <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                            {/* description */}
                            <p
                                className="mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed font-medium text-[#fff9f1]/95"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                HYPERTECH VERSE OFFERS COMPREHENSIVE DIGITAL SOLUTIONS FOR
                                BUSINESSES, ENHANCING VISIBILITY AND AUDIENCE REACH AND
                                PROMOTING SUSTAINABLE DIGITAL WORLD ACHIEVEMENTS THROUGH EXPERT
                                DIGITAL MARKETING SERVICES.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Right art with crop-corner markers */}
                    <ScrollAnimation animation="fadeInRight" delay={250}>
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[560px]">
                                {/* four crop corners */}

                                <Image
                                    src="/services/announcement.png"
                                    alt="Megaphone with phone 3D illustration"
                                    width={900}
                                    height={900}
                                    priority
                                    className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
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
                            src="/services/logos.png"
                            alt="Company Logos"
                            width={1200}
                            height={200}
                            className="w-full h-auto max-w-6xl object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
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
