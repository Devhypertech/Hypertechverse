import Image from "next/image";
import Link from "next/link";

const packages = [
    {
        title: "Bite-sized Brand",
        // price: "$200",
        // oldPrice: "$225",
        art: "/packages/speaker.png",
        badgeImage: "/packages/badge-1.svg",
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
        badgeImage: "/packages/badge-2.svg",
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
        badgeImage: "/packages/badge-3.svg",
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
        <section className="bg-[#000] max-w-12xl mx-auto  relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 relative  bg-[#EA7BBF] rounded-[20px] py-8 sm:py-14">


                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
                    <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-orange-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="mx-auto max-w-6xl px-2 sm:px-4 relative z-10">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12 text-center">
                        <span className="inline-block text-[#EA7BBF] rounded-full bg-white px-4 sm:px-6 py-1 text-sm sm:text-base md:text-lg font-bold  animate-fade-in-up hover-scale">
                            How we do things
                        </span>
                        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl  tracking-tighter leading-tight font-bold text-white font-recent-grotesk animate-fade-in-up stagger-1 text-shimmer" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>Brand Packages</h2>
                        <p className="mt-2 text-white/90 text-lg sm:text-xl md:text-2xl  animate-fade-in-up stagger-2" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>It&apos;s time for some brand-spanking</p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {packages.map((pkg, i) => (
                            <article
                                key={i}
                                className={`relative overflow-visible rounded-xl border border-black bg-white shadow-[0_6px_0_rgba(0,0,0,0.3)] hover-lift hover-glow animate-fade-in-up stagger-${i + 3} group flex flex-col h-full`}
                            >
                                {/* Artwork + starburst badge */}
                                <div className="relative flex h-48 w-full items-center justify-center p-6 group-hover:animate-float overflow-visible">
                                    <Image
                                        src={pkg.art}
                                        alt={pkg.title}
                                        width={360}
                                        height={260}
                                        className="h-52 w-auto object-contain hover-scale transition-transform duration-500"
                                    />
                                    <div className={`absolute ${pkg.badgePosition === 'left' ? '-left-8 sm:-left-14' : '-right-4 sm:-right-8'} -top-8 sm:-top-12 h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] group-hover:animate-bounce-slow z-10`}>
                                        <Image
                                            src={pkg.badgeImage}
                                            alt="Price badge"
                                            width={378}
                                            height={398}
                                            className="h-full w-full object-contain hover-scale"
                                        />
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
                                    <Link href="/contact" className="block w-full rounded-md bg-white border border-black py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#FFD350] hover:scale-105 hover:shadow-lg hover:border-black hover:text-black hover-shake text-center">
                                        Buy Now
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Custom Packages */}
                    <div className="mt-10">
                        <Link href="/pricing" className="flex items-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black shadow-[0_5px_0_rgba(0,0,0,0.25)] hover:bg-[#FFD350] transition-colors duration-300 cursor-pointer">
                            <span>Custom Packages</span>
                            <span className="ml-auto grid h-7 w-7 place-items-center rounded-full border border-black/20">
                                −
                            </span>
                        </Link>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 text-center">
                        <Link href="/contact" className="inline-block rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                            Get started
                        </Link>
                        <p className="mt-4 text-sm font-semibold text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }} >
                            Not seeing what you need? No problem! Reach out and I&apos;ll send you a free quote for your own custom project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
