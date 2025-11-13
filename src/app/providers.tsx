"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useMemo, useEffect, createContext, useContext } from "react";

// Creates a context for theme mode
type ThemeModeContextType = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: "light",
  toggleMode: () => {},
});

// Exports a hook for easy use
export const useThemeMode = () => useContext(ThemeModeContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode");
    if (storedMode === "dark") {
      setMode("dark");
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#FFB804",
            light: "#E0A503",
            dark: "#FDEBD1",
            contrastText: "#1A1A1A",
          },
          secondary: {
            main: "#BA5C12",
            light: "#D6742A",
            contrastText: "#FFF9E8",
          },
          background: {
            default: mode === "dark" ? "#3B240F" : "#FCF6F0",
            // default: mode === "dark" ? "#3B240F" : "#FDEBD1",
            paper: mode === "dark" ? "#241507" : "#BA5C12",
          },
          text: {
            primary: mode === "dark" ? "#C6C6C6" : "#FFFFFF",
            secondary: mode === "dark" ? "#C6C6C6" : "#000000",
            // secondary: mode === "dark" ? "#E9C77B" : "#5A4632",
            disabled: mode === "dark" ? "#FFB804" : "#BA5C12",
          },
          // mode: {
          //   common: mode === "dark" ? "#C6C6C6" : "#000000"
          // },
          // action: {
          //   primary: mode === "dark" ? "#BA5C12" : "#BA5C12",
          // },
          divider:
            mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
          action: {
            active: mode === "dark" ? "#3B240F" : "#BA5C12",
            hover:
              mode === "dark"
                ? "rgba(255, 184, 4, 0.1)"
                : "rgba(186, 92, 18, 0.08)",
            selected:
              mode === "dark"
                ? "rgba(255, 184, 4, 0.18)"
                : "rgba(186, 92, 18, 0.16)",
            disabled:
              mode === "dark" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
