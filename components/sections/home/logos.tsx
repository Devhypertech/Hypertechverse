const logos = [
    {
        name: "Acme", svg: (
            <svg viewBox="0 0 48 24" className="h-6 w-auto opacity-70"><rect width="48" height="24" rx="4" /></svg>
        )
    },
    {
        name: "Globex", svg: (
            <svg viewBox="0 0 48 24" className="h-6 w-auto opacity-70"><circle cx="12" cy="12" r="10" /></svg>
        )
    },
    {
        name: "Umbrella", svg: (
            <svg viewBox="0 0 48 24" className="h-6 w-auto opacity-70"><path d="M4 20h40M24 4v12" /></svg>
        )
    },
    {
        name: "Initech", svg: (
            <svg viewBox="0 0 48 24" className="h-6 w-auto opacity-70"><polygon points="4,20 24,4 44,20" /></svg>
        )
    },
    {
        name: "Hooli", svg: (
            <svg viewBox="0 0 48 24" className="h-6 w-auto opacity-70"><rect x="8" y="6" width="32" height="12" /></svg>
        )
    },
];

export default function Logos() {
    return (
        <section className="px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <p className="text-center text-xs uppercase tracking-widest text-gray-500">
                    Trusted by growth-minded teams
                </p>
                <div className="mt-6 grid grid-cols-2 items-center gap-6 md:grid-cols-5">
                    {logos.map((l) => (
                        <div key={l.name} className="flex items-center justify-center">
                            {l.svg}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
