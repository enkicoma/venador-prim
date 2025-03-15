"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SlideItem {
  image: string
  alt: string
  title?: string
  description?: string
}

interface ImageSliderProps {
  title?: string
  slides: SlideItem[]
  autoplay?: boolean
  showNavigation?: boolean
  showPagination?: boolean
  className?: string
}

export default function CardSlider({
  title,
  slides,
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  className,
}: ImageSliderProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className={cn("w-full py-16 bg-white relative", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#1B3B47" }}>
            {title}
          </h2>
        )}

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={
              showPagination
                ? {
                    clickable: true,
                    el: ".swiper-pagination",
                    bulletClass: "inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all",
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
            className="pb-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl overflow-hidden h-64 md:h-80">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  {(slide.title || slide.description) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                      {slide.title && <h3 className="font-semibold text-lg">{slide.title}</h3>}
                      {slide.description && <p className="text-sm text-white/90">{slide.description}</p>}
                    </div>
                  )}
                </div>
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
      <div className="swiper-pagination flex justify-center items-center mt-8 pb-4 absolute bottom-0 left-0 right-0"></div>
    </section>
  )
}

