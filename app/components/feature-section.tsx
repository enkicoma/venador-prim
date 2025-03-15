import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Feature {
  title?: string;
  description?: string;
}

interface FeatureSectionProps {
  title?: string;
  description?: string;
  features?: Feature[];
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  description,
  features,
  image,
  buttonText = "Contact us",
  buttonLink = "/contact",
  className = "",
  reverse = false,
}: FeatureSectionProps) {
  const order = reverse ? "order-2" : "order-1";
  const imageOrder = reverse ? "order-1" : "order-2";
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto",
            className
          )}
        >
          {/* Left Content */}
          <div className={cn("space-y-8", order)}>
            <div className="space-y-4">
              <h2
                className="text-4xl font-bold leading-tight max-w-lg"
                style={{ color: "#1B3B47" }}
              >
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {features?.length && <div className="space-y-3">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5" style={{ color: "#1B3B47" }} />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      {feature.title} - {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>}

            <div>
              <Button
                asChild
                className="rounded-lg bg-primary hover:bg-primary/90 text-white"
                style={{ backgroundColor: "#1B3B47" }}
              >
                <Link href={buttonLink} className="inline-flex items-center">
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div className={cn("relative", imageOrder)}>
            <div className="p-2 md:p-2">
              <div className="grid grid-cols-1 gap-4">
                {/* {images.map((image, index) => ( */}
                <div className="relative aspect-square rounded-2xl overflow-hidden w-full h-[300px] md:h-[550px]">
                  <Image
                    src={(image as unknown as string) || "/placeholder.svg"}
                    alt={`Feature image `}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-[40%] h-[60%] border-l-[3px] border-t-[3px] rounded-3xl rounded-r-none rounded-b-none border-[#1B3B47] flex items-center justify-center" />
            <div className="absolute bottom-0 right-0 w-[40%] h-[60%] border-r-[3px] border-b-[3px] rounded-3xl rounded-l-none rounded-t-none border-[#1B3B47] flex items-center justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
