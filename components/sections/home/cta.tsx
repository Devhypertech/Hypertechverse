import Image from "next/image";
import Link from "next/link";
import { homePackages } from "../../../data/packages";

const packages = homePackages;

export default function BrandPackages() {
    return (
        <section className="bg-[#1d1d1d] max-w-12xl mx-auto  relative overflow-hidden py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 relative  bg-[#EA7BBF] rounded-[20px] py-8 sm:py-14">


                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-[#fff9f1] rounded-full animate-float"></div>
                    <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-orange-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="mx-auto max-w-6xl px-2 sm:px-4 relative z-10">
                    {/* Header */}
                    <div className="mb-8 sm:mb-12 text-center">
                        <span className="inline-block text-[#EA7BBF] rounded-full bg-[#fff9f1] px-4 sm:px-6 py-1 text-sm sm:text-base md:text-lg font-bold  animate-fade-in-up hover-scale">
                            How we do things
                        </span>
                        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl  tracking-tighter leading-tight font-bold text-[#fff9f1] font-recent-grotesk animate-fade-in-up stagger-1 text-shimmer" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>Brand Packages</h2>
                        <p className="mt-2 text-[#fff9f1]/90 text-lg sm:text-xl md:text-2xl  animate-fade-in-up stagger-2" style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif", fontWeight: 900 }}>It&apos;s time for some brand-spanking</p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {packages.map((pkg, i) => (
                            <article
                                key={i}
                                className={`relative overflow-visible rounded-xl border border-black bg-[#fff9f1] shadow-[0_6px_0_rgba(0,0,0,0.3)] hover-lift hover-glow animate-fade-in-up stagger-${i + 3} group flex flex-col h-full`}
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
                                        <svg viewBox="0 0 264 277" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full hover-scale">
                                            <path d="M114.447 42.4365L122.201 28.1758L130.615 42.0575L132.336 44.8973L134.494 42.3734L145.044 30.0365L150.388 45.3642L151.48 48.4997L154.116 46.4799L167 36.6057L169.04 52.7095L169.458 56.0039L172.455 54.5761L187.111 47.5965L185.758 63.7725L185.482 67.0816L188.712 66.3084L204.498 62.5284L199.811 78.0697L198.852 81.249L202.171 81.1641L218.399 80.7488L210.584 94.9762L208.986 97.8866L212.25 98.4938L228.209 101.461L217.606 113.753L215.438 116.267L218.504 117.54L233.498 123.761L220.572 133.58L217.928 135.588L220.663 137.471L234.036 146.673L219.35 153.589L216.346 155.004L218.629 157.414L229.797 169.196L213.994 172.907L210.761 173.668L212.495 176.499L220.969 190.346L204.739 190.692L201.42 190.762L202.526 193.892L207.935 209.198L191.989 206.16L188.728 205.539L189.158 208.833L191.269 224.927L176.301 218.643L173.24 217.357L172.977 220.667L171.695 236.848L158.362 227.589L155.635 225.694L154.689 228.878L150.069 244.439L138.954 232.61L136.68 230.19L135.094 233.108L127.34 247.369L118.926 233.487L117.205 230.647L115.047 233.17L104.497 245.507L99.1536 230.181L98.0603 227.044L95.4247 229.065L82.5408 238.939L80.5006 222.835L80.0834 219.54L77.0852 220.968L62.43 227.947L63.7825 211.772L64.0593 208.463L60.8299 209.236L45.0437 213.016L49.7299 197.474L50.6885 194.296L47.369 194.381L31.1418 194.795L38.9569 180.567L40.5556 177.658L37.2909 177.051L21.332 174.083L31.9344 161.791L34.1033 159.277L31.0361 158.004L16.043 151.783L28.9692 141.965L31.6135 139.956L28.8779 138.074L15.5059 128.871L30.191 121.955L33.1951 120.54L30.9107 118.13L19.7441 106.349L35.5464 102.636L38.779 101.877L37.0457 99.0446L28.5724 85.199L44.8013 84.8533L48.1213 84.7827L47.0145 81.6518L41.6052 66.3472L57.5513 69.3833L60.8133 70.0044L60.3818 66.7119L58.2726 50.6169L73.2389 56.9021L76.3006 58.1879L76.5631 54.8776L77.8464 38.6959L91.1789 47.9553L93.9063 49.8495L94.8513 46.6661L99.4708 31.1049L110.587 42.934L112.861 45.3538L114.447 42.4365Z" fill={pkg.badgeColor} stroke="#211A1A" strokeWidth="3" />
                                            <text x="132" y="105" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle">{pkg.priceStrike}</text>
                                            <line x1="100" y1="98" x2="164" y2="98" stroke="white" strokeWidth="3" />
                                            <text x="132" y="160" fontFamily="Arial, sans-serif" fontSize="52" fontWeight="bold" fill="white" textAnchor="middle">{pkg.price}</text>
                                        </svg>
                                    </div>
                                </div>

                                {/* Title + divider */}
                                <div className="px-6">
                                    <h3 className="mb-2 text-lg font-bold text-[#1d1d1d] font-recent-grotesk group-hover:text-blue-600 transition-colors duration-300">{pkg.title}</h3>
                                    <div className="mb-4 h-[4px] rounded-full bg-[#1d1d1d] group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                                </div>

                                {/* Features - flex-grow to push button to bottom */}
                                <ul className="space-y-2 px-8 pb-6 text-sm text-[#1d1d1d]/90 flex-grow">
                                    {pkg.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                                            <svg className="mr-3 h-4 w-4 flex-shrink-0 text-[#1d1d1d] group-hover:text-green-500 group-hover:animate-bounce-slow transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="group-hover:text-gray-700 transition-colors duration-300">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Footer - pushed to bottom */}
                                <div className="border-t border-black/10 bg-[#fff9f1] p-4 mt-auto">
                                    <Link href="/contact" className="block w-full rounded-md bg-[#fff9f1] border border-black py-3 text-sm font-semibold text-[#1d1d1d] transition-all duration-300 hover:bg-[#FFD350] hover:scale-105 hover:shadow-lg hover:border-black hover:text-[#1d1d1d] hover-shake text-center">
                                        Buy Now
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Custom Packages */}
                    <div className="mt-10">
                        <Link href="/pricing" className="flex items-center rounded-lg bg-[#fff9f1] px-4 py-3 text-sm font-semibold text-[#1d1d1d] shadow-[0_5px_0_rgba(0,0,0,0.25)] hover:bg-[#FFD350] transition-colors duration-300 cursor-pointer">
                            <span>Custom Packages</span>
                            <span className="ml-auto grid h-7 w-7 place-items-center rounded-full border border-black/20">
                                −
                            </span>
                        </Link>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 text-center">
                        <Link href="/contact" className="inline-block rounded-lg bg-[#1d1d1d] px-8 py-3 text-sm font-semibold text-[#fff9f1] transition hover:scale-105 hover:bg-[#FFD350] hover:text-[#1d1d1d]">
                            <span style={{
                                fontSize: "24px",
                                fontWeight: "bold",

                            }}> Get started</span>
                        </Link>
                        <p className="mt-4 text-sm font-semibold text-[#fff9f1]/90" style={{ fontFamily: 'Poppins, sans-serif' }} >
                            Not seeing what you need? No problem! Reach out and I&apos;ll send you a free quote for your own custom project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
