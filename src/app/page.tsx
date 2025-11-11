"use client";

import { Box, Typography, useTheme } from "@mui/material";
import HeaderComponent from "./components/Header.component";
import HeroComponent from "./components/Hero.component";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <HeaderComponent />
      <Box
        sx={{
          mt: 7,
          // p: { xs: 2, md: 4 },
          textAlign: "center",
          color: isDark ? "#FFB804" : "#BA5C12",
        }}
      >
        <HeroComponent />
      </Box>
    </>
  );
}
