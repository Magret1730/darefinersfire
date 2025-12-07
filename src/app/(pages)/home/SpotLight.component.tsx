import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider, { Settings } from "react-slick";
import YouTubeCard from "@/app/components/YoutubeCard.component";
import { VideosData } from "@/app/data/videos";
import { IVideos } from "@/app/page";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { SpotlightTab } from "@/app/enum";

const TABS: { id: SpotlightTab; label: string }[] = [
  { id: SpotlightTab.LATEST, label: "Latest Movies" },
  { id: SpotlightTab.SHORTS, label: "Inspirational shorts" },
  // { id: "behind", label: "Behind-the-Scenes" },
  // { id: "upcoming", label: "Upcoming Releases" },
];

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "none",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const SpotLightSection = () => {
  const [videos, setVideos] = useState<IVideos[]>([]);
  const [activeTab, setActiveTab] = useState<SpotlightTab>(SpotlightTab.LATEST);
  // const [loading, setLoading] = useState(false);

  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const categorized = useMemo(() => {
    return {
      latest: videos.filter((v) => v.text === "Video"),
      shorts: videos.filter((v) => v.text === "Shorts" || v.text === "Short"),
      behind: videos.filter((v) => v.text === "Behind-the-Scenes"),
      upcoming: videos.filter((v) => v.text === "Upcoming"),
    };
  }, [videos]);

  const activeVideos = categorized[activeTab] ?? [];

  const isCarouselTab = activeTab === "latest" || activeTab === "shorts";

  // for Latest Movies & Shorts: only first 5 in slider
  const videosForCarousel = isCarouselTab ? activeVideos.slice(0, 5) : activeVideos;

  useEffect(() => {
    const Videos: IVideos[] = VideosData().reverse();
    setVideos(Videos);
  }, []);

  if (!videos.length) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 28 },
        display: "flex",
        flexDirection: "column",
        alignItems: { sm: "flex-start", md: "flex-start", lg: "flex-start" },
        justifyContent: { sm: "flex-start", md: "flex-start", lg: "flex-start" },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "700 !important", mb: 2,  }}
        >
          Spotlight on our Films
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 450, mb: 4 }}
        >
          A curated selection of impactful films and moments that reflect our
          mission to share God&apos;s love through media.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
          gap: { sm: 4, md: 10, lg: 0 },
          width: "100%",
          mt: 4,
          justifyContent: "space-between",
          alignItems: { sm: "center", md: "center", lg: "left" },
        }}
      >
        {/* Tabs */}
        <Box sx={{
          minWidth: { xs: "100%", sm: "100%", md: "100%", lg: 250 },
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
        >
          {TABS.map((tab) => (
            <Box
              key={tab.id}
              onClick={() => {
                // setLoading(true);
                setActiveTab(tab.id)
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                border: tab.id === activeTab ? "1px solid #E4E4E7" : "none",
                borderRadius: 2,
                px: tab.id === activeTab ? 3 : 2,
                py: tab.id === activeTab ? 1.2 : 1,
                width: "100%",
              }}
            >
              <Typography variant="body2" sx={{}}>
                {tab.label}
              </Typography>
              <IconButton size="small" sx={{ ml: 1, p: 0 }}>
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          ))}
        </Box>

        {/* RESTYLE THIS CARD SEPARATELY FROM THE REST OF VIDEO CARDS */}
        {/* Video Card */}
        <Box
          sx={{
            minHeight: 200,
            minWidth: 0,
            width: { xs: "100%", sm: "80%", md: "100%", lg: "600px" },
            mt: { xs: 4, sm: 4, md: 4, lg: 0 },
          }}
        >
          {isCarouselTab && (
            <Slider {...sliderSettings}>
              {videosForCarousel.map((video) => (
                <Box
                  key={video.id}
                  sx={{
                    width: "100%",
                    px: { sm: 0, md: 4 },
                    py: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <YouTubeCard
                    video={video}
                    wid={1000}
                    paddingTop="45%"
                    bgColor={isDark ? "none" : theme.palette.background.paper}
                  />
                </Box>
              ))}
            </Slider>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SpotLightSection;