import React from "react";

const SubText = ({ children, Style }) => {
  return <p className={`font-text text-lg ${Style}`}>{children}</p>;
};

export default SubText;
