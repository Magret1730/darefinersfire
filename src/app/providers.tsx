"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
    primary: {
      main: "#2563eb", // Tailwind blue-600
    },
    secondary: {
      main: "#f43f5e", // Tailwind rose-500
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normalizes and applies global styles */}
      {children}
    </ThemeProvider>
  );
}
