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
    return (
        <div
            className={`card group cursor-pointer transition-all duration-500 ease-out overflow-hidden ${idx === 0 ? 'one' : idx === 1 ? 'two' : idx === 2 ? 'three' : idx === 3 ? 'four' : idx === 4 ? 'five' : idx === 5 ? 'six' : 'seven'}`}
            style={{
                width: '100%',
                minHeight: '300px',
                zIndex: ITEMS.length - idx,
                position: 'relative'
            }}
        >
            <div className="step-box h-full">
                <div className="step-content h-full flex" style={{ paddingTop: '180px', paddingBottom: '180px' }}>
                    <div className="step-text flex-1 transition-all duration-500 ease-out">
                        <span className="step-label">Service {idx + 1}</span>
                        <h2 className="font-heading" style={{ fontFamily: "MD NICHROME TEST, sans-serif" }}>
                            {item.title}
                        </h2>
                        <div className="paragraph-container overflow-hidden transition-all duration-500 ease-out" style={{ maxHeight: '0', opacity: '0' }}>
                            <p style={{ fontFamily: "MD NICHROME TEST, sans-serif" }}>
                                {item.text}
                            </p>
                        </div>
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
        </div>
    );
}

export default function ServicesPage() {
    useEffect(() => {
        // Only run GSAP animations on the client side
        if (typeof window === 'undefined') return;

        // Clean up any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const cards = gsap.utils.toArray<HTMLElement>('.card');

        cards.forEach((card, index) => {
            // Set initial state for each card (visible from start)
            gsap.set(card, {
                scale: 1,
                y: 0,
                opacity: 1,
                rotationX: 0,
                width: "100%",
            });

            // Add hover effect to expand card to 100% width and reveal paragraph
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    width: "100%",
                    duration: 0.5,
                    ease: "power2.out",
                    zIndex: 1000
                });

                // Reveal the paragraph
                const paragraphContainer = card.querySelector('.paragraph-container');
                if (paragraphContainer) {
                    gsap.to(paragraphContainer, {
                        maxHeight: "200px",
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    width: "100%",
                    duration: 0.5,
                    ease: "power2.out",
                    zIndex: ITEMS.length - index
                });

                // Hide the paragraph
                const paragraphContainer = card.querySelector('.paragraph-container');
                if (paragraphContainer) {
                    gsap.to(paragraphContainer, {
                        maxHeight: "0",
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="min-h-screen">
            <ServiceHero />
            <section className="bg-[#1d1d1d]">
                <div className="w-full py-16 sm:py-24 lg:py-36">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
                        <div className="relative" style={{ height: 'auto', minHeight: '600px' }}>
                            {ITEMS.map((item, i) => (
                                <ServiceCard key={i} item={item} idx={i} />
                            ))}
                        </div>
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
