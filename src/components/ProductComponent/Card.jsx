import React, { useState } from "react";
import { useCartStore } from "../../context/Cart";

export default function Card({
  bgColor = "#F7F2F7",
  name,
  para,
  price,
  imgSrc,
  id,
}) {
  const [like, setLike] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

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
      alert("Added To Cart Sucessfully");
    } else {
      alert("Currently not available");
    }
  };

  return (
    <div
      style={{ fontFamily: "'Archivo', sans-serif" }}
      className="flex flex-col gap-4 bg-white p-5 itemCard rounded-xl drop-shadow-md"
    >
      <div className="flex justify-center items-center relative">
        <img
          src={imgSrc}
          alt="chocolate_img"
          style={{ backgroundColor: `${bgColor}` }}
          className={`rounded-xl `}
        />
        <button
          onClick={() => setLike((prev) => !prev)}
          className={`absolute w-8 h-8 rounded-full top-3 p-[6px] left-3 ${
            like ? "bg-yellow-500" : "bg-white"
          }`}
        >
          <img src="/images/heart.png" alt="heart" />
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
            src="/images/cartBox.png"
            alt="cart"
            className="origin-center group-hover:scale-x-[-1] transition hover:drop-shadow-md"
          />
        </button>
      </div>
    </div>
  );
}
