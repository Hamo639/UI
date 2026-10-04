
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Process from "@/components/sections/process";
import Experience from "@/components/sections/experience";
import Tools from "@/components/sections/tools";
import ContactSection from "@/components/sections/contact";
import SiteLoader from "@/components/layouts/site-loader";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <SiteLoader />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Tools />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}