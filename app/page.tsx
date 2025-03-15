import heroImage from "@/public/images/contact-bg.jpeg";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Durability , Reliability
Standards , Poles"
        description="We specialize in cutting-edge concrete pillar solutions designed for strength, durability, and precision. Whether for industrial, commercial, or residential projects."
        backgroundImage={heroImage.src}
      />
    </div>
  );
}
