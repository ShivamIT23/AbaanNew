import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const images = ["dates", "kunafa", "baklava", "chocoBar"];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const offsetWidth = sliderRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <div className="w-fit overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex gap-8"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="w-[47%] max-w-fit p-4 shadow-md rounded-2xl shrink-0"
            style={{
              background: "linear-gradient(135deg,#F8EAE1 0%, #EFD7EF 100%)",
            }}
          >
            <img
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
