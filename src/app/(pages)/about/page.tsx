"use client";

import { SocialsEnum } from "@/app/enum";
import { HorizontalRuleOutlined, PlayCircleOutline, Whatshot } from "@mui/icons-material";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { verses } from "@/app/(pages)/home/HomeAbout.component";
import FaqSection from "@/app/components/Faq.component";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  fade: false,
};

interface THomeAboutComponent {
  isDark: boolean;
}

const HomeAboutComponent = ({ isDark }: THomeAboutComponent) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 24 },
        pb: { xs: 6, md: 12 },
        px: { xs: 2.5, md: 8 },
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* ABOUT TEXT */}
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          ml: { xs: "4px", sm: "50px", md: "150px", lg: "300px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2.5rem"},
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 26, mr: 1 }} />
          ABOUT US.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 2,
          }}
        >
          Da Refiner&apos;s Fire Ministry is a Spirit-led gospel drama and film ministry committed to
          spreading the light of Christ through transformative storytelling. We create short
          Christian skits that illuminate biblical truth, inspire spiritual growth, and draw hearts
          back to God.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 2,
          }}
        >
          Our name comes from Malachi 3:3 — the Refiner&apos;s Fire — reminding us that God
          purifies, transforms, and prepares His people for His purpose. Every production is
          birthed in prayer, guided by the Holy Spirit, and crafted with excellence to glorify
          Jesus.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 3,
          }}
        >
          Through drama, film, evangelism, and media ministry, our mission remains simple: to
          refine hearts, awaken purpose, and draw souls to Christ.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 3,
          }}
        >
          Whether you watch our videos, share your testimony, pray with us, or connect online, you
          are part of this story. Together, we can spread the gospel in a way that resonates with
          this generation and generations to come.
        </Typography>

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
      </Box>

      {/* VERSE BOX */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: { xs: 2, md: 10 },
        }}
      >
        <Card
          sx={{
            maxWidth: 1000,
            width: "100%",
            backgroundColor: isDark
              ? theme.palette.background.paper
              : theme.palette.primary.dark,
            boxShadow: 6,
            borderRadius: 4,
            p: 1.5,
            height: "300px",
          }}
        >
          <Slider {...settings}>
            {verses.map((verse, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    margin: "0 auto",
                    py: 6,
                    borderRadius: 3,
                  }}
                >
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
                      color: theme.palette.secondary.contrastText,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    — {verse.ref}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Card>
      </Box>

      {/* FAQ Section */}
      <FaqSection />
    </Box>
  );
};

export default HomeAboutComponent;
