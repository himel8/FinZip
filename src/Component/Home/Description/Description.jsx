import React from "react";
import Desc1 from "../../../assets/img/desc1.png";
import Desc2 from "../../../assets/img/desc2.png";
import Desc3 from "../../../assets/img/desc3.png";
import Button from "../../shared/Button";
import SubText from "../../shared/SubText";

const descData = [
  {
    id: 1,
    link: "#!",
    img: Desc1,
    title: "Finzip For Businesses",
    muteText:
      "Finzip provides the comprehensive coverage that businesses need to protect themselves from liability. Our team of experienced insurance professionals are available to help your business choose the right coverage for your needs and  budget.",
    paraText:
      "Contact us today to learn more about our business insurance solutions.",
  },
  {
    id: 2,
    link: "#!",
    img: Desc2,
    title: "Employee Health Insurance",
    muteText:
      "At Finzip, we understand that your employee are your most valuable asset. We provide comprehehensive employee health insurance plans to keep them healthy and productive,",
    paraText:
      "Be assured of assisted cashiess claims experience and give you emloyees the peace of mind they deserve.",
  },
  {
    id: 3,
    link: "#!",
    img: Desc3,
    title: "Mutual Fund Investing Platform",
    muteText:
      "Our platform fiexibility to invest in smaller amounts, making it an ideal choice for those who want to make investments in smaller amounts periodically,",
    paraText: "Looking to invest in mutual fund?",
  },
];

const Description = () => {
  return (
    <section className="w-[80%] mx-auto">
      {descData.map((data) => (
        <div
          key={data.id}
          className={`flex justify-center items-center min-h-screen gap-6 ${
            data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="w-full">
            <img src={data.img} alt="" className="w-full" />
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="text-6xl font-normal font-title text-center lg:text-left mr-12">
              {" "}
              {data.title}{" "}
            </h2>
            <SubText Style={"text-[1rem]"}>{data.muteText}</SubText>
            <SubText>{data.paraText}</SubText>
            <div>
              <Button Style="bg-black text-white" href="#!">
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
