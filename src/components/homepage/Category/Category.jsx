import React from "react";

export default function Category({index}) {
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
        {index == 0 ? (
          <div className="grid grid-cols-2 gap-8 px-[5vw] py-[8vh]">
            <div
              style={{
                background: `linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)`,
              }}
              className="w-full aspect-video p-4 shadow-md rounded-2xl"
            >
              <img src="/images/dates.png" alt="" className="rounded-2xl" />
            </div>
            <div
              style={{
                background: `linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)`,
              }}
              className="w-full aspect-video p-4 shadow-md rounded-2xl"
            >
              <img src="/images/kunafa.png" alt="" className="rounded-2xl" />
            </div>
            <div></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8 w-fit py-6 h-fit relative">
            <div className="col-span-1 h-full relative">
              <img
                src="/images/category3.png"
                alt=""
                className="w-full rounded-2xl drop-shadow-sm"
              />
              <div className="bg-white p-4 flex w-[90%] justify-between items-center absolute bottom-0 rounded-2xl shadow-md m-[5%]">
                <h3 className="text-[#212529] font-bold">Choco bar</h3>
                <div className="rounded-full w-8 aspect-square flex justify-center items-center bg-[#EC1D23]">
                <span class="fa fa-arrow-right text-[#FFFFFF]"></span>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full relative">
              <img
                src="/images/category3.png"
                alt=""
                className="w-full rounded-2xl drop-shadow-sm"
              />
              <div className="bg-white p-4 flex w-[90%] justify-between items-center absolute bottom-0 rounded-2xl shadow-md m-[5%]">
                <h3 className="text-[#212529] font-bold">Choco bar</h3>
                <div className="rounded-full w-8 aspect-square flex justify-center items-center bg-[#EC1D23]">
                <span class="fa fa-arrow-right text-[#FFFFFF]"></span>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full relative">
              <img
                src="/images/category3.png"
                alt=""
                className="w-full rounded-2xl drop-shadow-sm"
              />
              <div className="bg-white p-4 flex w-[90%] justify-between items-center absolute bottom-0 rounded-2xl shadow-md m-[5%]">
                <h3 className="text-[#212529] font-bold">Choco bar</h3>
                <div className="rounded-full w-8 aspect-square flex justify-center items-center bg-[#EC1D23]">
                <span class="fa fa-arrow-right text-[#FFFFFF]"></span>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full relative">
              <img
                src="/images/category3.png"
                alt=""
                className="w-full rounded-2xl drop-shadow-sm"
              />
              <div className="bg-white p-4 flex w-[90%] justify-between items-center absolute bottom-0 rounded-2xl shadow-md m-[5%]">
                <h3 className="text-[#212529] font-bold">Choco bar</h3>
                <div className="rounded-full w-8 aspect-square flex justify-center items-center bg-[#EC1D23]">
                <span class="fa fa-arrow-right text-[#FFFFFF]"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
