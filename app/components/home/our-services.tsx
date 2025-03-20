"use client";

import { HardHat, Landmark, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function OurServices() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Landmark,
      title: t("home.services.items.customPillars.title"),
      description: t("home.services.items.customPillars.description"),
    },
    {
      icon: HardHat,
      title: t("home.services.items.consulting.title"),
      description: t("home.services.items.consulting.description"),
    },
    {
      icon: Truck,
      title: t("home.services.items.transport.title"),
      description: t("home.services.items.transport.description"),
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1a3b4b] sm:text-4xl md:text-5xl">
          {t("home.services.title")}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl bg-white p-6 text-center transition-all duration-300 ease-in-out hover:bg-[#1a3b4b]"
              style={{ boxShadow: "0px 0px 10px 0px #0000001A" }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a3b4b] transition-colors duration-300 ease-in-out group-hover:bg-white">
                <value.icon className="h-8 w-8 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1a3b4b]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1a3b4b] transition-colors duration-300 ease-in-out group-hover:text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-white">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
