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
            "Great experience with the Hypertechverse team! Huge thanks to Nick especially—he was incredibly nice, professional, and helpful throughout the whole process. Highly recommend! Guillain Koko",
        author: "Guillain Koko",
        company: "Great experience with Hypertech Verse!",
    },
    {
        tone: "pink",
        quote:
            "Johnny and the team at hypertechverse.com did a great job on my website. Johnny is not only excellent at what he does but also a very professional and humble project manger who always provides wise business advice with 100% transparency. Their work goes beyond just building websites and also handled our social media marketing, and the results have been amazing. Couldn't ask for any better. 10/10",
        author: "Mark Madden",
        company: "Johnny and the team at…",
    },
    {
        tone: "white",
        quote:
            "Working with Chris on my website was an amazing experience from start to finish. He listened carefully to my ideas, offered creative suggestions, and turned everything into a clean, professional, and user-friendly site. Communication was always clear and timely, and every update was delivered exactly as promised. What I appreciated most was his attention to detail and willingness to go above and beyond to make sure the site was exactly what I needed. The design not only looks great but also works seamlessly, with smooth booking and payment features that make my business easier to run. I highly recommend his services to anyone looking for a reliable, talented, and professional web designer.",
        author: "Frank",
        company: "I’m very pleased with their services…",
    },
    {
        tone: "pink",
        quote:
            "Chris seemed ready to talk about any change or fix any issue, day or night. Very responsive. Only drawbacks were a bit of a hard sell on some services past our ability to buy and one tech hiccough that took our email servers offline after the site went live (which was an understandable mistake and easy fix). Love the b-card design, too!",
        author: "Jack Brown",
        company: "Always there to help!",
    },
    {
        tone: "cream",
        quote:
            "The team was very responsive and attentive. Chris coordinated with the team everything I needed and found solutions that meet my need. I was incredibly busy and distracted but they persevered to deliver an excellent product.",
        author: "Haven Skys",
        company: "The team was very responsive and…",
    },
    {
        tone: "pink",
        quote:
            "I recently engaged Hypertech Verse for their web design services, and I must say, the experience has been nothing short of exceptional. From the initial consultation to the final delivery, they have exceeded my expectations in every aspect.",
        author: "Evelyn",
        company: "I recently engaged Hypertech Verse for…",
    },
    {
        tone: "cream",
        quote:
            "HyperTech Verse did a decent job on my website. Design looks good and works well on mobile. Communication was okay, but they missed a few deadlines. Pricing was fair for the quality. A solid 4/5 - room for improvement but I'm satisfied overall.",
        author: "Brandon M. Chappell",
        company: "HyperTech Verse did a decent job on my…",
    },


];

function toneClasses(tone: Tone) {
    const base =
        "rounded-xl border border-white/10 shadow-[0_6px_0_rgba(0,0,0,0.35)] p-5 md:p-6 mb-6 break-inside-avoid";
    if (tone === "cream") return `${base} bg-[#FDEDE8] text-[#1d1d1d]`;
    if (tone === "pink") return `${base} bg-[#EA7BBF] text-[#fff9f1]`;
    return `${base} bg-[#FFD350] text-[#1d1d1d]`;
}

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const videoTestimonials = [
    { src: null, thumbnail: "https://img.youtube.com/vi/wgpYoBey-QM/maxresdefault.jpg", title: "Review One", youtubeUrl: "https://www.youtube.com/watch?v=wgpYoBey-QM" },
    { src: null, thumbnail: "https://img.youtube.com/vi/6uPZOsXeQXM/maxresdefault.jpg", title: "Review Two", youtubeUrl: "https://www.youtube.com/shorts/6uPZOsXeQXM" },
    { src: null, thumbnail: "https://img.youtube.com/vi/H8b21MBcnP4/maxresdefault.jpg", title: "Review Three", youtubeUrl: "https://www.youtube.com/shorts/H8b21MBcnP4" },
    { src: null, thumbnail: "https://img.youtube.com/vi/Or9-ogYyGaY/maxresdefault.jpg", title: "Review Four", youtubeUrl: "https://www.youtube.com/shorts/Or9-ogYyGaY" },
    // { src: null, thumbnail: "https://img.youtube.com/vi/wgpYoBey-QM/maxresdefault.jpg", title: "Review Five", youtubeUrl: "https://www.youtube.com/watch?v=wgpYoBey-QM" },
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

    const handleVideoClick = (video: { src: string | null; youtubeUrl: string | null }) => {
        // Handle YouTube video playback
        if (video.youtubeUrl) {
            if (playingVideo === video.youtubeUrl) {
                setPlayingVideo(null);
                setPaused(false);
            } else {
                setPlayingVideo(video.youtubeUrl);
                setPaused(true);
            }
            return;
        }
        // Handle local video playback
        if (video.src) {
            if (playingVideo === video.src) {
                setPlayingVideo(null);
                setPaused(false);
            } else {
                setPlayingVideo(video.src);
                setPaused(true);
            }
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
                            className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[#fff9f1]"
                            style={{ fontFamily: "'Alkaline Caps', sans-serif", fontWeight: 900 }}
                        >
                            <span className="block italic" style={{ fontFamily: "'Alkaline Caps', sans-serif", fontWeight: 900 }}><span className="text-8xl sm:text-10xl md:text-12xl italic" style={{ fontFamily: "'Alkaline Caps', sans-serif", fontWeight: 900 }}>N</span>ICE THINGS</span>
                            <span className="block text-[#FFD350] italic relative ">
                                {/* LOOK, MOM! speech bubble */}
                                <svg
                                    className="absolute -top-10 sm:-top-12 md:-top-14 left-2 sm:-left-4 md:left-20 w-24 sm:w-28 md:w-36 -rotate-22"
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
                                        fontSize="14"
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
                                        onClick={() => handleVideoClick(video)}
                                    >
                                        {video.youtubeUrl && playingVideo === video.youtubeUrl ? (
                                            <div className="relative w-full h-full">
                                                <iframe
                                                    src={`https://www.youtube-nocookie.com/embed/${getYouTubeId(video.youtubeUrl)}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                                                    className="w-full h-full rounded-lg"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title={video.title}
                                                />
                                                {/* Close button - larger and more prominent on mobile */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setPlayingVideo(null);
                                                        setPaused(false);
                                                    }}
                                                    className="absolute top-3 right-3 z-20 w-12 h-12 md:w-10 md:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                                                    aria-label="Close video"
                                                >
                                                    <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ) : video.src && playingVideo === video.src ? (
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
                                                    <div className="w-16 h-16 bg-[#fff9f1]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                                        className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#EA7BBF]' : 'w-2 bg-[#fff9f1]/30'
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
