"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1d1d1d] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pink pill */}
        <div
          className="
            relative overflow-hidden
            bg-[#EA7BBF]
            rounded-[26px] md:rounded-[30px]
            border-[6px] md:border-[8px] border-black
            shadow-[0_18px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* Right image - hidden on mobile, visible on md+ */}
          <div className="pointer-events-none select-none absolute inset-y-0 right-2 md:right-4 hidden md:flex items-stretch z-[1]">
            <Image
              src="/services/question.png"
              alt="Why Choose Us Character"
              width={900}
              height={900}
              priority
              className="h-full w-auto object-contain max-h-[520px] md:max-h-[620px]"
            />
          </div>

          {/* Content */}
          <div className="relative z-[2]">
            {/* Give the left column extra right padding on desktop so text never goes under the image */}
            <div className="px-6 sm:px-8 lg:px-10 py-8 md:py-10 md:pr-[380px] text-center md:text-left">
              <h2
                className="text-[#fff9f1] uppercase tracking-tight leading-[1] text-[28px] sm:text-[32px] md:text-[44px] font-extrabold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                WHY CHOOSE US?
              </h2>

              <p
                className="
                  text-[#fff9f1]/90 capitalize
                  text-base sm:text-lg leading-relaxed
                  mt-4 max-w-[66ch]
                "
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Hypertech verse offers comprehensive digital marketing services
                to clients, combining innovative experts with modern technology
                and creative development to enhance brand visibility online.
                using data-driven methodologies, they deliver branding services,
                web and app development, social media marketing, and seo to
                build a robust system for growth enhancement. clients receive
                personal assistance throughout the project stage.
              </p>

              {/* Skewed CTA */}
              <Link
                href="/contact"
                className="
                  mt-6 inline-block -skew-x-6 bg-[#FFD350]
                  rounded-[12px]
                  shadow-[0_10px_0_rgba(0,0,0,0.35)]
                  hover:-skew-x-3 transition-transform duration-300
                "
              >
                <span
                  className="
                    inline-block skew-x-6
                    px-7 md:px-8 py-3 md:py-3.5
                    text-[#1d1d1d] uppercase font-extrabold
                    text-[14px] md:text-[16px]
                  "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  EXPLORE NOW
                </span>
              </Link>
            </div>

            {/* Mobile image - shown below content on small screens */}
            <div className="md:hidden flex justify-center pb-4 -mt-2">
              <Image
                src="/services/question.png"
                alt="Why Choose Us Character"
                width={300}
                height={300}
                className="w-[200px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
