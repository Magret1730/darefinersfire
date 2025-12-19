"use client";

import { Box, Typography, IconButton, useTheme, Link } from "@mui/material";
import { Instagram, YouTube, Facebook, Whatshot } from "@mui/icons-material";
import XIcon from "@mui/icons-material/Close";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { NavLinksEnum, SocialsEnum } from "@/app/enum";
import { ReactNode } from "react";

const FooterComponent = () => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const socialLinks: { label: string; icon: ReactNode; url: typeof SocialsEnum[keyof typeof SocialsEnum] }[] = [
    { label: "Instagram", icon: <Instagram />, url: SocialsEnum.INSTAGRAM },
    { label: "YouTube", icon: <YouTube />, url: SocialsEnum.YOUTUBE },
    { label: "TikTok", icon: <MusicNoteIcon />, url: SocialsEnum.TIKTOK },
    { label: "Facebook", icon: <Facebook />, url: SocialsEnum.FACEBOOK },
    { label: "X", icon: <XIcon />, url: SocialsEnum.X },
  ];

  const quickLinks: { label: string; href: string }[] = [
    { label: "Home", href: `${NavLinksEnum.HOME}` },
    { label: "About", href: `${NavLinksEnum.ABOUT}` },
    { label: "Videos", href: `${NavLinksEnum.VIDEOS}` },
    { label: "Team", href: `${NavLinksEnum.TEAM}` },
    { label: "Contact", href: `${NavLinksEnum.CONTACT}` },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 28 },
        width: "100%",
      }}
    >
      {/* Above the copyright section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            alignItems: "flex-start",
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
              textDecoration: "none",
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

          {/* Text section */}
          <Typography sx={{ textAlign: "left", maxWidth: { sm: 400, md: 400, lg: 400 }, mt: 2 }}>
            Sharing the gospel through creative storytelling.
            Our mission is to inspire, uplift, and bring hope to every viewer.
          </Typography>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1, sm: 1, md: 1, lg: 3 },
              flexWrap: "wrap",
              mt: 2,
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
                  // border: "1px solid red",
                  fontSize: 30,
                  width: 40,
                  height: 40,
                  // border: `1px solid ${theme.palette.divider}`,
                  // borderRadius: "50%",
                  // color: iconColor,
                  color: isDark ? "white" : theme.palette.primary.contrastText,
                  backgroundColor: "none",
                  transition: "0.3s ease",
                  "&:hover": {
                    backgroundColor: "none",
                    border: "none",
                    transform: "translateY(-4px)",
                    // backgroundColor: alpha(iconColor, 0.2),
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Right box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row", lg: "column"},
            justifyContent: "center",
            alignItems: "flex-start",
            width: { xs: "auto", md: "auto", lg: "auto" },
            gap: {xs: 6, sm: 6, md: 6, lg: 6},
          }}
        >
          {/* Upper Right Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              gap: { xs: 6, sm: 10, md: 15, lg: 20},

            }}
          >
            {/* Quick Links */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Quick Links</Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {quickLinks.map((link, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    <Link
                      href={link.href}
                      underline="none"
                      sx={{
                        color: "inherit",
                        "&:hover": {
                          color: isDark ? theme.palette.secondary.main : theme.palette.secondary.light,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Connect Links */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Connect</Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {socialLinks.map((link, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    <Link
                      href={link.url}
                      underline="none"
                      sx={{
                        color: "inherit",
                        "&:hover": {
                          color: isDark ? theme.palette.secondary.main : theme.palette.secondary.light,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Lower Right Box for contacts*/}
          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>Contact</Typography>
            <Typography variant="body2">Email: darefinersfire@gmail.com</Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section: Copyright */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          borderTop: `1px solid ${theme.palette.divider}`,
          mt: 10,
          pt: 4,
        }}
      >
        &copy; {new Date().getFullYear()} Da Refiner&apos;s Fire Ministry. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterComponent;
