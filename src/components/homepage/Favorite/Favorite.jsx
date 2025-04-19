import React from "react";
import ChocolateSide from "../../ChocolateSide/ChocolateSide";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Favorite({startAnimation}) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}}
      style={{
        background: `linear-gradient(315deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 99%)`,
      }}
      className="min-h-[100svh] relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateSide />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="" />
      <div className="flex flex-col items-center gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Our <span>Classic </span>Favorites
          </h3>
          <p className="text-[#646464]">
            Check out our top products that our customers love.
          </p>
        </div>
        <div className="flex gap-6 px-[4vw] py-[8vh]">
          <Card
            imgSrc="/images/choco1.png"
            bgColor="#F7F2F7"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco2.png"
            bgColor="#FFEEEE"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco3.png"
            bgColor="#F6F9E1"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco4.png"
            bgColor="#FFFAF4"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
        </div>
      </div>
    </motion.div>
  );
}
