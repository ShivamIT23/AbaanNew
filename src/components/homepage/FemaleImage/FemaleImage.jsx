import style from "./FemaleImage.module.css";

export default function FemaleImage() {
  return (
    <div className="min-h-[50vh] h-fit w-[100svw] bg-white py-8">
      <div className="w-full flex justify-center relative">
        <img src="/images/dot1.png" alt="DOt Img" className="w-20" />
      </div>
      <div className="flex justify-between w-full h-fit min-h-full">
        <div className="flex justify-center px-[10vw] relative w-[50%] py-4">
          <div className="relative">
            <div className={`${style.shineback} w-full h-full`}></div>
            <img
              src="/images/cool-woman.png"
              alt=""
              className="relative z-20"
            />
          </div>
        </div>

        <div className="flex flex-col items-start pt-[10vh] gap-8 relative max-h-fit justify-center w-[50%] px-[6vw] py-4">
          <div className="globalHeaderFont text-5xl lg:pr-10 relative">
            Indulge in the rich flavors <br /> of <span>Dubai chocolates</span>
            <img
              src="/images/triangle1.png"
              alt="triangle"
              className="absolute bottom-0 right-20 w-10"
            />
          </div>
          <p className="text-[#646464]">
            From decadent pistachio truffles to smooth date-filled delights,
            <br /> explore our selection of traditional Middle Eastern chocolate
            treats.
          </p>
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
      <div className="flex justify-end pr-10 -mt-16">
        <img src="/images/halfCircle.png" alt="img4" className="w-32" />
      </div>
    </div>
  );
}
