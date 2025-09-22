const services = [
    { title: "Web Development", href: "/services/web-development", desc: "Fast, accessible, and scalable websites." },
    { title: "App Development", href: "/services/app-development", desc: "Cross-platform experiences users love." },
    { title: "Software Development", href: "/services/software-development", desc: "Custom systems for real business needs." },
    { title: "Branding", href: "/services/branding", desc: "Standout identity with strategic clarity." },
    { title: "Social Media Management", href: "/services/social-media-management", desc: "Content that converts and communities that stick." },
    { title: "SEO", href: "/services/seo", desc: "Compounding organic growth and authority." },
    { title: "Logo Design", href: "/services/logo-design", desc: "Memorable marks with meaning." },
    { title: "Video Animation", href: "/services/video-animation", desc: "Explainers and ads with motion that sells." },
];

export default function ServicesCta() {
    return (
        <section className="px-6 py-20 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
                        <p className="mt-2 text-gray-600">Full-funnel digital marketing and product execution.</p>
                    </div>
                    <a href="/services" className="hidden md:inline-block rounded-xl border px-4 py-2 hover:bg-white">
                        View all services
                    </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((s) => (
                        <a
                            key={s.title}
                            href={s.href}
                            className="group rounded-2xl border bg-white p-6 hover:shadow-sm transition"
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-semibold">{s.title}</h3>
                                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                        </a>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <a href="/services" className="inline-block rounded-xl border px-4 py-2">
                        View all services
                    </a>
                </div>
            </div>
        </section>
    );
}
