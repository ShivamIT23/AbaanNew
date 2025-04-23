import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../../ProductComponent/ProductComponent";
import { productList1 } from "../../../lib/ProductList";
import ChocolateLeft from "../../absoluteImages/ChocolateLeft";

export default function Favorite({startAnimation}) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}}
      className="min-h-[100svh] page_container_reverse relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateLeft />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="hidden md:block" />
      <div className="flex flex-col items-center gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Our <span>Classic </span>Favorites
          </h3>
          <p className="text-[#646464]">
            Check out our top products that our customers love.
          </p>
        </div>
        <ProductComponent productList={productList1} />
      </div>
    </motion.div>
  );
}
