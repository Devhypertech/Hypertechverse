"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  homePackages,
  websitePackages,
  brandingPackages,
  videoAnimationPackages,
  comboPackages,
} from "../../../data/packages";

export default function BrandPackages() {
  const tabs = ["WEB DESIGNS", "LOGO DESIGNS", "BRANDING", "VIDEO ANIMATION", "MOBILE APPLICATIONS"];
  const [activeTab, setActiveTab] = useState(0);

  // Map tabs to package data
  const getPackagesForTab = (tabIndex: number) => {
    switch (tabIndex) {
      case 0: // WEB DESIGNS
        return websitePackages || [];
      case 1: // LOGO DESIGNS
        return comboPackages || [];
      case 2: // BRANDING
        return homePackages || [];
      case 3: // VIDEO ANIMATION
        return videoAnimationPackages || [];
      case 4: // MOBILE APPLICATIONS
        return websitePackages || []; // Fallback to website packages
      default:
        return websitePackages || [];
    }
  };

  // Get taglines for website packages (matching the image)
  const getTaglineForWebsitePackage = (index: number) => {
    const taglines = ["Bite-sized Brand", "Droolworthy Design", "Identity Crisis!", "Polished Presence"];
    return taglines[index] || "Package Highlights";
  };

  const packages = getPackagesForTab(activeTab);
  const topThree = packages.slice(0, 3);
  const featured = packages[3]; // 4th card shown centered

  // For website packages, use taglines from homePackages
  const isWebsiteTab = activeTab === 0;

  return (
    <section className="bg-[#1d1d1d] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Pink Container */}
        <div className="relative rounded-[28px] bg-[#EA7BBF] px-4 py-10 sm:px-8 sm:py-14 overflow-hidden">
          {/* subtle bubbles */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white" />
            <div className="absolute top-24 right-16 h-16 w-16 rounded-full bg-white" />
            <div className="absolute bottom-16 left-1/4 h-12 w-12 rounded-full bg-white" />
            <div className="absolute bottom-10 right-1/3 h-14 w-14 rounded-full bg-white" />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center">
              <span className="inline-flex items-center justify-center rounded-full bg-[#fff9f1] px-4 py-1 text-xs sm:text-sm font-semibold text-[#EA7BBF]">
                How we do things
              </span>

              <h2
                className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#fff9f1]"
                style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif" }}
              >
                Brand Packages
              </h2>

              <p
                className="mt-2 text-base sm:text-lg md:text-xl font-semibold text-[#fff9f1]/90"
                style={{ fontFamily: "'Recent Grotesk', 'Recursive', sans-serif" }}
              >
                It&apos;s time for some brand-spanking
              </p>

              {/* Tabs */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {tabs.map((t, idx) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={[
                      "rounded-md px-4 py-2 text-[11px] sm:text-xs font-bold border border-black/20",
                      idx === activeTab
                        ? "bg-[#FFD350] text-[#1d1d1d]"
                        : "bg-[#fff9f1] text-[#1d1d1d] hover:bg-[#FFD350]",
                      "transition",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Top 3 Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {topThree.map((pkg, i) => (
                <article
                  key={i}
                  className="rounded-2xl border-2 border-black bg-[#fff9f1] overflow-hidden flex flex-col"
                >
                  {/* Card Head */}
                  <div className="px-6 pt-6 text-center">
                    <h3 className="text-[15px] sm:text-base font-extrabold text-[#1d1d1d]">
                      {pkg.title}
                    </h3>
                    {pkg.price && (
                      <p className="mt-1 text-sm font-bold text-[#1d1d1d]/90">
                        {"priceStrike" in pkg && pkg.priceStrike ? (
                          <>
                            <span className="line-through mr-2">{pkg.priceStrike}</span>
                            <span>{pkg.price}</span>
                          </>
                        ) : (
                          <span>{pkg.price}</span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Black divider title bar (like screenshot) */}
                  <div className="mt-4 bg-[#1d1d1d] px-5 py-3 text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-white">
                      {isWebsiteTab ? getTaglineForWebsitePackage(i) : "Package Highlights"}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="px-7 py-6 flex-1">
                    {/* Optional art (if you want to keep it) */}
                    {"art" in pkg && pkg.art ? (
                      <div className="mb-5 flex justify-center">
                        <Image
                          src={pkg.art}
                          alt={pkg.title}
                          width={260}
                          height={180}
                          className="h-28 w-auto object-contain"
                        />
                      </div>
                    ) : null}

                    <ul className="space-y-2 text-sm text-[#1d1d1d]">
                      {(pkg.features || []).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-[#1d1d1d]" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer button */}
                  <div className="border-t border-black/15 px-6 py-4">
                    <Link
                      href="/contact"
                      className="block w-full rounded-md border-2 border-black bg-[#fff9f1] py-3 text-center text-sm font-extrabold text-[#1d1d1d] hover:bg-[#FFD350] transition"
                    >
                      Buy Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Featured / Silver Card (centered like screenshot) */}
            {featured ? (
              <div className="mt-8 flex justify-center">
                <article className="w-full max-w-3xl rounded-2xl border-2 border-black bg-[#fff9f1] overflow-hidden">
                  <div className="px-6 pt-6 text-center">
                    <h3 className="text-[15px] sm:text-base font-extrabold text-[#1d1d1d]">
                      {featured.title}
                    </h3>
                    {featured.price && (
                      <p className="mt-1 text-sm font-bold text-[#1d1d1d]/90">
                        {"priceStrike" in featured && featured.priceStrike ? (
                          <>
                            <span className="line-through mr-2">{featured.priceStrike}</span>
                            <span>{featured.price}</span>
                          </>
                        ) : (
                          <span>{featured.price}</span>
                        )}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 bg-[#1d1d1d] px-5 py-3 text-center">
                    <p className="text-xs sm:text-sm font-extrabold text-white">
                      {isWebsiteTab ? getTaglineForWebsitePackage(3) : "Polished Presence"}
                    </p>
                  </div>

                  <div className="px-7 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm text-[#1d1d1d]">
                      {(featured.features || []).map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-[6px] h-2 w-2 rounded-full bg-[#1d1d1d]" />
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-black/15 px-6 py-4">
                    <Link
                      href="/contact"
                      className="mx-auto block w-full max-w-xs rounded-md border-2 border-black bg-[#fff9f1] py-3 text-center text-sm font-extrabold text-[#1d1d1d] hover:bg-[#FFD350] transition"
                    >
                      Buy Now
                    </Link>
                  </div>
                </article>
              </div>
            ) : null}

            {/* Bottom CTA (like screenshot) */}
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#fff9f1] px-10 py-3 text-sm font-extrabold text-[#1d1d1d] border-2 border-black hover:bg-[#FFD350] transition"
              >
                Get started
              </Link>

              <p className="mt-4 text-xs sm:text-sm font-semibold text-[#fff9f1]/90">
                Not seeing what you need? No problem!
                <br />
                <span className="underline decoration-white/50 underline-offset-4">
                  Reach out
                </span>{" "}
                and I&apos;ll send you a free quote for your own custom project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
