"use client";

import heroImage from "@/public/images/projects/projects-hero-bg.jpg";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/hero-section";
import ProjectMap from "../components/projects/ProjectMap";
import ProjectsShowcase from "../components/projects/projects-showcase";

export default function ProjectPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("projects.hero.title")}
        description={t("projects.hero.description")}
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ProjectsShowcase />
        <ProjectMap />
      </div>
    </div>
  );
}
