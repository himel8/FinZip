import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links?.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left lg:cursor-pointer group">
            <h3
              className="py-4 md:py-7 flex justify-between items-center lg:pr-0 pr-5 group font-link text-[#737373] text-[1rem]"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl lg:hidden inline">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <span className="text-xl lg:mt-1 lg:ml-2  lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <IoIosArrowDown />
              </span>
            </h3>
            {link?.submenu && (
              <div>
                <div className="absolute top-20  hidden group-hover:lg:block hover:lg:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link?.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h3 className="text-[1rem] font-link font-semibold">
                          {mysublinks?.Head}
                        </h3>
                        {mysublinks?.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              to={slink?.link}
                              className="hover:text-primary"
                            >
                              {slink?.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold lg:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl lg:mt-1 lg:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
