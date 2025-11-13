"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography, useTheme } from "@mui/material";
import HeaderComponent from "./components/Header.component";
import HeroComponent from "./components/Home/Hero.component";
import HomeAboutComponent from "./components/Home/HomeAbout.component";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{minWidth: 300}}>
      <HeaderComponent  />
      <Box
        sx={{
          mt: 7,
          textAlign: "center",
          // color: isDark ? "#FFB804" : "#BA5C12",
        }}
      >
        <HeroComponent isDark={isDark} />
        <HomeAboutComponent isDark={isDark} />
      </Box>
    </Box>
  );
}
