import React from "react";
import HeroBg from "../../../assets/img/hero-bg.png";
import SubText from "../../shared/SubText";
import Title from "../../shared/Title";

const HeroSection = () => {
  return (
    <section className="w-[80%] mx-auto flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-6">
        <Title first="Health" middle="Insurance." last="Simplified" />
        <SubText style="">
          Insurance is a vital part of any business.
          <br /> Get industry-focused insurance solutions that are best-suited
          for your teams and business.
        </SubText>

        <div className="mt-4 flex gap-4 items-center">
          <a href="#!" className="py-2 px-6 bg-black text-white rounded ">
            Get Started
          </a>
          <a href="#!" className="py-2 px-6 border border-black rounded">
            Know More
          </a>
        </div>
      </div>
      <div>
        <img src={HeroBg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
