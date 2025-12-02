import { NavLinksEnum, SocialsEnum } from "@/app/enum";
import { ArrowRightAltOutlined, EastOutlined, PlayCircleOutline, YouTube } from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
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
  // fade: true,
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
              height: { xs: 550, sm: 400, md: 650 },
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
          zIndex: 1,
          backgroundColor: isDark ? "#00000080" : "#FFFFFF80",
        }}
      />

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: { lg: "50%", md: "50%", xs: "57%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: theme.palette.primary.main,
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
            fontSize: { xs: "2rem", md: "4rem", lg: "4rem" },
            mb: 2,
          }}
        >
          Da Refiner&apos;s Fire
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            mx: "auto",
            maxWidth: 600,
            fontWeight: 500,
          }}
        >
          Discover inspirational Christian skits that encourage, challenge, and ignite faith
          in every believer. Each story draws from God&apos;s Word to teach, inspire, and strengthen
          hearts, leaving you motivated to live boldly, love deeply, and trust in His plan.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href={SocialsEnum.YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<PlayCircleOutline sx={{ fontSize: 40 }} />}
            sx={{
              textTransform: "none",
              backgroundColor: theme.palette.action.active,
              color: theme.palette.primary.dark,
              borderRadius: "10px",
              py: 1.2,
            }}
          >
            Watch on YouTube
          </Button>
          <Button
            variant="contained"
            href={NavLinksEnum.CONTACT}
            target="_blank"
            endIcon={<EastOutlined sx={{ fontSize: 40 }} />}
            sx={{
              textTransform: "none",
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.text.primary,
              borderRadius: "10px",
              py: 1.2,
              "& .MuiButton-endIcon": {
                ml: 0.5,
              },
            }}
          >
            Share Your Testimony
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroComponent;
