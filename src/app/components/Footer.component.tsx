"use client";

import { Box, Typography, IconButton, useTheme, alpha, Link } from "@mui/material";
import { Instagram, YouTube, Facebook, Whatshot } from "@mui/icons-material";
import XIcon from "@mui/icons-material/Close";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { NavLinksEnum, SocialsEnum } from "@/app/enum";
import { ReactNode } from "react";

const FooterComponent = () => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const iconColor = isDark
    ? theme.palette.secondary.main
    : theme.palette.primary.contrastText;

  interface TSocialLinks {
    icon: ReactNode;
    url: typeof SocialsEnum[keyof typeof SocialsEnum];
  }

  interface QuickLinks {
    label: string;
    href: string;
  }

  const socialLinks: TSocialLinks[] = [
    { icon: <Instagram />, url: SocialsEnum.INSTAGRAM },
    { icon: <YouTube />, url: SocialsEnum.YOUTUBE },
    { icon: <MusicNoteIcon />, url: SocialsEnum.TIKTOK },
    { icon: <Facebook />, url: SocialsEnum.FACEBOOK },
    { icon: <XIcon />, url: SocialsEnum.X },
  ];

  const quickLinks: QuickLinks[] = [
    { label: "Home", href: `${NavLinksEnum.HOME}` },
    { label: "About", href: `${NavLinksEnum.ABOUT}` },
    { label: "Videos", href: `${NavLinksEnum.VIDEOS}` },
    { label: "Team", href: `${NavLinksEnum.TEAM}` },
    { label: "Contact", href: `${NavLinksEnum.CONTACT}` },
  ];

  return (
    <Box
      sx={{
        backgroundColor: isDark ? theme.palette.secondary.dark : theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
        width: "100%",
      }}
    >
      {/* Top Section: Quick Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        {/* Logo Section */}
        <Link
          href={NavLinksEnum.HOME}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Whatshot sx={{ color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              pl: { md: 1, xs: 0.5 },
              color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
            }}
          >
            Da Refiner&apos;s Fire
          </Typography>
        </Link>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              underline="none"
              sx={{
                color: theme.palette.primary.contrastText,
                fontWeight: 500,
                "&:hover": {
                  color: isDark ? theme.palette.secondary.main : theme.palette.secondary.light,
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Middle Section: Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 4,
          flexWrap: "wrap"
          }}
        >
        {socialLinks.map((item, idx) => (
          <IconButton
            key={idx}
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

      {/* Bottom Section: Copyright */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          color: alpha(theme.palette.primary.contrastText, 0.7),
        }}
      >
        &copy; {new Date().getFullYear()} Da Refiner's Fire. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterComponent;
