import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        width: "100%",
      }}
    >
      <CircularProgress sx={{ color:"#FF5C01" }}/>
    </Box>
  );
};

export default LoadingSpinner;
