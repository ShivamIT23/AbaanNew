import { motion } from "framer-motion";

export default function VideoSection({startAnimation}) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}} className="min-h-[100svh] md:bg-white flex justify-start py-[10vh] gap-16 flex-col items-center">
      <div className="flex justify-start flex-col items-center gap-6">
        <h2 className="globalHeaderFont text-4xl sm:text-5xl md:text-6xl text-center">
          <span>Kunafa </span>Chocolates!
        </h2>
        <p className="text-[#646464] text-center px-[10vw] sm:px-[30vw]">
          Kunafa Chocolates by Abaan Chocolates (Dubai) combine crispy Middle
          Eastern kunafa layers with smooth premium chocolate, offering a
          luxurious, irresistible treat that balances crunch and velvety
          richness in every bite. Perfect for dessert lovers!
        </p>
      </div>
      <div className="relative h-fit w-full flex justify-center py-10">
        <div className="absolute inset-0 w-[76vw] left-1/2 -translate-x-1/2 h-full hidden md:flex justify-center items-center">
          <img className="w-[100%] h-[110%]" src="/images/videoBack.png" />
          <div className="absolute z-10 w-[95%] h-full">
            {/* Splashes */}
            <img
              src="/images/splashLeft.png"
              className="absolute -left-10 md:-left-28 lg:-left-32 top-1/2 -translate-y-1/2 w-32 sm:w-52 z-10"
            />
            <img
              src="/images/splashRight.png"
              className="absolute -right-10 md:-right-24 lg:-right-32 top-2/3 -translate-y-1/2 w-32 sm:w-52 z-10"
            />
          </div>
        </div>
        <div className="w-[80%] md:w-[72vw] box-border rounded-2xl h-fit relative z-20">
          <video
            src="/video/abaan1.mp4"
            className="w-full rounded-2xl"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
        <div className="flex ">
        <button className="btn-primary px-4 min-h-8 flex items-center">
            Explore Our Menu
            <img
              src="/images/btnArrow.svg"
              className="btn-primary-img"
              alt=""
            />
          </button>
        </div>
    </motion.div>
  );
}
