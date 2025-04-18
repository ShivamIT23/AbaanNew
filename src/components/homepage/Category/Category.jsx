import React from "react";
import ImageSlider from "./ImageSlider";

export default function Category() {
  return (
    <div className="min-h-[60svh] h-fit bg-white relative w-[100svw]">
      <div className="flex flex-col items-center h-fit gap-6 px-[10vw] py-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Explore Our <span>Categories </span>
          </h3>
          <p className="text-[#646464]">
            Browse through our different categories to find your favorite ice
            cream treats.
          </p>
        </div>
       <ImageSlider /> 
      </div>
    </div>
  );
}
