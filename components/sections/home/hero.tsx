"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollAnimation from "../../../src/components/ScrollAnimationSimple";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Only add scroll listener on desktop
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Parallax transform values for each column
    const column1Transform = `translateY(${scrollY * -0.15}px)`; // Goes up
    const column2Transform = `translateY(${scrollY * 0.1}px)`;   // Goes down
    const column3Transform = `translateY(${scrollY * -0.08}px)`; // Goes up slightly

    return (
        <section className="relative overflow-hidden bg-[#1d1d1d] text-[#fff9f1] w-full pt-24 md:pt-0">
            <div className="relative w-full pt-4 pb-20 box-border">
                <div className="grid items-center lg:gap-16 lg:grid-cols-[45%_55%] w-full">
                    {/* Left copy */}
                    <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div className="w-full pr-4 lg:pr-4 pl-4 sm:pl-6 lg:pl-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] relative z-10 text-center lg:text-left">
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

                    {/* Right image gallery - 3x3 grid on mobile, 3 vertical columns on desktop with parallax */}
                    <ScrollAnimation animation="fadeInRight" delay={400}>
                        <div className="relative pb-0">
                            {/* Mobile: 3-column grid of square images - unchanged */}
                            <div className="grid grid-cols-3 gap-2 md:hidden">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/main.png"
                                        alt="Hero image 1"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/topblur.png"
                                        alt="Hero image 2"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/pattern.png"
                                        alt="Hero image 3"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/galleryy.png"
                                        alt="Hero image 4"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/mobileui.png"
                                        alt="Hero image 5"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/centermob.png"
                                        alt="Hero image 6"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/applications.png"
                                        alt="Hero image 7"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/main.png"
                                        alt="Hero image 8"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="/hero/botright.png"
                                        alt="Hero image 9"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Desktop: 3 vertical columns with parallax scroll animation */}
                            <div className="hidden md:flex gap-3 items-start justify-end pr-4">
                                {/* Column 1 - moves UP on scroll */}
                                <div
                                    className="flex flex-col gap-3  will-change-transform"
                                    style={{
                                        transform: column1Transform,
                                        transition: 'transform 0.1s ease-out'
                                    }}
                                >
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/topblur.png"
                                            alt="Street scene with yellow car and neon signs"
                                            width={220}
                                            height={320}
                                            className="w-full object-cover"
                                            style={{ height: '280px', width: '280px' }}
                                            priority
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/main.png"
                                            alt="App icons on sandy background"
                                            width={220}
                                            height={280}
                                            className="w-full object-cover"
                                            style={{ height: '240px' }}
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/applications.png"
                                            alt="Mobile phone interface"
                                            width={220}
                                            height={360}
                                            className="w-full object-cover"
                                            style={{ height: '300px' }}
                                        />
                                    </div>
                                </div>

                                {/* Column 2 - moves DOWN on scroll */}
                                <div
                                    className="flex flex-col gap-3 will-change-transform"
                                    style={{
                                        transform: column2Transform,
                                        transition: 'transform 0.1s ease-out'
                                    }}
                                >
                                    {/* <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/pattern.png"
                                            alt="Pattern background"
                                            width={220}
                                            height={260}
                                            className="w-full object-cover"
                                            style={{ height: '220px' }}
                                        />
                                    </div> */}
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/pattern.png"
                                            alt="Gallery image"
                                            width={220}
                                            height={320}
                                            className="w-full object-cover"
                                            style={{ height: '480px', width: '320px' }}
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/centermob.png"
                                            alt="Center mobile image"
                                            width={220}
                                            height={340}
                                            className="w-full object-cover"
                                            style={{ height: '300px' }}
                                        />
                                    </div>
                                </div>

                                {/* Column 3 - moves UP slightly on scroll */}
                                <div
                                    className="flex flex-col gap-3  will-change-transform"
                                    style={{
                                        transform: column3Transform,
                                        transition: 'transform 0.1s ease-out'
                                    }}
                                >
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/galleryy.png"
                                            alt="Pattern design"
                                            width={220}
                                            height={240}
                                            className="w-full object-cover"
                                            style={{ height: '200px' }}
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/mobileui.png"
                                            alt="Street scene"
                                            width={220}
                                            height={300}
                                            className="w-full object-cover"
                                            style={{ height: '260px' }}
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <Image
                                            src="/hero/botright.png"
                                            alt="Applications showcase"
                                            width={220}
                                            height={380}
                                            className="w-full object-cover"
                                            style={{ height: '340px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Pink ribbon bar - below hero images on mobile, overlapping on desktop */}
            <div className="relative md:absolute bottom-auto md:bottom-0 left-0 right-0 bg-[#EA7BBF] text-[#1d1d1d] z-10 rounded-3xl md:rounded-none mt-8 md:mt-0 mx-4 md:mx-0">
                <div className="mx-auto max-w-7xl px-6 py-15 md:py-12 text-base md:px-4 lg:px-8">
                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

                        {/* Left Column */}
                        <ScrollAnimation animation="fadeInUp" delay={200}>
                            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-3">
                                <Image
                                    src="/icons/smie.png"
                                    alt="Smile icon"
                                    width={80}
                                    height={80}
                                    className="w-24 h-24 md:w-16 md:h-16 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-base md:text-sm lg:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
                                    Make your customers hungry for more with a flavour-focused brand
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Center Column */}
                        <ScrollAnimation animation="fadeInUp" delay={400}>
                            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-3">
                                <Image
                                    src="/icons/book.png"
                                    alt="Book icon"
                                    width={80}
                                    height={80}
                                    className="w-24 h-24 md:w-16 md:h-16 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-base md:text-sm lg:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
                                    Our brand packages have the recipe to get you the results you need, fast
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Right Column */}
                        <ScrollAnimation animation="fadeInUp" delay={600}>
                            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-3">
                                <Image
                                    src="/icons/opros.png"
                                    alt="Exclamation icon"
                                    width={80}
                                    height={80}
                                    className="w-24 h-24 md:w-16 md:h-16 flex-shrink-0"
                                />
                                <p className="leading-snug font-bold text-base md:text-sm lg:text-base" style={{ fontFamily: "'Poppins', 'Recent Grotesk', sans-serif" }}>
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
