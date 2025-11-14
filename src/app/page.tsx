"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, useTheme } from "@mui/material";
import HeroComponent from "@/app/components/Home/Hero.component";
import HomeAboutComponent from "@/app/components/Home/HomeAbout.component";
// import SocialConnect from "@/app/components/Home/SocialConnect.component";
import ConnectContactSection from "@/app/components/Home/ConnectContact.component";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ minWidth: 300, mt: 7, textAlign: "center", }}>
      <HeroComponent isDark={isDark} />
      <HomeAboutComponent isDark={isDark} />
      {/* <SocialConnect isDark={isDark} /> */}
      <ConnectContactSection isDark={isDark} />
    </Box>
  );
}
