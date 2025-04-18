import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import useBreakpoint from "../customHooks/useBreakpoint";

const Hambutton = () => {
  const [active, setActive] = useState(false);

  const breakpoint = useBreakpoint();

  const topVariants = {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top:
        breakpoint === "xs"
          ? ["45%", "50%", "50%"]
          : breakpoint === "vsm"
          ? ["35%", "50%", "50%"]
          : ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: breakpoint === "xs" ? ["50%", "50%", "25%"] : ["50%", "50%", "35%"],
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        onClick={() => setActive((prev) => !prev)}
        className="relative h-[12vw] w-[12vw] sm:h-[8.5vw] sm:w-[8.5vw] rounded-full bg-blue transition-colors"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{ y: "-50%", left: "50%", x: "-50%", top: "20%" }}
          className="absolute h-[2.3px] w-[6vw] bg-[#36196A] xs:h-[2.7px] sm:w-[5vw]"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        ></motion.span>

        <motion.span
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          className="absolute h-[2.3px]  w-[6vw] bg-[#36196A]  sm:w-[5vw]"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        ></motion.span>

        <motion.span
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "50%",
          }}
          className="absolute  h-[2.3px]   w-[6vw] bg-[#36196A] xs:h-[2.7px]  sm:w-[5vw]"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
};

export default Hambutton;
