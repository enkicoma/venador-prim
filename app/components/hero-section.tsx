"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  buttonText?: string;
  className?: string;
}

export default function HeroSection({
  title,
  description,
  backgroundImage = "",
  buttonText = "",
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-[500px] flex items-center justify-center pt-72 pb-48 ${className}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: "var(--primary)",
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) -411.33%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-5xl mx-auto">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        {buttonText && (
          <Button
            asChild
            className="py-5  justify-center rounded-lg bg-transparent hover:bg-transparent text-white border border-white mt-8"
          >
            <Link href="/about" className="flex items-center space-x-2">
              <span>{buttonText}</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
