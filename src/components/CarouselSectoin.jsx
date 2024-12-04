import Slider from "react-slick";
import { Box, Card, Typography, Avatar, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";
import { useData } from "@context/DataContext";

function CarouselSection() {
  const theme = useTheme();
  const { data } = useData();
  const slides = data.filter((blog) => blog.cover_image);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box sx={{ position: "relative", mt: 5, borderRadius: "8px" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ position: "relative", width: "100%" }}>
            <CardMedia
              component="img"
              width="100%"
              image={slide.cover_image}
              alt={"Blog Image"}
              sx={{
                height: { xs: "300px", sm: "auto" },
                borderRadius: "10px",
                pb: { xs: "18rem", md: "12rem" },
                boxShadow: "none",
              }}
            />
            <Card
              sx={{
                position: "absolute",
                bottom: { xs: "25%", sm: "15%", md: "10%" },
                left: { xs: "0rem", md: "3rem" },
                backgroundColor: theme.palette.background.component,
                padding: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                borderRadius: "8px",
                boxShadow: 2,
                zIndex: 1,
                maxWidth: { xs: "70%", md: "40%" },
                minWidth: { xs: "40%" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  width: "fit-content",
                  p: 1,
                  borderRadius: 1,
                  background: theme.palette.background.category,
                }}
              >
                {slide.tag_list[0] || "notCategorized"}
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 1, height: "2rem", overflow: "hidden" }}
              >
                {slide.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Avatar
                  src={slide.user.profile_image}
                  alt={slide.user.name}
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
                <Typography variant="body2">{slide.user.name}</Typography>
                <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                  {slide.readable_publish_date}
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CarouselSection;
