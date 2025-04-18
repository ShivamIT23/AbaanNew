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


const Home = () => {

  return (
    <div className="w-full">
      <Hero />
      <VideoSection />
      <FemaleImage />
      <Favorite />
      <Banner imgSrc={"/images/banner.png"} />
      <Range />
      <Category />
      <Banner imgSrc={"/images/banner2.png"} />
      <Sellers />
      <HeartPeople />
      <Arrival />
      <Instagram />
    </div>
  );
};

export default Home;
