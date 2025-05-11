"use client";

import heroImage from "@/public/images/about/about-hero-bg.jpg";
import astImg from "@/public/images/about/ast-image.jpg";
import { useTranslation } from "react-i18next";
import CoreValues from "../components/about/core-values";
import ManufacturingFeatures from "../components/about/manufacturing-features";
import FeatureSection from "../components/feature-section";
import HeroSection from "../components/hero-section";

import mfc1 from "@/public/images/about/mfc-1.jpg";
import mfc2 from "@/public/images/about/mfc-2.jpg";
import mfc3 from "@/public/images/about/mfc-3.jpg";

export default function AboutPage() {
  const { t } = useTranslation();

  const whyChooseUsFeatures = {
    title: t("about.advancedTechnology.title"),
    description: t("about.advancedTechnology.description"),
    image: astImg.src,
  };

  const manufacturingFeatures = {
    title: t("about.manufacturing.title"),
    features: [
      {
        title: t("about.manufacturing.features.expertise.title"),
        description: t("about.manufacturing.features.expertise.description"),
        image: mfc1.src,
      },
      {
        title: t("about.manufacturing.features.materials.title"),
        description: t("about.manufacturing.features.materials.description"),
        image: mfc2.src,
      },
      {
        title: t("about.manufacturing.features.engineering.title"),
        description: t("about.manufacturing.features.engineering.description"),
        image: mfc3.src,
      },
    ],
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("about.hero.title")}
        description={t("about.hero.description")}
        backgroundImage={heroImage.src}
      />
      <div className="">
        <ManufacturingFeatures {...manufacturingFeatures} />
        <FeatureSection {...whyChooseUsFeatures} reverse={true} />
        <CoreValues />
      </div>
    </div>
  );
}
