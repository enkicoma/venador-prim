import { InitOptions } from "i18next";

export const i18nConfig: InitOptions = {
  supportedLngs: ["en", "ro", "ru"],
  fallbackLng: "en",
  defaultNS: "common",
  fallbackNS: "common",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
};
