"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

// Portfolio images for each category
const portfolioImages = {
  web: [
    { src: "/portfolio/web/a.png", title: "Web Project A" },
    { src: "/portfolio/web/b.png", title: "Web Project B" },
    { src: "/portfolio/web/c.png", title: "Web Project C" },
    { src: "/portfolio/web/d.png", title: "Web Project D" },
    { src: "/portfolio/web/e.png", title: "Web Project E" },
    { src: "/portfolio/web/f.png", title: "Web Project F" },
    { src: "/portfolio/web/g.png", title: "Web Project G" },
    { src: "/portfolio/web/h.png", title: "Web Project H" },
    { src: "/portfolio/web/i.png", title: "Web Project I" },
    { src: "/portfolio/web/j.png", title: "Web Project J" },
    { src: "/portfolio/web/k.png", title: "Web Project K" },
    { src: "/portfolio/web/l.png", title: "Web Project L" },
    { src: "/portfolio/web/m.png", title: "Web Project M" },
    { src: "/portfolio/web/n.png", title: "Web Project N" },
    { src: "/portfolio/web/o.png", title: "Web Project O" },
    { src: "/portfolio/web/p.png", title: "Web Project P" },
    { src: "/portfolio/web/q.png", title: "Web Project Q" },
    { src: "/portfolio/web/u.png", title: "Web Project U" },
  ],
  mobile: [
    { src: "/portfolio/mob/a.webp", title: "Mobile App A" },
    { src: "/portfolio/mob/b.webp", title: "Mobile App B" },
    { src: "/portfolio/mob/c.webp", title: "Mobile App C" },
    { src: "/portfolio/mob/d.webp", title: "Mobile App D" },
    { src: "/portfolio/mob/e.webp", title: "Mobile App E" },
    { src: "/portfolio/mob/f.webp", title: "Mobile App F" },
    { src: "/portfolio/mob/g.webp", title: "Mobile App G" },
    { src: "/portfolio/mob/h.webp", title: "Mobile App H" },
    { src: "/portfolio/mob/i.webp", title: "Mobile App I" },
  ],
  smm: [
    { src: "/portfolio/smm/a.jpg", title: "Social Media Campaign A" },
    { src: "/portfolio/smm/b.jpg", title: "Social Media Campaign B" },
    { src: "/portfolio/smm/c.jpg", title: "Social Media Campaign C" },
    { src: "/portfolio/smm/d.jpg", title: "Social Media Campaign D" },
    { src: "/portfolio/smm/e.jpg", title: "Social Media Campaign E" },
    { src: "/portfolio/smm/f.jpg", title: "Social Media Campaign F" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 040912.jpg", title: "Social Media Campaign G" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 052516.jpg", title: "Social Media Campaign H" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 053605.jpg", title: "Social Media Campaign I" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 053800.jpg", title: "Social Media Campaign J" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 054019.jpg", title: "Social Media Campaign K" },
    { src: "/portfolio/smm/Screenshot 2025-11-27 054304.jpg", title: "Social Media Campaign L" },
  ],
  logo: [
    { src: "/portfolio/logo/a.jpg", title: "Logo Design A" },
    { src: "/portfolio/logo/b.jpg", title: "Logo Design B" },
    { src: "/portfolio/logo/c.jpg", title: "Logo Design C" },
    { src: "/portfolio/logo/d.jpg", title: "Logo Design D" },
    { src: "/portfolio/logo/e.jpg", title: "Logo Design E" },
    { src: "/portfolio/logo/f.jpg", title: "Logo Design F" },
    { src: "/portfolio/logo/g.jpg", title: "Logo Design G" },
    { src: "/portfolio/logo/h.jpg", title: "Logo Design H" },
    { src: "/portfolio/logo/i.jpg", title: "Logo Design I" },
    { src: "/portfolio/logo/j.jpg", title: "Logo Design J" },
    { src: "/portfolio/logo/k.jpg", title: "Logo Design K" },
    { src: "/portfolio/logo/l.jpg", title: "Logo Design L" },
    { src: "/portfolio/logo/m.jpg", title: "Logo Design M" },
    { src: "/portfolio/logo/n.jpg", title: "Logo Design N" },
    { src: "/portfolio/logo/o.jpg", title: "Logo Design O" },
    { src: "/portfolio/logo/p.jpg", title: "Logo Design P" },
  ],
  branding: [
    { src: "/portfolio/branding/a.png", title: "Branding Project A" },
    { src: "/portfolio/branding/b.png", title: "Branding Project B" },
    { src: "/portfolio/branding/c.png", title: "Branding Project C" },
    { src: "/portfolio/branding/d.png", title: "Branding Project D" },
    { src: "/portfolio/branding/e.png", title: "Branding Project E" },
    { src: "/portfolio/branding/f.png", title: "Branding Project F" },
  ],
  video: [
    { src: "https://img.youtube.com/vi/y5-luPcLbdg/maxresdefault.jpg", title: "Custom Animated", videoId: "y5-luPcLbdg", url: "https://www.youtube.com/watch?v=y5-luPcLbdg", fallback: "https://img.youtube.com/vi/y5-luPcLbdg/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/2NgqxpupDfY/maxresdefault.jpg", title: "Motion Graphics", videoId: "2NgqxpupDfY", url: "https://www.youtube.com/watch?v=2NgqxpupDfY", fallback: "https://img.youtube.com/vi/2NgqxpupDfY/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/cOrzZPdpG6U/maxresdefault.jpg", title: "Custom Animated Video", videoId: "cOrzZPdpG6U", url: "https://www.youtube.com/watch?v=cOrzZPdpG6U", fallback: "https://img.youtube.com/vi/cOrzZPdpG6U/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/w-kMcyDRRSE/maxresdefault.jpg", title: "Custom Animated Video", videoId: "w-kMcyDRRSE", url: "https://www.youtube.com/watch?v=w-kMcyDRRSE", fallback: "https://img.youtube.com/vi/w-kMcyDRRSE/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/SzBh8MV1l2I/maxresdefault.jpg", title: "3D Animation", videoId: "SzBh8MV1l2I", url: "https://www.youtube.com/watch?v=SzBh8MV1l2I", fallback: "https://img.youtube.com/vi/SzBh8MV1l2I/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/ix_Vk5mRuAQ/maxresdefault.jpg", title: "3D Animation", videoId: "ix_Vk5mRuAQ", url: "https://www.youtube.com/watch?v=ix_Vk5mRuAQ", fallback: "https://img.youtube.com/vi/ix_Vk5mRuAQ/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/19Y4JEFb2wo/maxresdefault.jpg", title: "3D Animation", videoId: "19Y4JEFb2wo", url: "https://www.youtube.com/watch?v=19Y4JEFb2wo", fallback: "https://img.youtube.com/vi/19Y4JEFb2wo/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/2tevE4aJk9U/maxresdefault.jpg", title: "3D Animation", videoId: "2tevE4aJk9U", url: "https://www.youtube.com/watch?v=2tevE4aJk9U", fallback: "https://img.youtube.com/vi/2tevE4aJk9U/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/W_iaFB2EBhI/maxresdefault.jpg", title: "3D Animation", videoId: "W_iaFB2EBhI", url: "https://www.youtube.com/watch?v=W_iaFB2EBhI", fallback: "https://img.youtube.com/vi/W_iaFB2EBhI/hqdefault.jpg" },
    { src: "https://img.youtube.com/vi/GvBTLaGulPI/maxresdefault.jpg", title: "3D Animation", videoId: "GvBTLaGulPI", url: "https://www.youtube.com/watch?v=GvBTLaGulPI", fallback: "https://img.youtube.com/vi/GvBTLaGulPI/hqdefault.jpg" },
  ],
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("web");

  const currentImages = portfolioImages[activeTab as keyof typeof portfolioImages] || [];
  return (
    <main className="min-h-screen">
      {/* Hero Section (duplicated from SEO, with headings adjusted) */}
      <section className="relative overflow-hidden bg-[#FFD350] text-black">
        {/* Right half image */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <Image
            src="/portfolio/hero.png"
            alt="Portfolio showcase illustration"
            fill
            priority
            className="object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,.25)]"
          />
        </div>

        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] grid md:grid-cols-2 items-center">
            {/* Left copy */}
            <div className="py-10 sm:py-12 md:py-0">
              <div className="max-w-2xl">
                <div className="relative inline-block">
                  <h1
                    className="leading-[.95] font-black uppercase text-3xl sm:text-4xl md:text-[48px] lg:text-[66px] px-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
               Case
               <br />
               Studies
               <br />
                  </h1>

                  <Link
                    href="/contact"
                    aria-label="Start a project"
                    className="absolute -right-8 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 place-items-center rounded-full bg-[#EA7BBF] text-white shadow-[0_8px_0_rgba(0,0,0,0.2)] sm:shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="sm:w-6 sm:h-6 translate-x-[1px]">
                      <path d="M6 18L18 6M18 6H9M18 6V15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div> 
              </div>
            </div>

            {/* Right visual for mobile */}
            <div className="md:hidden mt-6 sm:mt-8">
              <div className="relative h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] w-full">
                <Image
                  src="/portfolio/bar.png"
                  alt="Portfolio illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee (duplicated from SEO) */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[48px] sm:h-[56px] md:h-[68px] lg:h-[88px] overflow-hidden">
            <div className="absolute inset-0 flex items-center ">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-black py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "web"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              WEB DESIGNS
            </button>
            <button
              onClick={() => setActiveTab("logo")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "logo"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              LOGO DESIGNS
            </button>
            <button
              onClick={() => setActiveTab("branding")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "branding"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              BRANDING
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "video"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              VIDEO ANIMATION
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "mobile"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              MOBILE APPLICATIONS
            </button>
            <button
              onClick={() => setActiveTab("smm")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === "smm"
                  ? "bg-[#FFD350] text-black shadow-lg"
                  : "bg-[#EA7BBF] text-white hover:opacity-90"
              }`}
            >
              SOCIAL MEDIA
            </button>
          </div>
        </div>
      </section>

      {/* ====== Portfolio Gallery ====== */}
<section className="bg-black text-white py-12 sm:py-16 md:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header className="mb-6 sm:mb-8 md:mb-12">
      <div>
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Portfolio Gallery
        </h2>
        <p
          className="mt-1 text-xs sm:text-sm text-white/70"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          A curated selection of our best work across different categories.
        </p>
      </div>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
      {currentImages.map((item, index) => (
        <PortfolioCard key={`${activeTab}-${index}-${item.src}`} item={item} category={activeTab} />
      ))}
    </div>
  </div>
</section>


    </main>
  );
}

// Portfolio Card Component with scroll on hover
function PortfolioCard({ item, category }: { item: { src: string; title: string; videoId?: string; url?: string; fallback?: string }; category: string }) {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.src);
  const isLogo = category === "logo";
  const isBranding = category === "branding";
  const isVideo = category === "video";
  const needsEqualSize = isLogo || isBranding || isVideo;
  const hasVideo = isVideo || !!(item.videoId || item.url);

  // Reset imgSrc and hover state when item.src changes (tab switch)
  useEffect(() => {
    setImgSrc(item.src);
    setIsHovered(false);
    if (imgWrapperRef.current) {
      imgWrapperRef.current.style.transition = 'transform 0s';
      imgWrapperRef.current.style.transform = 'translateY(0)';
    }
  }, [item.src]);

  useEffect(() => {
    // Skip scroll effect for videos
    if (hasVideo) return;
    
    if (isHovered && imgWrapperRef.current && containerRef.current) {
      const imgWrapper = imgWrapperRef.current;
      const img = imgWrapper.querySelector('img');
      const container = containerRef.current;
      
      if (img) {
        // Wait for image to load to get accurate dimensions
        const handleScroll = () => {
          // Use natural dimensions for accurate calculation
          const imgNaturalHeight = img.naturalHeight;
          const imgNaturalWidth = img.naturalWidth;
          const containerWidth = container.offsetWidth;
          const containerHeight = container.offsetHeight;
          
          // Calculate displayed image height based on aspect ratio
          const displayedImgHeight = (imgNaturalHeight / imgNaturalWidth) * containerWidth;
          const scrollDistance = displayedImgHeight - containerHeight;
          
          if (scrollDistance > 0) {
            imgWrapper.style.transition = 'transform 6s ease-in-out';
            imgWrapper.style.transform = `translateY(-${scrollDistance}px)`;
          }
        };

        if (img.complete && img.naturalHeight > 0) {
          handleScroll();
        } else {
          img.onload = handleScroll;
        }
      }
    } else if (!isHovered && imgWrapperRef.current) {
      imgWrapperRef.current.style.transition = 'transform 0.8s ease-in-out';
      imgWrapperRef.current.style.transform = 'translateY(0)';
    }
  }, [isHovered, hasVideo]);

  return (
    <article
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0E0E10] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)] ${
        needsEqualSize ? "flex flex-col h-full" : ""
      }`}
    >
      {/* Media with scroll on hover */}
      <div className={`p-2 sm:p-3 ${needsEqualSize ? "flex-1 flex flex-col" : ""}`}>
        <div
          ref={containerRef}
          className={`relative overflow-hidden rounded-lg sm:rounded-xl ${
            needsEqualSize 
              ? "h-64 sm:h-64 md:h-72 w-full" 
              : "h-64 sm:h-72 md:h-80"
          } ${hasVideo ? "cursor-pointer" : ""}`}
          onMouseEnter={() => !hasVideo && setIsHovered(true)}
          onMouseLeave={() => !hasVideo && setIsHovered(false)}
          onClick={() => {
            if (hasVideo && item.url) {
              window.open(item.url, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          <div ref={imgWrapperRef} className={needsEqualSize || isVideo ? "w-full h-full" : "w-full"}>
            <Image
              src={imgSrc}
              alt={item.title}
              width={800}
              height={1200}
              className={`${
                isVideo 
                  ? "object-cover h-full w-full" 
                  : needsEqualSize 
                    ? "object-contain h-full w-full" 
                    : "object-cover w-full h-auto"
              }`}
              onError={() => {
                if (item.fallback) {
                  setImgSrc(item.fallback);
                }
              }}
            />
          </div>
          {/* Video play button overlay - always show for video category */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EA7BBF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          {/* subtle vignette */}
          <div className="pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      {/* Body */}
      <div className={`px-3 sm:px-4 pb-3 sm:pb-4 ${needsEqualSize ? "pt-0 flex-shrink-0" : "pt-0"}`}>
        <h3
          className="text-sm sm:text-[15px] font-extrabold leading-tight"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          {item.title}
        </h3>
      </div>
    </article>
  );
}

function RibbonText() {
  return (
    <div className="flex items-center">
      <Image
        src="/portfolio/bar.png"
        alt="Smart Solutions That Drive Success"
        width={1000}
        height={68}
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}
