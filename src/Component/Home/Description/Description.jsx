import React from "react";

import Button from "../../shared/Button";
import SubText from "../../shared/SubText";
import { descData } from "./descriptionData";

const Description = () => {
  return (
    <section className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto">
      {descData.map((data) => (
        <div
          key={data.id}
          className={`flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap ${
            data.id === 1 ? "my-20 lg:mt-0 lg:mb-20" : "my-20"
          }  ${data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
        >
          <div className="w-full">
            <img src={data.img} alt="" className="w-full" />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-[2.5rem] leading-[2.8rem] md:text-6xl md:leading-[3.8rem] font-normal font-title text-center lg:text-left lg:mr-12 mr-0">
              {data.title}
            </h2>
            <SubText Style={"text-[1rem]"}>{data.muteText}</SubText>
            <SubText Style={"text-lg"}>{data.paraText}</SubText>
            <div className="flex justify-center lg:justify-start items-center">
              <Button Style="bg-black text-white" link="#!">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Description;
