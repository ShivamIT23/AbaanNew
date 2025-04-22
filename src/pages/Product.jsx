import { useEffect, useState } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { motion, AnimatePresence } from "framer-motion";
import ProductComponent from "../components/ProductComponent/ProductComponent";
import { useCartStore } from "../context/Cart";
import { useLocation } from "react-router-dom";
import {
  productList1,
  productList2,
  productList3,
  getProductById,
} from "../lib/ProductList";

const tabs = ["Description", "Additional Information", "Reviews"];

export default function Product() {
  const [count, setCount] = useState(1);
  const [inView, setInView] = useState(0);
  const [inHeading, setInHeading] = useState("Description");
  const addToCart = useCartStore((state) => state.addToCart);
  const location = useLocation();
  const [product, setProduct] = useState(productList1[0]);

  useEffect(() => {
    const gottenId = location.pathname.replace("/shop/", "");
    if (!gottenId) return;
    const productGot = getProductById(gottenId);
    console.log(productGot);
    setProduct(productGot);
  }, [location.pathname]);

  const handleCartAdd = () => {
    let res = 0;
    if (count > 0)
      res = addToCart({
        id: product.id,
        price: product.price,
        name: product.name,
        image: product.img,
        quantity: count,
      });
      if(res == "success"){
        alert("Added To Cart Sucessfully")
      }
      else{
        alert("Currently not available")
      }
  }

  const sortedTabs = [inHeading, ...tabs.filter((t) => t !== inHeading)];

  return (
    <main className="min-h-screen w-[100svw]">
      <section className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8">
        <div className=" flex flex-col gap-8 h-fit pb-[5vh]">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Products
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">
                    <a href="/shop">Shop</a>
                  </h3>
                  <p className="">/</p>
                  <h3 className="">Product Detail</h3>
                </>
              }
            />
          </div>
        </div>
        <section className="bg-[#F8F4F1] relative w-fit px-4 py-10 rounded-2xl shadow-component h-fit md:bg-transparent mx-[6vw] lg:mx-0">
          <section className="w-full min-h-[60svh] flex justify-center h-fit items-center">
            <div className="w-full md:w-[80%] h-fit flex flex-col lg:flex-row justify-center gap-6">
              <div className="md:hidden block">
                <div className="w-full flex justify-start gap-1">
                  <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                  <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                  <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                  <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                  <span className="relative inline-block w-4 h-4">
                    <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
                    <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-[80%] h-full overflow-hidden"></span>
                  </span>
                  <span className="font-archivo">(4.9/5)</span>
                </div>
                <p className="w-full text-[#212529] font-bold text-3xl pb-8">
                  Assorted Chocolate <br />
                  Dates
                </p>
              </div>
              <div className="flex justify-center gap-6 w-full lg:w-[60%]">
                {/* Thumbnail column */}
                <div className="w-[30%] lg:w-[20%] hidden md:flex flex-col items-center gap-6 my-auto">
                  {[1, 2, 3, 4].map((num, idx) => (
                    <img
                      onClick={() => setInView(idx)}
                      key={idx}
                      src={product.img}
                      alt={`choco-${num}`}
                      className={`w-[20%] mx-auto md:mx-0 md:w-[70%] h-[25%] rounded-lg cursor-pointer 
          ${
            idx === inView
              ? "border-2 border-red-400 bg-transparent"
              : "border border-transparent hover:border-blue-400 bg-[#FFFAF4]"
          } 
          transition-all duration-200`}
                    />
                  ))}
                </div>

                {/* Main preview */}
                <div className="md:w-[70%] lg:w-[80%] rounded-xl flex justify-center items-center bg-[#FFFAF4] md:drop-shadow-md drop-shadow-xl">
                  <img
                    src={product.img}
                    alt="Main Chocolate"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Thumbnail column */}
              <div className="w-full flex md:hidden drop-shadow-lg items-center gap-6 my-auto">
                {[1, 2, 3, 4].map((num, idx) => (
                  <img
                    onClick={() => setInView(idx)}
                    key={idx}
                    src={product.img}
                    alt={`choco-${num}`}
                    className={`w-[20%] mx-auto md:mx-0 md:w-[70%] h-[25%] rounded-lg cursor-pointer 
          ${
            idx === inView
              ? "border-2 border-red-400 bg-transparent"
              : "border border-transparent hover:border-blue-400 bg-[#FFFAF4]"
          } 
          transition-all duration-200`}
                  />
                ))}
              </div>
              <div className="lg:w-[40%] lg:flex-auto rounded-xl flex flex-col justify-start items-center p-6">
                <div className="hidden md:flex w-full flex-col justify-start items-start">
                  <div className="w-full flex justify-start gap-1">
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="fa fa-star text-[#FBAB2A] pr-1"></span>
                    <span className="relative inline-block w-4 h-4">
                      <span className="fa fa-star absolute top-0 left-0 text-gray-600 w-full h-full"></span>
                      <span className="fa fa-star absolute top-0 left-0 text-[#FBAB2A] w-[80%] h-full overflow-hidden"></span>
                    </span>
                    <span className="font-archivo">(4.9/5)</span>
                  </div>
                  <p className="w-full text-[#212529] font-bold text-3xl pb-8">
                    Assorted Chocolate <br />
                    Dates
                  </p>
                </div>

                <h4 className="text-[#646464] text-xl font-archivo">
                  <p className="text-[#AAAAAA] text-[12px]">
                    AED{" "}
                    <span className="text-[#EC1D23] text-xl font-bold">
                      {product.price}
                    </span>
                  </p>
                  Delight in our Assorted Chocolate Dates, a luxurious treat
                  that combines the rich sweetness of premium dates with a
                  velvety chocolate coating. Each bite offers a perfect balance
                  of chewy texture and indulgent flavor, making them an ideal
                  snack or gift for any occasion. Enjoy a taste of decadence
                  that satisfies your sweet cravings!
                </h4>
                <div className="w-full h-[1px] bg-[#AAAAAA] my-8"></div>
                <div className="w-full flex flex-col md:flex-row gap-3">
                  <div className="flex w-[50%] md:max-w-[300px] md:mx-0 mx-auto">
                    <button
                      onClick={() => {
                        if (count > 0) setCount((prev) => prev - 1);
                      }}
                      className="w-[35%] border border-[#AAAAAA] rounded-l-full px-4 min-h-8 py-3 flex items-center justify-center text-lg"
                    >
                      -
                    </button>
                    <button className="w-[35%] border-y-[1px] border-[#AAAAAA] px-4 min-h-8 py-3 flex items-center justify-center text-lg">
                      {count}
                    </button>
                    <button
                      onClick={() => setCount((prev) => prev + 1)}
                      className="w-[35%] border border-[#AAAAAA] rounded-r-full px-4 min-h-8 py-3 flex items-center justify-center text-lg"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex ">
                    <button
                      onClick={handleCartAdd}
                      className="btn-primary w-full justify-center px-4 min-h-8 py-3 flex items-center text-lg"
                    >
                      Add to Cart
                      <img
                        src="/images/btnArrow.svg"
                        className="w-[3vw] max-w-[20px]"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full min-h-[40svh] h-fit flex flex-col justify-center items-center">
            <div className="w-full md:w-[70%] flex flex-wrap md:flex-nowrap border-b-[1px] font-bold text-xl border-[#AAAAAA] relative">
              {sortedTabs.map((title, idx) => {
                const isActive = title === inHeading;
                return (
                  <motion.div
                    layout
                    key={title}
                    onClick={() => setInHeading(title)}
                    className={`relative pb-2 md:pb-4 pr-4 pl-1 cursor-pointer 
          ${idx === 0 ? "w-full md:w-auto" : "mt-2 md:mt-0"}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      layout: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  >
                    <motion.h3
                      className={`transition-colors duration-300 ${
                        isActive ? "text-[#EC1D23]" : "text-[#0F0200]"
                      }`}
                    >
                      {title}
                    </motion.h3>

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-[50%] md:w-full h-[3px] bg-[#EC1D23] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={inHeading} // triggers animation on change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-[70%] flex flex-col gap-4 py-4 font-normal text-[16px] justify-between items-start leading-7"
              >
                <p className="text-[#787878]">
                  Ratione volurtatem serui nesciunt neaue porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam corporis suscipit laboriosam, nisi ut aliquid ex
                  ea commodi consequatur.
                </p>
                <p className="text-[#787878]">
                  Quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt porro quisquam est, qui dolore ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptate ruis aute irure dolor in reprehenderit.
                </p>
              </motion.div>
            </AnimatePresence>
          </section>
          <img
            src="/images/topPattern.png"
            alt="design top"
            className=" rotate-180 hidden md:block h-[10svh] -ml-4  absolute bottom-0 w-[100svw]"
          />
        </section>
      </section>
      <section className="bg-transparent md:bg-white w-full min-h-[60svh] h-fit">
        <MoreProducts />
      </section>
    </main>
  );
}

const productLists = [productList1, productList2, productList3];

function MoreProducts() {
  const [sectionNumber, setSectionNumber] = useState(0);

  const handleDotClick = (index) => {
    setSectionNumber(index);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full min-h-[60svh] relative h-fit flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col w-[80%] min-h-[100vh] h-fit relative justify-center items-center gap-6 py-20">
        <div className="flex flex-col w-full h-fit gap-4 justify-center items-center">
          <h3 className="globalHeaderFont text-5xl text-center lg:text-6xl w-full">
            Realted <span>Products </span>
          </h3>
          <p className="text-[#646464]">Choose from some of related products</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={sectionNumber}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="h-fit"
          >
            <ProductComponent productList={productLists[sectionNumber]} />
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-3">
          {productLists.map((_, i) => (
            <svg
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${
                sectionNumber === i ? "scale-150" : "cursor-pointer"
              } transition`}
              width="24"
              height="24"
              viewBox="0 0 24 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.5"
                width="17"
                height="17"
                rx="6.5"
                className="rounded-full"
                fill={sectionNumber === i ? "#EC1D23" : "#E1E1E2"}
              />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
