import Hero from "../../../components/sections/home/hero";
import UltimateAgency from "../../../components/sections/home/logos";
import SmartSolutions from "../../../components/sections/home/services-cta";
import UnfairAdvantage from "../../../components/sections/home/process";
import FeaturedWork from "../../../components/sections/home/testimonials";
import Testimonial from "../../../components/sections/home/cardreviews";
import BrandPackages from "../../../components/sections/home/cta";
import GetInTouch from "../../../components/sections/home/get-in-touch";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <UltimateAgency />
            <SmartSolutions />
            <UnfairAdvantage />
            <FeaturedWork />
            <Testimonial />
            <BrandPackages />
            <GetInTouch />
        </main>
    );
}
