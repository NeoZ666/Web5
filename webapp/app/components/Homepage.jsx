import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ArtistScrollbar from "./ArtistScrollbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArtistScrollbar />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
