import React, { useEffect } from "react";
import NavigationIcon from "../components/NavigationIcon";
import { useCartStore } from "../context/Cart";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalPrice = useCartStore((state) =>
    Number(
      state.items
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    )
  );
  useEffect(() => {
    console.log("🛒 Cart Items:", items);
  }, [items]);
  return (
    <main className="min-h-screen w-[100svw]">
      <section className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-5 md:gap-0">
        <div className=" flex flex-col gap-8 h-fit pb-[5vh]">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Shopping Cart
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">Cart</h3>
                </>
              }
            />
          </div>
        </div>
        <section className="bg-[#F8F4F1] relative w-[88svw] lg:w-full px-4 h-fit md:bg-transparent mx-[6vw] lg:mx-0">
          <section className="w-full min-h-[60svh] shadow-component flex pt-10 rounded-2xl justify-center h-fit items-center">
            <div className="w-full lg:w-[85%] xl:w-[70%] h-fit flex flex-col lg:flex-row justify-center gap-10">
              <div className="flex flex-col px-[6vw] lg:px-0 justify-start items-center gap-6 w-full lg:w-[68%]">
                <div className="flex w-full flex-col justify-start items-center">
                  <h3 className="text-[#0F0200] font-bold w-full flex justify-between pb-5">
                    <p>Shopping Cart</p>
                    <p>({totalItems} Items)</p>
                  </h3>
                  <div className="w-full h-[2px] bg-[#AAAAAA20]"></div>
                </div>
                <div className="flex w-full flex-col justify-start items-center">
                  <h3 className="text-[#787878] font-medium w-full flex flex-col sm:flex-row justify-between pb-5">
                    <p className="sm:w-[65%] lg:w-[40%] flex items-center justify-center sm:justify-start gap-2">
                      Product Deatils
                    </p>
                    <div className="sm:w-[30%] lg:w-[55%] flex flex-row sm:flex-col lg:flex-row pb-4 sm:pb-0 font-normal sm:font-medium items-center justify-between">
                      <p className="w-1/3 sm:w-full lg:w-1/3 flex justify-center lg:justify-start">
                        Price
                      </p>
                      <p className="w-1/3 sm:w-full lg:w-1/3 flex justify-center lg:justify-start">
                        Quantity
                      </p>
                      <p className="w-1/3 sm:w-full lg:w-1/3 flex justify-center lg:justify-start">
                        Total
                      </p>
                    </div>
                      <p className="w-[5%]"></p>
                  </h3>
                  <div className="w-full h-[1px] bg-[#AAAAAA]"></div>
                </div>
                {items.map((item, idx) => {
                  return <Items key={idx} item={item} />;
                })}
              </div>
              <div className="lg:w-[25%] lg:flex-auto rounded-2xl min-h-[35vh] h-fit border-t-[3px] border-[#683292] bg-white flex flex-col font-archivo justify-start items-center shadow-lg py-4">
                <div className="flex w-full flex-col justify-center items-center">
                  <p className="text-[#0F0200] font-bold text-lg pb-4 px-6">
                    Order Summary
                  </p>
                  <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                  <div className="flex items-center w-full py-4 px-6 text-sm justify-evenly">
                    <input
                      type="text"
                      className="text-[#0F0200] w-[40%] font-medium outline-[#FF6565] pl-2"
                      placeholder="Apply Coupons"
                    />
                    <button className="text-white rounded-full max-w-[20%] flex px-3 hover:shadow-md transition py-1 text-[12px] bg-[#EC1D23] font-archivo font-bold h-full items-center">
                      Apply
                    </button>
                  </div>
                  <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
                </div>
                <div className="flex w-full flex-col justify-center items-start">
                  <div className="flex flex-col w-full items-start pt-5 px-6 text-sm gap-4">
                    <h3 className="text-[#0F0200] font-bold ">
                      Product Details:
                    </h3>
                    <h3 className="text-[#787878] font-medium w-full flex justify-between">
                      <p>Sub Total</p>
                      <p className="text-[#0F0200] ">${totalPrice}</p>
                    </h3>
                    <h3 className="text-[#787878] font-medium w-full flex justify-between">
                      <p>Shipping</p>
                      <p className="text-[#0F0200] ">$20.00</p>
                    </h3>
                    <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                  <div className="flex w-full flex-col items-center py-4 px-6 text-sm gap-6">
                    <h3 className="text-[#0F0200] font-bold w-full flex justify-between">
                      <p>Grand Total</p>
                      <p className="text-[#EC1D23] font-semibold">
                        ${totalPrice + 20}
                      </p>
                    </h3>
                    <div className="flex w-full px-2">
                      <button className="btn-primary w-full justify-center px-4 min-h-8 py-3 flex items-center text-lg">
                        Proceed to Checkout
                        <img
                          src="/images/btnArrow.svg"
                          className="w-[3vw] max-w-[20px]"
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                  <div className="flex w-full flex-col items-center py-4 px-6 text-sm gap-6">
                    <h3 className="text-[#787878] font-bold w-full flex items-center justify-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2422 3.04688C13.7344 3.26562 14.0625 3.73047 14.0625 4.25C14.0625 10.3203 10.3438 13.6836 7.99219 14.668C7.66406 14.8047 7.30859 14.8047 6.98047 14.668C4.05469 13.4375 0.9375 9.69141 0.9375 4.25C0.9375 3.73047 1.23828 3.26562 1.73047 3.04688L6.98047 0.859375C7.14453 0.804688 7.30859 0.777344 7.5 0.777344C7.66406 0.777344 7.82812 0.804688 7.99219 0.859375L13.2422 3.04688ZM7.5 12.9727C10.043 11.6875 12.2031 8.67969 12.2852 4.55078L7.5 2.55469V12.9727Z"
                          fill="#787878"
                        />
                      </svg>
                      <p>
                        Safe and Secure Payments, Easy Returns. 100% Authentic
                        Products
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full min-h-[60svh] flex justify-center h-fit items-start text-[#683292]">
            <a
              href="/shop"
              className="w-full lg:w-[70%] h-fit flex flex-row justify-center lg:justify-start gap-3 font-archivo font-semibold text-lg pt-10"
            >
              <div className="w-[3vw] max-w-[20px] rotate-180 flex items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.1125 1.57031L5.62812 1.05469C5.8625 0.84375 6.21406 0.84375 6.425 1.05469L10.9953 5.60156C11.2062 5.83594 11.2062 6.1875 10.9953 6.39844L6.425 10.9688C6.21406 11.1797 5.8625 11.1797 5.62812 10.9688L5.1125 10.4531C4.90156 10.2188 4.90156 9.86719 5.1125 9.63281L7.94844 6.9375H1.22187C0.89375 6.9375 0.659375 6.70312 0.659375 6.375V5.625C0.659375 5.32031 0.89375 5.0625 1.22187 5.0625H7.94844L5.1125 2.39062C4.90156 2.15625 4.87812 1.80469 5.1125 1.57031Z"
                    fill="#683292"
                  />
                </svg>
              </div>
              <p>Continue Shopping</p>
            </a>
          </section>
          <img
            src="/images/topPattern.png"
            alt="design top"
            className=" rotate-180 hidden md:block h-[10svh] -ml-4  absolute bottom-0 w-[100svw]"
          />
        </section>
      </section>
    </main>
  );
}

