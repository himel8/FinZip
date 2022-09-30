import React from "react";

const SubText = ({ children, Style }) => {
  return (
    <p className={`font-text text-lg text-center lg:text-left ${Style}`}>
      {children}
    </p>
  );
};

export default SubText;
