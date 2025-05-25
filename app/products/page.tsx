/* eslint-disable @next/next/inline-script-id */
import heroImage from "@/public/images/products/product-hero-bg.jpg";
import { Metadata } from "next";
import Script from "next/script";
import { metadata as seoMetadata } from "./metadata";
import ProductMain from "../components/products/ProductMain";

export async function generateMetadata({
  params,
}: {
  params: { lang?: string };
}): Promise<Metadata> {
  const lang = (params?.lang || "en") as keyof typeof seoMetadata;
  const meta = seoMetadata[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title as string,
      description: meta.description as string,
      type: "website",
      url: "https://venadorprim.com/products",
      images: [
        {
          url: heroImage.src,
          width: 1200,
          height: 630,
          alt: meta.title as string | undefined,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title as string | undefined,
      description: meta.description as string | undefined,
      images: [heroImage.src],
    },
    alternates: {
      canonical: "https://venadorprim.com/products",
      languages: {
        en: "https://venadorprim.com/en/products",
        ro: "https://venadorprim.com/ro/products",
        ru: "https://venadorprim.com/ru/products",
      },
    },
  };
}

export default function ProductsPage({
  params,
}: {
  params: { lang?: string };
}) {
  const lang = params?.lang || "en";

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Prestressed Concrete Poles",
            description:
              "High-quality prestressed concrete poles and centrifuged poles for electrical infrastructure",
            manufacturer: {
              "@type": "Organization",
              name: "Venador Prim",
              url: "https://venadorprim.com",
            },
            category: "Construction Materials",
            productLine: [
              {
                "@type": "ProductGroup",
                name: "Prestressed Concrete Poles",
                description:
                  "Durable prestressed concrete poles for power distribution",
              },
              {
                "@type": "ProductGroup",
                name: "Centrifuged Poles",
                description:
                  "High-strength centrifuged poles for electrical infrastructure",
              },
              {
                "@type": "ProductGroup",
                name: "Conical and Cylindrical Poles",
                description: "Specialized poles for overhead power lines",
              },
            ],
            image: heroImage.src,
            url: "https://venadorprim.com/products",
          }),
        }}
      />
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <ProductMain />
      </div>
    </>
  );
}
