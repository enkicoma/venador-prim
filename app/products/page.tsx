import heroImage from "@/public/images/contact-bg.jpeg";
import HeroSection from "../components/hero-section";
import ProductRange from "../components/products/product-range";
import FeatureSection from "../components/products/feature-section";

const whyChooseUsFeatures = {
  title: "Why Choose Our Products?",
  description:
    "At Venador Prime, we go beyond just manufacturing concrete pillars—we provide solutions that enhance durability, safety, and efficiency in construction. Here's why our products stand out",
  features: [
    {
      title: "Superior Durability",
      description:
        "Our concrete pillars are built to withstand extreme conditions and long-term use.",
    },
    {
      title: "Precision Engineering",
      description:
        "We use advanced techniques to ensure consistency and structural integrity.",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "With efficient logistics, we ensure timely delivery to your project site.",
    },
  ],
  image: heroImage.src,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Our Products"
        description="At Venador Prime, we offer a range of high-quality concrete pillars and structural solutions to meet diverse construction needs. Engineered with precision and durability."
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ProductRange />
        <FeatureSection {...whyChooseUsFeatures} />
      </div>
    </div>
  );
}
