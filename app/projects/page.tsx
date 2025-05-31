// /* eslint-disable @next/next/inline-script-id */
// import heroImage from "@/public/images/projects/projects-hero-bg.jpg";
// import { Metadata } from "next";
// import Script from "next/script";
// import { metadata as seoMetadata } from "./metadata";
// import ProjectsMain from "../components/projects/ProjectsMain";

// export async function generateMetadata({
//   params,
// }: {
//   params: { lang?: string };
// }): Promise<Metadata> {
//     const resolvedParams = await params;
//       const lang = (resolvedParams?.lang || "en") as keyof typeof seoMetadata;
//   const meta = seoMetadata[lang];

//   return {
//     title: meta.title,
//     description: meta.description,
//     keywords: meta.keywords,
//     openGraph: {
//       title: meta.title as string,
//       description: meta.description as string,
//       type: "website",
//       url: "https://venadorprim.com/projects",
//       images: [
//         {
//           url: heroImage.src,
//           width: 1200,
//           height: 630,
//           alt: meta.title as string | undefined,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: meta.title as string | undefined,
//       description: meta.description as string | undefined,
//       images: [heroImage.src],
//     },
//     alternates: {
//       canonical: "https://venadorprim.com/projects",
//       languages: {
//         en: "https://venadorprim.com/en/projects",
//         ro: "https://venadorprim.com/ro/projects",
//         ru: "https://venadorprim.com/ru/projects",
//       },
//     },
//   };
// }

// export default function ProjectPage() {
    
//   return (
//     <>
//       <Script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "CollectionPage",
//             name: "Infrastructure Projects Portfolio",
//             description:
//               "Showcase of completed infrastructure projects using prestressed concrete poles and electrical infrastructure solutions",
//             provider: {
//               "@type": "Organization",
//               name: "Venador Prim",
//               url: "https://venadorprim.com",
//             },
//             about: {
//               "@type": "Thing",
//               name: "Electrical Infrastructure Projects",
//               description:
//                 "Implementation of power distribution infrastructure using prestressed concrete poles",
//             },
//             genre: "Infrastructure Construction",
//             // keywords: seoMetadata[lang as keyof typeof seoMetadata].keywords.join(", ") ,
//             image: heroImage.src,
//             url: "https://venadorprim.com/projects",
//           }),
//         }}
//       />
//       <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
//         <ProjectsMain />
//       </div>
//     </>
//   );
// }


/* eslint-disable @next/next/inline-script-id */
import heroImage from "@/public/images/projects/projects-hero-bg.jpg";
import { Metadata } from "next";
import Script from "next/script";
import { metadata as seoMetadata } from "./metadata";
import ProjectsMain from "../components/projects/ProjectsMain";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang?: string }>;  // ✅ FIXED: Changed to Promise
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams?.lang || "ro") as keyof typeof seoMetadata;
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
        ro: "https://venadorprim.com/ro/projects",
        en: "https://venadorprim.com/en/projects",
        ru: "https://venadorprim.com/ru/projects",
      },
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang?: string }>;  // ✅ FIXED: Added params with Promise type
}) {
  const resolvedParams = await params;  // ✅ FIXED: Await the params
  const lang = (resolvedParams?.lang || "ro") as keyof typeof seoMetadata;

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
            keywords: (seoMetadata[lang].keywords as string[]).join(", "),  // ✅ FIXED: Uncommented and working
            image: heroImage.src,
            url: "https://venadorprim.com/projects",
          }),
        }}
      />
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        <ProjectsMain />
      </div>
    </>
  );
}