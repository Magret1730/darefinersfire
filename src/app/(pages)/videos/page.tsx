"use client";

import { Box, Typography, Pagination, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { VideosData } from "@/app/data/videos";
import { IVideos } from "@/app/page";
import YouTubeCard from "@/app/components/YoutubeCard.component";
import { useState } from "react";
import { HorizontalRuleOutlined } from "@mui/icons-material";
import { VideoTab } from "@/app/enum/videoTab.enum";

export default function VideosPage() {
  const theme = useTheme();

  const [skit, setSkit] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeButton, setActiveButton] = useState<VideoTab>(VideoTab.Skit);

  const VIDEOS_PER_PAGE = 12;

  const videos: IVideos[] = VideosData().reverse();

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * VIDEOS_PER_PAGE;

  const allSkits = videos.filter(v => v.text === "Video");
  const allShorts = videos.filter(v => v.text === "Short");

  const filteredSkits = allSkits.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredShorts = allShorts.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const skitTotalPages = Math.ceil(filteredSkits.length / VIDEOS_PER_PAGE);
  const shortTotalPages = Math.ceil(filteredShorts.length / VIDEOS_PER_PAGE);

  const paginatedSkits = filteredSkits.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  const paginatedShorts = filteredShorts.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 24 },
        pb: { xs: 6, md: 12 },
        px: { xs: 2.5, md: 8 },
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          ml: { xs: "4px", sm: "100px", md: "350px", lg: "600px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 26, mr: 1 }} />
          OUR VIDEOS.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 2,
          }}
        >
          Spirit-led stories that inspire and transform. Discover short gospel skits
          created to reveal truth, strengthen faith, and draw hearts to Christ.
        </Typography>
      </Box>

      <Box sx={{ spacing: 4, alignItems: "center" }}>
        <Box
          sx={{
            mt: 12,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
              justifyContent: { lg: "space-between", md: "space-between", sm: "center", xs: "center" },
              alignItems: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
              mx: { sm: 4, lg: 6 },
              mt: 8,
              gap: { xs: 4, sm: 4, md: 0, lg: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  setSkit(true);
                  setPage(1);
                  setActiveButton(VideoTab.Skit);
                }}
                sx={{
                  backgroundColor: activeButton === VideoTab.Skit ? theme.palette.action.active : theme.palette.primary.light,
                  color: activeButton === VideoTab.Skit ? theme.palette.primary.light : theme.palette.primary.main,
                  px: 6,
                }}
              >
                Skits
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSkit(false);
                  setPage(1);
                  setActiveButton(VideoTab.Short);
                }}
                sx={{
                  backgroundColor: activeButton === VideoTab.Short ? theme.palette.action.active : theme.palette.primary.light,
                  color: activeButton === VideoTab.Short ? theme.palette.primary.light : theme.palette.primary.main,
                  ml: 2,
                  px: 5,
                }}
              >
                Shorts
              </Button>
            </Box>

            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => {
                setPage(1); // Reset to first page on new search
                setSearch(e.target.value);
              }}
              sx={{
                mb: { xs: 8, sm: 8, md: 0, lg: 0 },
                mx: { sm: 0, lg: 6 },
                width: { xs: "270px", sm: "400px", md: "400px" },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "flex-start" },
            gap: { xs: 2, sm: 2, md: 2, lg: 12 },
            mx: { xs: 0, lg: 6 },
          }}
        >
          {skit && (
            paginatedSkits.map((video, index) => (
              <YouTubeCard key={index} video={video} />
            ))
          )}
          {!skit && (
            paginatedShorts.map((video, index) => (
              <YouTubeCard key={index} video={video} />
            ))
          )}
        </Box>

        <Pagination
          shape="rounded"
          variant="outlined"
          count={skit ? skitTotalPages : shortTotalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,

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
      </Box>
    </Box>
  );
}

