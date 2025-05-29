import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />

      <AnimatedSection id="about" className="py-20">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection id="experience" className="py-20 bg-background-darker">
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection id="projects" className="py-20">
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection id="skills" className="py-20 bg-background-darker">
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection id="contact" className="py-20">
        <ContactSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
