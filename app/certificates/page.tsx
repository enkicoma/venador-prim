"use client";

import tpImage1 from "@/public/images/certificates/tp-1.png";
import tpImage2 from "@/public/images/certificates/tp-2.png";
import tpImage3 from "@/public/images/certificates/tp-3.png";
import tpImage4 from "@/public/images/certificates/tp-4.png";
import tpImage5 from "@/public/images/certificates/tp-5.png";
import { useTranslation } from "react-i18next";
import CardSlider from "../components/card-slider";
import CertificationsSection from "../components/certificates/certifications-section";

import ocImage1 from "@/public/images/certificates/oc-1.png";
// import ocImage10 from "@/public/images/certificates/oc-10.png";
// import ocImage11 from "@/public/images/certificates/oc-11.png";
// import ocImage12 from "@/public/images/certificates/oc-12.png";
import ocImage2 from "@/public/images/certificates/oc-2.png";
import ocImage3 from "@/public/images/certificates/oc-3.png";
// import ocImage4 from "@/public/images/certificates/oc-4.png";
// import ocImage5 from "@/public/images/certificates/oc-5.png";
// import ocImage6 from "@/public/images/certificates/oc-6.png";
// import ocImage7 from "@/public/images/certificates/oc-7.png";
// import ocImage8 from "@/public/images/certificates/oc-8.png";
// import ocImage9 from "@/public/images/certificates/oc-9.png";

export default function CertificatesPage() {
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
  ];

  const certifications = [
    {
      name: t("certificates.certifications.iso.name"),
      image: ocImage1.src,
    },
    {
      name: t("certificates.certifications.ceMark.name"),
      image: ocImage2.src,
    },
    {
      name: t("certificates.certifications.excellence.name"),
      image: ocImage3.src,
    },
    // {
    //   name: t("certificates.certifications.leed.name"),
    //   image: ocImage4.src,
    // },
    // {
    //   name: t("certificates.certifications.usgbc.name"),
    //   image: ocImage5.src,
    // },
    // {
    //   name: t("certificates.certifications.trustedSeller.name"),
    //   image: ocImage6.src,
    // },
    // {
    //   name: t("certificates.certifications.trusted.name"),
    //   image: ocImage7.src,
    // },
    // {
    //   name: t("certificates.certifications.astm.name"),
    //   image: ocImage8.src,
    // },
    // {
    //   name: t("certificates.certifications.aci.name"),
    //   image: ocImage9.src,
    // },
    // {
    //   name: t("certificates.certifications.bba.name"),
    //   image: ocImage10.src,
    // },
    // {
    //   name: t("certificates.certifications.igbc.name"),
    //   image: ocImage11.src,
    // },
    // {
    //   name: t("certificates.certifications.usgbcLeed.name"),
    //   image: ocImage12.src,
    // },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="pt-24 pb-32">
        <CertificationsSection certifications={certifications} />
        <CardSlider
          title={t("certificates.testingProcess.title")}
          slides={testingProcessSlides}
        />
      </div>
    </div>
  );
}
