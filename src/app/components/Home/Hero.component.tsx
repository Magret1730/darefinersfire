import { PlayCircleOutline } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import Slider from "react-slick";

interface ICarousel {
  name: string;
  src: string;
}

const CarouselImages: ICarousel[] = [
  {
    name: "Picture1",
    src: "/1.png",
  },
  {
    name: "Picture2",
    src: "/2.jpeg",
  },
  {
    name: "Picture3",
    src: "/3.png",
  },
  {
    name: "Picture4",
    src: "/4.png",
  },
  {
    name: "Picture5",
    src: "/5.png",
  },
  {
    name: "Picture6",
    src: "/6.png",
  },
  {
    name: "jolly",
    src: "/jolly.png",
  },
  {
    name: "together",
    src: "together.png",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 800,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

interface THeroComponent {
  isDark: boolean
}

const HeroComponent = ({
  isDark
}: THeroComponent) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {CarouselImages.map((carouselImage, index) => (
          <Box
            key={index}
            component="img"
            src={carouselImage.src}
            alt={carouselImage.name}
            sx={{
              width: "100%",
              height: { xs: 400, sm: 400, md: 600 },
              objectPosition: "center",
              display: "block",
              objectFit: "cover",
              margin: 0,
              padding: 0,
              boxShadow: 3,
            }}
          />
        ))}
      </Slider>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "brightness(0.5)",
          zIndex: 1,
        }}
      />

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: { lg: "45%", md: "40%", xs: "45%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: theme.palette.text.primary,
          zIndex: 2,
          px: { xs: 4, md: 2 },
          width: { xs: "100%" },
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "4rem" },
            mb: 0,
          }}
        >
          Da Refiner&apos;s Fire
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            mx: "auto",
            maxWidth: 600,
          }}
        >
          Explore our inspirational Christian skits that refine,
          inspire, and ignite faith through storytelling.
        </Typography>
        <Button
          variant="contained"
          href="https://www.youtube.com/@darefinersfire"
          target="_blank"
          rel="noopener noreferrer"
          // sx={{
          //   mt: 3,
          //   px: { xs: 3, md: 3 },
          //   py: 2,
          //   fontWeight: 600,
          //   fontSize: "1.2rem",
          //   textTransform: "none",
          //   borderRadius: 3,
          //   backgroundColor: theme.palette.action.active,
          //   color: theme.palette.text.primary,
          // }}
          sx={(theme) => ({
            mt: 6,
            px: { xs: 3, md: 4 },
            py: 1.6,
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.2rem" },
            textTransform: "none",
            borderRadius: "50px",
            color: "#fff",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
              : `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.main} 100%)`,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
              transform: "scale(1.05)",
              boxShadow: "0px 6px 18px rgba(0,0,0,0.35)",
            },
          })}
          startIcon={<PlayCircleOutline sx={{ fontSize: 40 }} />}
        >
          Watch on YouTube
        </Button>
      </Box>
    </Box>
  );
};

export default HeroComponent;
