import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore, HorizontalRuleOutlined } from "@mui/icons-material";

const faqs: {question: string, answer: string}[] = [
  {
    question: "What is Da Refiner\'s Fire?",
    answer:
      "Da Refiner\'s Fire is a Christian drama ministry dedicated to creating Spirit-filled skits, and media content that edify, convict, and draw souls to Christ.",
  },
  {
    question: "What is your mission?",
    answer:
      "Our mission is to use drama as a vessel to spread the Word of God far and near, reaching souls across social media and beyond.",
  },
  {
    question: "How often do you upload new content?",
    answer:
      "We aim to release new content once every two weeks.",
  },
  {
    question: "Can I send in my testimony?",
    answer:
      "Absolutely. You can share your testimony through our contact page or by messaging us directly on any of our social platforms.",
  },
  {
    question: "Where can I watch full videos?",
    answer:
      "You can watch all our full videos on YouTube or any of our social media platforms. They will also be listed on the Videos page of this website.",
  },
  {
    question: "Do you accept script ideas or collaborations?",
    answer:
      "Yes, we welcome Spirit-led ideas and collaborations. Kindly reach out through our contact page with as much detail as possible.",
  },
  {
    question: "How can I support the ministry?",
    answer:
      "You can support by praying for us, sharing our content, partnering financially, or volunteering your skills where needed.",
  }
];

const FaqSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 28 },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: { xs: 4, lg: 24},
      }}
    >
      {/* <Box className=""> */}
        {/* Left Title */}
        <Typography
          sx={{
            typography: { xs: "h6", md: "h4" },
            fontWeight: "700 !important",
            textAlign: "left",
            mb: { xs: 6, md: 4 },
            minWidth: { xs: "100%", md: "200px" },
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 30 }} /> FAQS
        </Typography>

        {/* FAQ List */}
        <Box
          sx={{
            width: { xs: "100%", md: "600px" },
          }}
        >
          {faqs.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "none"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  // px: 2,
                  // py: 1.5,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    // color: theme.palette.text.primary,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ 
                backgroundColor: theme.palette.background.default,
              }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    // color: theme.palette.text.secondary,
                    lineHeight: 1.7,
                    textAlign: "left",
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    // </Box>
  );
};

export default FaqSection;

