import heroImage from "@/public/images/home/home-hero-bg.jpeg";
import aboutImage from "@/public/images/home/about.jpeg";

import HeroSection from "./components/hero-section";
import ClientsPartnersSection from "./components/home/clients-partners-section";
import FeatureSection from "./components/feature-section";
import GetInTouchSection from "./components/home/get-in-touch";
import OurServices from "./components/home/our-services";
import CertificationsWithText from "./components/home/certifications-with-text";
import CardSlider from "./components/card-slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CTABanner from "./components/home/cta-banner";

import project1 from "@/public/images/home/project-1.png";
import project2 from "@/public/images/home/project-2.png";
import project3 from "@/public/images/home/project-3.png";
import chooseImage from "@/public/images/home/location.png";


const whoWeAreFeatures = {
  title: "Who We Are",
  description:
    "With years of experience in concrete pillar manufacturing, we deliver high-quality, durable, and precision-engineered solutions. Our mission is to build the foundation for strong and lasting structures.",
  image: aboutImage.src,
  buttonText: "Read More",
  buttonLink: "/about",
};

const whyChooseUsFeatures = {
  title: "Why Choose Us?",
  //   description:
  //     "At Venador Prime, we go beyond just manufacturing concrete pillars—we provide solutions that enhance durability, safety, and efficiency in construction. Here's why our products stand out",
  features: [
    {
      title: "Futuristic & Durable Designs",
      description:
        "Our concrete pillars are built to withstand extreme conditions and long-term use.",
    },
    {
      title: "Precision & Quality Assurance",
      description:
        "We use advanced techniques to ensure consistency and structural integrity.",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "With efficient logistics, we ensure timely delivery to your project site.",
    },
  ],
  image: chooseImage.src,
};

const testingProcessSlides = [
  {
    image: project1.src,
    alt: "Skyline Towers in laboratory",
    title: "Skyline Towers",
  },
  {
    image: project2.src,
    alt: "BridgeLink Express of concrete pillars",
    title: "BridgeLink Express",
  },
  {
    image: project3.src,
    alt: "BridgeLink Express technicians checking specifications",
    title: "BridgeLink Express",
},
{
      image: project1.src,
    alt: "Load testing equipment for concrete pillars",
    title: "Load Testing",
  },
  {
    image: project2.src,
    alt: "Durability testing in environmental chamber",
    title: "Durability Testing",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Durability , Reliability
Standards , Poles"
        description="We specialize in cutting-edge concrete pillar solutions designed for strength, durability, and precision. Whether for industrial, commercial, or residential projects."
        backgroundImage={heroImage.src}
        className="pt-72 pb-48"
      />
      <FeatureSection {...whoWeAreFeatures} />

      <OurServices />

      <CardSlider
        slidesPerView={3}
        slides={testingProcessSlides}
        className="bg-[#F5F5F5]"
      >
        <div className="flex items-center justify-between mb-12 container mx-auto">
          <h2
            className="text-4xl font-bold text-center"
            style={{ color: "#1B3B47" }}
          >
            Our Project
          </h2>
          <div>
            <Button
              type="submit"
              className="inline-flex items-center px-6 py-6 rounded-lg bg-transparent text-[#1B3B47] hover:bg-primary/90 hover:text-white transition-colors border border-[#1B3B47]"
              //   style={{ backgroundColor: "#1B3B47" }}
            >
              <span className="mr-2">Submit Now</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </CardSlider>

      <FeatureSection {...whyChooseUsFeatures} reverse={true} />

      <ClientsPartnersSection />

      <CertificationsWithText />

      <GetInTouchSection />

      <CTABanner
        title="Build with Strength, Build with Confidence!"
        description="Looking for high-quality concrete pillars for your next project? Partner with us for durable, reliable, and expertly crafted solutions."
        className="optional-additional-classes"
      />
    </div>
  );
}
