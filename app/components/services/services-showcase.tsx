import psr1 from "@/public/images/services/psr-1.png";
import psr2 from "@/public/images/services/psr-2.png";
import psr3 from "@/public/images/services/psr-3.png";
import psr4 from "@/public/images/services/psr-4.png";
import { Check } from "lucide-react";
import Image from "next/image";

interface ProjectFeature {
  title: string;
  image: string;
  features: string[];
}

const services: ProjectFeature[] = [
  {
    title: "Engineering",
    image: psr1.src,
    features: [
      "Tailored for Strength – Designed to fit your project’s specific needs.",
      "Premium Materials – Ensuring durability and long-lasting support.",
      "Versatile Applications – Suitable for residential, commercial, and industrial projects.",
    ],
  },
  {
    title: "Consultation",
    image: psr2.src,
    features: [
      "Fast & Efficient – Reduces construction time with ready-made pillars.",
      "Consistent Quality – Manufactured to exact specifications.",
      "Cost-Effective – Minimizes labor costs and material waste.",
    ],
  },
  {
    title: "Transport",
    image: psr3.src,
    features: [
      "Enhanced Durability – Increases load-bearing capacity.",
      "Reliable Performance – Ideal for high-rise buildings and infrastructure.",
      "Meets Industry Standards – Built to withstand extreme conditions.",
    ],
  },
  {
    title: "Logistics",
    image: psr4.src,
    features: [
      "Sustainable Materials – Reduces environmental impact.",
      "Energy-Efficient Production – Lower carbon footprint in manufacturing.",
      "Long-Lasting Performance – Maintains strength over time.",
    ],
  },
];

export default function ServicesShowcase() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1B3B47" }}
        >
          Built to Last, Engineered for Excellence
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
                  fill
                  className="object-cover"
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
