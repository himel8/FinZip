import React from "react";

const Title = ({ first, middle, last }) => {
  return (
    <h2 className="text-[3rem] md:text-6xl font-normal font-title text-center lg:text-left leading-[3.2rem] md:leading-[3.8rem]">
      {first}
      <br />
      {middle}
      <br />
      {last}
    </h2>
  );
};

export default Title;
