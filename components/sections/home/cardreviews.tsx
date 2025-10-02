"use client";
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
    if (tone === "cream") return `${base} bg-[#FDEDE8] text-black`;
    if (tone === "pink") return `${base} bg-[#EA7BBF] text-white`;
    return `${base} bg-white text-black`;
}

export default function TestimonialsMasonry() {
    return (
        <section className="bg-black py-20 md:py-20">
            <div className="mx-auto max-w-7xl mb-16 px-4 sm:px-6 lg:px-8">
                {/* Centered heading */}
                <ScrollAnimation animation="fadeInUp" delay={200}>
                    <div className="relative mx-auto mb-10 md:mb-14 max-w-3xl text-center">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 -rotate-12 rounded-md bg-[#EA7BBF] px-3 py-1 text-xs font-extrabold text-black shadow">
                            LOOK, NOW!
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                            <span className="block">Nice things</span>
                            <span className="block text-[#FFD350] italic">People Said</span>
                        </h2>
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
                                    <p className="leading-relaxed text-current">
                                        {t.quote}
                                        <br />
                                        <br />
                                        <span className="font-extrabold">{t.author}</span>
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
