"use client";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-10 md:py-14">
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
          {/* Right image fills height: absolutely positioned, no top/bottom gap */}
          <div className="pointer-events-none select-none absolute inset-y-0 right-2 md:right-4 flex items-stretch z-[1]">
            {/* Set a max so it doesn’t explode on huge screens, but always touches top & bottom */}
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
            {/* Give the left column extra right padding so text never goes under the image */}
            <div className="px-6 sm:px-8 lg:px-10 py-8 md:py-10 pr-[260px] md:pr-[380px]">
              <h2
                className="text-white uppercase tracking-tight leading-[1] text-[32px] md:text-[44px] font-extrabold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                WHY CHOOSE US?
              </h2>

              <p
                className="
                  text-white uppercase font-extrabold
                  text-[12px] md:text-[13.5px] leading-[1.35]
                  mt-4 max-w-[62ch]
                "
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                HYPERTECH VERSE OFFERS COMPREHENSIVE DIGITAL MARKETING SERVICES
                TO CLIENTS, COMBINING INNOVATIVE EXPERTS WITH MODERN TECHNOLOGY
                AND CREATIVE DEVELOPMENT TO ENHANCE BRAND VISIBILITY ONLINE.
                USING DATA-DRIVEN METHODOLOGIES, THEY DELIVER BRANDING SERVICES,
                WEB AND APP DEVELOPMENT, SOCIAL MEDIA MARKETING, AND SEO TO
                BUILD A ROBUST SYSTEM FOR GROWTH ENHANCEMENT. CLIENTS RECEIVE
                PERSONAL ASSISTANCE THROUGHOUT THE PROJECT STAGE.
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
                    text-black uppercase font-extrabold
                    text-[14px] md:text-[16px]
                  "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  EXPLORE NOW
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
