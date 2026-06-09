import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { TechEcosystem } from "./components/TechEcosystem";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <TechEcosystem />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
