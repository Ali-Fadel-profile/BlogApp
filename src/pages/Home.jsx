import BlogsContainer from "@components/BlogsContainer";
import CarouselSection from "@components/CarouselSectoin";
import LoadingSpinner from "@components/LoadingSpinner";
import Error from "@components/Error";
import { useData } from "@context/DataContext";
import { Container } from "@mui/material";

function Home() {
  const { loading, error } = useData();
  if (loading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <Container>
        <CarouselSection />
        <BlogsContainer />
      </Container>
    );
  }
}

export default Home;
