import type { Locale } from "@/app/i18n/types";
import "server-only";

// Define the dictionary type based on your translations structure
export interface Dictionary {
  navigation: {
    home: string;
    products: string;
    services: string;
    projects: string;
    certificates: string;
    contact: string;
  };
  languages: {
    ro: string;
    en: string;
    ru: string;
  };
  home: {
    hero: {
      title: string;
      description: string;
      buttonText: string;
    };
    services: {
      title: string;
      items: {
        customPillars: {
          title: string;
          description: string;
        };
        consulting: {
          title: string;
          description: string;
        };
        transport: {
          title: string;
          description: string;
        };
      };
    };
    whoWeAre: {
      title: string;
      description: string;
      buttonText: string;
    };
    projects: {
      title: string;
      viewAll: string;
      slides: {
        [key: string]: {
          alt: string;
          title: string;
        };
      };
    };
    whyChooseUs: {
      title: string;
      features: {
        durableDesigns: {
          title: string;
          description: string;
        };
        qualityAssurance: {
          title: string;
          description: string;
        };
        delivery: {
          title: string;
          description: string;
        };
      };
    };
    certifications: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
    };
  };
  products: {
    hero: {
      title: string;
      description: string;
    };
    range: {
      title: string;
      buttonText: string;
      standard: {
        title: string;
        description: string;
      };
      precast: {
        title: string;
        description: string;
      };
      custom: {
        title: string;
        description: string;
      };
      heavyDuty: {
        title: string;
        description: string;
      };
      decorative: {
        title: string;
        description: string;
      };
      eco: {
        title: string;
        description: string;
      };
    };
    whyChoose: {
      title: string;
      description: string;
      features: {
        durability: {
          title: string;
          description: string;
        };
        engineering: {
          title: string;
          description: string;
        };
        delivery: {
          title: string;
          description: string;
        };
      };
    };
  };
  // Add other translation sections as needed
}

async function loadDictionary(locale: Locale): Promise<Dictionary> {
  try {
    const dict = await import(`@/public/locales/${locale}/common.json`);
    return dict.default;
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error);
    const fallback = await import("@/public/locales/en/common.json");
    return fallback.default;
  }
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return loadDictionary(locale);
};
