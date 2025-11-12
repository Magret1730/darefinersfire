"use client";

import { alpha, Box, Divider, Typography } from "@mui/material"
import { useTheme } from "@mui/material";

interface THomeAboutComponent {
  isDark: boolean
}

const HomeAboutComponent = ({
  isDark
}: THomeAboutComponent) => {
  const theme = useTheme();
  // const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={(theme) => ({
        color: alpha(theme.palette.text.secondary, 0.9),
        py: 8,
      })}
    >
      <Typography
        sx={{
          typography: { xs: "h4", md: "h2" },
          position: "relative",
          fontWeight: "bold",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -16,
            transform: "translateX(-50%)",
            width: "50%",
            height: "6px",
            borderRadius: "8px",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
              : `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.main} 100%)`,
          },
        }}
      >
        Our Story
      </Typography>


    </Box>
  )
}

export default HomeAboutComponent;