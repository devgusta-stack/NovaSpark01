import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesCard from "../components/ServicesCard";
import PortfolioGrid from "../components/PortfolioGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesCard />
      <PortfolioGrid />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
