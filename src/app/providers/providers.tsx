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
  toggleMode: () => { },
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
            main: mode === "dark" ? "#FFFFFF" : "#212121", // text color // Change - not used
            light: mode === "dark" ? "#212121" : "#FFFFFF", // button text color opposite
            dark: mode === "dark" ?  "#FFFFFA" : "#FFFFFF", // button text color
            contrastText: "#1A1A1A",
          },
          secondary: {
            main: "#FFCCB0",
            light: "#141414",
            contrastText: "#FF5C01",
          },
          background: {
            default: mode === "dark" ? "#212121" : "#FEFEFE",
            // default: mode === "dark" ? "#3B240F" : "#FDEBD1",
            paper: mode === "dark" ? "#2B2B2B" : "#FFEFE6", // homeAbout background
          },
          text: {
            primary: mode === "dark" ? "#FFFFFF" : "#212121", // text color
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
            active: mode === "dark" ? "#3B240F" : "#FF5C01",
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
