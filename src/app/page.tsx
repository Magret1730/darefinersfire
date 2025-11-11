"use client";

import HeaderComponent from "./components/header.component";
import { Box, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <HeaderComponent />
      <Box
        sx={{
          mt: 10,
          p: { xs: 2, md: 4 },
          textAlign: "center",
          color: isDark ? "#FFB804" : "#BA5C12",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Welcome to Da Refiner&apos;s Fire Media
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", maxWidth: 600, mx: "auto" }}>
          Explore our inspirational Christian skits and videos that refine,
          inspire, and ignite faith through storytelling.
        </Typography>
      </Box>
    </>
  );
}
