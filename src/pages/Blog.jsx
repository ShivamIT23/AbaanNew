import React from "react";
import { useEffect } from "react";
import TermsAndCondition from "../components/TermAndCondition/TermAndCondition";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Blog() {
  return (
    <div className="min-h-screen page_container pt-[20vh]">
      <BlogPage />
    </div>
  );
}

const BlogPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen text-[#0F0200] px-4 sm:px-8 py-12 font-archivo"
    >
      <header className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl sm:text-7xl globalHeaderFont mb-4 ">
          Abaan <span>Blogs</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#555] max-w-3xl mx-auto">
          Explore the latest insights, guides, and updates to help you get the
          most from your Abaan Fixed Deposit experience.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <article className="bg-white rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold text-[#683292] mb-3">
            Getting Started with Abaan FD
          </h2>
          <p className="text-base text-[#444] mb-4">
            Setting up your fixed deposit account with Abaan FD is fast and
            simple. This article walks you through the steps to get started
            seamlessly.
          </p>
          <a href="#" className="text-[#683292] font-medium hover:underline">
            Read more →
          </a>
        </article>

        <article className="bg-white rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold text-[#683292] mb-3">
            Why Choose Abaan FD?
          </h2>
          <p className="text-base text-[#444] mb-4">
            Learn about the key benefits of using Abaan FD, from attractive
            interest rates to high-level security and user-friendly services.
          </p>
          <a href="#" className="text-[#683292] font-medium hover:underline">
            Read more →
          </a>
        </article>
      </section>

      {/* Terms and Conditions Section */}
      <section
        id="termAndCondition"
        className="max-w-6xl mx-auto border-t border-[#E0DDEA] pt-12 mt-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h2>
        <TermsAndCondition />
      </section>
    </motion.main>
  );
};
