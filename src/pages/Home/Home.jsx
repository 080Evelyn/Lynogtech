import Navbar from "../../components/Navbar";
import Hero from "../../ui/Hero";
import OurExpertise from "../../ui/OurExpertise";
import ServiceSlider from "../../ui/ServiceSlider";
import ClientTestimonials from "../../ui/ClientTestimonials";
import Footer from "../../components/Footer";
import Products from "../../ui/Products"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSlider />
       <Products />
      <OurExpertise />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
