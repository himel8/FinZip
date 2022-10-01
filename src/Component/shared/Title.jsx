import React from "react";

const Title = ({ first, middle, last }) => {
  return (
    <h2 className="text-[2.5rem] leading-[2.8rem] md:text-6xl font-normal font-title text-center lg:text-left  md:leading-[3.8rem]">
      {first}
      <br />
      {middle}
      <br />
      {last}
    </h2>
  );
};

export default Title;
