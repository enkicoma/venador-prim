"use client";

import heroImage from "@/public/images/contact-bg.jpg";
import { useTranslation } from "react-i18next";
import ContactFormSection from "../components/contact/contact-form-section";
import OfficeLocationSection from "../components/contact/office-location-section";
import HeroSection from "../components/hero-section";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        title={t("contact.hero.title")}
        description={t("contact.hero.description")}
        backgroundImage={heroImage.src}
      />
      <ContactFormSection />
      <OfficeLocationSection />
    </div>
  );
}
