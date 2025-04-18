export default function VideoSection() {
  return (
    <div className="min-h-[100svh] md:bg-white flex justify-start py-[10vh] gap-16 flex-col items-center">
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
      <div className="relative h-fit flex justify-center">
        <div className="absolute inset-0 w-full md:w-[71vw] h-full flex justify-center items-center z-0">
          <div className="w-[80%] md:w-[69vw] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7f00ff] via-[#e100ff] to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute z-10 w-full md:w-[71vw] h-full">
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
        <div className="absolute md:w-20 lg:w-32 md:h-20 lg:h-32 md:-top-2 lg:-top-6 md:-left-2 lg:-left-6 rounded-xl z-0 bg-gray-100"></div>
        <div className="absolute md:w-20 lg:w-36 shadow-md h-32 md:-bottom-2 lg:-bottom-6 md:right-[30%] rounded-xl z-0 bg-gray-100"></div>
        <div className="w-[80%] md:w-[72vw] box-border rounded-2xl h-fit bg-gray-100 p-[0.8vw] relative z-20">
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
    </div>
  );
}
