"use client";
import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, useTheme } from "@mui/material";

interface Verse {
  bookname: string;
  chapter: number;
  verse: number;
  text: string;
}

const STORAGE_KEY: string = process.env.NEXT_PUBLIC_STORAGE_KEY || "SCRIPTURE_OF_THE_DAY##";

const ScriptureOfTheDay: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const theme = useTheme();

  const fetchVerse = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BIBLE_API_URL!);
      if (!res.ok) throw new Error("Failed to fetch scripture");
      const data: Verse[] = await res.json();
      const verse = data[0];

      // save verse with today’s date
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ verse, date: today }));

      setVerse(verse);
    } catch (err: any) {
      console.error("Failed to load scripture", err);
      setError(err.message || "Error fetching scripture");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toISOString().split("T")[0];

    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === today) {
        setVerse(parsed.verse);
        setLoading(false);

        // calculate ms until next midnight to refresh
        const now = new Date();
        const nextMidnight = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 1,
          0, 0, 0, 0
        );
        const msUntilMidnight = nextMidnight.getTime() - now.getTime();

        const timeout = setTimeout(fetchVerse, msUntilMidnight);
        return () => clearTimeout(timeout);
      }
    }

    // no stored verse or date is old -> fetch new
    fetchVerse();
  }, []);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <CircularProgress />
      </Box>
    );

  // if (error)
  //   return (
  //     <Typography color="error" align="center" sx={{ mt: 2 }}>
  //       {error}
  //     </Typography>
  //   );

  if (!verse) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 2, md: 12 },
        mb: { xs: 4, md: 22 },
        maxWidth: { xs: 300, sm: 600, md: 800, lg: 1000 },
        width: "100%",
        backgroundColor: isDark
          ? theme.palette.background.paper
          : theme.palette.primary.dark,
        boxShadow: 6,
        borderRadius: 4,
        p: 1.5,
        height: "300px",
        mx: "auto",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 700,
          color: theme.palette.text.primary,
        }}
      >
        Scripture of the Day
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic", mb: 1 }}>
        "{verse.text}"
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          color: theme.palette.secondary.contrastText,
          fontSize: { xs: "0.95rem", md: "1rem" },
        }}
      >
        — {verse.bookname} {verse.chapter}:{verse.verse}
      </Typography>
    </Box>
  )
};

export default ScriptureOfTheDay;
