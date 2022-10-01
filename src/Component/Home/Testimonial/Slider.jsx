import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ testimonialData }) => {
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.75,
        },
        1200: {
          slidesPerView: 2.5,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testimonialData.map((data, index) => (
        <SwiperSlide key={index}>
          <div>
            <div className="px-6 bg-white mt-10">
              <div className="relative h-16">
                <img src={data.img} alt="" className="absolute -top-10 " />
              </div>
              <p className="font-text text-sm text-[#2C3E50] pb-4">
                {data.desc}
              </p>
              <div className="h-[2px] w-full bg-[#AFB6BD]" />
              <div className="flex justify-between items-start py-2">
                <div>
                  <p className="font-text font-lg">{data.name}</p>
                  <p className="font-text text-sm text-[#AFB6BD]">{data.deg}</p>
                </div>
                <div className="flex flex-col justify-end items-end gap-4">
                  <Rating
                    initialRating={data.rating}
                    emptySymbol={<BsStar className="text-[#f3cd03]" />}
                    fullSymbol={<BsStarFill className="text-[#f3cd03]" />}
                    readonly
                  />
                  <p className="font-text text-[15px] text-[#AFB6BD]">
                    {data.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
