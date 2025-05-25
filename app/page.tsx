import heroImage from "@/public/images/home/home-hero-bg.jpeg";
import type { Metadata } from "next";
import HomeContent from "./components/home/home-content";
import { metadata as seoMetadata } from "./home/metadata";
import { getHomeStructuredData } from "./home/structured-data";

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
      url: "https://venadorprim.com",
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
      canonical: "https://venadorprim.com",
      languages: {
        en: "https://venadorprim.com/en",
        ro: "https://venadorprim.com/ro",
        ru: "https://venadorprim.com/ru",
      },
    },
  };
}

export default function Home({ params }: { params: { lang?: string } }) {
  const structuredData = getHomeStructuredData(params?.lang || "en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomeContent />
    </>
  );
}
