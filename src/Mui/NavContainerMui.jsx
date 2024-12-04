import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const pages = [{ name: "Home", to: "/" }];
function NavContainerMui() {
  return (
    <Box>
      {pages.map((page) => (
        <Link variant="link" component="a" key={page} to={page.to}>
          {page.name}
        </Link>
      ))}
    </Box>
  );
}

export default NavContainerMui;
