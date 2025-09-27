import Image from "next/image";

export default function UnfairAdvantage() {
    const advantages = [
        { icon: "/icons/expert.png", title: "Industry Experts" },
        { icon: "/icons/deliverytruck.png", title: "Timely Delivery" },
        { icon: "/icons/businessgrowth.png", title: "Increase in ROI" },
        { icon: "/icons/support.png", title: "Dedicated Support" },
        { icon: "/icons/scale.png", title: "Protective measures", tall: true },
    ];

    return (
        <section className="bg-[#EA7BBF] py-16 md:py-24 font-[var(--font-recent-grotesk)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                {/* LEFT HEADING */}
                <div>
                    <h2 className="text-white font-extrabold leading-[0.95] text-[52px] sm:text-[72px] lg:text-[96px]">
                        Your <br />
                        Unfair <br />
                        Advantage
                    </h2>
                    <p className="mt-6 text-white font-semibold max-w-md text-base sm:text-lg">
                        Working with Hypertech Verse is easy. Here’s what you can expect
                        from a typical branding project
                    </p>
                </div>

                {/* RIGHT CARDS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {advantages.map((adv, i) => (
                        <div
                            key={i}
                            className={`bg-[#EFB300] rounded-xl flex flex-col items-center justify-start text-center p-6 ${adv.tall ? "row-span-2" : ""
                                }`}
                        >
                            {/* Inner white box for icon */}
                            <div className="bg-white rounded-lg p-4 flex items-center justify-center mb-4 w-full">
                                <Image
                                    src={adv.icon}
                                    alt={adv.title}
                                    width={80}
                                    height={80}
                                    className="mx-auto"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-extrabold text-white">
                                {adv.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
