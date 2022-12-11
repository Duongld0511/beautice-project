import React from "react";
import HomePage from "../../Pages/HomePage";
import HeaderLogo from "./../../assets/images/MainLogo.png";

const Header = () => {
  return (
    <div className="flex justify-between w-[1140px] mx-auto absolute top-0 left-0 right-0 ">
      <div className="py-5">
        <a href="#">
          <img alt="" src={`${HeaderLogo}`} />
        </a>
      </div>
      <div className="flex ">
        <ul className="flex gap-16 py-10 font-bold text-gray-500 ">
          <li>
            <a className="hover:text-blue-900" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="#">
              Service
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="#">
              Blog
            </a>
          </li>
        </ul>
        <div className=" py-7 mx-10">
          <button className="bg-[#FF64AE] rounded-full px-10 py-3 text-white font-semibold">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
