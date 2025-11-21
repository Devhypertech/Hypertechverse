"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

type Card = {
    tag: string;
    title: string;
    desc: string;
    price: string;
};

const cards: Card[] = [
    {
        tag: "LOGO DESIGN",
        title: "Logo Design",
        desc:
            "We think your logo is not only a symbol. It is the heart of your brand name. Our professional designers will create logos that not only appear truly beautiful but also offer a powerful story, which gives the essence of your business.",
        price: "299$",
    },
    {
        tag: "WEB DEVELOPMENT",
        title: "Web Development",
        desc:
            "We know that the first thing that customers see about your business is your website. Our web development team develops user friendly websites that are user friendly and at the same time aesthetically appealing.",
        price: "599$",
    },
    {
        tag: "APP DEVELOPMENT",
        title: "Application Development",
        desc:
            "Turn your ideas into high-performance applications that are easy to use. Our highly skilled developers make customized apps that offer superior user experiences. Integrating the latest technology, we provide reliable and scalable solutions.",
        price: "899$",
    },
    {
        tag: "BRANDING",
        title: "Branding",
        desc:
            "Create a brand that is memorable. We not only do branding services that include the color and the logo, but we also do it in such a way that we build your brand identity that appeals to your audience. We make sure that everything within your brand has a voice.",
        price: "499$",
    },
    {
        tag: "SOCIAL MEDIA",
        title: "Social Media Marketing",
        desc:
            "We transform social media into a strong marketing platform for your brand. We have plans that will be used to promote this engagement, visibility, and conversion. We reach the right audience with your brand through customized content and personalized campaigns.",
        price: "399$",
    },
    {
        tag: "PAID ADS",
        title: "Paid Advertising",
        desc:
            "Transforming social media into an effective promotional instrument for your brand. Our strategies will help to increase engagement and visibility and make conversions. We reach your target audience by customizing content and specific campaigns.",
        price: "699$",
    },
    {
        tag: "VIDEO ANIMATION",
        title: "Video Animations",
        desc:
            "Making concepts come true through exciting video animation. Our animations create interest and motivation for your viewers, no matter the reason: brand storytelling or product demos. Our creativity and technology bring out visually stunning videos that convey your message effectively.",
        price: "799$",
    },
    {
        tag: "SEO",
        title: "SEO",
        desc:
            "Not only do we optimize the websites, but we also amplify the presence of your brand in the online world. Using information-driven strategies and learning how search engines work, you can make sure that your company stands out to the right individuals.",
        price: "499$",
    },
    {
        tag: "CUSTOM SOFTWARE",
        title: "Custom Software Development",
        desc:
            "The software is created in a very unique way, just like your business. Custom-made applications designed by our staff will streamline your processes, make them more productive, and provide the best solution to the most complex issues with accuracy and creativity.",
        price: "1299$",
    },
];

export default function SmartSolutions() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [, setIndex] = useState(0);

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
                <ScrollAnimation animation="fadeInUp" delay={200}>
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-[40px] leading-[1.05] font-extrabold text-[#1D1D1D] md:text-6xl lg:text-7xl">
                            Smart Solutions
                            <br />
                            <span className="inline-block mt-1">that Drive Success</span>
                        </h2>

                        <p className="mt-4 text-[16px] md:text-[18px] font-extrabold tracking-wide capitalize text-[#1D1D1D] max-w-3xl mx-auto">
                            Increase your sales and separate yourself from the competition by working with a design
                            studio that specializes in the food &amp; beverage world
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Carousel */}
                <ScrollAnimation animation="fadeInUp" delay={400}>
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
                                <ScrollAnimation key={i} animation="fadeInScale" delay={600 + (i * 100)}>
                                    <article className="snap-start shrink-0 w-[340px] md:w-[360px] bg-[#E6A816] rounded-2xl p-6 border-2 border-[#1D1D1D] shadow-[0_6px_0_#1D1D1D] flex flex-col h-full">
                                        {/* pill tag */}
                                        <div className="inline-flex items-center rounded-full bg-[#1D1D1D] text-white px-4 py-2 text-sm font-extrabold">
                                            {c.tag}
                                        </div>

                                        {/* title */}
                                        <div className="mt-6 text-white font-extrabold tracking-wide">{c.title}</div>

                                        {/* description */}
                                        <p className="mt-2 text-white/90 leading-snug flex-grow">{c.desc}</p>

                                        {/* price */}
                                        <div className="mt-6">
                                            <div className="text-[#1D1D1D] font-extrabold">Starting from</div>
                                            <div className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
                                                {c.price}
                                            </div>
                                        </div>

                                        {/* CTA - pushed to bottom */}
                                        <Link href="/pricing" className="mt-6 w-full rounded-full bg-[#1D1D1D] text-white py-3 text-lg font-extrabold hover:brightness-110 text-center block">
                                            See More
                                        </Link>
                                    </article>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
