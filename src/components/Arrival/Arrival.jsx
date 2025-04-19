import React from "react";
import Card from "../homepage/Favorite/Card";
import { motion } from "framer-motion";

export default function Arrival({startAnimation}) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}}
      className="min-h-[100svh] bg-white relative w-[100svw]"
    >
      <div className="flex flex-col items-center gap-8 px-[10vw] py-16">
        <div className=" flex flex-col gap-6 items-center">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            <span>New </span>Arrivals
          </h3>
          <p className="text-[#646464]">
          Discover the favorites that keep our customers coming back for more.
          </p>
        </div>
        <div className="flex gap-6 px-[4vw] py-[8vh] drop-shadow-sm">
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
