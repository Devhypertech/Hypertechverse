import ServiceHero from "../../../components/sections/services/service-hero";
import ScrollServices from "./page";

export default function ServicePage() {
    return (
        <main className="min-h-screen">
            <ServiceHero />


            {/* Additional service sections can be added here */}
            <section className="py-20 bg-[#fff9f1]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-[#1d1d1d] mb-8"
                            style={{ fontFamily: 'Recursive, sans-serif' }}>
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            We offer comprehensive digital solutions to help your business thrive in the digital world.
                        </p>
                    </div>
                </div>
            </section>
            <ScrollServices />

        </main>
    );
}
