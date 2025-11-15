"use client";

import { Box, Typography, IconButton, Button, useTheme, alpha } from "@mui/material";
import { Instagram, YouTube, Facebook } from "@mui/icons-material";
import XIcon from "@mui/icons-material/Close";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { NavLinksEnum, SocialsEnum } from "@/app/enum";
import { secondaryButtonStyles } from "@/app/styles/buttonStyles";
import { ReactNode } from "react";

const ConnectContactSection = ({ isDark }: { isDark: boolean }) => {
  const theme = useTheme();

  const iconColor = isDark
    ? theme.palette.secondary.main
    : theme.palette.primary.contrastText;

  interface TSocialLinks {
    icon: ReactNode;
    url: typeof SocialsEnum[keyof typeof SocialsEnum];
  }

  const socialLinks: TSocialLinks[] = [
    { icon: <Instagram fontSize="inherit" />, url: SocialsEnum.INSTAGRAM },
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
        mt: { xs: 48, md: 12 },
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        color: alpha(theme.palette.text.secondary, 0.9),
        backgroundColor: isDark ? theme.palette.secondary.dark : theme.palette.primary.dark,
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          typography: { xs: "h4", md: "h2" },
          fontWeight: 700,
          mb: { xs: 3, md: 5 },
          position: "relative",
          display: "inline-block",
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

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: "1.1rem",
          mb: 5,
          color: theme.palette.text.secondary,
        }}
      >
        Follow us on all platforms and be part of what God is doing.
      </Typography>

      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { md: 6, xs: 3 },
          flexWrap: "wrap",
          mb: 6,
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
              fontSize: 30,
              width: 50,
              height: 50,
              borderRadius: "12px",
              color: iconColor,
              backgroundColor: alpha(iconColor, 0.1),
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                backgroundColor: alpha(iconColor, 0.2),
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>

      <Button
        variant="contained"
        href={NavLinksEnum.CONTACT}
        sx={(theme) => secondaryButtonStyles(theme)}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default ConnectContactSection;

