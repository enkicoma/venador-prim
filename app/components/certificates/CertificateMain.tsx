"use client";

import tpImage1 from "@/public/images/certificates/tp-1.jpg";
import tpImage2 from "@/public/images/certificates/tp-2.jpg";
import tpImage3 from "@/public/images/certificates/tp-3.jpg";
import tpImage4 from "@/public/images/certificates/tp-4.jpg";
import tpImage5 from "@/public/images/certificates/tp-5.jpg";
import tpImage6 from "@/public/images/certificates/tp-6.jpg";
import tpImage7 from "@/public/images/certificates/tp-7.jpg";

import { useTranslation } from "react-i18next";
import CardSlider from "../card-slider";
import CertificationsSection from "../certificates/certifications-section";

import ocImage1 from "@/public/images/certificates/oc-1.jpg";

export default function CertificateMain() {
  const { t } = useTranslation();

  const testingProcessSlides = [
    {
      image: tpImage1.src,
      alt: t("certificates.testingProcess.slides.materialTesting.alt"),
    },
    {
      image: tpImage2.src,
      alt: t("certificates.testingProcess.slides.structuralInspection.alt"),
    },
    {
      image: tpImage3.src,
      alt: t("certificates.testingProcess.slides.qualityControl.alt"),
    },
    {
      image: tpImage4.src,
      alt: t("certificates.testingProcess.slides.loadTesting.alt"),
    },
    {
      image: tpImage5.src,
      alt: t("certificates.testingProcess.slides.durabilityTesting.alt"),
    },
    {
      image: tpImage6.src,
      alt: t("certificates.testingProcess.slides.durabilityTesting.alt"),
    },
    {
      image: tpImage7.src,
      alt: t("certificates.testingProcess.slides.durabilityTesting.alt"),
    },
  ];

  const certifications = [
    {
      name: t("certificates.certifications.iso.name"),
      image: ocImage1.src,
    },
    // {
    //   name: t("certificates.certifications.ceMark.name"),
    //   image: ocImage2.src,
    // },
  ];

  return (
    <>
      <div className="pt-24 pb-32">
        <CertificationsSection certifications={certifications} />
        <CardSlider
          title={t("certificates.testingProcess.title")}
          slides={testingProcessSlides}
        />
      </div>
    </>
  );
}
