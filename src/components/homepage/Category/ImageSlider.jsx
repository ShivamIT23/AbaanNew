import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "../../../customHooks/useMediaQuery"; // adjust path as needed

const images = ["dates", "kunafa", "baklava", "chocoBar"];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);
  const isMedium = useMediaQuery("(min-width: 768px)");

  const updateWidth = () => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const offsetWidth = sliderRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  };

  useEffect(() => {
    const images = sliderRef.current?.querySelectorAll("img") || [];
    let loaded = 0;

    const handleLoad = () => {
      loaded += 1;
      if (loaded === images.length) {
        updateWidth();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => img.removeEventListener("load", handleLoad));
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={isMedium ? 0.05 : 0.1}
        dragTransition={{
          power: isMedium ? 0.1 : 0.2,
          timeConstant: isMedium ? 300 : 200,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="w-[80%] md:w-[47%] max-w-fit p-4 shadow-md rounded-2xl shrink-0"
            style={{
              background: "linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)",
            }}
          >
            <img
              loading="lazy"
              src={`/images/${img}.png`}
              alt={img}
              className="rounded-2xl w-fit h-full object-contain pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
