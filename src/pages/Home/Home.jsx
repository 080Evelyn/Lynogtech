import Navbar from "../../components/Navbar";
import Hero from "../../ui/Hero";
import OurExpertise from "../../ui/OurExpertise";
import ServiceSlider from "../../ui/ServiceSlider";
import ClientTestimonials from "../../ui/ClientTestimonials";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSlider />
      <OurExpertise />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
