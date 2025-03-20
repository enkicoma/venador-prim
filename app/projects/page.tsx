import heroImage from "@/public/images/projects/projects-hero-bg.jpeg";
import HeroSection from "../components/hero-section";
import ProjectMap from "../components/projects/ProjectMap";
import ProjectsShowcase from "../components/projects/projects-showcase";



export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Our Projects"
        description="At Venador Prime, we take pride in delivering high-quality concrete solutions for various construction projects. From commercial buildings to large-scale infrastructure, our concrete pillars provide strength, durability, and reliability."
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ProjectsShowcase />
        <ProjectMap />
      </div>
    </div>
  );
}
