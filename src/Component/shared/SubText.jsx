import React from "react";

const SubText = ({ children, style }) => {
  return <p className={`font-text text-lg ${style}`}>{children}</p>;
};

export default SubText;
