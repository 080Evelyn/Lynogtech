import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutUsDetails from "../../ui/AboutUsDetails";
import DedicatedTeam from "../../ui/DedicatedTeam";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUsDetails />
      <DedicatedTeam />
      <Footer />
    </div>
  );
};

export default About;
