import React, { useState } from "react";
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
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Home = () => {

  const [startAnimation,setStartAnimation] = useState(false);

  return (
    <motion.div 
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    onAnimationComplete={()=> setStartAnimation(true)} className="w-full bg-inherit md:bg-white">
      <Hero startAnimation={startAnimation} />
      <VideoSection startAnimation={startAnimation}  />
      <FemaleImage startAnimation={startAnimation}  />
      <Favorite startAnimation={startAnimation} />
      <Banner imgSrc={"/images/banner.png"} startAnimation={startAnimation} />
      <Range startAnimation={startAnimation} />
      <Category startAnimation={startAnimation} />
      <Banner imgSrc={"/images/banner2.png"} startAnimation={startAnimation} />
      <Sellers startAnimation={startAnimation} />
      <HeartPeople startAnimation={startAnimation} />
      <Arrival startAnimation={startAnimation} />
      <Instagram startAnimation={startAnimation} />
    </motion.div>
  );
};

export default Home;
