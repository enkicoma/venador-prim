"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Certification {
  name: string;
  image: string;
}

interface CertificationsSectionProps {
  title?: string;
  description?: string;
  certifications: Certification[];
}

export default function CertificationsSection({
  title,
  description,
  certifications = [],
}: CertificationsSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#1B3B47" }}>
            {title || t("certificates.certifications.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {description || t("certificates.certifications.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-[10px] p-2 md:p-4 flex items-center justify-center bg-white hover:shadow-md transition-shadow aspect-square h-[160px] md:h-[226px]"
              style={{ boxShadow: "0px 0px 10.35px 0px #0000001A" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={t(`certificates.certifications.${cert.name}.name`)}
                  height={200}
                  width={200}
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
