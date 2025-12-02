"use client";

import { Box, Typography, Pagination, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { VideosData } from "@/app/data/videos";
import { IVideos } from "@/app/page";
import YouTubeCard from "@/app/components/YoutubeCard.component";
import { useState } from "react";

export default function VideosPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [page, setPage] = useState(1);
  const VIDEOS_PER_PAGE = 12;

  const videos: IVideos[] = VideosData().reverse();

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const startIndex = (page - 1) * VIDEOS_PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
      }}
    >
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
            width: 70,
            height: 6,
            borderRadius: 12,
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`
              : `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          },
        }}
      >
        Videos
      </Typography>

      <Stack spacing={4} alignItems="center">
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={3}
          width="100%"
        >
          {currentVideos.map((video, index) => (
            <YouTubeCard key={index} video={video} />
          ))}
        </Box>

        <Pagination
          shape="rounded"
          variant="outlined"
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "black",
              borderColor: "black",

              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
              },
            },

            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "black",
              color: "white",
              borderColor: "black",
            },

            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#111",
            },
          }}
        />
      </Stack>
    </Box>
  );
}

