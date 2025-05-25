export const getHomeStructuredData = (lang: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Venador Prim",
  url: "https://venadorprim.com",
  logo: "https://venadorprim.com/logo-color.svg",
  image: "https://venadorprim.com/images/home/home-hero-bg.jpeg",
  description:
    lang === "ro"
      ? "Producător de stâlpi din beton precomprimat și infrastructură electrică"
      : lang === "ru"
        ? "Производитель железобетонных опор и электрической инфраструктуры"
        : "Manufacturer of prestressed concrete poles and electrical infrastructure",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MD",
    addressRegion: "Moldova",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+373-XXX-XXXXX",
    contactType: "sales",
    email: "info@venadorprim.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/venador-prim",
    "https://www.facebook.com/venadorprim",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name:
      lang === "ro"
        ? "Stâlpi și Infrastructură Electrică"
        : lang === "ru"
          ? "Опоры и Электрическая Инфраструктура"
          : "Poles and Electrical Infrastructure",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name:
            lang === "ro"
              ? "Stâlpi din Beton Precomprimat"
              : lang === "ru"
                ? "Железобетонные Опоры"
                : "Prestressed Concrete Poles",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name:
            lang === "ro"
              ? "Stâlpi Centrifugați"
              : lang === "ru"
                ? "Центрифугированные Опоры"
                : "Centrifuged Poles",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name:
            lang === "ro"
              ? "Piloni pentru Linii Electrice"
              : lang === "ru"
                ? "Опоры для Линий Электропередачи"
                : "Power Line Poles",
        },
      },
    ],
  },
});
