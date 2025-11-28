"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  Button
} from "@mui/material";
import {
  Menu,
  Close,
  Whatshot,
  DarkMode,
  LightMode,
  PlayArrowOutlined,
  YouTube,
  PlayCircleOutline
} from "@mui/icons-material";
import { useThemeMode } from "../providers/providers";
import { NavLinksEnum, SocialsEnum } from "@/app/enum/";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: `${NavLinksEnum.ABOUT}` },
  { label: "Videos", href: `${NavLinksEnum.VIDEOS}` },
  { label: "Team", href: `${NavLinksEnum.TEAM}` },
  { label: "Contact", href: `${NavLinksEnum.CONTACT}` },
];

const MENU_NAV_LINKS: NavLink[] = [
  { label: "Home", href: `${NavLinksEnum.HOME}` },
  { label: "About", href: `${NavLinksEnum.ABOUT}` },
  { label: "Videos", href: `${NavLinksEnum.VIDEOS}` },
  { label: "Team", href: `${NavLinksEnum.TEAM}` },
  { label: "Contact", href: `${NavLinksEnum.CONTACT}` },
];

const HeaderComponent = ({ }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, toggleMode } = useThemeMode();
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          width: "70%",
          borderRadius: "10px",
          boxShadow: isDark
            ? "0 4px 12px rgba(0, 0, 0, 0.8)"
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          zIndex: theme.zIndex.appBar + 1,
          margin: "0 auto",
          mt: 3,
          left: 0,
          right: 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, md: 6 },
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
                fontSize: { xs: "0.8rem", md: "1.2rem" },
                fontWeight: 700,
                pl: { md: 1, xs: 0.5 },
                color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
              }}
            >
              Da Refiner&apos;s Fire
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{
              // display: { xs: "none", md: "flex" },
              display: { xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                sx={{
                  fontWeight: 400,
                  color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
                  textDecoration: "none",
                  "&:hover": {
                    color: isDark ? theme.palette.secondary.main : theme.palette.secondary.light,
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
            <IconButton onClick={toggleMode}>
              {mode === "dark" ? (
                <LightMode sx={{
                  color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText
                }} />
              ) : (
                <DarkMode sx={{
                  color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText
                }} />
              )}
            </IconButton>
            <Button
              variant="contained"
              href={SocialsEnum.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<PlayCircleOutline sx={{ fontSize: 40 }} />}
              sx={{
                textTransform: "none",
                backgroundColor: theme.palette.action.active,
                color: theme.palette.primary.dark,
                borderRadius: "10px",
                py: 1.2,
              }}
            >
              Watch on YouTube
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "flex", lg: "none" }, gap: {xs: 0, md: 4, lg: 6} }}>
            <IconButton onClick={toggleMode} sx={{ padding: 0 }}>
              {mode === "dark" ? (
                <LightMode sx={{ color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText }} />
              ) : (
                <DarkMode sx={{ color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText }} />
              )}
            </IconButton>
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{
                color: isDark ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
                padding: 0
              }}
            >
              {menuOpen ? <Close /> : <Menu />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.3s ease",
            top: 0,
            zIndex: 1300,
          }}
        >
          {MENU_NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: theme.palette.text.disabled,
                textDecoration: "none",
                marginBottom: "1.5rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default HeaderComponent;
