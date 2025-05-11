import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  showButton?: boolean
  className?: string
}

export default function CTABanner({
  title = "Build with Strength, Build with Confidence!",
  description = "Looking for high-quality concrete poles for your next project? Partner with us for durable, reliable, and expertly crafted solutions.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  showButton = false,
  className,
}: CTABannerProps) {
  return (
    <section className={`w-full relative py-4 ${className || ""}`}>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#1B1B1B]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-xl py-12 md:py-24 px-6 md:px-12 text-center" style={{ backgroundColor: "#1B3B47" }}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

            <p className="text-white/90 md:text-lg">{description}</p>

            {showButton && (
              <div className="pt-4">
                <Button
                  asChild
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6"
                  style={{ color: "#1B3B47" }}
                >
                  <Link href={buttonLink}>{buttonText}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

