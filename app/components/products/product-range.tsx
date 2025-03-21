"use client";

import projectImg1 from "@/public/images/products/upr-1.png";
import projectImg2 from "@/public/images/products/upr-2.png";
import projectImg3 from "@/public/images/products/upr-3.png";
import projectImg4 from "@/public/images/products/upr-4.png";
import projectImg5 from "@/public/images/products/upr-5.png";
import projectImg6 from "@/public/images/products/upr-6.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProductRange() {
  const { t } = useTranslation();

  const products: Product[] = [
    {
      title: t("products.range.standard.title"),
      description: t("products.range.standard.description"),
      image: projectImg1.src,
      link: "/products/standard-concrete-pillars",
    },
    {
      title: t("products.range.precast.title"),
      description: t("products.range.precast.description"),
      image: projectImg2.src,
      link: "/products/precast-concrete-pillars",
    },
    {
      title: t("products.range.custom.title"),
      description: t("products.range.custom.description"),
      image: projectImg3.src,
      link: "/products/custom-designed-pillars",
    },
    {
      title: t("products.range.heavyDuty.title"),
      description: t("products.range.heavyDuty.description"),
      image: projectImg4.src,
      link: "/products/heavy-duty-load-bearing-pillars",
    },
    {
      title: t("products.range.decorative.title"),
      description: t("products.range.decorative.description"),
      image: projectImg5.src,
      link: "/products/decorative-architectural-pillars",
    },
    {
      title: t("products.range.eco.title"),
      description: t("products.range.eco.description"),
      image: projectImg6.src,
      link: "/products/eco-friendly-sustainable-pillars",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "#1B3B47" }}
        >
          {t("products.range.title")}
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
                width={300}
                height={300}
                // fill
                className="object-cover w-full h-full"
              />

              {/* Text Overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-md py-6 px-4"
                style={{ backdropFilter: "blur(134px)" }}
              >
                <h3 className="text-white text-xl font-semibold mb-1">
                  {product.title}
                </h3>
                <p className="text-white/90 text-sm">{product.description}</p>
                <span className="text-white text-sm mt-2 inline-block">
                  {t("products.range.buttonText")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
