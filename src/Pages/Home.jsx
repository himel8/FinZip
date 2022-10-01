import React from "react";
import Description from "../Component/Home/Description/Description";
import FooterBanner from "../Component/Home/FooterBanner/FooterBanner";
import HeroSection from "../Component/Home/HeroSection/HeroSection";
import Footer from "../Component/shared/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Description />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Home;
