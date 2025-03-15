import heroImage from "@/public/images/contact-bg.jpeg";
import ManufacturingFeatures from "../components/about/manufacturing-features";
import HeroSection from "../components/hero-section";

const manufacturingFeatures = {
  title: "We Are a Manufacturing Company",
  features: [
    {
      title: "Proven Expertise",
      description:
        "Years of experience in manufacturing durable concrete pillars.",
      image: heroImage.src,
    },
    {
      title: "Top-Quality Materials",
      description: "Ensuring maximum strength and longevity.",
      image: heroImage.src,
    },
    {
      title: "Precision Engineering",
      description: "Designed to meet industry standards with accuracy.",
      image: heroImage.src,
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="About Us"
        description="At Venador Prime, we specialize in manufacturing high-quality concrete pillars that provide strength, durability, and reliability for all types of construction projects."
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ManufacturingFeatures {...manufacturingFeatures} />
      </div>
    </div>
  );
}
