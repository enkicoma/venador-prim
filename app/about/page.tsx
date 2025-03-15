import heroImage from "@/public/images/contact-bg.jpeg";
import ManufacturingFeatures from "../components/about/manufacturing-features";
import HeroSection from "../components/hero-section";
import CoreValues from "../components/about/core-values";
import FeatureSection from "../components/feature-section";


const whyChooseUsFeatures = {
    title: "Advanced Superior Technology",
    description:
      "At Venador Prime, our mission is to provide cutting-edge concrete solutions that redefine durability and structural integrity. We strive to deliver superior craftsmanship, innovative designs, and sustainable building solutions that exceed industry standards. Our commitment to quality and customer satisfaction drives us to create pillars that form the foundation of strong, resilient structures.",
    image: heroImage.src,
  };

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
        <FeatureSection {...whyChooseUsFeatures} reverse={true} />
        <CoreValues />
      </div>
    </div>
  );
}
