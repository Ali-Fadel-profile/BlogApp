import { Box, Button, Typography } from "@mui/material";

function Error() {
  return (
    <Box sx={{ textAlign: "center", mt: 5, height: "100vh" }}>
      <Typography variant="h4" color="error">
        Something went wrong!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Error: Failed to get data
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
        sx={{ mt: 3, fontSize: "16px", fontWeight: "500" }}
      >
        Try Again
      </Button>
    </Box>
  );
}

export default Error;
