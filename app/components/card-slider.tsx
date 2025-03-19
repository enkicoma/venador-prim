"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import Swiper and required modules
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  image: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageSliderProps {
  title?: string;
  slides: SlideItem[];
  autoplay?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
  children?: React.ReactNode;
  slidesPerView?: number;
}

export default function CardSlider({
  title,
  slides,
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  className,
  children,
  slidesPerView = 4,
}: ImageSliderProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className={cn("w-full py-16 bg-white relative", className)}>
      <div className="">
        {title && (
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#1B3B47" }}
          >
            {title}
          </h2>
        )}
        {children}

        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: slidesPerView,
              },
            }}
            pagination={
              showPagination
                ? {
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass:
                      "inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all",
                    bulletActiveClass: "!bg-primary w-3 h-3",
                  }
                : false
            }
            navigation={
              showNavigation
                ? {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }
                : false
            }
            autoplay={
              autoplay
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                  }
                : false
            }
            loop={true}
            // centeredSlides={true}
            freeMode={true}
            className="pb-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="">
                <div className="rounded-xl overflow-hidden h-64 md:h-80">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  {/* Text Overlay */}
                  {(slide.title || slide.description) && (
                    <div
                      className="absolute bottom-4 left-4 right-4 rounded-md py-6 px-4"
                      style={{ backdropFilter: "blur(134px)" }}
                    >
                      {slide.title && (
                        <h3 className="font-semibold text-lg text-white">
                          {slide.title}
                        </h3>
                      )}
                      {slide.description && (
                        <p className="text-sm text-white/90">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {product.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {product.description}
                      </p>
                    </div> */}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          {/* {showNavigation && (
            <>
              <button
                className="swiper-button-prev absolute top-1/2 -left-4 md:-left-12 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
              <button
                className="swiper-button-next absolute top-1/2 -right-4 md:-right-12 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </>
          )} */}
        </div>
      </div>

      {/* Custom Pagination - Moved to bottom of section */}
      <div className="swiper-pagination flex justify-center items-center mt-4 pb-4 absolute bottom-0 left-0 right-0"></div>
    </section>
  );
}
