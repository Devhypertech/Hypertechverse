type Testimonial = {
    quote: string;
    name: string;
    role: string;
};

const items: Testimonial[] = [
    {
        quote: "Hypertech Verse elevated our organic traffic and lowered CPA within 90 days.",
        name: "Alex R.",
        role: "Head of Growth, SaaS",
    },
    {
        quote: "Clear strategy, fast shipping, and measurable wins—exactly what we needed.",
        name: "Priya S.",
        role: "CMO, E-commerce",
    },
    {
        quote: "They don’t just execute; they teach your team how to sustain the gains.",
        name: "Daniel K.",
        role: "Founder, DTC",
    },
];

export default function Testimonials() {
    return (
        <section className="px-6 py-20 bg-white">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
                <p className="mt-2 text-gray-600 max-w-2xl">
                    Real feedback from teams we’ve helped grow.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {items.map((t, i) => (
                        <figure key={i} className="rounded-2xl border p-6">
                            <blockquote className="text-gray-800">“{t.quote}”</blockquote>
                            <figcaption className="mt-4 text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">{t.name}</span>, {t.role}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
