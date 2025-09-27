import Image from "next/image";

const packages = [
    {
        title: "Bite-sized Brand",
        price: "$200",
        oldPrice: "$225",
        art: "/packages/speaker.png",
        badgeImage: "/packages/1.png",
        badgePosition: "left",
        features: [
            "Mood Boards",
            "Logo Design",
            "Brand Guidelines Document",
            "Colour Palette",
            "Typography",
            "Image Styles",
            "Patterns",
            "Design Elements",
            "2 pieces of printed collateral",
            "6 social media templates",
        ],
    },
    {
        title: "Droolworthy Design",
        price: "$450",
        oldPrice: "$500",
        art: "/packages/arrowboard.png",
        badgeImage: "/packages/2.png",
        badgePosition: "right",
        features: [
            "Mood Boards",
            "Logo Design",
            "Brand Guidelines Document",
            "Colour Palette",
            "Typography",
            "Image Styles",
            "Patterns",
            "Design Elements",
            "3 pieces of printed collateral",
            "6 social media templates",
            "Single Page Website Design",
            "Single Page Website Development",
        ],
    },
    {
        title: "Identity Crisis!",
        price: "$999",
        oldPrice: "$1500",
        art: "/packages/trophycupaward.png",
        badgeImage: "/packages/3.png",
        badgePosition: "right",
        features: [
            "Mood Boards",
            "Interactive Brand Workshop",
            "Competitive Analysis",
            "Logo Design",
            "Brand Guidelines Document",
            "Colour Palette",
            "Typography",
            "Image Styles",
            "Patterns",
            "Design Elements",
            "3 pieces of printed collateral",
            "6 social media templates",
            "Multi-Page Website Design",
            "Multi-Page Website Development",
        ],
    },
];

export default function BrandPackages() {
    return (
        <section className="bg-[#EA7BBF] py-14">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-bold text-black">
                        How we do things
                    </span>
                    <h2 className="mt-4 text-4xl font-extrabold text-white">Brand Packages</h2>
                    <p className="mt-2 text-white/90">It’s time for some brand-spanking</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {packages.map((pkg, i) => (
                        <article
                            key={i}
                            className="relative overflow-hidden rounded-xl border border-black bg-white shadow-[0_6px_0_rgba(0,0,0,0.3)]"
                        >
                            {/* Artwork + starburst badge */}
                            <div className="relative flex h-48 w-full items-center justify-center p-6">
                                <Image
                                    src={pkg.art}
                                    alt={pkg.title}
                                    width={360}
                                    height={260}
                                    className="h-52 w-auto object-contain"
                                />
                                <div className={`absolute ${pkg.badgePosition === 'left' ? 'left-2' : 'right-2'} top-2 h-[78px] w-[78px]`}>
                                    <Image
                                        src={pkg.badgeImage}
                                        alt="Price badge"
                                        width={278}
                                        height={298}
                                        className="h-full w-full object-contain"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                        <div className="-mt-1 text-[10px] opacity-90 line-through">{pkg.oldPrice}</div>
                                        <div className="-mt-0.5 text-[18px] font-extrabold">{pkg.price}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Title + divider */}
                            <div className="px-6">
                                <h3 className="mb-2 text-lg font-bold text-black">{pkg.title}</h3>
                                <div className="mb-4 h-[4px] rounded-full bg-black"></div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-2 px-8 pb-6 text-sm text-black/90">
                                {pkg.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <svg className="mr-3 h-4 w-4 flex-shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Footer */}
                            <div className="border-t border-black/10 bg-white p-4">
                                <button className="w-full rounded-md bg-white border border-black py-3 text-sm font-semibold text-black transition hover:bg-gray-50">
                                    Buy Now
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Add-ons */}
                <div className="mt-10">
                    <div className="flex items-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black shadow-[0_5px_0_rgba(0,0,0,0.25)]">
                        <span>Add-ons</span>
                        <span className="ml-auto grid h-7 w-7 place-items-center rounded-full border border-black/20">
                            −
                        </span>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 text-center">
                    <button className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                        Get started
                    </button>
                    <p className="mt-4 text-sm text-white/70">
                        Not seeing what you need? No problem! Reach out and I&apos;ll send you a free quote for your own custom project.
                    </p>
                </div>
            </div>
        </section>
    );
}
