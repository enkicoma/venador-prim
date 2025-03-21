"use client";

import psr1 from "@/public/images/services/psr-1.png";
import psr2 from "@/public/images/services/psr-2.png";
import psr3 from "@/public/images/services/psr-3.png";
import psr4 from "@/public/images/services/psr-4.png";
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectFeature {
  title: string;
  image: string;
  features: string[];
}

export default function ServicesShowcase() {
  const { t } = useTranslation();

  const services: ProjectFeature[] = [
    {
      title: t("services.showcase.engineering.title"),
      image: psr1.src,
      features: [
        t("services.showcase.engineering.features.strength"),
        t("services.showcase.engineering.features.materials"),
        t("services.showcase.engineering.features.applications"),
      ],
    },
    {
      title: t("services.showcase.consultation.title"),
      image: psr2.src,
      features: [
        t("services.showcase.consultation.features.efficiency"),
        t("services.showcase.consultation.features.quality"),
        t("services.showcase.consultation.features.cost"),
      ],
    },
    {
      title: t("services.showcase.transport.title"),
      image: psr3.src,
      features: [
        t("services.showcase.transport.features.durability"),
        t("services.showcase.transport.features.performance"),
        t("services.showcase.transport.features.standards"),
      ],
    },
    {
      title: t("services.showcase.logistics.title"),
      image: psr4.src,
      features: [
        t("services.showcase.logistics.features.sustainability"),
        t("services.showcase.logistics.features.efficiency"),
        t("services.showcase.logistics.features.performance"),
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
          {t("services.showcase.title")}
        </h2>

        <div className="gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className=" space-y-8 items-center p-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
            >
              <div className="relative h-[350px] rounded-lg overflow-hidden ">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-4">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "#1B3B47" }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
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
