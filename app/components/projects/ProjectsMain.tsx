"use client";

import heroImage from "@/public/images/projects/projects-hero-bg.jpg";
import { useTranslation } from "react-i18next";
import HeroSection from "../hero-section";
import ProjectMap from "./ProjectMap";
import ProjectsShowcase from "./projects-showcase";

export default function ProjectsMain() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        title={t("projects.hero.title")}
        description={t("projects.hero.description")}
        backgroundImage={heroImage.src}
      />
      <div className="pt-24 pb-32">
        <ProjectsShowcase />
        <ProjectMap />
      </div>
    </>
  );
}
