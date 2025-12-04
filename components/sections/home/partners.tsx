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
    <section className="bg-[#1d1d1d] text-[#fff9f1] pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
            {/* Heading - Left Side */}
            <div className="flex-shrink-0">
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#fff9f1]"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                <span>Our</span> <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Partners</span>
              </h2>
            </div>

            {/* Partner Logos - Right Side */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 flex-grow">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 min-h-[60px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="h-auto max-h-24 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

