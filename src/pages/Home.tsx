import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import DashboardPreview from "../components/sections/DashboardPreview";
import LogoCloud from "../components/sections/LogoCloud";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Fleet from "../components/sections/Fleet";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/Faq";
import Contact from "../components/sections/Contact";

import FadeIn from "../components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <DashboardPreview />
      </FadeIn>

      <FadeIn>
        <LogoCloud />
      </FadeIn>

      <FadeIn>
        <WhyChooseUs />
      </FadeIn>

      <FadeIn>
        <FeaturedProjects />
      </FadeIn>

      <FadeIn>
        <Fleet />
      </FadeIn>

      <FadeIn>
        <Process />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <FAQ />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
    </>
  );
}