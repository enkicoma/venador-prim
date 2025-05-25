/* eslint-disable @next/next/inline-script-id */
import heroImage from "@/public/images/projects/projects-hero-bg.jpg";
import { Metadata } from "next";
import Script from "next/script";
import { metadata as seoMetadata } from "./metadata";
import CertificateMain from "../components/certificates/CertificateMain";

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
      url: "https://venadorprim.com/projects",
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
      canonical: "https://venadorprim.com/projects",
      languages: {
        en: "https://venadorprim.com/en/projects",
        ro: "https://venadorprim.com/ro/projects",
        ru: "https://venadorprim.com/ru/projects",
      },
    },
  };
}

export default function ProjectPage({ params }: { params: { lang?: string } }) {
  const lang = params?.lang || "en";

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Infrastructure Projects Portfolio",
            description:
              "Showcase of completed infrastructure projects using prestressed concrete poles and electrical infrastructure solutions",
            provider: {
              "@type": "Organization",
              name: "Venador Prim",
              url: "https://venadorprim.com",
            },
            about: {
              "@type": "Thing",
              name: "Electrical Infrastructure Projects",
              description:
                "Implementation of power distribution infrastructure using prestressed concrete poles",
            },
            genre: "Infrastructure Construction",
            keywords: seoMetadata[lang as keyof typeof seoMetadata].keywords.join(", ") ,
            image: heroImage.src,
            url: "https://venadorprim.com/projects",
          }),
        }}
      />
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <CertificateMain />
      </div>
    </>
  );
}
