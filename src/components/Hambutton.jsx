import React, { useState, useEffect } from "react";
import { motion, MotionConfig } from "motion/react";
import useBreakpoint from "../customHooks/useBreakpoint";
import { Link } from "react-router-dom";

const Hambutton = () => {
  const [active, setActive] = useState(false);
  const breakpoint = useBreakpoint();

  // Lock body scroll when menu is active
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {/* White overlay that appears when menu is active */}
      {active && (
        <div className="absolute top-0 -left-[8vw] w-[100dvw] h-screen bg-white z-[100]">
          <div className="flex flex-col h-full w-full pt-[20vh] justify-start items-center gap-[6vh]">
            <div className="w-fit p-[1vw] pb-[1.7vw] md:p-[0.7vw] md:pb-[1.3vw] lg:pb-[0.8vw] bg-[#EC1D23] rounded-[0.7vw] md:rounded-[0.5vw]">
              <img
                loading="lazy"
                src="/images/logo.png"
                className="mix-blend-screen w-[60vw]  "
                alt=""
              />
            </div>
            <Link
              onClick={() => setActive(false)}
              to="/"
              className="flex items-center globalHeaderFont gap-[2px] font-semibold text-2xl"
            >
              Home
            </Link>

            <Link
              onClick={() => setActive(false)}
              to="/shop"
              className="flex items-center globalHeaderFont gap-[2px] font-semibold text-2xl"
            >
              Shop
            </Link>

            <Link
              onClick={() => setActive(false)}
              to="/about"
              className="flex items-center globalHeaderFont gap-[2px] font-semibold text-2xl"
            >
              About us
            </Link>

            <Link
              onClick={() => setActive(false)}
              to="/contact"
              className="flex items-center globalHeaderFont gap-[2px] font-semibold text-2xl"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}

      <MotionConfig
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.button
          onClick={() => setActive((prev) => !prev)}
          className="fixed top-0 right-4 z-[110] h-[12vw] w-[12vw] sm:h-[8.5vw] sm:w-[8.5vw] rounded-full bg-blue transition-colors"
          animate={active ? "open" : "closed"}
        >
          {/* Top line */}
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

          {/* Middle line */}
          <motion.span
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            className="absolute h-[2.3px] w-[6vw] bg-[#36196A] sm:w-[5vw]"
            variants={{
              open: { rotate: ["0deg", "0deg", "-45deg"] },
              closed: { rotate: ["-45deg", "0deg", "0deg"] },
            }}
          ></motion.span>

          {/* Bottom line */}
          <motion.span
            style={{ x: "-50%", y: "50%", bottom: "35%", left: "50%" }}
            className="absolute h-[2.3px] w-[6vw] bg-[#36196A] xs:h-[2.7px] sm:w-[5vw]"
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
    </>
  );
};

export default Hambutton;
