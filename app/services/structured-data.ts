export const getServiceStructuredData = (lang: string) => {
  const translations = {
    ro: {
      name: "Stâlpi din Beton Precomprimat",
      description:
        "Producător de stâlpi din beton precomprimat și stâlpi centrifugați pentru linii electrice aeriene (LEA).",
      services: [
        "Stâlpi centrifugați",
        "Stâlpi conici",
        "Stâlpi cilindrici",
        "Piloni pentru linii electrice aeriene",
      ],
    },
    en: {
      name: "Prestressed Concrete Poles",
      description:
        "Manufacturer of prestressed concrete poles and centrifuged poles for overhead power lines.",
      services: [
        "Centrifuged poles",
        "Conical poles",
        "Cylindrical poles",
        "Pillars for overhead power lines",
      ],
    },
    ru: {
      name: "Предварительно напряженные железобетонные опоры",
      description:
        "Производитель предварительно напряженных железобетонных и центрифугированных опор для воздушных линий электропередачи.",
      services: [
        "Центрифугированные опоры",
        "Конические опоры",
        "Цилиндрические опоры",
        "Столбы для воздушных линий электропередачи",
      ],
    },
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venador Prim",
    url: "https://venadorprim.com",
    description: t.description,
    image: "https://venadorprim.com/images/logo-color.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your Region",
      postalCode: "Your Postal Code",
      addressCountry: "MD",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.name,
      itemListElement: t.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@type": "Organization",
            name: "Venador Prim",
          },
        },
      })),
    },
  };
};
