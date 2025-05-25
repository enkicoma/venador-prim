import { Metadata } from "next";
import ProductsContent from "../components/products/products-content";
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
      url: "https://venadorprim.com/products",
      siteName: "Venador Prim",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
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

export default function ProductsPage() {
  return <ProductsContent />;
}
