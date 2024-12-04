import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ThemeSwitcherMui from "@Mui/ThemeSwitcherMui";
import Logo from "@images/Logo.svg";
import LogoDark from "@images/LogoDark.svg";
import NavContainerMui from "@Mui/NavContainerMui";
import { Link } from "react-router-dom";

function Header({ setMode, mode }) {
  return (
    <Box
      component="header"
      sx={{
        py: 2,
        boxShadow: "none",
        backgroundColor: "background.default",
        position: "relative",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Link to="/">
              {" "}
              <Avatar
                alt="App Logo"
                src={mode === "light" ? Logo : LogoDark}
                sx={{ width: "3.6rem", height: "3.6rem" }}
              />
            </Link>
            <Link to="/">
              {" "}
              <Typography
                variant="h2"
                noWrap
                href="#app-bar-with-responsive-menu"
              >
                Blog
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 0.5,
              gap: 2,
            }}
          >
            <NavContainerMui />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {" "}
              <ThemeSwitcherMui setMode={setMode} mode={mode} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Header;
