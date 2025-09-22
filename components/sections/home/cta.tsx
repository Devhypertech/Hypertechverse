export default function Cta() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl rounded-3xl border bg-gray-900 text-white p-10 md:p-16">
                <div className="grid gap-8 md:grid-cols-3 md:items-center">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-bold">Ready for compounding growth?</h2>
                        <p className="mt-3 text-gray-300">
                            Get a tailored plan for SEO, content, funnels, and analytics—no fluff.
                        </p>
                    </div>
                    <div className="md:text-right">
                        <a
                            href="/contact"
                            className="inline-block rounded-2xl bg-white px-5 py-3 text-gray-900 hover:opacity-90"
                        >
                            Book a Strategy Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
