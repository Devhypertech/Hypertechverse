"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "../../../src/components/ScrollAnimation";

type Tone = "cream" | "pink" | "white";

type T = {
    quote: string;
    author: string;
    company?: string;
    tone: Tone;
};

const items: T[] = [
    {
        tone: "cream",
        quote:
            "As per usual you have knocked it out of the park! We love your ideas and are excited to see how this project turns out!",
        author: "Sarah S.",
        company: "Street Invaders",
    },
    {
        tone: "pink",
        quote:
            "I have had the pleasure of working with Steve on several occasions. All the projects we worked on turned out amazing and I have received nothing but compliments. He accommodated my picky requests and endless questions patiently with a depth of knowledge that made him an undeniable asset to my success. I will be working with Steve on all of my future graphic design and website needs. Don’t hesitate to work with Steve, he’s fantastic!",
        author: "Andrea S.",
        company: "Earl & Violet",
    },
    {
        tone: "white",
        quote:
            "Absolute superstar! Couldn’t have picked a better individual to work with. The quality of work is outstanding and is done with such minimal supervision and back and forth. Steve has an amazing eye for creativity and design and really understands what his clients require. He is our go-to for all graphics needs from here on. 5 stars.",
        author: "Sana S.",
        company: "The Health Boutique",
    },
    {
        tone: "pink",
        quote:
            "Steve very quickly understood what we were looking for. He was responsive & asked insightful questions. He then delivered work product beyond what we had experienced with other design partners in the past. We intend to continue leveraging Steve’s help on our projects as long as he’ll let us! We highly recommend working with him!",
        author: "Anurati M.",
        company: "Sempre Health",
    },
    {
        tone: "cream",
        quote:
            "This is an EASY recommendation to make! Steve has not only delivered on the quality of our new dental logo, and web design, but he has also given us the best customer service that I could have asked for. I will be referring friends and family to Steve, and using him again for our business.",
        author: "Holly D.",
        company: "Renew Denture Clinic",
    },
    {
        tone: "pink",
        quote:
            "Steven has been amazing with our rebrand. He is always efficient and listens to our needs. He constantly gets our jobs done ahead of schedule and is very good with keeping me on track when I start neglecting my own deadlines. His work with rebuilding our whole website went seamless and it always stayed on brand.",
        author: "Jessalyn Z.",
        company: "Cameo & Cufflinks",
    },
    {
        tone: "cream",
        quote:
            "I have known Steve for a number of years and his work has always blown me away! We had him build a logo for us and his work and professionalism blew us away. We cannot recommend him enough.",
        author: "Thomas B.",
        company: "Midas Labs",
    },
    {
        tone: "pink",
        quote:
            "We’ve been working regularly with Steve for at least seven years. We chose to work with him because of the exceptional work he does and the service he provides. Fast forward seven years and his creativity has flourished and his designs are better than ever. Steve has become a critical part of what we do!",
        author: "Randy K.",
        company: "Alberta Business Exchange",
    },
    {
        tone: "white",
        quote:
            "Steve was awesome to work with. He’s extremely helpful and knowledgeable, and did an amazing job on my company’s logo design. Highly recommend for business owners looking to grow.",
        author: "Rob L.",
    },
];

function toneClasses(tone: Tone) {
    const base =
        "rounded-xl border border-white/10 shadow-[0_6px_0_rgba(0,0,0,0.35)] p-5 md:p-6 mb-6 break-inside-avoid";
    if (tone === "cream") return `${base} bg-[#FDEDE8] text-[#1d1d1d]`;
    if (tone === "pink") return `${base} bg-[#EA7BBF] text-white`;
    return `${base} bg-white text-[#1d1d1d]`;
}

const videoTestimonials = [
    { src: "/reviewone.mp4", thumbnail: "/thumbnailone.jpg", title: "Review One" },
    { src: "/reviewtwo.mp4", thumbnail: "/thumbnailtwo.jpg", title: "Review Two" },
    { src: "/reviewthree.mp4", thumbnail: "/thumbnailthree.jpg", title: "Review Three" },
    { src: "/reviewfour.mp4", thumbnail: "/thumbnailfour.jpg", title: "Review Four" },
];

