import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toogle, setToogle] = useState(false);

  return (
    <nav>
      <div className="w-full flex justify-between items-center navbar py-6">
        <img src={logo} alt=" HookBank" className="w-[124px] h-[32]" />
        <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } ${active === nav.title ? "text-white" : "text-dimWhite"} `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center flex-1">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[18px] h-[28px] object-contain"
            onClick={() => setToogle((prev) => !prev)}
          />

          <div
            className={` 
            ${
              toogle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className=" list-none justify-end items-center flex-col flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins mb-4 font-medium cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  }
                  text-white`}
                >
                  <a href={`#${nav.id}`} className="">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
