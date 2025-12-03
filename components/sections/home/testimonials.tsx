"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

// --- tag → pill styles ---
const TAG_STYLES: Record<string, string> = {
    Branding: "bg-[#FFE8A3] text-[#1a1a1a]",
    "Logo Design": "bg-[#FFD350] text-[#1a1a1a]",
    "Web Design": "bg-[#67E8F9] text-[#083344]",
    Illustration: "bg-[#7BE4A1] text-[#0f172a]",
    "Packaging Design": "bg-[#C3B5FD] text-[#111827]",
    "Layout Design": "bg-[#F5A97F] text-[#1a1a1a]",
    "_": "bg-white/80 text-black",
};

const tagClasses = (t: string) =>
    `px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-black/5 ${TAG_STYLES[t] || TAG_STYLES._}`;

const featuredProjects = [
    { image: "/portfolio/p1.png", title: "RAK Sushi", description: "A fresh sushi experience", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/p2.png", title: "creative groove.", description: "Logo design", tags: ["Logo Design", "Illustration"] },
    { image: "/portfolio/p3.png", title: "COLD BREW TR", description: "Bringing warmth to cold beer", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/p4.png", title: "Beach Life", description: "Life's better at the beach", tags: ["Branding", "Logo Design", "Web Design"] },
    { image: "/portfolio/p5.png", title: "Own your Style", description: "Taking kids outdoors", tags: ["Branding", "Web Design", "Illustration"] },
    { image: "/portfolio/p6.png", title: "Monkey Business", description: "Illustration", tags: ["Illustration"] },
];

export default function FeaturedWork() {
    return (
        <section className="bg-black py-10 md:py-16">
            {/* MARQUEE banner */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="relative bg-black overflow-hidden">
                    <div className="relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px]">
                        <div className="marquee-track absolute inset-0 flex animate-marquee-x">
                            <Image
                                src="/portfolio/featuredwork.png"
                                alt="Featured Work"
                                width={2400}
                                height={400}
                                priority
                                className="h-full w-auto object-cover"
                            />
                            <Image
                                src="/portfolio/featuredwork.png"
                                alt="Featured Work duplicate"
                                width={2400}
                                height={400}
                                className="h-full w-auto object-cover"
                            />
                        </div>
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
                                        <p className=" text-white text-2xl" style={{ fontFamily: "'Recent Grotesk', sans-serif", fontWeight: 900 }}>{project.description}</p>
                                        <h3 className="mt-1 text-lg font-semibold text-white uppercase" style={{ fontFamily: "'Inter','Recent Grotesk', sans-serif", fontWeight: 800, color: '#EA7BBF' }}>{project.title}</h3>

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
                                className="inline-block rounded-md bg-[#FDEDE8] px-8 py-3 text-sm font-semibold text-black hover:bg-[#fce0da] transition"
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
