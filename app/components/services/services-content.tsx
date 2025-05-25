"use client";

import { useTranslation } from "react-i18next";
import HeroSection from "../hero-section";
import ProcessSection from "./process-section";
import ServicesShowcase from "./services-showcase";

interface ServicesContentProps {
  heroImage: string;
}

export default function ServicesContent({ heroImage }: ServicesContentProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("services.hero.title")}
        description={t("services.hero.description")}
        backgroundImage={heroImage}
      />
      <div className="pt-24 pb-32">
        <ServicesShowcase />
        <ProcessSection />
      </div>
    </div>
  );
}
