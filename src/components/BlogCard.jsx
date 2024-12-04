import { Link } from "react-router-dom";
import { CardContent, CardMedia, Typography, Avatar, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import PlaceholderImage from "@images/placeholder.png";
import PlaceholderAvatar from "@images/avater.png";
import useScrollToTop from "../hooks/useScrollToTop";

const BlogCard = ({
  id,
  image,
  category,
  title,
  profile_image,
  authorName,
  publishedAt,
}) => {
  const theme = useTheme();
  const scrollToTop = useScrollToTop();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        backgroundColor: "background.default",
        border: `solid, 1px, ${theme.palette.primary.cardBorder}`,
        borderRadius: "7px",
        padding: "20px ",
      }}
    >
      {/* Image Section */}
      <Link
        to={`/writer/${id}`}
        style={{ textDecoration: "none" }}
        onClick={scrollToTop}
      >
        <CardMedia
          component="img"
          width="100%"
          height="auto"
          image={image || PlaceholderImage}
          alt={title || "Blog Image"}
          sx={{ borderRadius: "10px", maxWidth: "100%" }}
        />
        <CardContent>
          {/* Category */}
          <Typography
            variant="body2"
            sx={{
              width: "fit-content",
              p: 1,
              borderRadius: 1,
              background: theme.palette.background.category,
            }}
          >
            {category || "Uncategorized"}
          </Typography>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{ marginTop: 1, height: "9rem", overflowY: "hidden" }}
          >
            {title}
          </Typography>

          {/* Author & Date Section */}
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <Avatar
              src={profile_image || PlaceholderAvatar}
              alt={authorName || "Unknown Author"}
              sx={{ width: 32, height: 32, marginRight: 1 }}
            />{" "}
            <Typography variant="body1">
              {authorName || "Unknown Author"}
            </Typography>
            <Typography variant="body1" sx={{ marginLeft: "auto" }}>
              {publishedAt || "Unknown Date"}
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Box>
  );
};

export default BlogCard;
