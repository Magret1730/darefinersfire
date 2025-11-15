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
  Link
} from "@mui/material";
import {
  Menu,
  Close,
  Whatshot,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useThemeMode } from "../providers/providers";
import { NavLinksEnum } from "@/app/enum/";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: `${NavLinksEnum.HOME}` },
  { label: "About", href: `${NavLinksEnum.ABOUT}` },
  { label: "Videos", href: `${NavLinksEnum.VIDEOS}` },
  { label: "Team", href: `${NavLinksEnum.TEAM}` },
  { label: "Contact", href: `${NavLinksEnum.CONTACT}` },
];

const HeaderComponent = ({}) => {
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
        elevation={0}
        sx={{
          backgroundColor: isDark ? theme.palette.secondary.main : theme.palette.primary.dark,
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
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                sx={{
                  fontWeight: 500,
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
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none", gap: 6 } }}>
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
            top: 55,
            zIndex: 1300,
          }}
        >
          {NAV_LINKS.map((link) => (
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
