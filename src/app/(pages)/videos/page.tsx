"use client";

import { Box, Typography, Container, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { VideosData } from "@/app/data/videos";
import { IVideos } from "@/app/components/Home/HomeVideos.component";
import YouTubeCard from "@/app/components/YoutubeCard.component";

export default function VideosPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const Videos: IVideos[] = VideosData();

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
        Video
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {Videos.map((video, index) => (
          <YouTubeCard key={index} video={video} />
        ))}
      </Box>
    </Box>
  );
}
