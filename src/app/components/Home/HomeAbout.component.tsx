"use client";

import { Whatshot } from "@mui/icons-material";
import { alpha, Box, Card, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";

interface IVerse {
  text: string;
  ref: string;
}

const verses: IVerse[] = [
  {
    text: "For the earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea.",
    ref: "Habakkuk 2:14",
  },
  {
    text: "He will sit as a refiner and purifier of silver; He will purify the Levites and refine them like gold and silver.",
    ref: "Malachi 3:3",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  fade: true,
  speed: 1000,
};

interface THomeAboutComponent {
  isDark: boolean;
}

const HomeAboutComponent = ({ isDark }: THomeAboutComponent) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
        color: alpha(theme.palette.text.secondary, 0.9),
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
            bottom: -14,
            transform: "translateX(-50%)",
            width: "60%",
            height: "6px",
            borderRadius: "12px",
            background: isDark
              ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
              : `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
        }}
      >
        Our Story
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3, textAlign: "left" }}>
            Da Refiner&apos;s Fire was born out of a divine calling — a vision to use the transformative power
            of drama and film to reach souls and refine hearts through the Gospel of Christ.
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3, textAlign: "left" }}>
            Like silver in the refiner&apos;s fire, we believe that through trials, faith, and the work of the
            Holy Spirit, lives can be purified and transformed. Our ministry creates short gospel skits that
            illuminate biblical truths, inspire deeper faith, and encourage believers to walk in obedience
            and purpose.
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            Every production is Spirit-led, prayed over, and crafted with excellence to honor God and
            impact lives. From stories of transformation to moments of divine encounter, our skits carry
            the light of Christ into a world that desperately needs His love.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: 320, md: 400 },
          }}
        >
          <Card
            sx={{
              position: "absolute",
              top: 35,
              left: "50%",
              transform: "translateX(-50%) rotate(-4deg)",
              width: { xs: 300, sm: 380, md: 450 },
              height: { xs: 240, sm: 300, md: 350 },
              borderRadius: "24px",
              backgroundColor: theme.palette.background.paper,
              boxShadow: 4,
              zIndex: 1,
            }}
          />
          <Card
            sx={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: 300, sm: 380, md: 450 },
              height: { xs: 240, sm: 300, md: 350 },
              borderRadius: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.text.primary,
              p: { xs: 2, md: 3 },
              boxShadow: 6,
              zIndex: 2,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Slider {...settings}>
                {verses.map((verse, index) => (
                  <Box key={index}>
                    <Whatshot
                      sx={{
                        color: isDark
                          ? theme.palette.secondary.main
                          : theme.palette.secondary.main,
                        fontSize: 40,
                      }}
                    />
                    <Typography
                      sx={{
                        py: 2,
                        fontSize: "1.05rem",
                        color: isDark
                          ? theme.palette.secondary.main
                          : theme.palette.primary.contrastText,
                      }}
                    >
                      “{verse.text}”
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        mt: 1,
                        color: isDark
                          ? theme.palette.secondary.main
                          : theme.palette.primary.contrastText,
                      }}
                    >— {verse.ref}</Typography>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAboutComponent;
