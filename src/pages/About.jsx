import { useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import ChocolateSide from "../components/ChocolateSide/ChocolateSide";

const statistics1 = [
  {
    number: 23,
    type: "Countries",
  },
  {
    number: 10,
    type: "Categories",
  },
  {
    number: 30,
    type: "Years of Experience",
  },
  {
    number: 143,
    type: "Employees Working",
  },
];

export default function About() {
  return (
    <div className="min-h-screen w-[100svw]">
      <section className="min-h-[60svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8">
        <div className=" flex flex-col gap-8 h-fit">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            About Us
          </h3>
          <div className="w-full flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">About Us</h3>
                </>
              }
            />
          </div>
        </div>

        <img
          src="/images/topPattern.png"
          alt="design top"
          className=" rotate-180 h-[10svh] w-full"
        />
      </section>
      <ImageSection />
      <Banner />
      <section className="bg-transparent md:bg-inherit page_container_reverse min-h-[40svh] h-fit w-[100svw] flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4 items-center max-h-fit relative py-[4vh]">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
            Our<span> Statics</span>
          </h3>
          <p className="text-[#646464] text-center px-[1vw]">
            What makes us special through our impressive statistics.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full px-[10vw] gap-8">
          {statistics1.map((card, index) => {
            return (
              <div
                key={index}
                className="col-span-1 w-full h-fit drop-shadow-lg"
              >
                <Card1 number={card.number} type={card.type} />
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit hidden md:block">
         <div className="w-full flex items-center justify-center relative h-[70vh]">
          <img src="/images/staticsMap.png" alt="" className="h-full drop-shadow-md" />
          <div className="absolute top-2/3 -translate-y-1/2 left-0 w-0 md:w-36 lg:w-60 z-[10]">
            <ChocolateSide />
          </div>
        </div>
        <div className=" flex flex-col gap-4 items-center max-h-fit relative pt-[4vh]">
          <h3 className="globalHeaderFont text-3xl lg:text-4xl text-center px-[2vw]">
            Presence in<span> 23 </span>countries across <span>GCC, India,</span> and <span>Africa.</span>
          </h3>
        </div> 
        </div>
        <div className="w-full h-fit flex md:flex-col lg:flex-row gap-4 justify-center">
          <Countries country="Bahrain" />
          <Countries country="UAE" />
          <Countries country="India" />
          <Countries country="Oman" />
          <Countries country="Bangladesh" />
          <Countries country="Thailand" />
          <Countries country="Kuwait" />
          <Countries country="Qatar" />
          <Countries country="Iraq" />
        </div>
        <div className="w-full h-fit flex md:flex-col lg:flex-row gap-4 pb-6 justify-center">
          <Countries country="Saudi Arabia" />
          <Countries country="Lebanon" />
          <Countries country="Seychelles" />
          <Countries country="Yemen" />
          <Countries country="Guyana" />
          <Countries country="Uganda" />
          <Countries country="Jordan" />
        </div>
      </section>
      <section className="page_container_reverse min-h-[80svh] h-fit w-[100svw] hidden md:flex flex-col items-center">
      </section>
    </div>
  );
}

function ImageSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="min-h-[50vh] h-fit w-[100svw] bg-white py-8 relative">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly w-full h-fit min-h-full">
        <div className="flex justify-center px-[5vw] relative w-[80%] lg:w-[40%] py-4">
          <div className="relative">
            <div className=" shineback_About w-full h-full"></div>
            <img src="/images/about1.png" alt="" className="relative z-20" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start pt-[10vh] gap-8 relative max-h-fit justify-center w-[80%] lg:w-[50%] pr-[12vw] py-4">
          <div className="globalHeaderFont text-5xl lg:pr-10 relative">
            Our <span>Journey </span>Began
            <br /> With a Simple Dream
          </div>
          <div className="relative w-[80%] text-[#646464]">
            <p
              className={`relative transition-all duration-300 ${
                !expanded ? "line-clamp-4 lg:line-clamp-none" : ""
              }`}
            >
              For over three decades, Abaan Chocolates has been dedicated to
              creating premium-quality chocolates that delight our customers. We
              take pride in our delectable range of classic flavors and the
              innovative recipes we've crafted. Whether you're celebrating a
              special occasion or simply indulging your love for chocolate,
              Abaan promises an exceptional experience with every bite of our
              exquisite chocolates and desserts.
              <img
                src="/images/triangle2.png"
                alt="triangle"
                className="absolute bottom-2/3 translate-y-1/2 -right-20 w-10"
              />
              <img
                src="/images/dot2.png"
                alt="Dot Img"
                className="w-20 absolute -bottom-6 -right-6"
              />
            </p>

            {/* Show toggle only on small & medium screens (lg:hidden) */}
            <div className="mt-2 lg:hidden">
              <button
                className="text-[#B67352] font-semibold"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
          <div className="flex w-fit h-fit">
            <button className="btn-primary p-8 h-8 flex items-center">
              Explore Our Menu
              <img
                src="/images/btnArrow.svg"
                className="btn-primary-img"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <img
        src="/images/nuts.png"
        alt="nuts"
        className="absolute  w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[50%] -translate-y-1/2 right-[4%]"
      />
    </div>
  );
}

function Banner() {
  return (
    <div className="relative w-full h-fit">
      <img src="/images/about_banner1.png" alt="" />
      <img
        src="/images/about_banner2.png"
        alt=""
        className="absolute z-10 right-0 h-[100%] bottom-0"
      />
    </div>
  );
}

function Card1({ number, type }) {
  return (
    <div className="border-b-2 border-[#EC1D23] bg-white rounded-2xl min-w-full w-fit sm:aspect-video ">
      <div className=" flex flex-col items-center max-h-fit h-full gap-3 md:gap-0 xl:gap-[20%] relative py-3 px-3 md:px-0 sm:py-[3vh] xl:py-[8%]">
        <h3 className="globalHeaderFont text-3xl sm:text-6xl lg:text-5xl xl:text-7xl">
          {number}
          <span>
            {" "}
            <sup>+</sup>
          </span>
        </h3>
        <p className="text-[#646464] text-xs sm:text-xl lg:text-lg xl:text-xl">
          {type}
        </p>
      </div>
    </div>
  );
}

function Countries({country}){
  return (
    <div className="flex gap-2">
      <img src="/images/location_about.png" alt="" className="drop-shadow-md w-8" />
      <p className="text-[#36196A] text-2xl font-bold drop-shadow-lg">{country}</p>
    </div>
  )
}