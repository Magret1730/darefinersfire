"use client";

import { HorizontalRuleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TeamsData } from "@/app/data/team";
import { useEffect, useState } from "react";
import { ITeam } from "@/app/types/";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function TeamPage() {
  const [ teams, setTeams ] = useState<ITeam[]>([]);

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    setTeams(TeamsData());
  }, []);

  if (!teams.length) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        pt: { xs: 18, md: 24 },
        pb: { xs: 6, md: 12 },
        px: { xs: 2.5, md: 8 },
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          ml: { xs: "4px", sm: "100px", md: "350px", lg: "600px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2.5rem"},
          }}
        >
          OUR TEAM.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.9,
            mb: 2,
          }}
        >
          At Da Refiner&apos;s Fire Ministry, our team is a family of Spirit-led creatives
          committed to using drama to share the message of Christ. Each member
          brings unique gifts, passion, and purpose united under one vision: to refine
          hearts and draw souls closer to God.
        </Typography>
      </Box>

      <Box
        sx={{
          spacing: 4,
          alignItems: "center",
          mb: 8,
          mt: 12,
          px: { xs: 0, sm: 10, md: 0},
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            mb: 3,
            // mt: 8,
            fontSize: { xs: "1.2rem", md: "2.25rem" },
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 26, mr: 1 }} />
          Meet the Team
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            // lineHeight: 1.9,
            mb: 2,
            maxWidth: {xs: 600, sm: 600, md: 600},
          }}
        >
          Our dedicated team members work tirelessly behind the scenes and in front of the camera
          to bring our vision to life. From writers and directors to actors and production staff,
          each person plays a vital role in our ministry&apos;s success.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 2, sm: 6, md: 4, lg: 20},
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          mt: 4,
        }}
      >
        {teams.map((member) => (
          <Box
            key={member.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "flex-start",
              borderRadius: 2,
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%",
                lg: "25%",
              },
              transform: "scale(1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src={member.photo}
              alt={member.name}
              sx={{
                height: "400px",
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 400, color: "text.primary", mt: 2, fontSize: 16 }}
              >
                {member.name}
              </Typography>
              {/* <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {member.role}
            </Typography> */}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
