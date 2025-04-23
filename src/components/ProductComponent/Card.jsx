import React, { useState } from "react";
import { useCartStore } from "../../context/Cart";
import SplashImage from "../SplashImage/SplashImage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Card({ bgColor = "#F7F2F7", name, para, price, imgSrc, id }) {
  const [like, setLike] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  const showToast = () => {
    // Add a specific class to disable interactions for the whole page except the toast
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    overlay.style.zIndex = "9998"; // Below the toast, but above other content
    document.body.appendChild(overlay);

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } fixed z-[9999] backdrop-blur-none bg-white shadow-xl px-6 py-4 rounded-xl`}
        >
          <p className="mb-3 text-center font-semibold text-black">
            ✅ Added to Cart!
          </p>
          <div className="flex justify-between gap-4">
            <button
              className="text-sm text-gray-600 hover:underline"
              onClick={() => {
                toast.dismiss(t.id);
                document.body.style.pointerEvents = "auto"; // Re-enable pointer events
                overlay.remove(); // Remove overlay
              }}
            >
              Continue Shopping
            </button>
            <button
              className="text-sm text-purple-600 font-medium hover:underline"
              onClick={() => {
                toast.dismiss(t.id);
                document.body.style.pointerEvents = "auto"; // Re-enable pointer events
                overlay.remove(); // Remove overlay
                navigate("/cart");
              }}
            >
              Go to Cart
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity, // Keep the toast visible indefinitely
        style: {
          pointerEvents: "auto", // Ensure toast can be interacted with
        },
      }
    );

    // Disable only page interactions, not the toast
    document.body.style.pointerEvents = "none";
  };

  const handleCartAdd = () => {
    let res = 0;
    res = addToCart({
      id: id,
      price: price,
      name: name,
      image: imgSrc,
      quantity: 1,
    });
    if (res == "success") {
      showToast();
    } else {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-lg shadow-lg font-medium`}
          >
            ❌ Something went wrong!
          </div>
        ),
        {
          duration: 2500,
        }
      );
    }
  };

  return (
    <div
      style={{ fontFamily: "'Archivo', sans-serif" }}
      className="flex flex-col gap-4 bg-white p-5 itemCard rounded-xl drop-shadow-md"
    >
      <div className="flex justify-center items-center relative">
        <SplashImage bgColor={bgColor} imgSrc={imgSrc} className="rounded-xl" />
        <button
          onClick={() => setLike((prev) => !prev)}
          className={`absolute w-8 h-8 rounded-full top-3 p-[6px] left-3 ${
            like ? "bg-yellow-500" : "bg-white"
          }`}
        >
          <img loading="lazy" src="/images/heart.png" alt="heart" />
        </button>
      </div>
      <div className="w-[99%] flex font-bold text-[#0F0200] px-2">
        <h3 className="w-[70%]  font-archivo">{name}</h3>
        <div className="w-[30%] flex items-center justify-end font-semibold font-archivo">
          <span className="fa fa-star text-[#FBAB2A] pr-1"></span>4.9/5
        </div>
      </div>
      <p className="text-[#646464] font-normal px-2">{para}</p>
      <div className="flex items-center font-semibold justify-between px-2">
        <h3 className="text-[#EC1D23] font-archivo">
          <a href={`/shop/${id}`}>Get Inquiry</a>
        </h3>
        <button
          onClick={handleCartAdd}
          className="bg-[#683292] group p-[10px] rounded-full w-10"
        >
          <img
            loading="lazy"
            src="/images/cartBox.png"
            alt="cart"
            className="origin-center group-hover:scale-x-[-1] transition hover:drop-shadow-md"
          />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Card);
