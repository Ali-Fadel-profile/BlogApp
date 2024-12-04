import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

function NoPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}

export default NoPage;
