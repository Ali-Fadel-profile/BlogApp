import { Box, Button, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import { useTheme } from "@emotion/react";
import { useData } from "@context/DataContext";
import { useState } from "react";

function BlogsContainer() {
  const theme = useTheme();
  const { data } = useData();
  const [blogs, setBlogs] = useState(data.slice(0, 9));
  const [blogsNumber, setBlogsNumber] = useState(9);

  const viewMore = () => {
    if (blogsNumber < data.length) {
      const newBlogsNumber = blogsNumber + 9;
      setBlogsNumber(newBlogsNumber);
      setBlogs(data.slice(0, newBlogsNumber));
    }
  };

  return (
    <>
      {" "}
      <Typography variant="h2" sx={{ mb: 2 }}>
        Latest Post
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(28rem, 1fr))",
          gap: 4,
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.cover_image}
            category={blog?.tag_list[0]}
            title={blog.title}
            profile_image={blog.user.profile_image}
            authorName={blog.user.name}
            publishedAt={blog.readable_publish_date}
          />
        ))}
      </Box>
      <Button
        onClick={viewMore}
        variant="outlined"
        size="large"
        sx={{
          display: blogsNumber >= data.length ? "none" : "block",
          my: 3,
          mx: "auto",
          color: "text.primary",
          borderColor: theme.palette.primary.buttonBorder,
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        View more Posts
      </Button>{" "}
    </>
  );
}

export default BlogsContainer;
