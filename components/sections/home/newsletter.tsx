"use client";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

export default function NewsletterSignup() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <div className="relative rounded-3xl bg-[#EA7BBF] p-8 md:p-12">
            {/* Eyes illustration - top left */}
            <div className="absolute -left-[2] -top-[-32px] hidden md:block z-10">
              <Image
                src="/about/eye.png"
                alt="Eyes illustration"
                width={80}
                height={80}
                className="h-auto w-16 select-none"
              />
            </div>

            {/* Hey card - top right */}
            <div className="absolute -right-[-280px] -top-16 hidden md:block z-10">
              <Image
                src="/about/hey.png"
                alt="Hey card"
                width={100}
                height={80}
                className="h-auto w-28 select-none"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
              {/* Left side - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                  Join the grub
                </h2>
                <p className="text-lg md:text-xl text-black/90 leading-relaxed max-w-lg">
                  Sign up for our newsletter and we'll send you neat and useful design tips to help you improve your brand from time to time.
                </p>
              </div>

              {/* Right side - Form */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl bg-[#FDEDE8] px-4 py-3 text-black font-bold placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl bg-[#FDEDE8] px-4 py-3 text-black font-bold placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  />
                </div>
                <button className="w-full rounded-xl bg-[#FFD350] px-6 py-3 text-black font-extrabold text-lg shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all">
                  Join the club
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
