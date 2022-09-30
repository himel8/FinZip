import React from "react";
import HeroBg from "../../../assets/img/hero-bg.png";
import Button from "../../shared/Button";
import SubText from "../../shared/SubText";
import Title from "../../shared/Title";

const HeroSection = () => {
  return (
    <section className="w-[80%] mx-auto flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-6">
        <Title first="Health" middle="Insurance." last="Simplified" />
        <SubText Style="">
          Insurance is a vital part of any business.
          <br /> Get industry-focused insurance solutions that are best-suited
          for your teams and business.
        </SubText>

        <div className="mt-4 flex gap-4 items-center">
          <Button Style="bg-black text-white" href="#!">
            Get Started
          </Button>
          <Button Style="border border-black" href="#!">
            Know More
          </Button>
        </div>
      </div>
      <div>
        <img src={HeroBg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
