export const getStructuredData = (lang: string) => {
  const translations = {
    ro: {
      name: "Produse Venador Prim",
      description:
        "Catalog complet de stâlpi din beton precomprimat și soluții pentru infrastructură energetică",
      products: [
        {
          name: "Stâlpi Centrifugați",
          description: "Stâlpi centrifugați pentru linii electrice aeriene",
        },
        {
          name: "Stâlpi Conici",
          description: "Stâlpi conici pentru infrastructură energetică",
        },
        {
          name: "Stâlpi Cilindrici",
          description: "Stâlpi cilindrici pentru diverse aplicații",
        },
      ],
    },
    en: {
      name: "Venador Prim Products",
      description:
        "Complete catalog of prestressed concrete poles and energy infrastructure solutions",
      products: [
        {
          name: "Centrifuged Poles",
          description: "Centrifuged poles for overhead power lines",
        },
        {
          name: "Conical Poles",
          description: "Conical poles for energy infrastructure",
        },
        {
          name: "Cylindrical Poles",
          description: "Cylindrical poles for various applications",
        },
      ],
    },
    ru: {
      name: "Продукция Venador Prim",
      description:
        "Полный каталог железобетонных опор и решений для энергетической инфраструктуры",
      products: [
        {
          name: "Центрифугированные Опоры",
          description:
            "Центрифугированные опоры для воздушных линий электропередачи",
        },
        {
          name: "Конические Опоры",
          description: "Конические опоры для энергетической инфраструктуры",
        },
        {
          name: "Цилиндрические Опоры",
          description: "Цилиндрические опоры для различных применений",
        },
      ],
    },
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.name,
    description: t.description,
    itemListElement: t.products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        manufacturer: {
          "@type": "Organization",
          name: "Venador Prim",
        },
      },
    })),
  };
};
