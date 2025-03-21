"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  setTheme: (theme: { primaryColor: string; secondaryColor: string }) => void;
}

const defaultTheme = {
  primaryColor: "#1B3B47",
  secondaryColor: "#666666",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Only run the effect after mounting on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty(
        "--primary",
        theme.primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary",
        theme.secondaryColor
      );
    }
  }, [theme, mounted]);

  // Prevent flash of unstyled content during SSR
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
