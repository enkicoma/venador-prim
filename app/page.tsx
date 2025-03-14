import heroImage from "@/public/images/contact-bg.jpeg";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title="Contact us"
        description="At Venador Prime, we're ready to bring your vision to life with our high-quality concrete solutions. Whether you have a question, need a quote, or want to discuss your project, our team is here to help."
        backgroundImage={heroImage.src}
      />
    </div>
  );
}
