"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface LogoSliderProps {
  logos: {
    src: string;
    alt: string;
  }[];
  direction?: "ltr" | "rtl";
  speed?: number;
  className?: string;
}

export default function LogoSlider({
  logos,
  direction = "ltr",
  speed = 30,
  className,
}: LogoSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  // Clone logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth / 2);
    }

    const handleResize = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.scrollWidth / 2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [logos]);

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={sliderRef}
        className={`flex animate-scroll${
          direction === "ltr" ? "Left" : "Right"
        }`}
        style={{
          animationDuration: `${sliderWidth / speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex min-w-[180px] items-center justify-center px-8 py-4 sm:min-w-[200px]"
          >
            <Image
              height={200}
              width={200}
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="h-8 w-auto grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        .animate-scrollLeft {
          animation: scrollLeft linear infinite;
        }

        .animate-scrollRight {
          animation: scrollRight linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${sliderWidth}px);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-${sliderWidth}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
