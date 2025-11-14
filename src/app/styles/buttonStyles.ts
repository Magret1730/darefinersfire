export const primaryButtonStyles = (theme: any, isDark: boolean) => ({
  px: { xs: 3, md: 4 },
  py: 1.6,
  fontWeight: 700,
  fontSize: { xs: "1rem", md: "1.2rem" },
  textTransform: "none",
  borderRadius: "50px",
  color: "#fff",
  background: isDark
    ? `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
    : `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.main} 100%)`,
  boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
    transform: "scale(1.05)",
    boxShadow: "0px 6px 18px rgba(0,0,0,0.35)",
  },
});

export const secondaryButtonStyles = (theme: any) => ({
  px: { xs: 3, md: 4 },
  py: 1.3,
  fontWeight: 600,
  fontSize: { xs: "0.95rem", md: "1.05rem" },
  textTransform: "none",
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  width: "30%",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.18)",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0px 3px 10px rgba(0,0,0,0.22)",
  }
});

export const tertiaryButtonStyles = (theme: any) => ({
  px: 0.5,
  py: 0.2,
  fontWeight: 500,
  textTransform: "none",
  fontSize: { xs: "0.9rem", md: "1rem" },
  color: theme.palette.primary.main,
  background: "transparent",
  "&:hover": {
    background: "transparent",
    textDecoration: "underline",
  }
});

