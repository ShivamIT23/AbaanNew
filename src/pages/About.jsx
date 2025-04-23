import { useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { motion } from "framer-motion";
import NutsLeft from "../components/absoluteImages/NutsLeft";
import ChocolateLeft from "../components/absoluteImages/ChocolateLeft";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

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
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8"
      >
        <div className=" flex flex-col gap-8 h-fit">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            About Us
          </h3>
          <div className="w-full hidden md:flex justify-center">
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
          className=" rotate-180 hidden md:block h-[10svh] w-full"
        />
      </motion.section>
      <ImageSection />
      <Banner />
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-transparent md:page_container_reverse min-h-[40svh] h-fit w-[100svw] flex flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-4 items-center max-h-fit relative py-[4vh]">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
            Our<span> Statics</span>
          </h3>
          <p className="text-[#646464] text-center px-[1vw]">
            What makes us special through our impressive statistics.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full px-[10vw] pb-20 md:pb-2 gap-8">
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
        <section className="bg-transparent min-h-[30svh] h-fit w-[100svw] hidden md:flex flex-col items-center gap-6">
          <div className="w-full h-fit">
            <div className="w-full flex items-center justify-center relative h-[70vh]">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                src="/images/staticsMap.png"
                alt=""
                className="h-full drop-shadow-md"
              />
              <div className="absolute top-2/3 -translate-y-1/2 left-0 w-0 md:w-36 lg:w-60 z-[10]">
                <ChocolateLeft />
              </div>
            </div>
            <div className=" flex flex-col gap-4 items-center max-h-fit relative pt-[4vh]">
              <h3 className="globalHeaderFont text-3xl lg:text-4xl text-center px-[2vw]">
                Presence in<span> 23 </span>countries across{" "}
                <span>GCC, India,</span> and <span>Africa.</span>
              </h3>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="flex  gap-4 justify-center items-center ">
              <Countries country="Bahrain" />
              <Countries country="UAE" />
              <Countries country="India" />
              <Countries country="Oman" />
              <Countries country="Bangladesh" />
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Countries country="Thailand" />
              <Countries country="Kuwait" />
              <Countries country="Qatar" />
              <Countries country="Iraq" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row gap-4 pb-6 justify-center">
            <div className="flex gap-4 justify-center items-center">
              <Countries country="Saudi Arabia" />
              <Countries country="Lebanon" />
              <Countries country="Seychelles" />
              <Countries country="Yemen" />
            </div>
            <div className="flex gap-4 justify-center items-center">
              <Countries country="Guyana" />
              <Countries country="Uganda" />
              <Countries country="Jordan" />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-[7vh] items-center max-h-fit relative py-[4vh]">
            <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
              Our<span> Certifications</span>
            </h3>
          </div>
          <div className="grid justify-center grid-cols-6 pb-[7vh] h-fit w-full lg:grid-cols-8 gap-6 items-center px-[10vw] relative">
            <Certification
              title="FDA Registered"
              para="Ensures compliance for global export opportunities."
              titleColor="#EC1D23"
            />
            <Certification
              title="ISO Certification"
              para=" Demonstrates adherence to international standards of quality management"
              titleColor="#36196A"
            />
            <Certification
              title="HACCP Certification"
              para="Guarantees rigorous food safety and quality standards across production processes"
              titleColor="#EC1D23"
            />
            <div className="col-span-3 lg:col-span-2 flex justify-end lg:justify-center">
              <Certification
                title="Halal Certification"
                para="Meets the dietary needs of diverse consumer segments, including Halalcompliant markets."
                titleColor="#36196A"
              />
            </div>
            <div className="col-span-3 lg:col-span-8 flex justify-end lg:justify-center">
              <Certification
                title="KOSHER Certification"
                para="Meets the dietary needs of diverse consumer segments, including Halalcompliant markets."
                titleColor="#EC1D23"
              />
            </div>
            <NutsLeft className="absolute w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[50%] -translate-y-1/2 right-[2%]" />
          </div>
        </section>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="page_container_reverse min-h-[80svh] h-fit w-[100svw] hidden md:flex flex-col items-center pt-[4vh]"
      >
        <div className="flex flex-col gap-4 items-center max-h-fit relative py-[4vh]">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl text-center px-[2vw]">
            Major Outlet<span> We are available in</span>
          </h3>
        </div>
        <div className="w-full flex justify-center items-center h-fit py-[3vh]">
          <img src="/images/Available.png" alt="" className="w-[60%]" />
        </div>
        <div className="w-full flex gap-6 justify-center items-center h-fit py-[6vh]">
          <img
            src="/images/about_bottom1.png"
            alt=""
            className="w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            src="/images/about_bottom2.png"
            alt=""
            className="w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            src="/images/about_bottom3.png"
            alt=""
            className="w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
          <img
            src="/images/about_bottom4.png"
            alt=""
            className="w-[16%] hover:drop-shadow-lg transition hover:scale-105"
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

function ImageSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-[50vh] h-fit w-[100svw] md:bg-white py-8 relative"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly w-full h-fit min-h-full">
        <div className="globalHeaderFont block lg:hidden text-4xl text-center md:text-5xl lg:pr-10 relative">
          Our <span>Journey </span>Began
          <br /> With a Simple Dream
        </div>
        <div className="relative block lg:hidden w-[80%] text-[#646464]">
          <p
            className={`relative transition-all duration-300 ${
              !expanded ? "line-clamp-4 lg:line-clamp-none" : ""
            }`}
          >
            For over three decades, Abaan Chocolates has been dedicated to
            creating premium-quality chocolates that delight our customers. We
            take pride in our delectable range of classic flavors and the
            innovative recipes we've crafted. Whether you're celebrating a
            special occasion or simply indulging your love for chocolate, Abaan
            promises an exceptional experience with every bite of our exquisite
            chocolates and desserts.
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
        <div className="flex justify-center px-[5vw] relative w-full md:w-[80%] lg:w-[40%] py-4">
          <div className="relative">
            <div className=" shineback_About w-full h-full"></div>
            <img src="/images/about1.png" alt="" className="relative z-20" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pt-[10vh] gap-8 relative max-h-fit justify-center w-[80%] lg:w-[50%] md:pr-[12vw] py-4">
          <div className="globalHeaderFont lg:block hidden text-4xl text-center md:text-5xl lg:pr-10 relative">
            Our <span>Journey </span>Began
            <br /> With a Simple Dream
          </div>
          <div className="relative w-[80%] lg:block hidden text-[#646464]">
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
            <button className="btn-primary px-4 min-h-8 py-4 flex items-center text-lg">
              Explore Our Menu
              <img
                src="/images/btnArrow.svg"
                className="w-[3vw] max-w-[20px]"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <NutsLeft className="absolute w-0 md:w-28 lg:w-40 z-10 drop-shadow-lg top-[50%] -translate-y-1/2 right-[4%]" />
    </motion.div>
  );
}

function Banner() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative hidden md:block w-full h-fit"
      >
        <img src="/images/about_banner1.png" alt="" />
        <img
          src="/images/about_banner2.png"
          alt=""
          className="absolute z-10 right-0 h-[100%] bottom-0"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative block md:hidden w-full h-fit"
      >
        <img src="/images/about_banner3.png" alt="" />
      </motion.div>
    </>
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

function Countries({ country }) {
  return (
    <div className="flex gap-2">
      <img
        src="/images/location_about.png"
        alt=""
        className="drop-shadow-md w-8"
      />
      <p className="text-[#36196A] text-2xl font-bold drop-shadow-lg">
        {country}
      </p>
    </div>
  );
}

function Certification({ title, titleColor, para }) {
  return (
    <div className="col-span-2 flex gap-3 flex-col py-2 max-w-[400px] items-center">
      <p className={`text-[${titleColor}] font-bold text-center text-3xl`}>
        {title}
      </p>
      <p className="text-[#646464] text-center text-[18px]">{para}</p>
    </div>
  );
}
