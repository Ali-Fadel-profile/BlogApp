import { useState } from "react";
import { useTheme } from "@emotion/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Footer() {
  const theme = useTheme();
  const currentData = Date.now();
  const year = new Date(currentData);

  // State to manage the email input
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle subscription logic
  const handleSubscribe = () => {
    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate API call or further processing
    console.log("Subscribed Email:", email);
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear the input field
  };

  // Email validation helper function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box sx={{ backgroundColor: "background.section" }}>
      <Container>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            flexGrow: 1,
            backgroundColor: "inherit",
            mt: 10,
          }}
          elevation={0}
        >
          <Box sx={{ width: "100%", mt: 4, py: 4, bgcolor: "inherit" }}>
            <Grid container spacing={2} justifyContent="space-around">
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Company</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  We provide exceptional service.
                </Typography>
                <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedin />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    pt: {
                      xs: "15px",
                    },
                  }}
                >
                  Information
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body1">Email: blog@gmail.com</Typography>
                  <Typography variant="body1">Phone: 888-555-666</Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: theme.palette.background.component,
                  padding: 3,
                  mt: { xs: "15px" },
                  borderRadius: "7px",
                }}
                xs={12}
                sm={4}
              >
                <Typography variant="h6">Subscribe Now</Typography>
                <TextField
                  id="email"
                  label="Enter your email address"
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1 }}
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                {message && (
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 2,
                      color: message.includes("Thank") ? "green" : "red",
                    }}
                  >
                    {message}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: theme.palette.background.button,
                    boxShadow: "none",
                    color: "inherit",
                    fontSize: "16px",
                  }}
                  fullWidth
                  size="medium"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              borderTop: `1px solid ${theme.palette.primary.buttonBorder}`,
              pt: 2,
            }}
          >
            © {year.getFullYear()} Blog. All rights reserved.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Footer;
