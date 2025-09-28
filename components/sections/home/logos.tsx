import Image from "next/image";
import Link from "next/link";

export default function UltimateAgency() {
    return (
        <section className="bg-black text-white py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
                <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-yellow-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-16 lg:px-2 relative z-10">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left side - 3D character */}
                    <div className="relative animate-fade-in-left hover-scale">
                        <div className="relative">
                            <Image
                                src="/about.png"
                                alt="3D character with glasses and yellow jacket on beanbag"
                                width={800}
                                height={600}
                                className="w-full h-auto hover-glow animate-float"
                            />
                        </div>
                    </div>

                    {/* Right side - content */}
                    <div className="animate-fade-in-right">
                        <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-6 animate-fade-in-right stagger-1 text-shimmer">
                            <span className="text-[#FDE8E5]">Your </span>
                            <span className="text-[#EA7BBF]">Ultimate</span>
                            <span className="text-[#FDE8E5]"> Web Design &</span>
                            <br />
                            <span className="text-[#FDE8E5]">Marketing Agency</span>

                        </h2>
                        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-6 font-recent-grotesk animate-fade-in-right stagger-2">
                            <span className="text-[#ffffff]"> Hypertech Verse blends innovation</span>
                        </h2>

                        <p className="text-base text-white/70 mb-8 animate-fade-in-right stagger-3">
                            with strategy to create digital experiences that not only look amazing but drive real business results. We&apos;re not just another agency. We&apos;re your strategic partner in digital transformation, combining creativity with data-driven insights to elevate your brand and accelerate your growth.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg bg-[#FFD350] px-8 py-4 font-semibold text-black hover:bg-[#e6bf30] transition-all duration-300 animate-fade-in-right stagger-4 hover-scale hover-lift hover-shake gradient-animate"
                        >
                            Start your free consultation today!
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}