function Items({ item }) {
  const { updateQuantity, removeFromCart } = useCartStore();

  // const handleQtyChange = (delta) => {
  //   const newQty = item.quantity + delta;
  //   if (newQty >= 0) updateQuantity(item.id, newQty);
  // };

  const handleRemoveItems = () => {
    console.log(item.id);
    let res = removeFromCart(item.id);
    console.log(res);
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex w-full flex-col justify-start font-bold items-center">
      <h3 className="text-[#0F0200] w-full flex flex-col sm:flex-row justify-between pb-5">
        <div className="sm:w-[65%] lg:w-[40%] flex items-center justify-start gap-2">
          <img src={item.image} alt={item.name} className="w-[30%]" />
          <p className="">{item.name}</p>
        </div>
        <div className="sm:w-[30%] lg:w-[55%] flex flex-row sm:flex-col lg:flex-row pb-4 sm:pb-0 items-center justify-between">
          <p className="lg:w-[36.36%%] flex justify-start text-[#787878] items-center text-sm gap-1">
            AED{" "}
            <span className="text-[#EC1D23] text-lg flex -mt-1">
              {item.price}
            </span>
          </p>
          <p className="lg:w-[36.36%%] flex items-center justify-start font-medium">
            {item.quantity}
          </p>
          <p className="lg:w-[27.28%] flex items-center justify-start">
            {itemTotal}
          </p>
        </div>
        <div
          onClick={handleRemoveItems}
          className="sm:w-[5%] flex items-center p-2 rounded-full border-[1px] cursor-pointer border-[#FF656545] aspect-square m-auto justify-center"
        >
          <button className="text-[#FF6565]">X</button>
        </div>
      </h3>
      <div className="w-full h-[1px] bg-[#AAAAAA]"></div>
    </div>
  );
}
