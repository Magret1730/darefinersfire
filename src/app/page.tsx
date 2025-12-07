"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, useTheme } from "@mui/material";
import HeroComponent from "@/app/(pages)/home/Hero.component";
import HomeAboutComponent from "@/app/(pages)/home/HomeAbout.component";
import SpotLightSection from "@/app/(pages)/home/SpotLight.component";
import HomeTeamComponent from "@/app/(pages)/home/HomeTeam.component";
import FaqSection from "@/app/components/Faq.component";
import ScriptureOfTheDay from "@/app/components/ScriptureOfTheDay";

export interface IVideos {
  id: number;
  text: string;
  title: string;
  YouTubeId: string;
  tiktok: string;
  facebookAccount: string;
  facebookPage?: string;
  x: string;
  instagram?: string;
  youtube: string;
}

// To do
// 1. SpotLight section image in home page
// 2. When refreshing takes place, if on dark mode, it goes to light mode first then dark mode again


export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ minWidth: 300, textAlign: "center", width: "100%" }}>
      <HeroComponent isDark={isDark} />
      <HomeAboutComponent isDark={isDark} />
      <SpotLightSection />
      <ScriptureOfTheDay isDark={isDark} />
      <HomeTeamComponent />
      <FaqSection />
    </Box>
  );
}
