"use client";

import { useState } from "react";
import { Box } from "@mui/material";

interface Props {
  videoId: string;
}

export default function YouTubeLazyPlayer({ videoId }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
        // borderRadius: 2,
        overflow: "hidden",
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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
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
  );
}
