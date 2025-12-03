import {
  Box,
  Card,
  CardActions,
  CardContent,
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
import { IVideos } from "@/app/page";

interface TYouTubeCard {
  video: IVideos;
  wid?: number;
  paddingTop?: string;
  bgColor?: string;
}

const YouTubeCard = ({ video, wid, paddingTop, bgColor }: TYouTubeCard) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const theme = useTheme();
  const thumbnail = `https://img.youtube.com/vi/${video.YouTubeId}/hqdefault.jpg`;

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: wid || 320,
        borderRadius: 4,
        backgroundColor: bgColor || "#ffffffd9",
        color: theme.palette.primary.contrastText,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.3s ease",
      }}
    >

      {/* VIDEO PLAYER AREA */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: paddingTop || "56.25%",
          cursor: "pointer",
          backgroundColor: "#000",
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
                width: 70,
                height: 70,
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
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: "24px solid white",
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
            }}
            loading="lazy"
          />
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", pb: 2 }}>
        {/* TITLE */}
        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 500, pt: 2, pb: 0, mb: 0 }}>
            {video.title}
          </Typography>
        </CardContent>

        {/* SOCIAL ICONS */}
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            pt: 0,
            mt: 0,
            gap: 2,
          }}>
          <Tooltip title="facebook account">
            <IconButton
              href={video.facebookAccount}
              target="_blank"
              sx={{
                color: "#000",
                backgroundColor: "white",
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Facebook sx={{ fontSize: 22 }} />
            </IconButton>
          </Tooltip>

          {video.facebookPage && (
            <Tooltip title="Facebook Page">
              <IconButton
                href={video.facebookPage}
                target="_blank"
                sx={{
                  color: "#000",
                  backgroundColor: "white",
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  border: `1px solid ${theme.palette.divider}`
                }}>
                <Facebook sx={{ fontSize: 22 }} />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="X">
            <IconButton
              href={video.x}
              target="_blank"
              sx={{
                color: "#000",
                backgroundColor: "white",
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: `1px solid ${theme.palette.divider}`
              }}>
              <X sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>

          {video.instagram && (
            <Tooltip title="Instagram">
              <IconButton
                href={video.instagram}
                target="_blank"
                sx={{
                  color: "#000",
                  backgroundColor: "white",
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  border: `1px solid ${theme.palette.divider}`
                }}>
                <Instagram sx={{ fontSize: 22 }} />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="YouTube">
            <IconButton
              href={video.youtube}
              target="_blank"
              sx={{
                color: "#000",
                backgroundColor: "white",
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: `1px solid ${theme.palette.divider}`
              }}>
              <YouTube sx={{ fontSize: 24 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="TikTok">
            <IconButton
              href={video.tiktok}
              target="_blank"
              sx={{
                color: "#000",
                backgroundColor: "white",
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: `1px solid ${theme.palette.divider}`
              }}
            >
              <MusicNote sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
        </Card>
  );
};

export default YouTubeCard;
