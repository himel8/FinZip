import React from "react";
import Img1 from "../../../assets/img/testimonial1.png";
import Img2 from "../../../assets/img/testimonial2.png";
import Img3 from "../../../assets/img/testimonial3.png";
import Slider from "./Slider";

const testimonialData = [
  {
    img: Img1,
    desc: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    name: "Jane Cooper",
    deg: "Company Ceo",
    rating: 5,
    time: "9:51. Jan 13, 2022",
  },
  {
    img: Img2,
    desc: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    name: "Jane Cooper",
    deg: "Company Ceo",
    rating: 4,
    time: "9:51. Jan 13, 2022",
  },
  {
    img: Img3,
    desc: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    name: "Jane Cooper",
    deg: "Company Ceo",
    rating: 4,
    time: "9:51. Jan 13, 2022",
  },
];

const Testimonial = () => {
  return (
    <section className="min-h-screen">
      <h2 className="font-text text-5xl text-center font-light text-[#606060] mb-8">
        Testimonial
      </h2>
      <div className="bg-[#f4f5f7] py-28 px-10">
        <Slider testimonialData={testimonialData} />
      </div>
    </section>
  );
};

export default Testimonial;
