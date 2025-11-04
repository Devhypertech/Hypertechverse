"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function UnfairAdvantage() {
    const advantages = [
        { icon: "/icons/expert.png", title: "Industry Experts" },
        { icon: "/icons/deliverytruck.png", title: "Timely Delivery" },
        { icon: "/icons/businessgrowth.png", title: "Increase in ROI" },
        { icon: "/icons/support.png", title: "Dedicated Support" },
        { icon: "/icons/scale.png", title: "Protective measures" },
    ];

    return (
        <section className="bg-[#EA7BBF] py-12 md:py-24 font-[var(--font-recent-grotesk)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">

                {/* LEFT HEADING */}
                <ScrollAnimation animation="fadeInLeft" delay={200}>
                    <div>
                        <h2 className="text-white font-extrabold leading-[0.95] text-[52px] sm:text-[72px] lg:text-[96px]">
                            Your <br />
                            Unfair <br />
                            Advantages
                        </h2>
                        <p className="mt-6 text-white font-semibold max-w-md text-base sm:text-lg">
                            Working with Hypertech Verse is easy. Here&apos;s what you can expect
                            from a typical branding project
                        </p>
                    </div>
                </ScrollAnimation>

                {/* RIGHT CARDS */}
                <ScrollAnimation animation="fadeInRight" delay={400}>
                    <div className="grid grid-cols-3 gap-6">
                        {/* First row → 3 cards */}
                        {advantages.slice(0, 3).map((adv, i) => (
                            <div
                                key={i}
                                className="bg-[#EFB300] rounded-xl flex flex-col items-center justify-start text-center p-6 shadow-md"
                            >
                                <div className="bg-white rounded-lg p-4 flex items-center justify-center mb-4 w-full">
                                    <Image
                                        src={adv.icon}
                                        alt={adv.title}
                                        width={80}
                                        height={80}
                                        className="mx-auto"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                                    {adv.title}
                                </h3>
                            </div>
                        ))}

                        {/* Second row → 2 cards */}
                        <div className="col-span-2 grid grid-cols-2 gap-6">
                            {advantages.slice(3, 5).map((adv, i) => (
                                <div
                                    key={i}
                                    className="bg-[#EFB300] rounded-xl flex flex-col items-center justify-start text-center p-6 shadow-md"
                                >
                                    <div className="bg-white rounded-lg p-4 flex items-center justify-center mb-4 w-full">
                                        <Image
                                            src={adv.icon}
                                            alt={adv.title}
                                            width={80}
                                            height={80}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                                        {adv.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
