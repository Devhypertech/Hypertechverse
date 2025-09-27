"use client";
import { useEffect, useRef, useState } from "react";

type Card = {
    tag: string;
    title: string;
    desc: string;
    price: string;
};

const cards: Card[] = [
    {
        tag: "LOGO",
        title: "LOGO",
        desc:
            "Logo represents your brand in the market, serving as your primary brand identity. We design an individualized and meaningful logo that leaves a lasting impact and redefines your brand image.",
        price: "299$",
    },
    {
        tag: "WEB DESIGN",
        title: "LOGO",
        desc:
            "Logo represents your brand in the market, serving as your primary brand identity. We design an individualized and meaningful logo that leaves a lasting impact and redefines your brand image.",
        price: "299$",
    },
    {
        tag: "BRANDING",
        title: "LOGO",
        desc:
            "Logo represents your brand in the market, serving as your primary brand identity. We design an individualized and meaningful logo that leaves a lasting impact and redefines your brand image.",
        price: "299$",
    },
    {
        tag: "SEO",
        title: "LOGO",
        desc:
            "Logo represents your brand in the market, serving as your primary brand identity. We design an individualized and meaningful logo that leaves a lasting impact and redefines your brand image.",
        price: "299$",
    },
];

export default function SmartSolutions() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const scrollToCard = (i: number) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.children[i] as HTMLElement;
        if (card) {
            el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
        }
    };

    // Autoplay every 3s
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => {
                const next = (prev + 1) % cards.length;
                scrollToCard(next);
                return next;
            });
        }, 3000);
        return () => clearInterval(id);
    }, []);

    const manualScroll = (dir: number) => {
        setIndex((prev) => {
            const next = (prev + dir + cards.length) % cards.length;
            scrollToCard(next);
            return next;
        });
    };

    return (
        <section className="bg-[#FFD350] py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-[40px] leading-[1.05] font-extrabold text-[#1D1D1D] md:text-6xl lg:text-7xl">
                        Smart Solutions
                        <br />
                        <span className="inline-block mt-1">that Drive Success</span>
                    </h2>

                    <p className="mt-4 text-[12px] md:text-sm font-extrabold tracking-wide uppercase text-[#1D1D1D] max-w-3xl mx-auto">
                        Increase your sales and separate yourself from the competition by working with a design
                        studio that specializes in the food &amp; beverage world
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Left arrow */}
                    <button
                        aria-label="Previous"
                        onClick={() => manualScroll(-1)}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#EA7BBF] text-black shadow-lg hover:brightness-95"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 19L8 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Right arrow */}
                    <button
                        aria-label="Next"
                        onClick={() => manualScroll(1)}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#EA7BBF] text-black shadow-lg hover:brightness-95"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Track */}
                    <div
                        ref={trackRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {cards.map((c, i) => (
                            <article
                                key={i}
                                className="snap-start shrink-0 w-[340px] md:w-[360px] bg-[#E6A816] rounded-2xl p-6 border-2 border-[#1D1D1D] shadow-[0_6px_0_#1D1D1D]"
                            >
                                {/* pill tag */}
                                <div className="inline-flex items-center rounded-full bg-[#1D1D1D] text-white px-4 py-2 text-sm font-extrabold">
                                    {c.tag}
                                </div>

                                {/* title */}
                                <div className="mt-6 text-white font-extrabold tracking-wide">{c.title}</div>

                                {/* description */}
                                <p className="mt-2 text-white/90 leading-snug">{c.desc}</p>

                                {/* price */}
                                <div className="mt-6">
                                    <div className="text-[#1D1D1D] font-extrabold">Starting from</div>
                                    <div className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
                                        {c.price}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="mt-6 w-full rounded-full bg-[#1D1D1D] text-white py-3 text-lg font-extrabold hover:brightness-110">
                                    See More
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
