import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`z-[100] top-0 w-full ${
        open ? "bg-white fixed shadow-2xl" : "bg-transparent absolute"
      } duration-500`}
    >
      <div className="flex items-center font-medium justify-between w-[95%] xl:w-[80%] mx-auto ">
        <div className={`z-50 py-5 px-1 lg:w-auto w-full flex justify-between`}>
          <img src={Logo} alt="logo" className="lg:cursor-pointer h-9" />
          <div
            className="text-3xl lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
        <ul className="lg:flex hidden capitalize items-center gap-6 xl:gap-10">
          <li>
            <Link
              to="/"
              className="py-7 px-3 inline-block font-link text-[#737373] text-[1rem]"
            >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="lg:block hidden">
          <Button
            Style="font-link text-[#737373] text-[1rem] border border-[#737373] mr-2"
            link="/signin"
          >
            Login
          </Button>
          <Button
            Style="font-link bg-black text-white text-[1rem] ml-2"
            link="/signup"
          >
            Sign Up
          </Button>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white absolute w-full h-screen top-0 overflow-y-auto bottom-0 py-24 pl-4 scrollbar-hide
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className="py-5 px-3 inline-block font-link text-[#737373] text-[1rem]"
            >
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button
              Style="font-link text-[#737373] text-[1rem] border border-[#737373] mr-2"
              link="/signin"
            >
              Login
            </Button>
            <Button
              Style="font-link bg-black text-white text-[1rem] ml-2"
              link="/signup"
            >
              Sign Up
            </Button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
