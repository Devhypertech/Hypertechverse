"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function UltimateAgency() {
    return (
        <section className="bg-black text-white px-2 sm:px-3 lg:px-4 py-20 sm:py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-yellow-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-16 lg:px-2 relative z-10">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left side - 3D character */}
                    <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div className="relative hover-scale">
                            <div className="relative">
                                <Image
                                    src="/about.png"
                                    alt="3D character with glasses and yellow jacket on beanbag"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto animate-float"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Right side - content */}
                    <ScrollAnimation animation="fadeInUp" delay={400}>
                        <div className="flex flex-col items-center justify-center text-center sm:block sm:text-left w-full px-6 sm:px-0 mx-auto">
                            <ScrollAnimation animation="fadeInUp" delay={600}>
                                <h2 className="text-2xl sm:text-4xl font-black tracking-tighter leading-tight mb-6 max-w-full break-words" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>
                                    <span className="text-[#FDE8E5]">Your </span>
                                    <span style={{ color: '#EA7BBF' }}>Ultimate</span>
                                    <span className="text-[#FDE8E5]"> Web Design &</span>
                                    <br className="hidden sm:block" />
                                    <span className="text-[#FDE8E5]">Marketing Agency</span>
                                </h2>
                            </ScrollAnimation>
                            <ScrollAnimation animation="fadeInUp" delay={800}>
                                <h2 className="text-[16.8px] sm:text-[21px] font-extrabold leading-tight mb-6 max-w-full break-words" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <span className="text-[#ffffff]"> Hypertech Verse blends innovation</span>
                                </h2>
                            </ScrollAnimation>
                            <ScrollAnimation animation="fadeInUp" delay={1000}>
                                <p className="text-base text-white/70 mb-8 max-w-full sm:max-w-none mx-auto sm:mx-0 break-words" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    with strategy to create digital experiences that not only look amazing but drive real business results. We&apos;re not just another agency. We&apos;re your strategic partner in digital transformation, combining creativity with data-driven insights to elevate your brand and accelerate your growth.
                                </p>
                            </ScrollAnimation>
                            <ScrollAnimation animation="fadeInUp" delay={1200}>
                                <Link
                                    href="/contact"
                                    className="inline-block rounded-lg bg-[#FFD350] px-6 sm:px-8 py-4 font-semibold text-black hover:bg-[#e6bf30] transition-all duration-300 hover-scale hover-lift hover-shake max-w-full text-center"
                                >
                                    Start your free consultation today!
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section >
    );
}
