"use client";

import aboutImage from "@/public/images/home/about.jpg";
import heroImage from "@/public/images/home/home-hero-bg.jpeg";

import certificate1 from "@/public/images/home/cf-1.png";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CardSlider from "./components/card-slider";
import FeatureSection from "./components/feature-section";
import HeroSection from "./components/hero-section";
import CertificationsWithText from "./components/home/certifications-with-text";
import ClientsPartnersSection from "./components/home/clients-partners-section";
import CTABanner from "./components/home/cta-banner";
import GetInTouchSection from "./components/home/get-in-touch";
import OurServices from "./components/home/our-services";

import chooseImage from "@/public/images/home/location.jpg";
import project1 from "@/public/images/home/project-1.jpg";
import project2 from "@/public/images/home/project-2.jpg";
import project3 from "@/public/images/home/project-3.jpg";
import project4 from "@/public/images/home/project-4.jpg";
import project5 from "@/public/images/home/project-5.jpg";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  const certificationsData = {
    title: t("home.certifications.title"),
    description: t("home.certifications.description"),
    certifications: [
      { name: "ISO 9001:2015", image: certificate1.src },
    ],
  };

  const whoWeAreFeatures = {
    title: t("home.whoWeAre.title"),
    description: t("home.whoWeAre.description"),
    image: aboutImage.src,
    buttonText: t("home.whoWeAre.buttonText"),
    buttonLink: "/about",
  };

  const whyChooseUsFeatures = {
    title: t("home.whyChooseUs.title"),
    features: [
      {
        title: t("home.whyChooseUs.features.durableDesigns.title"),
        description: t("home.whyChooseUs.features.durableDesigns.description"),
      },
      {
        title: t("home.whyChooseUs.features.qualityAssurance.title"),
        description: t(
          "home.whyChooseUs.features.qualityAssurance.description"
        ),
      },
      {
        title: t("home.whyChooseUs.features.delivery.title"),
        description: t("home.whyChooseUs.features.delivery.description"),
      },
    ],
    image: chooseImage.src,
  };

  const testingProcessSlides = [
    {
      image: project1.src,
      alt: t("home.projects.slides.skylineTowers.alt"),
      title: t("home.projects.slides.skylineTowers.title"),
    },
    {
      image: project2.src,
      alt: t("home.projects.slides.bridgeLink.alt"),
      title: t("home.projects.slides.bridgeLink.title"),
    },
    {
      image: project3.src,
      alt: t("home.projects.slides.bridgeLinkSpecs.alt"),
      title: t("home.projects.slides.bridgeLinkSpecs.title"),
    },
    {
      image: project4.src,
      alt: t("home.projects.slides.loadTesting.alt"),
      title: t("home.projects.slides.loadTesting.title"),
    },
    {
      image: project5.src,
      alt: t("home.projects.slides.durabilityTesting.alt"),
      title: t("home.projects.slides.durabilityTesting.title"),
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("home.hero.title")}
        description={t("home.hero.description")}
        backgroundImage={heroImage.src}
        className="pt-72 pb-48"
        buttonText={t("home.hero.buttonText")}
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
            {t("home.projects.title")}
          </h2>
          <div>
            <Button
              asChild
              type="submit"
              className="inline-flex items-center px-6 py-6 rounded-lg bg-transparent text-[#1B3B47] hover:bg-primary/90 hover:text-white transition-colors border border-[#1B3B47]"
            >
              <Link href="/projects">
                <span className="mr-2">{t("home.projects.viewAll")}</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </CardSlider>

      <FeatureSection buttonLink="/contact" buttonText={t("products.range.buttonText")} {...whyChooseUsFeatures} reverse={true} />

      <ClientsPartnersSection />

      <CertificationsWithText {...certificationsData} />

      <GetInTouchSection />

      <CTABanner
        title={t("home.cta.title")}
        description={t("home.cta.description")}
        className="optional-additional-classes"
      />
    </div>
  );
}
