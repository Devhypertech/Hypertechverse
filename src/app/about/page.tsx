/* src/app/about/page.tsx */
import Image from "next/image";
import Link from "next/link";
import Testimonial from "../../../components/sections/home/cardreviews";
import NewsletterSignup from "../../../components/sections/home/newsletter";

export const metadata = {
  title: "About — Hypertech Verse",
  description:
    "Discover who we are and why we are — the team behind flavour-focused, ROI-driven digital work.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* top yellow slab */}
        <div className="relative bg-[#F4C043]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="pt-24 lg:pt-28 pb-12 md:pb-16">
              {/* LEFT & RIGHT characters positioned */}
              {/* BOY — now attached to bottom edge to remove empty space */}
              <div className="pointer-events-none absolute left-[min(3vw,24px)] bottom-[32px] hidden md:block">
                <Image
                  src="/about/designing.png"
                  alt="Boy character"
                  width={550}
                  height={550}
                  className="h-auto w-[350px] lg:w-[400px] select-none"
                  priority
                />
              </div>

              {/* GIRL on right */}
              <div className="pointer-events-none absolute right-[min(3vw,24px)] bottom-0 hidden md:block">
                <Image
                  src="/about/coding.png"
                  alt="Girl character"
                  width={300}
                  height={300}
                  className="h-auto w-[230px] lg:w-[270px] translate-y-2 select-none"
                  priority
                />
              </div>

              {/* HEADLINE */}
              <div className="relative">
                {/* First line: DISCOVER [worker] WHO */}
                <div
                  className={[
                    "mx-auto flex flex-wrap items-end justify-center gap-4",
                    "font-[var(--font-recent-grotesk)] font-extrabold leading-[0.9]",
                    "text-white text-5xl sm:text-6xl lg:text-[86px] tracking-tight text-center",
                  ].join(" ")}
                >
                  <span className="inline-block">DISCOVER</span>

                  {/* WORKER inline between words */}
                  <span className="inline-block align-middle pb-2 sm:pb-2">
                    <Image
                      src="/about/annright.png"
                      alt="Worker character"
                      width={280}
                      height={260}
                      className="inline-block h-[70px] w-auto sm:h-[110px] lg:h-[200px] translate-y-2 select-none"
                      priority
                    />
                  </span>

                  <span className="inline-block">WHO WE</span>
                </div>

                {/* Second line */}
                <h1
                  className={[
                    "mt-2 text-center font-[var(--font-recent-grotesk)]",
                    "text-white font-extrabold leading-[0.9]",
                    "text-5xl sm:text-6xl lg:text-[86px] tracking-tight",
                  ].join(" ")}
                >
                  ARE AND WHY WE ARE
                </h1>

                {/* tilted CTA */}
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="inline-block -rotate-6 rounded-lg bg-[#EA7BBF] px-6 py-3 text-lg font-extrabold text-white shadow-[0_8px_0_rgba(0,0,0,0.25)] transition hover:-rotate-3"
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* hard cut into black (like design) */}
          <div className="h-8 w-full bg-black" />
        </div>
      </section>

      {/* ================= ABOUT US BLOCK ================= */}
      <section className="relative bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-[var(--font-recent-grotesk)] text-[44px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-tight text-[#EA7BBF]">
            ABOUT US
          </h2>

          {/* Text now centered for all three columns */}
          <div className="mt-10 grid gap-8 text-sm sm:text-[15px] font-bold leading-relaxed text-white/90 md:grid-cols-3 text-center">
            <p>
            We take the lead in the digital revolution instead of merely accepting its trends. We operate as a leading digital marketing agency that provides comprehensive services, from design and development to new frontiers.
            </p>
            <p>
            Our team of forward-thinkers and tech experts thrives on challenges and successfully converts them into reality. Our approach combines innovative design techniques and technical accuracy to deliver exceptional digital solutions for any project.
            </p>
            <p>
            What drives us? Excellence, innovation, and your success. We focus on achieving results that deliver lasting impacts through our services. Your vision deserves perfection beyond all expectations, so we construct solutions with extraordinary outcomes. 
            </p>
          </div>
        </div>
      </section>
      {/* DESIGNER / MARKETING / DEVELOPER SECTION */}
      <section className="bg-[#EA7BBF] py-16">
        <div className="space-y-20 max-w-6xl mx-auto px-6">
          {/* Designer */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <Image
              src="/about/designing.png"
              alt="Designer"
              width={250}
              height={250}
              className="mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-[#FFD350] text-6xl font-extrabold">DESIGNER</h3>
              <p className="text-white mt-3">
                We take the lead in the digital revolution instead of merely
                accepting its trends. We operate as a leading digital marketing
                agency that provides comprehensive services.
              </p>
              <button
                className="mt-4 inline-block bg-[#FFD350] text-black font-extrabold px-5 py-2 shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                style={{ transform: "rotate(-6deg)" }}
              >
                SEE MORE
              </button>
            </div>
          </div>

          {/* Marketing */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1">
              <h3 className="text-[#FFD350] text-6xl font-extrabold">MARKETING</h3>
              <p className="text-white mt-3">
                We take the lead in the digital revolution instead of merely
                accepting its trends. We operate as a leading digital marketing
                agency that provides comprehensive services.
              </p>
              <button
                className="mt-4 inline-block bg-[#FFD350] text-black font-extrabold px-5 py-2 shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                style={{ transform: "rotate(5deg)" }}
              >
                SEE MORE
              </button>
            </div>
            <Image
              src="/about/annleft.png"
              alt="Marketing"
              width={250}
              height={250}
              className="mx-auto md:mx-0 order-1 md:order-2"
            />
          </div>

          {/* Developer */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <Image
              src="/about/coding.png"
              alt="Developer"
              width={250}
              height={250}
              className="mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-[#FFD350] text-6xl font-extrabold">DEVELOPER</h3>
              <p className="text-white mt-3">
                We take the lead in the digital revolution instead of merely
                accepting its trends. We operate as a leading digital marketing
                agency that provides comprehensive services.
              </p>
              <button
                className="mt-4 inline-block bg-[#FFD350] text-black font-extrabold px-5 py-2 shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                style={{ transform: "rotate(-6deg)" }}
              >
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <Testimonial />

      {/* ================= NEWSLETTER SIGNUP ================= */}
      <NewsletterSignup />

    </main>
  );
}
