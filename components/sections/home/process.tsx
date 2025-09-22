const steps = [
    {
        k: "01",
        title: "Diagnose",
        text: "We audit your market, analytics, and funnel to find leverage points.",
    },
    {
        k: "02",
        title: "Design",
        text: "We craft a measurable strategy and a clear roadmap tied to KPIs.",
    },
    {
        k: "03",
        title: "Deploy",
        text: "We build pages, content, and campaigns with fast feedback loops.",
    },
    {
        k: "04",
        title: "Compound",
        text: "We iterate based on data to unlock compounding growth over time.",
    },
];

export default function Process() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold">A simple process. Serious outcomes.</h2>
                <p className="mt-2 text-gray-600 max-w-2xl">
                    Clarity first, then momentum—so you see results sooner and keep improving.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s) => (
                        <div key={s.k} className="rounded-2xl border p-6">
                            <div className="text-xs font-mono tracking-widest text-gray-500">{s.k}</div>
                            <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
