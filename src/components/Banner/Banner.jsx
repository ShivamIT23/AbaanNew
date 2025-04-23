import React from "react";
import { motion } from "framer-motion";

export default function Banner({ imgSrc , startAnimation }) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}}
      className="w-full h-fit"
    >
      <img loading="lazy" src={imgSrc} alt="" />
    </motion.div>
  );
}
