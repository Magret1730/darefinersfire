import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme
} from "@mui/material";
import { HorizontalRuleOutlined } from "@mui/icons-material";
import { TeamsData } from "@/app/data/team";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { ITeam } from "@/app/types/";

const HomeTeamComponent = () => {
  const [ teams, setTeams ] = useState<ITeam[]>([]);

  const theme = useTheme();

  useEffect(() => {
    setTeams(TeamsData());
  }, []);

  if(!teams.length) return <LoadingSpinner />;                                                                                                                                                                                       

  return (
    <Box
      sx={{
        py: { xs: 6, md: 4 },
        px: { xs: 3, md: 28, lg: 28 },
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: { xs: "column", md: "column", lg: "column" },
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: { xs: "100%", sm: "80%", md: 500 },
        // px: { xs: 3, md: 28, lg: 28 },
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
        {/* <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: { xs: 3, md: 4 },
            textAlign: { xs: "center", sm: "left" },
            maxWidth: { xs: "100%", sm: "85%", md: "70%", lg: "60%" },
            // width: "50%",
            // border: "1px solid red"
          }}
        > */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "100%",
            mb: 4,
            textAlign: "left",
          }}
        >
          Every story we tell is brought to life by a passionate team committed to
          sharing God&apos;s love through creativity and excellence.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: {lg: 6, md: 2, sm: 4, xs: 3  },
          flexWrap: "wrap",
          justifyContent: "center",
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
                sm: "40%",
                md: "22%",
                lg: "20%",
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