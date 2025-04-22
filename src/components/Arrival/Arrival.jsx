import React from "react";
import { motion } from "framer-motion";
import ProductComponent from "../ProductComponent/ProductComponent";
import { productList3 } from "../../lib/ProductList";

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
        <ProductComponent productList={productList3} />
      </div>
    </motion.div>
  );
}
