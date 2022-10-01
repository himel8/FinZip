import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import SubText from "./SubText";

const footerData = [
  {
    title: "Company info",
    link: [
      { name: "About Us", link: "#!" },
      { name: "Carrier", link: "#!" },
      { name: "We are hiring", link: "#!" },
      { name: "Blog", link: "#!" },
    ],
  },
  {
    title: "Features",
    link: [
      { name: "Business Marketing", link: "#!" },
      { name: "User Analytic", link: "#!" },
      { name: "Live Chat", link: "#!" },
      { name: "Unlimited Suport", link: "#!" },
    ],
  },
  {
    title: "Resources",
    link: [
      { name: "IOS & Android", link: "#!" },
      { name: "Watch a Demo", link: "#!" },
      { name: "Customers", link: "#!" },
      { name: "API", link: "#!" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-[#032d7a] pt-8 pb-16">
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto flex justify-start xl:justify-center items-start gap-10 lg:gap-20 flex-wrap px-2">
        <div>
          <h6 className="font-title text-2xl text-white font-normal mb-2">
            Get In Touch
          </h6>
          <SubText Style="text-white text-[1rem]">
            Lorem ipsum Lorem ipsum Lorem
          </SubText>
          <SubText Style="text-white text-[1rem]">
            Lorem ipsum Lorem ipsum Lorem
          </SubText>
          <div className="flex gap-6 text-white mt-4">
            <a href="#!">
              <BsFacebook className="text-2xl cursor-pointer hover:scale-125 transform transition-all ease-in-out duration-700" />
            </a>
            <a href="#!">
              <BsInstagram className="text-2xl cursor-pointer hover:scale-125 transform transition-all ease-in-out duration-700" />
            </a>
            <a href="#!">
              <BsTwitter className="text-2xl cursor-pointer hover:scale-125 transform transition-all ease-in-out duration-700" />
            </a>
          </div>
        </div>
        {footerData.map((data, index) => (
          <div key={index}>
            <h6 className="font-title text-2xl text-white font-normal mb-4">
              {data.title}
            </h6>
            {data.link.map((data, index) => (
              <a href={data.link} key={index}>
                <p className="font-text text-white text-[15px] text-left">
                  {data.name}
                </p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
