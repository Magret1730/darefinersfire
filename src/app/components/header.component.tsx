"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Close, Menu, Whatshot } from "@mui/icons-material";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatically close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <header>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        className="backdrop-blur-md z-50"
      >
        <Toolbar className="flex justify-between items-center px-4 md:px-12 py-4">
          {/* Logo */}
          <Box className="flex items-center gap-2">
            {/* <Image src="/globe.svg" alt="Logo" width={30} height={30} /> */}
            <Whatshot />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Da Refiners Fire
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <Close /> : <Menu />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <Box
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40 transition-all duration-300"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 mb-8 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </Box>
      )}
    </header>
  );
}
