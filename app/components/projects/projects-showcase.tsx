"use client";

import bleImage1 from "@/public/images/projects/ble-1.png";
import bleImage2 from "@/public/images/projects/ble-2.png";
import bleImage3 from "@/public/images/projects/ble-3.png";
import bleImage4 from "@/public/images/projects/ble-4.png";
import bleImage5 from "@/public/images/projects/ble-5.png";
import bleImage6 from "@/public/images/projects/ble-6.png";
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectFeature {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function ProjectsShowcase() {
  const { t } = useTranslation();

  const projects: ProjectFeature[] = [
    {
      title: t("projects.showcase.skylineTower.title"),
      description: t("projects.showcase.skylineTower.description"),
      image: bleImage1.src,
      features: [
        t("projects.showcase.skylineTower.features.earthquake"),
        t("projects.showcase.skylineTower.features.strength"),
        t("projects.showcase.skylineTower.features.integrity"),
      ],
    },
    {
      title: t("projects.showcase.metroBridge.title"),
      description: t("projects.showcase.metroBridge.description"),
      image: bleImage2.src,
      features: [
        t("projects.showcase.metroBridge.features.installation"),
        t("projects.showcase.metroBridge.features.traffic"),
        t("projects.showcase.metroBridge.features.weather"),
      ],
    },
    {
      title: t("projects.showcase.residentialComplex.title"),
      description: t("projects.showcase.residentialComplex.description"),
      image: bleImage3.src,
      features: [
        t("projects.showcase.residentialComplex.features.sustainable"),
        t("projects.showcase.residentialComplex.features.support"),
        t("projects.showcase.residentialComplex.features.safety"),
      ],
    },
    {
      title: t("projects.showcase.luxuryHotel.title"),
      description: t("projects.showcase.luxuryHotel.description"),
      image: bleImage4.src,
      features: [
        t("projects.showcase.luxuryHotel.features.design"),
        t("projects.showcase.luxuryHotel.features.stability"),
        t("projects.showcase.luxuryHotel.features.aesthetics"),
      ],
    },
    {
      title: t("projects.showcase.warehouse.title"),
      description: t("projects.showcase.warehouse.description"),
      image: bleImage5.src,
      features: [
        t("projects.showcase.warehouse.features.strength"),
        t("projects.showcase.warehouse.features.resistance"),
        t("projects.showcase.warehouse.features.optimization"),
      ],
    },
    {
      title: t("projects.showcase.officePark.title"),
      description: t("projects.showcase.officePark.description"),
      image: bleImage6.src,
      features: [
        t("projects.showcase.officePark.features.carbon"),
        t("projects.showcase.officePark.features.efficiency"),
        t("projects.showcase.officePark.features.certification"),
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1B3B47" }}
        >
          {t("projects.showcase.title")}
        </h2>

        <div className="space-y-[20px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 gap-8 items-center p-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
            >
              <div className="relative h-[350px] rounded-lg overflow-hidden md:col-span-2">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-4 md:col-span-3">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "#1B3B47" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check
                        className="h-5 w-5 mt-1 flex-shrink-0"
                        style={{ color: "#1B3B47" }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
