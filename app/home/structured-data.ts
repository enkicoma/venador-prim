export const getStructuredData = (lang: string) => {
  const translations = {
    ro: {
      name: "Venador Prim",
      description:
        "Producător de stâlpi din beton precomprimat pentru linii electrice aeriene",
      services: [
        "Producție stâlpi din beton precomprimat",
        "Stâlpi centrifugați",
        "Stâlpi conici și cilindrici",
        "Soluții pentru infrastructură energetică",
      ],
    },
    en: {
      name: "Venador Prim",
      description:
        "Manufacturer of prestressed concrete poles for overhead power lines",
      services: [
        "Prestressed concrete pole production",
        "Centrifuged poles",
        "Conical and cylindrical poles",
        "Energy infrastructure solutions",
      ],
    },
    ru: {
      name: "Venador Prim",
      description:
        "Производитель железобетонных опор для воздушных линий электропередачи",
      services: [
        "Производство железобетонных опор",
        "Центрифугированные опоры",
        "Конические и цилиндрические опоры",
        "Решения для энергетической инфраструктуры",
      ],
    },
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t.name,
    url: "https://venadorprim.com",
    description: t.description,
    image: "https://venadorprim.com/images/logo-color.svg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MD",
      addressRegion: "Moldova",
    },
    offers: {
      "@type": "AggregateOffer",
      itemOffered: t.services.map((service) => ({
        "@type": "Service",
        name: service,
      })),
    },
  };
};
