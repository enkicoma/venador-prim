"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { MoveRight } from "lucide-react";

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const steps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "We begin by understanding your project's unique needs, ensuring we provide the best concrete solutions. Our team works closely with you to develop a plan that aligns with your structural and aesthetic requirements.",
    },
    {
      number: "02",
      title: "Manufacturing",
      description:
        "Using advanced technology and high-quality materials, we manufacture precision-engineered concrete pillars. Each product undergoes strict quality control measures to ensure durability, strength, and compliance with industry standards.",
    },
    {
      number: "03",
      title: "Delivery",
      description:
        "Our team ensures timely delivery and seamless installation, minimizing disruptions to your project timeline. We provide expert guidance throughout the process, ensuring each pillar is placed with precision and care.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          className={cn(
            "text-center text-3xl md:text-4xl font-bold mb-16 text-[#1B3B47]",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center text-center relative",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible ? `delay-${index * 200}` : "",
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
                  <div className="hidden md:block absolute top-1/2 -right-4 w-[100%] h-0.5 border-t-2 border-dashed border-[#666666] transform translate-x-full" >
                    {/* <MoveRight /> */}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#1B3B47]">{step.title}</h3>

              {/* Description */}
              <p className="text-[#666666] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

