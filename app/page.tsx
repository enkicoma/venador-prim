import { Metadata } from "next";
import HomeContent from "./components/home/home-content";
import { metadata as seoMetadata } from "./home/metadata";
import { getStructuredData } from "./home/structured-data";

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
      siteName: "Venador Prim",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
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
  const structuredData = getStructuredData(params?.lang || "en");

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
