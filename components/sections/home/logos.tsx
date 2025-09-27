import Image from "next/image";
import Link from "next/link";

export default function UltimateAgency() {
    return (
        <section className="bg-black text-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-16 lg:px-2">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left side - 3D character */}
                    <div className="relative">
                        <div className="relative">
                            <Image
                                src="/about.png"
                                alt="3D character with glasses and yellow jacket on beanbag"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right side - content */}
                    <div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-6">
                            <span className="text-[#FDE8E5]">Your </span>
                            <span className="text-[#EA7BBF]">Ultimate</span>
                            <span className="text-[#FDE8E5]"> Web Design &</span>
                            <br />
                            <span className="text-[#FDE8E5]">Marketing Agency</span>

                        </h2>
                        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-6">
                            <span className="text-[#ffffff]"> Hypertech Verse blends innovation</span>
                        </h2>

                        <p className="text-base text-white/70 mb-8">
                            with strategy to create digital experiences that not only look amazing but drive real business results. We&apos;re not just another agency. We&apos;re your strategic partner in digital transformation, combining creativity with data-driven insights to elevate your brand and accelerate your growth.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg bg-[#FFD350] px-8 py-4 font-semibold text-black hover:bg-[#e6bf30] transition"
                        >
                            Start your free consultation today!
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
}
