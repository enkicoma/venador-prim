"use client";

import Image from "next/image";
import Link from "next/link";
import projectImg from "@/public/images/contact-bg.jpeg";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
    {
      title: "Standard Concrete Pillars",
      description:
        "High-strength, reinforced concrete pillars designed for general construction applications.",
      image: projectImg.src,
      link: "/products/standard-concrete-pillars",
    },
    {
      title: "Precast Concrete Pillars",
      description:
        "Ready-made pillars for quick installation, reducing construction time and costs.",
      image: projectImg.src,
      link: "/products/precast-concrete-pillars",
    },
    {
      title: "Custom-Designed Pillars",
      description:
        "Tailored solutions to meet unique project specifications and architectural requirements.",
      image: projectImg.src,
      link: "/products/custom-designed-pillars",
    },
    {
      title: "Heavy-Duty Load-Bearing Pillars",
      description:
        "Engineered for industrial and large-scale infrastructure projects requiring maximum strength.",
      image: projectImg.src,
      link: "/products/heavy-duty-load-bearing-pillars",
    },
    {
      title: "Decorative Architectural Pillars",
      description:
        "Aesthetic and functional concrete pillars designed for commercial and residential spaces.",
      image: projectImg.src,
      link: "/products/decorative-architectural-pillars",
    },
    {
      title: "Eco-Friendly Sustainable Pillars",
      description:
        "Manufactured using environmentally friendly materials and processes for green building projects.",
      image: projectImg.src,
      link: "/products/eco-friendly-sustainable-pillars",
    },
  ];
  
export default function ProductRange() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1B3B47" }}
        >
          Our Product Range
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="group relative overflow-hidden rounded-xl h-[450px]"
            >
              {/* Background Image */}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-md py-6 px-4" style={{ backdropFilter: "blur(134px)" }}>
                <h3 className="text-white text-xl font-semibold mb-1">
                  {product.title}
                </h3>
                <p className="text-white/90 text-sm">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
