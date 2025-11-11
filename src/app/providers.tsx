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
            dark: "#E0A503",
            contrastText: "#1A1A1A",
          },
          secondary: {
            main: "#BA5C12",
            light: "#D6742A",
            contrastText: "#FFF9E8",
          },
          background: {
            default: mode === "dark" ? "#3B240F" : "#FDEBD1",
            paper: mode === "dark" ? "#241507" : "#BA5C12",
          },
          text: {
            primary: mode === "dark" ? "#C6C6C6" : "#FFFFFF",
            secondary: mode === "dark" ? "#E9C77B" : "#5A4632",
            disabled: mode === "dark" ? "#FFB804" : "#BA5C12",
          },
          divider:
            mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
          action: {
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
        typography: {
          fontFamily: "Inter, sans-serif",
          h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
            color: mode === "dark" ? "#FFD56B" : "#1A1A1A",
          },
          h2: {
            fontWeight: 600,
            fontSize: "2rem",
          },
          h6: {
            fontWeight: 600,
          },
          body1: {
            lineHeight: 1.7,
          },
          button: {
            textTransform: "none",
            fontWeight: 600,
          },
        },
        shape: {
          borderRadius: 10,
        },
        // components: {
        //   MuiAppBar: {
        //     styleOverrides: {
        //       root: {
        //         backgroundColor:
        //           mode === "dark"
        //             ? "rgba(43, 28, 3, 0.9)"
        //             : "rgba(255, 255, 255, 0.9)",
        //         backdropFilter: "blur(8px)",
        //       },
        //     },
        //   },
        //   MuiButton: {
        //     styleOverrides: {
        //       root: {
        //         borderRadius: 10,
        //         padding: "8px 20px",
        //       },
        //     },
        //   },
        //   MuiPaper: {
        //     styleOverrides: {
        //       root: {
        //         backgroundImage: "none",
        //       },
        //     },
        //   },
        // },
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
