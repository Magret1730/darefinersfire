import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import {
  X,
  Facebook,
  Instagram,
  YouTube,
  MusicNote
} from "@mui/icons-material";
import { useState } from "react";
import { TYouTubeCard } from "@/app/types";

const YouTubeCard = ({ video, wid, paddingTop, alignItems}: TYouTubeCard) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const theme = useTheme();
  const thumbnail = `https://img.youtube.com/vi/${video.YouTubeId}/hqdefault.jpg`;

  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: wid || 320,
        overflow: "hidden",
        boxShadow: "none",
      }}
    >

      {/* VIDEO PLAYER AREA */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: paddingTop || "56.25%",
          cursor: "pointer",
          borderRadius: 5,
        }}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying && (
          <>
            <img
              src={thumbnail}
              alt="YouTube thumbnail"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 20,
              }}
              loading="lazy"
            />

            {/* PLAY BUTTON */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "20px solid white",
                  marginLeft: "6px",
                }}
              />
            </Box>
          </>
        )}

        {isPlaying && (
          <iframe
            src={`https://www.youtube.com/embed/${video.YouTubeId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
            loading="lazy"
          />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: alignItems || "flex-start",
          // alignItems: "center", // Home
          // alignItems: "flex-start", // Videos
          pb: 2,
          backgroundColor: "none",
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            py: 2,
            px: 1,
          }}
        >
          <Box
            component="img"
            src={thumbnail}
            alt={video.title}
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ 
                fontSize: 16, 
                fontWeight: 300, 
                lineHeight: 1.2
              }}
            >
              {video.title}
            </Typography>

            {/* SOCIAL ICONS */}
            <Box
              sx={{
                p: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                pt: 1,
                gap: 2,
              }}
            >
              <Tooltip title="facebook account">
                <IconButton
                  href={video.facebookAccount}
                  target="_blank"
                  sx={{
                    color: isDark ? "#fff" : "#000",
                    p: 0,
                  }}
                >
                  <Facebook sx={{ fontSize: 16 }} />
                </IconButton>
              </Tooltip>

              {video.facebookPage && (
                <Tooltip title="Facebook Page">
                  <IconButton
                    href={video.facebookPage}
                    target="_blank"
                    sx={{
                      color: isDark ? "#fff" : "#000",
                      p: 0,
                    }}>
                    <Facebook sx={{ fontSize: 16 }} />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="X">
                <IconButton
                  href={video.x}
                  target="_blank"
                  sx={{
                    color: isDark ? "#fff" : "#000",
                    p: 0,
                  }}>
                  <X sx={{ fontSize: 14 }} />
                </IconButton>
              </Tooltip>

              {video.instagram && (
                <Tooltip title="Instagram">
                  <IconButton
                    href={video.instagram}
                    target="_blank"
                    sx={{
                      p: 0,
                      color: isDark ? "#fff" : "#000",
                    }}>
                    <Instagram sx={{ fontSize: 15 }} />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="YouTube">
                <IconButton
                  href={video.youtube}
                  target="_blank"
                  sx={{
                    p: 0,
                    color: isDark ? "#fff" : "#000",
                  }}>
                  <YouTube sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="TikTok">
                <IconButton
                  href={video.tiktok}
                  target="_blank"
                  sx={{
                    color: isDark ? "#fff" : "#000",
                    p: 0,
                  }}
                >
                  <MusicNote sx={{ fontSize: 15 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
        </Box>
  );
};

export default YouTubeCard;
