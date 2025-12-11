"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimationSimple";

export default function Hero() {
    return (
        <section className="relative overflow-x-hidden bg-[#1d1d1d] text-[#fff9f1] w-full pt-16 md:pt-0">
            <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 pt-4 pb-20 w-full box-border">
                <div className="grid items-center gap-6 lg:gap-10 lg:grid-cols-2 w-full">
                    {/* Left copy */}
                    <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div className="w-full pr-2 relative z-10">
                            <h1
                                className="font-black leading-tight max-w-full relative z-10"
                                style={{
                                    fontFamily: "'Recent Grotesk', 'Recursive', sans-serif",
                                    fontWeight: 900,
                                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'anywhere',
                                    width: '100%',
                                    display: 'block',
                                    visibility: 'visible'
                                }}
                            >
                                Transforming Ideas Into{" "}
                                <span className="text-[#EA7BBF]">Digital Success</span>
                            </h1>
                            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#fff9f1]/90" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif" }}>
                                We bring one-stop solution to all your queries under one platform, serving as your
                                sole digital marketing agency. As a cohesive team, we strengthen your brand with
                                innovation at its heart.
                            </p>

                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                                <Link
                                    href="/portfolio"
                                    className="rounded-lg bg-[#FFD350] px-8 py-4 font-semibold text-[#1d1d1d] hover:bg-[#fff9f1] transition text-center"
                                >
                                    <span style={{
                                        fontSize: "24px",
                                        fontWeight: "bold",

                                    }}>

                                        See our work
                                    </span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="rounded-lg border border-white px-8 py-4 font-semibold text-[#fff9f1] hover:bg-[#fff9f1] hover:text-[#1d1d1d] transition text-center"
                                >
                                    <span style={{
                                        fontSize: "24px",
                                        fontWeight: "bold",

                                    }}>

                                        Get started
                                    </span>
                                </Link>
                            </div>

                            <p className="mt-4 text-xs sm:text-sm text-[#fff9f1]/60 text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                SEO · Branding · Web/App · Social · Content · Analytics
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Right image gallery - 6 images in proper layout */}
                    <ScrollAnimation animation="fadeInRight" delay={400}>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Left column */}
                                <div className="space-y-2">
                                    <ScrollAnimation animation="fadeInUp" delay={600}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/main.png"
                                                alt="Street scene with yellow car and neon signs"
                                                width={300}
                                                height={400}
                                                className="h-48 w-full object-cover"
                                                priority
                                            />
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animation="fadeInUp" delay={800}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/applications.png"
                                                alt="App icons on sandy background"
                                                width={300}
                                                height={400}
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animation="fadeInUp" delay={1000}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/mobileui.png"
                                                alt="Mobile phone interface"
                                                width={300}
                                                height={1200}
                                                className="h-80 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                </div>

                                {/* Right column */}
                                <div className="space-y-2">
                                    <ScrollAnimation animation="fadeInUp" delay={700}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/pattern.png"
                                                alt="Pattern background"
                                                width={300}
                                                height={400}
                                                className="h-44 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/galleryy.png"
                                            alt="Gallery image"
                                            width={300}
                                            height={600}
                                            className="h-56 w-full object-cover"
                                            style={{ minHeight: '14rem' }}
                                            onError={(e) => console.error('Gallery image failed to load:', e)}
                                            onLoad={() => console.log('Gallery image loaded successfully')}
                                        />
                                    </div>
                                    <ScrollAnimation animation="fadeInUp" delay={1100}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/centermob.png"
                                                alt="Center mobile image"
                                                width={300}
                                                height={700}
                                                className="h-64 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Pink ribbon bar - overlapping hero images */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#EA7BBF] text-[#1d1d1d] z-10">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4 text-base sm:px-4 lg:px-4">
                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

                        {/* Left Column */}
                        <ScrollAnimation animation="fadeInLeft" delay={200}>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <Image
                                    src="/icons/smie.png"
                                    alt="Smile icon"
                                    width={52}
                                    height={32}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-sm sm:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
                                    Make your customers hungry for more with a flavour-focused brand
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Center Column (Now fixed and centered) */}
                        <ScrollAnimation animation="fadeInRight" delay={400}>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <Image
                                    src="/icons/book.png"
                                    alt="Book icon"
                                    width={52}
                                    height={32}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-sm sm:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
                                    Our brand packages have the recipe to get you the results you need, fast
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Right Column */}
                        <ScrollAnimation animation="fadeInRight" delay={600}>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <Image
                                    src="/icons/opros.png"
                                    alt="Book icon"
                                    width={52}
                                    height={32}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-sm sm:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
                                    Establish a captivating web presence and grow your audience
                                </p>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </div>


        </section>
    );
}
