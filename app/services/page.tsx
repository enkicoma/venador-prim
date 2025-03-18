import heroImage from "@/public/images/services/services-hero-bg.jpeg";
import HeroSection from "../components/hero-section";
import ServicesShowcase from "../components/services/services-showcase";
import ProcessSection from "../components/services/process-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Our Services"
        description="At Venador Prime, we provide top-tier concrete pillar solutions designed to meet the highest industry standards. Our expertise ensures durability, precision, and strength for a wide range of construction projects."
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ServicesShowcase />
        <ProcessSection />
      </div>
    </div>
  );
}
