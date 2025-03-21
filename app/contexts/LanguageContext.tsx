"use client";

import "@/app/i18n/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { i18n } = useTranslation();

  useEffect(() => {
    const initializeLanguage = async () => {
      if (typeof window !== "undefined") {
        const savedLanguage = localStorage.getItem("language") || "en";
        setCurrentLanguage(savedLanguage);
        await i18n.changeLanguage(savedLanguage);
      }
    };

    initializeLanguage();
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    try {
      setCurrentLanguage(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
        await i18n.changeLanguage(lang);
      }
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
