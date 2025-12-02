import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme
} from "@mui/material";
import { HorizontalRuleOutlined } from "@mui/icons-material";
import { TeamsData } from "@/app/data/team";

export interface ITeam {
  id: number;
  name: string;
  role: string;
  image: string;
  [key: string]: any;
}

const HomeTeamComponent = () => {
  const theme = useTheme();

  const Teams = TeamsData();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 4 },
        mx: { xs: 3, md: 28 },
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: { xs: "column", md: "column", lg: "column" },
        alignItems: "flex-start",
        justifyContent: "flex-start"
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: 500,
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h6", md: "h4" },
            fontWeight: "700 !important",
            textAlign: "left",
            mb: { xs: 6, md: 4 },
          }}
        >
          <HorizontalRuleOutlined sx={{ fontSize: 30 }} /> MEET THE TEAM
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4, textAlign: "left" }}
        >
          Every story we tell is brought to life by a passionate team committed to
          sharing God&apos;s love through creativity and excellence.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 4,
        }}
      >
        {Teams.map((member) => (
          <Box
            key={member.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "flex-start",
              borderRadius: 2,
              width: "15%",
              // transform: "scale(1)",
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
                height: "250px",
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

      <Button
        fullWidth
        variant="contained"
        href="/team"
        rel="noopener noreferrer"
        sx={{
          fontWeight: 700,
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.action.active,
          borderRadius: "10px",
          py: 1.2,
          mt: 6,
          border: `0.5px solid ${theme.palette.secondary.contrastText}`,
          boxShadow: "none",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "none",
            backgroundColor: theme.palette.primary.light,
          },
        }}
      >
        Load More
      </Button>
    </Box>
  )
}

export default HomeTeamComponent