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

  // Update CSS variables when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", theme.primaryColor);
    document.documentElement.style.setProperty(
      "--secondary",
      theme.secondaryColor
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
