import {
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import YouTubeCard from "@/app/components/YoutubeCard.component";
import { VideosData } from "@/app/data/videos";
import { secondaryButtonStyles } from "@/app/styles/buttonStyles";
import { NavLinksEnum } from "@/app/enum";


interface THomeVideosComponent {
  isDark: boolean;
}

export interface IVideos {
  id: number;
  text: string;
  title: string;
  YouTubeId: string;
  tiktok: string;
  facebookAccount: string;
  facebookPage?: string;
  x: string;
  instagram: string;
  youtube: string;
}

const HomeVideosComponent = ({
  isDark
}: THomeVideosComponent) => {
  const theme = useTheme();

  const Videos: IVideos[] = VideosData();
  const slicedVideos = Videos.slice(0, 8);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 4 },
        color: theme.palette.text.secondary
      }}
    >
      <Typography
        sx={{
          typography: { xs: "h4", md: "h2" },
          position: "relative",
          fontWeight: 700,
          display: "inline-block",
          textAlign: "center",
          mb: { xs: 6, md: 8 },
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -8,
            transform: "translateX(-50%)",
            width: "100px",
            height: "6px",
            borderRadius: "12px",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
              : `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
        }}
      >
        Our Videos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {slicedVideos.map((video, index) => (
          <YouTubeCard key={index} video={video}/>
        ))}
      </Box>

      <Button
        variant="contained"
        href={NavLinksEnum.VIDEOS}
        rel="noopener noreferrer"
        sx={[
          (theme) => secondaryButtonStyles(theme),
          {
            textAlign: {md:"left", xs:"center"},
            mt: 4,
          }
        ]}
      >
        More Videos
      </Button>
    </Box>
  )
}

export default HomeVideosComponent;
