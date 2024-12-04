import { useData } from "@context/DataContext";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import BlogCard from "./BlogCard";

function Writers() {
  const { id } = useParams();
  const { data } = useData();
  const theme = useTheme();
  if (!data || data.length === 0) {
    return <LoadingSpinner />;
  }

  const artical = data.filter((element) => element.id === parseInt(id))[0];
  const blogs = data.filter(
    (element) => element.cover_image && element.id !== parseInt(id)
  );

  return (
    <>
      {" "}
      <Container
        sx={{
          backgroundColor: theme.palette.background.section,
          padding: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          borderRadius: "8px",
          boxShadow: 2,
          display: "flex",
          justifyContent: "center",
          mb: "80px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "unset",
            boxShadow: "none",
            zIndex: 1,
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // flexDirection: "column",
              mb: 4,
            }}
          >
            <Avatar
              src={artical.user.profile_image}
              alt={artical.user.name}
              sx={{ width: 52, height: 52, mr: 1 }}
            />
            <Box>
              {" "}
              <Typography variant="body2">{artical.user.name}</Typography>
              <Typography variant="body2">
                {artical.readable_publish_date}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6" sx={{ my: 1 }}>
            {artical.title}
          </Typography>
          <Typography variant="body2" sx={{ my: 1 }}>
            {artical.description}
          </Typography>
          <Link
            to={artical.user.website_url}
            target="blank"
            style={{ textDecoration: "underline" }}
          >
            View Blogger
          </Link>
        </Box>{" "}
      </Container>{" "}
      <Container>
        {" "}
        <Typography variant="h2" sx={{ mb: 2 }}>
          Suggested Posts
        </Typography>{" "}
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
      </Container>
    </>
  );
}

export default Writers;
