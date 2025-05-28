import React, {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { theme } from "./theme";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light"); // Default to light mode, change to "dark" or "system" as needed
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getIsDark = () => {
      if (mode === "system") return darkQuery.matches;
      return mode === "dark";
    };

    const applyTheme = (dark: boolean) => {
      const root = document.documentElement;
      root.style.setProperty(
        "--background",
        dark ? theme.colors.backgroundDark : theme.colors.background
      );
      root.style.setProperty(
        "--foreground",
        dark ? theme.colors.foregroundDark : theme.colors.foreground
      );
      root.style.setProperty("--font-sans", theme.fonts.geistSans);
      root.style.setProperty("--font-mono", theme.fonts.geistMono);
    };

    const handleChange = () => {
      const dark = getIsDark();
      setIsDark(dark);
      applyTheme(dark);
    };

    handleChange();
    if (mode === "system") {
      darkQuery.addEventListener("change", handleChange);
      return () => darkQuery.removeEventListener("change", handleChange);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
