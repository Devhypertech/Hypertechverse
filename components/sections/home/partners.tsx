"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function OurPartners() {
  const partners = [
    { name: "Canva Digital", logo: "/canva.png" },
    { name: "Logotalks", logo: "/logotalks.png" },
    { name: "The Publishing Legends", logo: "/tpl.png" },
  ];

  return (
    <section className="bg-[#1d1d1d] text-[#fff9f1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp" delay={200}>
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#EA7BBF] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
              Trusted Collaborations
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#fff9f1]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-[#EA7BBF] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Partner Logos Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={300 + index * 150}
              >
                <div className="group relative px-6 py-4 md:px-8 md:py-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#EA7BBF]/50 hover:bg-white/10 transition-all duration-500">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={70}
                    className="h-12 md:h-16 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    unoptimized
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

