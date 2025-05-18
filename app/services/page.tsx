"use client";

import heroImage from "@/public/images/services/services-hero-bg.jpg";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/hero-section";
import ProcessSection from "../components/services/process-section";
import ServicesShowcase from "../components/services/services-showcase";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("services.hero.title")}
        description={t("services.hero.description")}
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ServicesShowcase />
        <ProcessSection />
      </div>
    </div>
  );
}
