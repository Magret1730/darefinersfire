"use client";

import { Margin, Palette } from "@mui/icons-material";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICarousel {
  name: string;
  src: string;
}

const CarouselImages: ICarousel[] = [
  // {
  //   name: "Beyond Ignorance",
  //   src: "/BeyondIgnorance.png",
  // },
  // {
  //   name: "Reflection",
  //   src: "/Reflection.png",
  // },
  // {
  //   name: "watchman",
  //   src: "/watchman.png",
  // },
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

const HeroComponent = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
              height: { md: 600, xs: 400 },
              margin: 0,
              padding: 0,
              boxShadow: 3,
              objectFit: "cover",
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
          // backgroundColor: isDark
          //   ? "rgba(100, 100, 100, 0.6)"
          //   : "rgba(250, 240, 210, 0.1)",
          backdropFilter: "brightness(0.5)",
          zIndex: 1,
        }}
      />

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: theme.palette.text.primary,
          zIndex: 2,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Da Refiner's Fire Media
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Explore our inspirational Christian skits and videos that refine,
          inspire, and ignite faith through storytelling.
        </Typography>
        <Button
          variant="contained"
          href="https://www.youtube.com/@darefinersfire"
          target="_blank"
          sx={{
            mt: 3,
            px: 3,
            py: 1.2,
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: 3,
            backgroundColor: theme.palette.action.active,
            color: theme.palette.text.primary,
          }}
        >
          Watch Our Films on YouTube
        </Button>
      </Box>
    </Box>
  );
};

export default HeroComponent;
