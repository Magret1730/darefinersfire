import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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
import { IVideos } from "@/app/components/Home/HomeVideos.component";
import { title } from "process";

interface TYouTubeCard {
  video: IVideos;
}

// interface YouTubeThumbnails {
//   default: { url: string; width?: number; height?: number };
//   medium?: { url: string; width?: number; height?: number };
//   high?: { url: string; width?: number; height?: number };
//   standard?: { url: string; width?: number; height?: number };
// }

// interface YouTubeLocalized {
//   title: string;
//   description: string;
// }

// interface YouTubeSnippet {
//   publishedAt: string;
//   channelId: string;
//   channelTitle: string;
//   title: string;
//   description: string;
//   localized: YouTubeLocalized;
//   thumbnails: YouTubeThumbnails;
//   tags?: string[];
//   categoryId?: string;
//   defaultAudioLanguage?: string;
//   defaultLanguage?: string;
//   liveBroadcastContent?: string;
// }

// interface YouTubeVideo {
//   id: string;
//   snippet: YouTubeSnippet;
// }

// interface YouTubeApiResponse {
//   items: YouTubeVideo[];
// }


const YouTubeCard = ({
    video
  }: TYouTubeCard) => {
    const theme = useTheme();
    // const [data, setData] = useState<YouTubeVideo | null>(null);

    // useEffect(() => {
    //   async function getVideo() {
    //     const res = await axios.get<YouTubeApiResponse>(
    //       `https://www.googleapis.com/youtube/v3/videos`,
    //       {
    //         params: {
    //           part: "snippet,contentDetails",
    //           id: video.YouTubeId,
    //           key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    //         },
    //       }
    //     );

    //     setData(res.data.items[0]);
    //   }

    //   getVideo();
    // }, [video.YouTubeId]);

    // if (!data) return <p>Loading...</p>;

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    >
      <CardHeader
        sx={{ textAlign: "left" }}
        slotProps={{
          title: {
            fontSize: "1rem"
          }
        }}
        avatar={
          <Avatar
            aria-label="recipe"
            // src={data.snippet.thumbnails.default?.url}
            src={`https://img.youtube.com/vi/${video.YouTubeId}/hqdefault.jpg`}
            sx={{ backgroundColor: "orange" }}
          />
        }
        title={video.text}
      />
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${video.YouTubeId}`}
        sx={{ height: 200 }}
        allowFullScreen
      />
      <CardContent>
        <Typography variant="body2">
          {video.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="facebook account"
          href={video.facebookAccount}
          target="_blank"
          sx={{ color: '#1877F2' }}
        >
          <Tooltip title="facebook account">
            <Facebook sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>
        <IconButton
          aria-label="facebook page"
          href={video.facebookPage}
          target="_blank"
          sx={{ color: "#1877F2" }}
        >
          <Tooltip title="Facebook Page">
            <Facebook sx={{ fontSize: 30 }} />
          </Tooltip>
        </IconButton>
        <IconButton 
          aria-label="x" 
          href={video.x}
          target="_blank"
          sx={{ color: "#000000" }}
        >
          <Tooltip title="X">
            <X sx={{ fontSize: 24 }} />
          </Tooltip>
        </IconButton>
        <IconButton 
          aria-label="instagram" 
          href={video.instagram}
          target="_blank"
          sx={{ color: "#E4405F" }}
        >
          <Tooltip title="instagram">
            <Instagram sx={{ fontSize: 26 }} />
          </Tooltip>
        </IconButton>

        <IconButton 
          aria-label="youtube" 
          href={video.youtube}
          target="_blank"
          sx={{ color: "#FF0000" }}
        >
          <Tooltip title="youtube">
            <YouTube sx={{ fontSize: 34 }} />
          </Tooltip>
        </IconButton>
        <IconButton 
          aria-label="tiktok" 
          href={video.tittok}
          target="_blank"
          sx={{ color: "#000000" }}
        >
          <Tooltip title="tiktok">
            <MusicNote sx={{ fontSize: 26 }} />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Card>
  )
};

export default YouTubeCard;

