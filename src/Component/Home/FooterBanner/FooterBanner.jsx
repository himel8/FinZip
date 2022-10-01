import React from "react";
import Button from "../../shared/Button";
import SubText from "../../shared/SubText";

const FooterBanner = () => {
  return (
    <section className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto bg-[#00A3D3] rounded-2xl">
      <div className="px-2 md:px-12 py-8  flex flex-col gap-6 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[60%] mb-6">
        <h4 className="text-[2.2rem] md:text-[2.5rem] leading-[2.4rem] text-white font-title md:leading-[2.7rem] font-normal md:text-left text-center">
          Get Comprhensive Coverage for Your Team
        </h4>
        <SubText Style="text-[1rem] text-white md:text-left">
          Reduce the Hassle of Employee Insurance <br />
          Management with an all-in-one Platform with Finzip
        </SubText>
        <div className="flex justify-center items-center md:justify-start">
          <Button Style="bg-white text-[#00A3D3] px-4 py-3" link="#!">
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
