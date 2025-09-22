import Image from "next/image";
import Link from "next/link";

/**
 * Replace the images below with your assets in /public/hero/.
 * Example files to add:
 *  - /public/hero/main.jpg
 *  - /public/hero/appicons.jpg
 *  - /public/hero/pattern.jpg
 *  - /public/hero/mobileui.jpg
 *  - /public/hero/gallery.jpg
 */
const imgs = {
    main: "/hero/main.png",
    appicons: "/hero/appicons.pmg",
    pattern: "/hero/pattern.png",
    mobileui: "/hero/mobileui.png",
    gallery: "/hero/gallery.png",
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0b0b0f] pt-24 text-white">
            {/* subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* Left copy */}
                    <div>
                        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                            Transforming Ideas
                            <br />
                            Into <span className="text-pink-300">Digital Success</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
                            We bring one-stop solutions to your queries under one platform—your
                            dedicated digital marketing agency. As a cohesive team, we strengthen your brand with
                            innovation at its heart.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href="/portfolio"
                                className="rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 px-5 py-3 font-semibold text-black shadow hover:opacity-95 transition"
                            >
                                See our work
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
                            >
                                Get started
                            </Link>
                        </div>

                        <p className="mt-4 text-sm text-white/60">
                            SEO · Branding · Web/App · Social · Content · Analytics
                        </p>
                    </div>

                    {/* Right mosaic */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Tall right stack */}
                            <div className="space-y-4">
                                <div className="rounded-3xl bg-white/5 p-1 shadow-xl ring-1 ring-white/10">
                                    <div className="overflow-hidden rounded-[22px]">
                                        <Image
                                            src={imgs.pattern}
                                            alt="Pattern"
                                            width={720}
                                            height={900}
                                            className="h-40 w-full object-cover md:h-56"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="rounded-3xl bg-white/5 p-1 shadow-xl ring-1 ring-white/10">
                                    <div className="overflow-hidden rounded-[22px]">
                                        <Image
                                            src={imgs.mobileui}
                                            alt="Mobile-first UI"
                                            width={720}
                                            height={900}
                                            className="h-56 w-full object-cover md:h-72"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Main focal + small tiles */}
                            <div className="space-y-4">
                                <div className="rounded-3xl bg-white/5 p-1 shadow-xl ring-1 ring-white/10">
                                    <div className="overflow-hidden rounded-[22px]">
                                        <Image
                                            src={imgs.main}
                                            alt="Case study visual"
                                            width={900}
                                            height={900}
                                            className="h-56 w-full object-cover md:h-72"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-3xl bg-white/5 p-1 shadow-xl ring-1 ring-white/10">
                                        <div className="overflow-hidden rounded-[22px]">
                                            <Image
                                                src={imgs.appicons}
                                                alt="App icons"
                                                width={600}
                                                height={600}
                                                className="h-32 w-full object-cover md:h-36"
                                            />
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-white/5 p-1 shadow-xl ring-1 ring-white/10">
                                        <div className="overflow-hidden rounded-[22px]">
                                            <Image
                                                src={imgs.gallery}
                                                alt="Gallery"
                                                width={600}
                                                height={600}
                                                className="h-32 w-full object-cover md:h-36"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* decorative soft squares */}
                        <div className="pointer-events-none absolute -left-6 -bottom-6 hidden h-24 w-24 rounded-3xl bg-white/5 md:block" />
                        <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-3xl bg-white/5 md:block" />
                    </div>
                </div>
            </div>

            {/* Pink ribbon bar */}
            <div className="bg-pink-300 text-black">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 text-sm sm:grid-cols-3 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-2">
                        <span className="text-xl">😋</span>
                        <p className="leading-snug">
                            Make your customers hungry for more with a flavour-focused brand
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-xl">📦</span>
                        <p className="leading-snug">
                            Our brand packages have the recipe to get results fast
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-xl">⚠️</span>
                        <p className="leading-snug">
                            Establish a captivating web presence and grow your audience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
