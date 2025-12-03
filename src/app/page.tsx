"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, useTheme } from "@mui/material";
import HeroComponent from "@/app/components/Home/Hero.component";
import HomeAboutComponent from "@/app/components/Home/HomeAbout.component";
import SpotLightSection from "@/app/components/Home/SpotLight.component";
import HomeTeamComponent from "@/app/components/Home/HomeTeam.component";
import FaqSection from "@/app/components/Home/Faq.component";

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

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ minWidth: 300, textAlign: "center", width: "100%" }}>
      <HeroComponent isDark={isDark} />
      <HomeAboutComponent isDark={isDark} />
      <SpotLightSection />
      <HomeTeamComponent />
      <FaqSection />
    </Box>
  );
}
