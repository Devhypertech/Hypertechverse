"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function UnfairAdvantage() {
    return (
        <section className="bg-[#EA7BBF] py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-[20px]">
                {/* Main Grid: Left text column + Right cards */}
                {/* Main Grid: Left text column + Right cards */}
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 items-start">

                    {/* MOBILE VIEW ONLY - Simple Stacked Layout */}
                    <div className="block sm:hidden w-full">
                        <ScrollAnimation animation="fadeInUp" delay={200}>
                            <div className="flex flex-col items-center text-center mb-8">
                                <h2 className="text-[#fff9f1] leading-[0.9] tracking-[-0.03em] text-[50px] font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                    Your<br />Unfair<br />Advantage
                                </h2>
                                <p className="mt-4 text-[#fff9f1] text-sm leading-snug italic max-w-xs mx-auto" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                    Working with Hypertech Verse is easy. Here&apos;s what you can expect from a typical branding project
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 w-full px-4">
                                {/* Card 1: Industry Experts */}
                                <div className="bg-[#EFB300] rounded-xl flex flex-col items-center text-center p-6 w-full">
                                    <div className="bg-[#fff9f1] rounded-lg p-3 flex items-center justify-center mb-3 w-24 h-24">
                                        <Image src="/icons/expert.png" alt="Industry Experts" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-xl text-[#fff9f1] leading-tight tracking-tight italic font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        Industry<br />Experts
                                    </h3>
                                </div>

                                {/* Card 2: Timely Delivery */}
                                <div className="bg-[#EFB300] rounded-xl flex flex-col items-center text-center p-6 w-full">
                                    <div className="bg-[#fff9f1] rounded-lg p-3 flex items-center justify-center mb-3 w-24 h-24">
                                        <Image src="/icons/deliverytruck.png" alt="Timely Delivery" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-xl text-[#fff9f1] leading-tight tracking-tight italic font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        Timely<br />Delivery
                                    </h3>
                                </div>

                                {/* Card 3: Dedicated Support */}
                                <div className="bg-[#EFB300] rounded-xl flex flex-col items-center text-center p-6 w-full">
                                    <div className="bg-[#fff9f1] rounded-lg p-3 flex items-center justify-center mb-3 w-24 h-24">
                                        <Image src="/icons/support.png" alt="Dedicated Support" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-xl text-[#fff9f1] leading-tight tracking-tight italic font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        Dedicated<br />Support
                                    </h3>
                                </div>

                                {/* Card 4: Increase in ROI */}
                                <div className="bg-[#EFB300] rounded-xl flex flex-col items-center text-center p-6 w-full">
                                    <div className="bg-[#fff9f1] rounded-lg p-3 flex items-center justify-center mb-3 w-24 h-24">
                                        <Image src="/icons/businessgrowth.png" alt="Increase in ROI" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-xl text-[#fff9f1] leading-tight tracking-tight italic font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        Increase<br />in ROI
                                    </h3>
                                </div>

                                {/* Card 5: Protective Measures */}
                                <div className="bg-[#EFB300] rounded-xl flex flex-col items-center text-center p-6 w-full">
                                    <div className="bg-[#fff9f1] rounded-lg p-3 flex items-center justify-center mb-3 w-24 h-24">
                                        <Image src="/icons/scale.png" alt="Protective measures" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-xl text-[#fff9f1] leading-tight tracking-tight italic font-black" style={{ fontFamily: "'Recent Grotesk', sans-serif" }}>
                                        Protective<br />measures
                                    </h3>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* DESKTOP VIEW ONLY - Original Layout */}
                    <div className="hidden sm:block w-full">
                        <ScrollAnimation animation="fadeInRight" delay={400}>
                            <div className="grid grid-cols-4 gap-3 lg:gap-5 -ml-4 lg:-ml-20 xl:-ml-28" style={{ gridTemplateRows: 'auto auto' }}>
                                <div className="col-start-1 row-span-2 flex flex-col justify-start items-stretch pr-4 lg:pr-12 text-left">
                                    <div className="flex-1 flex flex-col justify-end">
                                        <h2 className="text-[#fff9f1] leading-[0.82] tracking-[-0.03em] text-[60px] md:text-[80px] lg:text-[140px] xl:text-[140px]" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Your
                                        </h2>
                                        <h2 className="text-[#fff9f1] leading-[0.82] tracking-[-0.03em] text-[60px] md:text-[80px] lg:text-[140px] xl:text-[140px]" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Unfair
                                        </h2>
                                    </div>
                                    <div className="flex-1 max-w-full">
                                        <h2 className="text-[#fff9f1] leading-[0.82] tracking-[-0.03em] text-[50px] md:text-[70px] lg:text-[110px] xl:text-[130px]" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Advantage
                                        </h2>
                                        <p className="mt-4 lg:mt-6 text-[#fff9f1] max-w-full text-xs md:text-sm lg:text-base leading-snug italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Working with Hypertech Verse is easy. Here&apos;s what you can expect from a typical branding project
                                        </p>
                                    </div>
                                </div>

                                {/* Card 1: Industry Experts */}
                                <div className="bg-[#EFB300] col-start-2 row-start-1 rounded-xl lg:rounded-2xl flex flex-col items-center text-center p-2 lg:p-4 ml-4 lg:ml-12">
                                    <div className="bg-[#fff9f1] rounded-lg lg:rounded-xl p-2 lg:p-3 flex items-center justify-center mb-2 w-full aspect-square">
                                        <Image src="/icons/expert.png" alt="Industry Experts" width={100} height={100} className="object-contain w-full h-full" />
                                    </div>
                                    <h3 className="text-sm md:text-base lg:text-2xl text-[#fff9f1] leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                        Industry<br />Experts
                                    </h3>
                                </div>

                                {/* Column 2 */}
                                <div className="col-start-3 row-span-2 aspect-square flex flex-col gap-2 lg:gap-4">
                                    <div className="bg-[#EFB300] rounded-xl lg:rounded-2xl flex flex-col items-center text-center p-2 lg:p-4 flex-[6]">
                                        <div className="bg-[#fff9f1] rounded-lg lg:rounded-xl p-2 lg:p-3 flex items-center justify-center mb-2 w-full flex-1">
                                            <Image src="/icons/deliverytruck.png" alt="Timely Delivery" width={120} height={120} className="object-contain w-[95%] h-[95%]" />
                                        </div>
                                        <h3 className="text-sm md:text-base lg:text-2xl text-[#fff9f1] leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Timely<br />Delivery
                                        </h3>
                                    </div>
                                    <div className="bg-[#EFB300] rounded-xl lg:rounded-2xl flex flex-col items-center text-center p-2 lg:p-4 flex-[4]">
                                        <div className="bg-[#fff9f1] rounded-lg lg:rounded-xl p-2 lg:p-3 flex items-center justify-center mb-2 w-full flex-1">
                                            <Image src="/icons/support.png" alt="Dedicated Support" width={80} height={80} className="object-contain w-[85%] h-[85%]" />
                                        </div>
                                        <h3 className="text-sm md:text-base lg:text-2xl text-[#fff9f1] leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Dedicated<br />Support
                                        </h3>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="col-start-4 row-span-2 aspect-square flex flex-col gap-2 lg:gap-4">
                                    <div className="bg-[#EFB300] rounded-xl lg:rounded-2xl flex flex-col items-center text-center p-2 lg:p-4 flex-[4]">
                                        <div className="bg-[#fff9f1] rounded-lg lg:rounded-xl p-2 lg:p-3 flex items-center justify-center mb-2 w-full flex-1">
                                            <Image src="/icons/businessgrowth.png" alt="Increase in ROI" width={80} height={80} className="object-contain w-[85%] h-[85%]" />
                                        </div>
                                        <h3 className="text-sm md:text-base lg:text-2xl text-[#fff9f1] leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Increase<br />in ROI
                                        </h3>
                                    </div>
                                    <div className="bg-[#EFB300] rounded-xl lg:rounded-2xl flex flex-col items-center text-center p-2 lg:p-4 flex-[6]">
                                        <div className="bg-[#fff9f1] rounded-lg lg:rounded-xl p-2 lg:p-3 flex items-center justify-center mb-2 w-full flex-1">
                                            <Image src="/icons/scale.png" alt="Protective measures" width={80} height={120} className="object-contain w-[55%] h-[55%]" />
                                        </div>
                                        <h3 className="text-sm md:text-base lg:text-2xl text-[#fff9f1] leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>
                                            Protective<br />measures
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* Description paragraph below the grid */}
                {/* <ScrollAnimation animation="fadeInUp" delay={400}>
                    <p
                        className="mt-6 text-[#fff9f1] text-sm sm:text-base max-w-[320px] leading-snug italic"
                        style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}
                    >
                        Working with Hypertech Verse is easy. Here&apos;s what you can expect
                        from a typical branding project
                    </p>
                </ScrollAnimation> */}
            </div>
        </section>
    );
}
