"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function GetInTouch() {
    return (
        <section className="bg-black py-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 rounded-full animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-yellow-500 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>

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
                            <h2 className="text-7xl font-extrabold text-pink-200 font-recent-grotesk text-shimmer">
                                Get In Touch
                            </h2>
                            <p className="text-lg font-extrabold text-pink-300">
                                We&apos;ll get back to you within 24 hrs
                            </p>
                            {/* <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover-scale hover-lift hover-shake"
                                >
                                    Get started
                                </Link>
                            </div> */}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
