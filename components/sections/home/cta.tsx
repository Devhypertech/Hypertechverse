import Image from "next/image";

const packages = [
    {
        title: "Bite-sized Brand",
        // price: "$200",
        // oldPrice: "$225",
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
        // price: "$450",
        // oldPrice: "$500",
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
        // price: "$999",
        // oldPrice: "$1500",
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
        <section className="bg-[#EA7BBF] py-14 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-orange-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-base md:text-lg font-bold text-black animate-fade-in-up hover-scale">
                        How we do things
                    </span>
                    <h2 className="mt-4 text-4xl font-extrabold text-white font-recent-grotesk animate-fade-in-up stagger-1 text-shimmer">Brand Packages</h2>
                    <p className="mt-2 text-white/90 animate-fade-in-up stagger-2">It&apos;s time for some brand-spanking</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {packages.map((pkg, i) => (
                        <article
                            key={i}
                            className={`relative overflow-hidden rounded-xl border border-black bg-white shadow-[0_6px_0_rgba(0,0,0,0.3)] hover-lift hover-glow animate-fade-in-up stagger-${i + 3} group flex flex-col h-full`}
                        >
                            {/* Artwork + starburst badge */}
                            <div className="relative flex h-48 w-full items-center justify-center p-6 group-hover:animate-float">
                                <Image
                                    src={pkg.art}
                                    alt={pkg.title}
                                    width={360}
                                    height={260}
                                    className="h-52 w-auto object-contain hover-scale transition-transform duration-500"
                                />
                                <div className={`absolute ${pkg.badgePosition === 'left' ? 'left-2' : 'right-2'} top-2 h-[78px] w-[78px] group-hover:animate-bounce-slow`}>
                                    <Image
                                        src={pkg.badgeImage}
                                        alt="Price badge"
                                        width={278}
                                        height={298}
                                        className="h-full w-full object-contain hover-scale"
                                    />
                                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                        <div className="-mt-1 text-[10px] opacity-90 line-through animate-pulse-slow">{pkg?.oldPrice}</div>
                                        <div className="-mt-0.5 text-[18px] font-extrabold text-shimmer">{pkg?.price}</div>
                                    </div> */}
                                </div>
                            </div>

                            {/* Title + divider */}
                            <div className="px-6">
                                <h3 className="mb-2 text-lg font-bold text-black font-recent-grotesk group-hover:text-blue-600 transition-colors duration-300">{pkg.title}</h3>
                                <div className="mb-4 h-[4px] rounded-full bg-black group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                            </div>

                            {/* Features - flex-grow to push button to bottom */}
                            <ul className="space-y-2 px-8 pb-6 text-sm text-black/90 flex-grow">
                                {pkg.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                                        <svg className="mr-3 h-4 w-4 flex-shrink-0 text-black group-hover:text-green-500 group-hover:animate-bounce-slow transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 transition-colors duration-300">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Footer - pushed to bottom */}
                            <div className="border-t border-black/10 bg-white p-4 mt-auto">
                                <button className="w-full rounded-md bg-white border border-black py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg hover:border-blue-500 hover:text-blue-600 hover-shake">
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
