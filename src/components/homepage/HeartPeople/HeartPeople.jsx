import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const peopleThoughts = [
  {
    name: "Kevin Andrew",
    type: "Happy Customer",
    para: `I recently tried Abaan Chocolates and I must say, they are
            absolutely delightful! Each piece is a perfect blend of rich flavors
            and smooth textures that melt in your mouth. The variety they offer
            is impressive, from classic dark chocolate to unique flavors like
            sea salt caramel and raspberry truffle. It's clear that a lot of
            care goes into crafting these chocolates. Perfect for gifting or
            treating yourself, Abaan Chocolates truly elevate the chocolate
            experience!`,
    lastStar: (
      <span className="relative inline-block w-4 h-4">
        <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
        <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-full h-full overflow-hidden"></span>
      </span>
    ),
  },
  {
    name: "Shivam Gupta",
    type: "Loyal Customer",
    para: `The first time I tasted Abaan Chocolates, it felt like discovering a hidden gem. I picked one up without expecting much—but the moment it touched my tongue, I was hooked. The smoothness, the balance of flavors, the little surprises like a hint of sea salt or a burst of raspberry—it was all there. It’s not just chocolate; it’s an experience, wrapped in elegance. Whether you’re sharing it with a friend or enjoying it solo on a quiet evening, Abaan Chocolates have a way of making any moment feel special`,
    lastStar: (
      <span className="relative inline-block w-4 h-4">
        <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
        <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-1/3 h-full overflow-hidden"></span>
      </span>
    ),
  },
  {
    name: "Billy Frost",
    type: "Regular Customer",
    para: `Abaan Chocolates deliver on both quality and flavor. The texture is silky and rich, and the flavors are well-balanced without being overly sweet. I appreciated the thoughtful selection—from traditional dark and milk varieties to more adventurous options like sea salt caramel and raspberry truffle. Packaging is elegant, making it ideal for gifts. If you're a chocolate enthusiast looking for something premium yet accessible, Abaan Chocolates are definitely worth trying.`,
    lastStar: (
      <span className="relative inline-block w-4 h-4">
        <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
        <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-1/2 h-full overflow-hidden"></span>
      </span>
    ),
  },
];

export default function HeartPeople({ startAnimation }) {
  const [customerNumber, setCustomerNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerNumber((prev) => (prev + 1) % peopleThoughts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCustomerNumber(index);
  };

  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EFD7EF 8%, #F5F9FC 40%, #F8EAE1 66%, #EAF8F9 91%)`,
      }}
      className="w-[100svw] py-[3vh] min-h-screen relative h-fit flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col w-[70%] md:w-[50%] min-h-[50vh] h-fit relative justify-between items-center">
        <img
          loading="lazy"
          src="/images/quotes1.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%]"
        />
        <h3 className=" heartText leading-[1.4] text-5xl text-center lg:text-[3.75rem] pt-4 px-[5vw] w-full">
          Hear from Our <span>Happy Chocolate </span>Lovers
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={customerNumber}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 font-archivo px-[5vw] items-center h-fit text-center"
          >
            <p className="text-[#0F0200] font-bold">
              {peopleThoughts[customerNumber].para}
            </p>

            <div className="flex flex-col gap-3 items-center">
              <h4 className="text-[#EC1D23] font-semibold text-2xl">
                {peopleThoughts[customerNumber].name}
              </h4>
              <p className="text-[#646464] text-lg">
                {peopleThoughts[customerNumber].type}
              </p>
              <div className="w-full flex justify-center gap-1">
                <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                {peopleThoughts[customerNumber].lastStar}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-4">
        {peopleThoughts.map((_, i) => (
          <svg
            key={i}
            onClick={() => handleDotClick(i)}
            className={`${
              customerNumber === i ? "scale-150" : "cursor-pointer"
            } transition`}
            width="24"
            height="13"
            viewBox="0 0 24 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.5"
              width="13"
              height="13"
              rx="6.5"
              fill={customerNumber === i ? "#EC1D23" : "#E1E1E2"}
            />
          </svg>
        ))}
      </div>

      {/* Decorative people images */}
      <>
        <img
          loading="lazy"
          src="/images/person1.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[10%] md:top-[30%] left-0 md:left-[8%] xl:left-[13%]"
        />
        <img
          loading="lazy"
          src="/images/person2.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[60%] left-[2.5%] md:left-[12%] xl:left-[16%]"
        />
        <img
          loading="lazy"
          src="/images/person3.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[35%] md:top-[40%] left-[5%] md:left-[15%] xl:left-[23%]"
        />
        <img
          loading="lazy"
          src="/images/person4.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[85%] md:top-[70%] left-[7.5%] md:left-[20%] xl:left-[28%]"
        />
        <img
          loading="lazy"
          src="/images/person5.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[10%] md:top-[30%] right-[0%] md:right-[8%] xl:right-[13%]"
        />
        <img
          loading="lazy"
          src="/images/person6.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[60%] right-[2.5%] md:right-[12%] xl:right-[16%]"
        />
        <img
          loading="lazy"
          src="/images/person7.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[35%] md:top-[40%] right-[5%] md:right-[15%] xl:right-[23%]"
        />
        <img
          loading="lazy"
          src="/images/person8.png"
          alt=""
          className="w-12 sm:w-16 lg:w-20 absolute top-[85%] md:top-[70%] right-[7.5%] md:right-[20%] xl:right-[28%]"
        />
      </>
    </motion.div>
  );
}
