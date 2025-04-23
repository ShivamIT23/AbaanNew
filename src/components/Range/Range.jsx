import React from "react";
import { motion } from "framer-motion";
import { products } from "../../lib/ProductList";
import NutsLeft from "../absoluteImages/NutsLeft";
import ChocolateRight from "../absoluteImages/ChocolateRight";
import ChocolateLeft from "../absoluteImages/ChocolateLeft";

export default function Range({ startAnimation }) {
  return (
    <motion.div
      key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] hidden md:block h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 lg:-top-36 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateLeft />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="" />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Our Different range of <span>Products </span>
          </h3>
          <p className="text-[#646464]">
            Browse through our different categories to find your favorite ice
            cream treats.
          </p>
        </div>
        <NutsLeft className="absolute w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[25%] -translate-y-1/2 right-[10%]" />
        <div className="grid grid-cols-3 gap-8 px-[16vw] py-[8vh]">
          {products.map((card, index) => {
            return <Card key={index} imgSrc={card.imgSrc} title={card.name} />;
          })}
        </div>
      </div>
      <div className="absolute -bottom-36 lg:-bottom-52 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}

function Card({ title, imgSrc }) {
  return (
    <div className="flex flex-col gap-5 w-full col-span-1 ">
      <img
        style={{
          background: `linear-gradient(135deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)`,
        }}
        src={imgSrc}
        alt="img"
        className="py-4 px-5 w-full aspect-square shadow-lg rounded-xl"
      />
      <h3
        style={{
          background: `linear-gradient(135deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)`,
        }}
        className="globalHeaderFont px-4 py-2 shadow-lg rounded-xl text-center text-xl"
      >
        <span>{title}</span>
      </h3>
    </div>
  );
}
