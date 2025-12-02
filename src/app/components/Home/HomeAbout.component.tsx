"use client";

import { EastOutlined, HorizontalRuleOutlined, Whatshot } from "@mui/icons-material";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { secondaryButtonStyles } from "@/app/styles/buttonStyles";
import { NavLinksEnum } from "@/app/enum";

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
    text: "He will sit as a refiner and purifier of silver and He will purify the priests, the sons of Levi, and refine \
      them like gold and silver, that they may offer to the Lord offerings in righteousness",
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
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 28 },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 6, md: 16, lg: 45 },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
        <Typography
          sx={{
            typography: { xs: "h6", md: "h3" },
            fontWeight: "950",
            textAlign: "left",
            mb: { xs: 6, md: 4 }
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 30 }} /> OUR STORY
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" }, lineHeight: 1.8, mb: 3, textAlign: "left" }}>
          Da Refiner&apos;s Fire was born out of a divine calling — a vision to use the transformative power
          of drama and film to reach souls and refine hearts through the Gospel of Christ.
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" }, lineHeight: 1.8, mb: 3, textAlign: "left" }}>
          Like silver in the refiner&apos;s fire, we believe that through trials, faith, and the work of the
          Holy Spirit, lives can be purified and transformed. Our ministry creates short gospel skits that
          illuminate biblical truths, inspire deeper faith, and encourage believers to walk in obedience
          and purpose.
        </Typography>
        {/* <Typography sx={{ fontSize: {xs: "0.9rem", md: "1.1rem"}, lineHeight: 1.8, textAlign: "left" }}>
            Every production is Spirit-led, prayed over, and crafted with excellence to honor God and
            impact lives. From stories of transformation to moments of divine encounter, our skits carry
            the light of Christ into a world that desperately needs His love.
          </Typography> */}
        <Button
          variant="text"
          href={NavLinksEnum.ABOUT}
          rel="noopener noreferrer"
          startIcon={<EastOutlined sx={{ fontSize: 40 }} />}
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            color: theme.palette.secondary.contrastText,

          }}
        >
          Learn More
        </Button>
      </Box>

      <Box
        sx={{
          height: { xs: 320, md: 400 },
          position: "relative",
          mr: { lg: 30 },
        }}
      >
        <Card
          sx={{
            position: "absolute",
            top: "0",
            transform: "translateX(-50%) rotate(-8deg)",
            width: { xs: 250, sm: 380, md: 450 },
            height: { xs: 300, sm: 300, md: 350 },
            borderRadius: "24px",
            backgroundColor: isDark
              ? theme.palette.secondary.light
              : theme.palette.secondary.main,
            boxShadow: 4,
            zIndex: 1,
          }}
        />
        <Card
          sx={{
            position: "absolute",
            top: "0",
            transform: "translateX(-50%)",
            width: { xs: 250, sm: 380, md: 450 },
            height: { xs: 300, sm: 300, md: 350 },
            borderRadius: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: isDark
              ? theme.palette.background.paper
              : theme.palette.primary.dark,
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
                      color: theme.palette.primary.main,
                      fontSize: 40,
                    }}
                  />
                  <Typography
                    sx={{
                      py: 2,
                      fontSize: { xs: "0.9rem", md: "1.05rem" },
                      color: theme.palette.text.primary,
                    }}
                  >
                    “{verse.text}”
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mt: 1,
                      color: theme.palette.secondary.contrastText,
                      fontSize: { xs: "0.9rem", md: "1.05rem" },
                    }}
                  >— {verse.ref}</Typography>
                </Box>
              ))}
            </Slider>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeAboutComponent;
