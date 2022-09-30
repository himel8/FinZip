import React from "react";

const Button = ({ link, children, Style }) => {
  return (
    <a
      href={link}
      className={`py-2 px-6 rounded cursor-pointer transform transition-all ease-in-out duration-700 hover:scale-105 ${Style}`}
    >
      {children}
    </a>
  );
};

export default Button;
