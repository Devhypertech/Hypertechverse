import Hero from "../../components/sections/home/hero";
import Logos from "../../components/sections/home/logos";
import ServicesCta from "../../components/sections/home/services-cta";
import Process from "../../components/sections/home/process";
import Testimonials from "../../components/sections/home/testimonials";
import Cta from "../../components/sections/home/cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Logos />
      <ServicesCta />
      <Process />
      <Testimonials />
      <Cta />
    </main>
  );
}
