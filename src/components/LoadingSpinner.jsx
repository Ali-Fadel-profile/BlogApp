import { CircularProgress, Container, Typography } from "@mui/material";

function LoadingSpinner() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <CircularProgress size="5rem" sx={{ mt: 10 }} />{" "}
      <Typography variant="h2" sx={{ marginTop: 5 }}>
        Loading Blogs...
      </Typography>
    </Container>
  );
}

export default LoadingSpinner;
