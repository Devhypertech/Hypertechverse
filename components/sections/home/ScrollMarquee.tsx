"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMarquee() {
    const slider = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<ScrollTrigger | null>(null);

    // Track current position and velocity
    let xPercent = 0;
    let currentVelocity = 0;

    useEffect(() => {
        // Create a proxy object to track velocity
        triggerRef.current = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 0,
            end: "max", // Track entire page scroll
            onUpdate: (self) => {
                // We just need the trigger to exist for getVelocity()
            }
        });

        // Animation loop
        const animate = () => {
            if (!triggerRef.current) return;

            // Get the current scroll velocity
            const targetVelocity = triggerRef.current.getVelocity();

            // Smooth out the velocity to prevent bouncing/jitter
            // 0.1 is the smoothing factor (lower = smoother/more inertia)
            currentVelocity = gsap.utils.interpolate(currentVelocity, targetVelocity, 0.1);

            // User wants: scroll down -> move left.
            // "it moves with speed of scroll" -> Linear response to scroll speed.
            // We remove the clamp so faster scrolling = faster movement.
            // We keep sensitivity low to satisfy "big scroll move it little".
            const moveAmount = currentVelocity * -0.00005;

            // Update xPercent
            xPercent += moveAmount;

            // Wrap logic for 8 copies (each 12.5% of total width)
            // We want to wrap after 4 copies (50%)
            // Range should be [-50, 0]
            if (xPercent <= -50) {
                xPercent += 50;
            }
            if (xPercent > 0) {
                xPercent -= 50;
            }

            // Apply to the slider container
            if (slider.current) {
                gsap.set(slider.current, { xPercent: xPercent });
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            if (triggerRef.current) triggerRef.current.kill();
        };
    }, []);

    return (
        <div className="relative overflow-hidden w-full h-full flex items-center">
            <div
                ref={slider}
                className="flex w-max"
                style={{
                    willChange: 'transform',
                    transform: 'translate3d(0,0,0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    fontFamily: "'Recent Grotesk', sans-serif !important"
                }}
            >
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk',  !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <span className="text-[#FDEDE8] text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black  leading-none whitespace-nowrap px-4" style={{ fontFamily: "'Recent Grotesk', !important" }}>
                        • Featured Work • Featured Work • Featured Work
                    </span>
                </div>
            </div>
        </div>
    );
}
