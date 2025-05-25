import heroImage from "@/public/images/services/services-hero-bg.jpeg";
import { Metadata } from "next";
import ServicesContent from "../components/services/services-content";
import { metadata as seoMetadata } from "./metadata";
import { getServiceStructuredData } from "./structured-data";

export async function generateMetadata({
  params,
}: {
  params: { lang?: string };
}): Promise<Metadata> {
  // Get the user's preferred language (you might want to adjust this based on your language detection)
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
  const structuredData = getServiceStructuredData(params?.lang || "en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ServicesContent heroImage={heroImage.src} />
    </>
  );
}
