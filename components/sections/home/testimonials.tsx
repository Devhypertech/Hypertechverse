"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";
import ScrollMarquee from "./ScrollMarquee";

// --- tag → pill styles ---
const TAG_STYLES: Record<string, string> = {
    Branding: "bg-[#FFE8A3] text-[#1a1a1a]",
    "Logo Design": "bg-[#FFD350] text-[#1a1a1a]",
    "Web Design": "bg-[#67E8F9] text-[#083344]",
    Illustration: "bg-[#7BE4A1] text-[#0f172a]",
    "Packaging Design": "bg-[#C3B5FD] text-[#111827]",
    "Layout Design": "bg-[#F5A97F] text-[#1a1a1a]",
    "_": "bg-[#fff9f1]/80 text-[#1d1d1d]",
};

const tagClasses = (t: string) =>
    `px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-black/5 ${TAG_STYLES[t] || TAG_STYLES._}`;

const featuredProjects = [
    { image: "/portfolio/Saltydogtreat.png", title: "Wholesome treats for happy paws.", description: "Saltydogtreat", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/Crumblcookies.png", title: "Freshly baked. Perfectly branded.", description: "Crumblcookies", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/Dubicars.png", title: "Driving smarter car decisions.", description: "Dubicars", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/Cravecookies.png", title: "Home of the Deep-Dish Cookie Drop.", description: "Cravecookies", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/Bumpy.png", title: "Find love beyond borders.", description: "Bumpy", tags: ["Branding", "Web Design", "Illustration"] },
    { image: "/portfolio/Arkimals.png", title: "Where imagination becomes art.", description: "Arkimals", tags: ["Illustration"] },
];

export default function FeaturedWork() {
    return (
        <section className="bg-[#1d1d1d] py-10 md:py-16">
            {/* MARQUEE banner */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="relative bg-[#1d1d1d] overflow-hidden">
                    <div className="relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px]">
                        <ScrollMarquee />
                    </div>
                </div>
            </ScrollAnimation>

            {/* Cards container */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ScrollAnimation key={index} animation="fadeInUp" delay={600 + (index * 100)}>
                                <div className="rounded-2xl overflow-visible">
                                    {/* image */}
                                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* text + tags (no background) */}
                                    <div className="pt-4">
                                        <p className=" text-[#fff9f1] text-2xl" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>{project.description}</p>
                                        <h3 className="mt-1 text-lg font-semibold text-[#fff9f1] uppercase" style={{ fontFamily: "'Inter','Recent Grotesk', sans-serif", fontWeight: 800, color: '#EA7BBF' }}>{project.title}</h3>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className={tagClasses(tag)}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* "See all projects" button */}
                    <ScrollAnimation animation="fadeInUp" delay={1200}>
                        <div className="mt-20 text-center">
                            <a
                                href="/portfolio"
                                className="inline-block rounded-md bg-[#FDEDE8] px-8 py-3 text-sm font-semibold text-[#1d1d1d] hover:bg-[#fce0da] transition"
                            >
                                SEE ALL PROJECTS
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
        </section>
    );
}
