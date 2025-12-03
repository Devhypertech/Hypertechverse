"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesCTA() {
    return (
        <section className="bg-[#1d1d1d] py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Top Left Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                            DIGITAL MARKETING AGENCY FOR UNMATCHED SUCCESS
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            We provide comprehensive SEO, social media marketing, web and app development services.
                            Our innovative work yields noteworthy results by creating solutions that raise brand value
                            and set new industry standards.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-[#EA7BBF] to-[#D65A9A] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            GET STARTED
                        </Link>
                    </div>

                    {/* Top Right Section */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <Image
                                src="/services/digtalmarketing.png"
                                alt="Digital Marketing"
                                width={340}
                                height={220}
                                className="w-full items-center h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Bottom Left Section */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <Image
                                src="/services/speaker.png"
                                alt="Speaker"
                                width={420}
                                height={320}
                                className="w-full items-center h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Bottom Right Section */}
                    <div className="space-y-6">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                            WHY DOES YOUR BUSINESS NEED A DIGITAL MARKETING AGENCY?
                        </h3>
                        <div className="space-y-4 text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <p className="text-lg leading-relaxed">
                                A strong online reputation, visibility, and lead generation are crucial for business success.
                                Our SEO, social media marketing, and branding services help establish your digital presence
                                and attract your target audience effectively.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Internet marketing services provide a competitive edge through advanced tools, technological
                                advancements, and market intelligence. This allows businesses to focus on core competencies
                                while we handle the digital landscape.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Recent surveys indicate that a significant online presence is crucial for businesses to reach
                                a wider audience and maintain relevance in today&apos;s digital marketplace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
