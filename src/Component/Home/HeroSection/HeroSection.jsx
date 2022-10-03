import React from "react";
import HeroBg from "../../../assets/img/hero-bg.png";
import Button from "../../shared/Button";
import SubText from "../../shared/SubText";
import Title from "../../shared/Title";

const HeroSection = () => {
  return (
    <section className="w-[95%] sm:w-[90%] md:w-[80%]  lg:w-[75%] mx-auto flex justify-center items-center min-h-screen flex-wrap-reverse lg:flex-nowrap gap-8 lg:gap-0 lg:mt-10 lg:my-0  my-20">
      <div className="flex flex-col gap-6">
        <Title first="Health" middle="Insurance." last="Simplified" />
        <SubText Style="px-4 lg:px-0 pr-0 lg:pr-8 text-lg">
          Insurance is a vital part of any business.
          <br /> Get industry-focused insurance solutions that are best-suited
          for your teams and business.
        </SubText>

        <div className="mt-4 flex gap-4 items-center lg:justify-start justify-center">
          <Button Style="bg-black text-white" link="#!">
            Get Started
          </Button>
          <Button Style="border border-black" link="#!">
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
