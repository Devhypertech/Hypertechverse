"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimationSimple";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left copy */}
                    <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div>
                            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Transforming Ideas <br />Into

                                <span className="text-[#EA7BBF]"> Digital Success</span>
                            </h1>
                            <p className="mt-5 max-w-xl text-lg text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                We bring one-stop solution to all your queries under one platform, serving as your
                                sole digital marketing agency. As a cohesive team, we strengthen your brand with
                                innovation at its heart.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/portfolio"
                                    className="rounded-lg bg-[#FFD350] px-6 py-3 font-semibold text-black hover:bg-[#e6bf30] transition"
                                >
                                    See our work
                                </Link>
                                <Link
                                    href="/contact"
                                    className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black transition"
                                >
                                    Get started
                                </Link>
                            </div>

                            <p className="mt-4 text-sm text-white/60" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                                                className="h-86 w-full object-cover"
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
                                                className="h-46 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animation="fadeInUp" delay={900}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/gallery.png"
                                                alt="Gallery image"
                                                width={300}
                                                height={600}
                                                className="h-58 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animation="fadeInUp" delay={1100}>
                                        <div className="rounded-2xl overflow-hidden">
                                            <Image
                                                src="/hero/centermob.png"
                                                alt="Center mobile image"
                                                width={300}
                                                height={700}
                                                className="h-72 w-full object-cover"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Pink ribbon bar */}
            <div className="bg-[#EA7BBF] text-black">
                <div className="mx-auto max-w-7xl px-4 py-6 text-base sm:px-4 lg:px-4">
                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Left Column */}
                        <ScrollAnimation animation="fadeInLeft" delay={200}>
                            <div className="flex items-start gap-3">
                                <Image
                                    src="/icons/smie.png"
                                    alt="Smile icon"
                                    width={52}
                                    height={32}
                                    className="w-12 h-12"
                                />
                                <p className="leading-snug font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Make your customers hungry for more with a flavour-focused brand
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Center Column (Now fixed and centered) */}
                        <ScrollAnimation animation="fadeInRight" delay={400}>
                            <div className="flex items-start gap-3">
                                <Image
                                    src="/icons/book.png"
                                    alt="Book icon"
                                    width={52}
                                    height={32}
                                    className="w-12 h-12"
                                />
                                <p className="leading-snug font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Our brand packages have the recipe to get you the results you need, fast
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Right Column */}
                        <ScrollAnimation animation="fadeInRight" delay={600}>
                            <div className="flex items-start gap-3">
                                <Image
                                    src="/icons/opros.png"
                                    alt="Book icon"
                                    width={52}
                                    height={32}
                                    className="w-12 h-12"
                                />
                                <p className="leading-snug font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
