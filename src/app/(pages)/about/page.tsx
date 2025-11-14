"use client";

import { Box, Typography, Container, Card } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
      }}
    >
      {/* PAGE TITLE */}
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
          typography: { xs: "h4", md: "h2" },
          textAlign: "center",
          fontWeight: 700,
          position: "relative",
          mb: 6,
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -14,
            transform: "translateX(-50%)",
            width: "70px",
            height: "6px",
            borderRadius: "12px",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`
              : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          },
        }}
      >
        About Us
      </Typography>

      <Container maxWidth="md">
        {/* SECTION 1 */}
        <Typography
          sx={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            mb: 4,
            color: theme.palette.primary.contrastText
          }}
        >
          Da Refiner’s Fire Ministry is a Spirit-led gospel drama and film ministry
          committed to spreading the light of Christ through transformative storytelling.
          We create short Christian skits that illuminate biblical truth, inspire
          spiritual growth, and draw hearts back to God.
        </Typography>

        {/* SECTION 2 */}
        <Typography
          sx={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            mb: 4,
            color: theme.palette.primary.contrastText
          }}
        >
          Our name comes from Malachi 3:3 — the Refiner’s Fire — reminding us that
          God purifies, transforms, and prepares His people for His purpose. Every
          production is birthed in prayer, guided by the Holy Spirit, and crafted
          with excellence to glorify Jesus.
        </Typography>

        {/* SECTION 3 */}
        <Typography
          sx={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            mb: 6,
            color: theme.palette.primary.contrastText
          }}
        >
          Through drama, film, evangelism, and media ministry, our mission remains
          simple: to refine hearts, awaken purpose, and draw souls to Christ.
        </Typography>

        {/* VERSE HIGHLIGHT */}
        <Card
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: "20px",
            backgroundColor: isDark
              ? alpha(theme.palette.primary.dark, 0.4)
              : alpha(theme.palette.primary.light, 0.2),
            backdropFilter: "blur(6px)",
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              mb: 2,
              color: theme.palette.secondary.main,
            }}
          >
            “He will sit as a refiner and purifier of silver…”
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            — Malachi 3:3
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
