import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative bottom-0 h-fit md:h-[40vh] min-h-[40vh] md:min-h-fit bg-[#36196A] w-[100svw] text-[#CFB6E2]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 h-fit bg-[#36196A] justify-evenly min-h-full items-center">
        <div className="h-[60%] flex pt-10 md:pt-0 items-start">
          <div className="w-fit p-[1vw] pb-[1.7vw] md:p-[0.7vw] md:pb-[1.3vw] lg:pb-[0.8vw] bg-[#EC1D23] rounded-[0.7vw] md:rounded-[0.5vw]">
            <img
              src="/images/logo.png"
              className="mix-blend-screen max-w-[20vw] xs:w-[15vw] sm:w-[13vw] md:w-[7vw] lgmd:w-[6vw] "
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col xs:flex-row flex-1 md:flex-none gap-10 justify-between md:justify-center h-fit items-center">
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg font-semibold">Navigation</h3>
            <ul className="flex gap-x-6 list-disc marker:text-[#EC1D23]">
              <li className="list-none">
                <ul className="flex flex-col gap-3 list-disc marker:text-[#EC1D23] pl-4">
                  <li>
                    <NavLink to="/" link="Home" />
                  </li>
                  <li>
                    <NavLink to="/about" link="About" />
                  </li>
                  <li>
                    <NavLink to="/shop" link="Shop" />
                  </li>
                </ul>
              </li>
              <li className="list-none">
                <ul className="flex flex-col gap-3 list-disc marker:text-[#EC1D23] pl-4">
                  <li>
                    <NavLink to="/products" link="Products" />
                  </li>
                  <li>
                    <NavLink to="/blog" link="Blog" />
                  </li>
                  <li>
                    <NavLink to="/contact" link="Contact" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 items-center">
              <img
                src="/images/location.png"
                alt="location"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">Address:</h3>
                <p>Dubai , 222222</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/images/email.png"
                alt="location"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">Email:</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row md:flex-col pb-10 gap-10">
          <div className="flex gap-4 items-center justify-center">
            <img src="/images/phone.png" alt="location" className="w-10 h-10" />
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-semibold text-lg">+1234567890</h3>
              <p>Got Questions? Call us 24/7</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img src="/images/email.png" alt="location" className="w-10 h-10" />
            <img src="/images/email.png" alt="location" className="w-10 h-10" />
            <img src="/images/email.png" alt="location" className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full min-h-[5vh] h-fit gap-4">
        <div className="bg-[#CFB6E2] h-[1px] w-[70%]"></div>
        <h3 className="pb-6 text-sm">Copyright © INFLUCON DIGITALS</h3>
      </div>
    </div>
  );
}

function NavLink({ to, link }) {
  const location = useLocation();

  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`${isActive ? "underline" : " no-underline"}`}>
      {link}
    </Link>
  );
}
