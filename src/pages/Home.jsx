import React, { useEffect, useState } from "react";
import Hero from "../components/homepage/hero/Hero";
import VideoSection from "../components/homepage/videoSection/VideoSection";
import FemaleImage from "../components/homepage/FemaleImage/FemaleImage";
import Favorite from "../components/homepage/Favorite/Favorite";
import Banner from "../components/Banner/Banner";
import Range from "../components/Range/Range";
import Category from "../components/homepage/Category/Category";
import Sellers from "../components/Sellers/Sellers";
import HeartPeople from "../components/homepage/HeartPeople/HeartPeople";
import Arrival from "../components/Arrival/Arrival";
import Instagram from "../components/Instagram/Instagram";

import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <VideoSection />
      <FemaleImage index={index} />
      <Favorite />
      <div className="bg-white w-full h-fit">
       <AnimatePresence mode="wait">
  {index === 0 && (
    <motion.div
      key="banner-and-range"
      initial={{ opacity: 0, scale: 0 ,y:10 }}
      animate={{ opacity: 1, scale: 1 ,y:0 }}
      exit={{ opacity:0 , scale: 0 ,y:10}}
      transition={{
        duration: 0.6,
        ease: [0.15, 0.6, 0.15, 0.7], // custom cubic bezier
      }}
      className="flex flex-col h-fit"
    >
      <Banner imgSrc={"/images/banner.png"} />
      <Range />
    </motion.div>
  )}
</AnimatePresence> 
      </div>
      <Category index={index} />
      <Banner imgSrc={"/images/banner2.png"} />
      <Sellers />
      <HeartPeople />
      <Arrival />
      <Instagram />
    </div>
  );
};

export default Home;
