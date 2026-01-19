'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ServiceHero from "../../../components/sections/services/service-hero";
import ServicesCTA from "../../../components/sections/services/services-cta";
import WhyChooseUs from "../../../components/sections/services/why-choose-us";
import Testimonial from "../../../components/sections/home/cardreviews";
import GetInTouch from "../../../components/sections/home/get-in-touch";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
    {
        title: "LOGO DESIGN",
        color: "#FFD350",
        icon: "/services/graphic.png",
        text: "VIDEO ANIMATION HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "BRAND DESIGN",
        color: "#EA7BBF",
        icon: "/services/medal.png",
        text: "Brand Design HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "WEB DESIGN & DEVELOPMENT",
        color: "#FFD350",
        icon: "/services/webdev.png",
        text: "Web Design and Development HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "MOBILE APP DEVELOPMENT",
        color: "#EA7BBF",
        icon: "/services/app.png",
        text: "Mobile App Development HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "SOCIAL MEDIA MARKETING",
        color: "#FFD350",
        icon: "/services/smm.png",
        text: "Social Media Marketing HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "SEARCH ENGINE OPTIMIZATION",
        color: "#EA7BBF",
        icon: "/services/seo.png",
        text: "Search Engine Optimizaion HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
    {
        title: "VIDEO ANIMATION",
        color: "#FFD350",
        icon: "/services/youtube.png",
        text: "VIDEO ANIMATION HELPS YOUR CONCEPTS REACH LIFE STATUS THROUGH ENGAGING, HIGH-QUALITY ANIMATIONS, EXPLAINER VIDEOS, AND MOTION GRAPHICS THAT CAPTIVATE VIEWERS.",
    },
];

function ServiceCard({ item, idx }: { item: { title: string; color: string; icon: string; text: string }; idx: number }) {
    // Each card sticks 20px lower than the previous to create stacking effect
    // Increased to 120px base to clear the 96px header comfortably
    const topOffset = 120 + (idx * 20);

    return (
        <div
            className={`service-card ${idx === 0 ? 'one' : idx === 1 ? 'two' : idx === 2 ? 'three' : idx === 3 ? 'four' : idx === 4 ? 'five' : idx === 5 ? 'six' : 'seven'}`}
            style={{
                zIndex: idx + 1,
                top: `${topOffset}px`,
                backgroundColor: item.color,
                position: 'sticky'
            }}
            data-card-index={idx}
        >
            <div className="step-content h-full flex py-8 md:py-12">
                <div className="step-text flex-1">
                    <span className="step-label">Service {idx + 1}</span>
                    <h2 className="font-heading" style={{ fontFamily: "MD NICHROME TEST, sans-serif" }}>
                        {item.title}
                    </h2>
                    <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {item.text}
                    </p>
                </div>
                <div className="step-image flex-shrink-0">
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="w-full h-auto object-contain"
                        priority={idx < 2}
                    />
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Clean up any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const cards = gsap.utils.toArray<HTMLElement>('.service-card');

        cards.forEach((card) => {
            // Add parallax effect to images only - keep cards visible for sticky
            const image = card.querySelector('.step-image');
            if (image) {
                gsap.to(image, {
                    y: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                });
            }
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="min-h-screen">
            <ServiceHero />
            <section className="stack-outer bg-[#1d1d1d]">
                <div className="stack-container w-full py-16 sm:py-24 lg:py-36">
                    <div className="cards-container mx-auto max-w-7xl">
                        {ITEMS.map((item, i) => (
                            <ServiceCard key={i} item={item} idx={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services CTA Section */}
            <ServicesCTA />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Testimonials Section */}
            <Testimonial />

            {/* Get In Touch Section */}
            <GetInTouch />
        </main>
    );
}
