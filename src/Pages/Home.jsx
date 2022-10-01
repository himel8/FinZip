import React from "react";
import Description from "../Component/Home/Description/Description";
import FooterBanner from "../Component/Home/FooterBanner/FooterBanner";
import HeroSection from "../Component/Home/HeroSection/HeroSection";
import Testimonial from "../Component/Home/Testimonial/Testimonial";
import Footer from "../Component/shared/Footer";
import Navbar from "../Component/shared/Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Description />
      <Testimonial />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Home;
