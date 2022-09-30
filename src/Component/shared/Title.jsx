import React from "react";

const Title = ({ first, middle, last }) => {
  return (
    <h2 className="text-6xl font-normal font-title text-center lg:text-left">
      {first}
      <br />
      {middle}
      <br />
      {last}
    </h2>
  );
};

export default Title;
