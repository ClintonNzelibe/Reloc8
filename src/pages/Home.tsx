import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import LogoCloud from "../components/sections/LogoCloud";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import DashboardPreview from "../components/sections/DashboardPreview";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Testimonials from "../components/sections/Testimonials";
import Process from "../components/sections/Process";
import FAQ from "../components/sections/Faq";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn";
import About from "../components/sections/About";
import Doctors from "../components/sections/Doctors";
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
      <Doctors />
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