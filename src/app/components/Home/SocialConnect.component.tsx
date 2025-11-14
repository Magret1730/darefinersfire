"use client";

import { Box, Typography, IconButton, useTheme, alpha } from "@mui/material";
import {
  Instagram,
  YouTube,
  Facebook,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/Close";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { SocialsEnum } from "@/app/enum";

const SocialConnect = ({ isDark }: { isDark: boolean }) => {
  const theme = useTheme();

  const iconColor = isDark
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  const socialLinks = [
    { icon: <Instagram fontSize="inherit"/>, url: SocialsEnum.INSTAGRAM },
    { icon: <YouTube fontSize="inherit" />, url: SocialsEnum.YOUTUBE },
    { icon: <MusicNoteIcon fontSize="inherit" />, url: SocialsEnum.TIKTOK },
    { icon: <Facebook fontSize="inherit" />, url: SocialsEnum.FACEBOOK },
    { icon: <Facebook fontSize="inherit" />, url: SocialsEnum.FACEBOOKPAGE },
    { icon: <XIcon fontSize="inherit" />, url: SocialsEnum.X },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: { xs: 50, md: 4 },
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
        color: alpha(theme.palette.text.secondary, 0.9),
        backgroundColor: isDark ? theme.palette.secondary.main : theme.palette.primary.dark,
      }}
    >
      <Typography
        sx={{
          typography: { xs: "h4", md: "h2" },
          position: "relative",
          fontWeight: 700,
          display: "inline-block",
          textAlign: "center",
          mb: { xs: 4, md: 4 },
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -8,
            transform: "translateX(-50%)",
            width: "100px",
            height: "6px",
            borderRadius: "12px",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
              : `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
        }}
      >
        Connect With Us
      </Typography>

      <Typography
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          color: theme.palette.text.secondary,
          mb: 4,
        }}
      >
        Follow us on all platforms and be part of what God is doing.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { md:8, xs: 2 },
          flexWrap: "wrap"
        }}
      >
        {socialLinks.map((item, index) => (
          <IconButton
            key={index}
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: 40,
              width: 50,
              height: 50,
              borderRadius: "12px",
              // backgroundColor: alpha(iconColor, 0.1),
              color: iconColor,
              transition: "0.3s ease",
              "&:hover": {
                // backgroundColor: alpha(iconColor, 0.2),
                transform: "translateY(-4px)",
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default SocialConnect;
