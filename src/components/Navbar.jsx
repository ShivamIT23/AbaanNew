import React from "react";
import { Link } from "react-router-dom";
import Hambutton from "./Hambutton";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full navbar max-w-[96svw] z-10 absolute left-0 top-0 sm:pt-3 md:pt-2 px-[8vw] lg:px-[9vw]">
      <div className="relative w-full flex justify-between items-center p-2">
        <div className="w-fit p-[1vw] pb-[1.7vw] md:p-[0.7vw] md:pb-[1.3vw] lg:pb-[0.8vw] bg-[#EC1D23] rounded-[0.7vw] md:rounded-[0.5vw]">
          <img
            loading="lazy"
            src="/images/logo.png"
            className="mix-blend-screen max-w-[20vw] xs:w-[15vw] sm:w-[13vw] md:w-[7vw] lg:w-[6vw] "
            alt=""
          />
        </div>
        <div className="absolute -right-4 xs:-right-7 z-40 text-[7vw] flex justify-center items-center cursor-pointer md:hidden">
          <Hambutton />
        </div>

        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-10">
          <Link
            to="/"
            className="flex items-center font-archivo gap-[2px] font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Home
            <div
              className="w-0 h-0 
            border-l-[0.4vw] border-l-transparent 
            border-r-[0.4vw] border-r-transparent 
            border-t-[0.4vw] border-t-red-600
            
            lgmd:border-l-[0.5vw] lgmd:border-r-[0.5vw] lgmd:border-t-[0.5vw]
            "
            ></div>
          </Link>

          <Link
            to="/shop"
            className="flex items-center font-archivo gap-[2px] font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Shop
            <div
              className="w-0 h-0 
            border-l-[0.4vw] border-l-transparent 
            border-r-[0.4vw] border-r-transparent 
            border-t-[0.4vw] border-t-black lgmd:border-l-[0.5vw] lgmd:border-r-[0.5vw] lgmd:border-t-[0.5vw]"
            ></div>
          </Link>

          <Link
            to="/about"
            className="flex items-center font-archivo gap-1 font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            About us
          </Link>

          <Link
            to="/contact"
            className="flex items-center font-archivo gap-1 font-normal text-[1.4vw] lg:text-[1.1vw]"
          >
            Contact us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-2xl">
            <IoSearchOutline />
          </div>

          <div className="relative">
            <img
            loading="lazy"
              src="/images/cart.png"
              className="w-[2vw] lgmd:w-[1.6vw]"
              alt=""
            />
            <h3 className="w-[2vw] h-[2vw] lgmd:w-[1.7vw] lgmd:h-[1.7vw] bg-[#683292] absolute font-archivo text-white right-[-0.8vw] bottom-[-0.8vw] rounded-full flex items-center justify-center text-[1vw] lgmd:text-[0.8vw]">
              2
            </h3>
          </div>

          <button className="btn-primary px-4 min-h-8 py-4 flex items-center text-lg">
            Contact us{" "}
            <img
            loading="lazy"
              src="/images/btnArrow.svg"
              className="w-[3vw] max-w-[20px]"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
