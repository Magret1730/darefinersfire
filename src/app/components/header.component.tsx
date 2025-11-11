"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Close,
  Whatshot,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useThemeMode } from "../providers";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const HeaderComponent = () => {
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
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1.5, md: 6 },
            // py: 2,
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { md: 1, xs: 0.5 },
              cursor: "pointer"
            }}
          >
            <Whatshot sx={{ color: theme.palette.text.primary }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Da Refiner's Fire
            </Typography>
          </Box>

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
                style={{
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <IconButton onClick={toggleMode}>
              {mode === "dark" ? (
                <LightMode sx={{ color: theme.palette.text.primary }} />
              ) : (
                <DarkMode sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none", gap: 6} }}>
            <IconButton onClick={toggleMode} sx={{padding: 0}}>
              {mode === "dark" ? (
                <LightMode sx={{ color: theme.palette.text.primary }} />
              ) : (
                <DarkMode sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{ color: theme.palette.text.primary, padding: 0 }}
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
}

export default HeaderComponent;
