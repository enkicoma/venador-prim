"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: t("services.process.steps.consultation.title"),
      description: t("services.process.steps.consultation.description"),
    },
    {
      number: "02",
      title: t("services.process.steps.manufacturing.title"),
      description: t("services.process.steps.manufacturing.description"),
    },
    {
      number: "03",
      title: t("services.process.steps.delivery.title"),
      description: t("services.process.steps.delivery.description"),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          className={cn(
            "text-center text-3xl md:text-4xl font-bold mb-16 text-[#1B3B47]",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {t("services.process.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center relative",
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                isVisible ? `delay-${index * 200}` : ""
              )}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              {/* Circle with number */}
              <div className="relative mb-6">
                <div className="w-36 h-36 rounded-full border-2 border-dashed border-[#666666] flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#1B3B47] flex items-center justify-center text-white text-5xl font-semibold">
                    {step.number}
                  </div>
                </div>

                {/* Connecting line - only for first two items on desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-[100%] h-0.5 border-t-2 border-dashed border-[#666666] transform translate-x-full">
                    {/* <MoveRight /> */}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#1B3B47]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