export default function TestimonialsMasonry() {
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const startX = useRef<number | null>(null);
    const startY = useRef<number | null>(null);

    // Calculate how many videos to show per slide based on screen size
    const getVideosPerSlide = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth >= 1024) return 3; // Desktop: 3 videos
        if (window.innerWidth >= 640) return 2;  // Tablet: 2 videos
        return 1; // Mobile: 1 video
    };

    const [videosPerSlide, setVideosPerSlide] = useState(getVideosPerSlide());

    useEffect(() => {
        const handleResize = () => {
            setVideosPerSlide(getVideosPerSlide());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, videoTestimonials.length - videosPerSlide);

    // Autoplay carousel (pause when video is playing or when paused)
    useEffect(() => {
        if (paused || playingVideo) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [paused, playingVideo, maxIndex]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goToNext();
            if (e.key === "ArrowLeft") goToPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [currentIndex, maxIndex]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Touch/swipe handlers
    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (!startX.current || !startY.current) return;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX.current - endX;
        const diffY = startY.current - endY;

        // Only swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                goToNext();
            } else {
                goToPrev();
            }
        }
        startX.current = null;
        startY.current = null;
    };

    const handleVideoClick = (src: string) => {
        if (playingVideo === src) {
            setPlayingVideo(null);
        } else {
            setPlayingVideo(src);
            setPaused(true); // Pause carousel when video is playing
        }
    };

    return (
        <section className="bg-[#1d1d1d] py-20 md:py-20">
            <div className="mx-auto max-w-7xl mb-16 px-4 sm:px-6 lg:px-8">
                {/* Centered heading */}
                <ScrollAnimation animation="fadeInUp" delay={200}>
                    <div className="relative mx-auto mb-10 md:mb-14 max-w-3xl text-center">
                        {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 -rotate-12 rounded-md bg-[#EA7BBF] px-3 py-1 text-xs font-extrabold text-[#1d1d1d] shadow border border-white">
                            Now Look At1!
                        </span> */}
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl leading-tight text-white"
                            style={{ fontFamily: "'Alkaline Caps', sans-serif", fontWeight: 900 }}
                        >
                            <span className="block italic"><span className="text-8xl sm:text-10xl md:text-12xl italic">N</span>ICE THINGS</span>
                            <span className="block text-[#FFD350] italic relative ">
                                {/* LOOK, MOM! speech bubble */}
                                <svg
                                    className="absolute -top-8 sm:-top-10 md:-top-12 left-2 sm:-left-4 md:left-20 w-24 sm:w-28 md:w-36 -rotate-22"
                                    viewBox="0 0 140 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="0" y="0" width="130" height="40" rx="6" fill="#EA7BBF" />
                                    <polygon points="100,40 110,50 115,40" fill="#EA7BBF" />
                                    <text
                                        x="65"
                                        y="27"
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="16"
                                        fontWeight="900"
                                        fontFamily="'Alkaline Caps', sans-serif"
                                        fontStyle="italic"
                                    >
                                        NOW LOOK AT!
                                    </text>
                                </svg>
                                <span className="text-8xl sm:text-10xl md:text-12xl">P</span>EOPLE <span className="text-8xl sm:text-10xl md:text-12xl">S</span>AID
                            </span>
                        </h2>
                    </div>
                </ScrollAnimation>

                {/* Video Testimonials Carousel */}
                <ScrollAnimation animation="fadeInUp" delay={300}>
                    <div
                        className="mb-12 md:mb-16 relative"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Carousel Container */}
                        <div className="relative overflow-hidden rounded-lg">
                            <div
                                className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                                style={{
                                    transform: `translateX(calc(-${currentIndex} * (100% / ${videosPerSlide} + 16px)))`
                                }}
                            >
                                {videoTestimonials.map((video, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 aspect-[9/16] bg-gray-600 rounded-lg overflow-hidden cursor-pointer group hover:opacity-90 transition-opacity duration-300"
                                        style={{ width: `calc((100% - ${(videosPerSlide - 1) * 16}px) / ${videosPerSlide})` }}
                                        onClick={() => handleVideoClick(video.src)}
                                    >
                                        {playingVideo === video.src ? (
                                            <video
                                                src={video.src}
                                                controls
                                                autoPlay
                                                className="w-full h-full object-cover rounded-lg"
                                                onEnded={() => {
                                                    setPlayingVideo(null);
                                                    setPaused(false);
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                    unoptimized
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-[#1d1d1d]/30 group-hover:bg-[#1d1d1d]/20 transition-colors duration-300 rounded-lg">
                                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                        <svg
                                                            className="w-8 h-8 text-[#1d1d1d] ml-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows - Outside video list */}
                        {videoTestimonials.length > videosPerSlide && (
                            <>
                                <button
                                    aria-label="Previous"
                                    onClick={goToPrev}
                                    className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#EA7BBF] text-[#1d1d1d] shadow-lg hover:brightness-95"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </button>

                                {/* Right arrow */}
                                <button
                                    aria-label="Next"
                                    onClick={goToNext}
                                    className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-[#EA7BBF] text-[#1d1d1d] shadow-lg hover:brightness-95"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Carousel Indicators */}
                        {videoTestimonials.length > videosPerSlide && (
                            <div className="flex justify-center gap-2 mt-6">
                                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#EA7BBF]' : 'w-2 bg-white/30'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </ScrollAnimation>

                {/* Masonry layout */}
                <ScrollAnimation animation="fadeInUp" delay={400}>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        {items.map((t, i) => (
                            <ScrollAnimation
                                key={i}
                                animation="fadeInUp"
                                delay={600 + i * 100}
                            >
                                <article className={toneClasses(t.tone)}>
                                    <p className="leading-relaxed text-current" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                                        {t.quote}
                                        <br />
                                        <br />
                                        <span className="font-extrabold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}>{t.author}</span>
                                        {t.company ? (
                                            <>
                                                <br />
                                                <span className="font-extrabold">{t.company}</span>
                                            </>
                                        ) : null}
                                    </p>
                                </article>
                            </ScrollAnimation>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
