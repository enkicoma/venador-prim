import heroImage from "@/public/images/services/services-hero-bg.jpg";
import { Metadata } from "next";
import ProcessSection from "../components/services/process-section";
import ServicesContent from "../components/services/services-showcase";
import { metadata as seoMetadata } from "./metadata";

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
      title: meta.title,
      description: meta.description,
      type: "website",
      url: "https://venadorprim.com/services",
      images: [
        {
          url: heroImage.src,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [heroImage.src],
    },
    alternates: {
      canonical: "https://venadorprim.com/services",
      languages: {
        en: "https://venadorprim.com/en/services",
        ro: "https://venadorprim.com/ro/services",
        ru: "https://venadorprim.com/ru/services",
      },
    },
  };
}

export default function ServicesPage({
  params,
}: {
  params: { lang?: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Electrical Infrastructure Services",
            provider: {
              "@type": "Organization",
              name: "Venador Prim",
              url: "https://venadorprim.com",
            },
            description:
              "Expert services in prestressed concrete poles and electrical infrastructure",
            areaServed: "Moldova",
            serviceType: "Electrical Infrastructure",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Electrical Pole Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Prestressed Concrete Poles Manufacturing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Centrifuged Poles Production",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Power Line Infrastructure",
                  },
                },
              ],
            },
          }),
        }}
      />
      
      <ServicesContent />
      <ProcessSection />
    </>
  );
}
