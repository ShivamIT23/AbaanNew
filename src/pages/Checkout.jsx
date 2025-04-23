import NavigationIcon from "../components/NavigationIcon";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import { useCartStore } from "../context/Cart";
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

export default function Checkout() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <section className="min-h-[30svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-5 md:gap-0">
        <div className=" flex flex-col gap-8 h-fit pb-[5vh]">
          <h3 className="globalHeaderFont w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Checkout
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">
                    <a href="/shop">Cart</a>
                  </h3>
                  <p className="">/</p>
                  <h3 className="">Checkout</h3>
                </>
              }
            />
          </div>
        </div>
        <section className="bg-[#F8F4F1] pb-[15vh] w-[88svw] lg:w-full px-4 h-fit md:bg-transparent relative mx-[6vw] lg:mx-0">
          <section className="w-full min-h-[60svh] shadow-component flex pt-10 rounded-2xl justify-center h-fit items-center font-archivo">
            <div className="w-full lg:w-[85%] xl:w-[70%] h-fit flex flex-col lg:flex-row justify-center gap-10">
              <div className="w-full lg:w-[68%] flex flex-col px-[6vw] lg:px-0 h-fit gap-10 justify-start items-center pb-10">
                <div className="flex flex-col w-full h-fit justify-start items-center gap-6 ">
                  <div className="flex w-full flex-col justify-start items-center">
                    <h3 className="text-[#0F0200] font-bold w-full flex justify-start pb-2">
                      <p>Billing Address:</p>
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="First_Name"
                        className="ml-2 cursor-pointer"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Shivam"
                        id="First_Name"
                        name="First_Name"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label
                        htmlFor="Last_Name"
                        className="ml-2 cursor-pointer"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Gupta"
                        id="Last_Name"
                        name="Last_Name"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="flex w-full flex-col justify-center gap-2 items-start mr-[4vw]">
                      <label
                        htmlFor="Email_Address"
                        className="ml-2 cursor-pointer"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="info@example.com"
                        id="Email_Address"
                        name="Email_Address"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                    <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label htmlFor="State" className="ml-2 cursor-pointer">
                        State
                      </label>
                      <input
                        list="states"
                        id="State"
                        name="State"
                        placeholder="Select State"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                      <datalist id="states">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                      </datalist>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full text-[#646464] justify-between">
                    <div className="relative flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label htmlFor="City" className="ml-2 cursor-pointer">
                        City
                      </label>
                      <input
                        list="cities"
                        id="City"
                        name="City"
                        placeholder="Select State"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                      <datalist id="cities">
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Dehradun">Dehradun</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Guwahati">Guwahati</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Indore">Indore</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Noida">Noida</option>
                        <option value="Patna">Patna</option>
                        <option value="Pune">Pune</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Ranchi">Ranchi</option>
                        <option value="Surat">Surat</option>
                        <option value="Thane">Thane</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                      </datalist>
                    </div>
                    <div className="flex w-full flex-col gap-2 justify-center items-start mr-[4vw]">
                      <label htmlFor="Zip_Code" className="ml-2 cursor-pointer">
                        Zip/ Postal Code
                      </label>
                      <input
                        type="text"
                        placeholder="110053"
                        id="Zip_Code"
                        name="Zip_Code"
                        className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
                      />
                    </div>
                  </div>
                </div>
                <PaymentForm />
                <div className="flex flex-col w-full h-fit justify-start items-center gap-6">
                  <label className="relative cursor-pointer flex items-center w-full justify-center  text-[#646464] text-sm font-normal">
                    <input type="checkbox" className="peer hidden" />
                    <div className="h-5 w-5 mr-2 border border-gray-300 rounded-sm peer-checked:bg-[#683292] peer-checked:text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <h3 className="text-sm">
                      By clicking the button, you agree to the{" "}
                      <a
                        href="/blog#termAndCondition"
                        className="text-[#EC1D23] leading-[100%]"
                      >
                        {" "}
                        Terms and Conditions
                      </a>
                    </h3>
                  </label>
                  <div className="flex w-full px-2">
                    <button className="btn-primary w-full justify-center px-4 gap-2 min-h-8 py-3 flex items-center text-lg mr-[4vw]">
                      Place Order Now
                      <img
                      loading="lazy"
                        src="/images/btnArrow.svg"
                        className="w-[3vw] max-w-[20px]"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <ItemPreview />
            </div>
          </section>
          <img
          loading="lazy"
            src="/images/topPattern.png"
            alt="design top"
            className=" rotate-180 hidden lg:block h-[10svh] -ml-4  absolute bottom-0 w-[100svw]"
          />
        </section>
      </section>
    </motion.main>
  );
}

function ItemPreview() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) =>
    Number(
      state.items
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    )
  );

  return (
    <section className="lg:w-[25%] lg:flex-auto rounded-2xl min-h-[15vh] max-h-fit border-t-[3px] border-[#683292] bg-white flex flex-col font-archivo justify-start items-center shadow-lg py-4">
      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex items-center w-full py-4 text-sm justify-between px-7">
          <p className="text-[#0F0200] font-bold ">Items</p>
          <p className="text-[#0F0200] font-bold ">Price</p>
        </div>
        <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
      </div>
      <div className="flex w-full flex-col justify-center items-start">
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col w-full items-start pt-5 px-6 text-sm gap-4"
            >
              <h3 className="text-[#0F0200] font-bold w-full flex justify-between">
                <p>
                  {item.quantity} X {item.name}
                </p>
                <p>${item.price}</p>
              </h3>
              <div className="flex gap-3 w-full">
                <h3 className="w-[20%] flex justify-start">
                  <img loading="lazy" src={item.image} alt="" className="w-full" />
                </h3>
                <h3 className="text-[#683292] font-bold text-[16px] w-[50%] flex justify-end items-center">
                  <p>Total Price: </p>
                </h3>
                <h3 className="text-[#0F0200] font-bold w-[30%] flex justify-end items-center">
                  <p>${(item.quantity * item.price).toFixed(2)}</p>
                </h3>
              </div>
              <div className="w-full h-[2px] bg-[#AAAAAA50]"></div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex w-full flex-col items-center py-4 px-6 text-sm gap-6">
          <h3 className="text-[#0F0200] font-bold w-full flex justify-between">
            <p>Grand Total</p>
            <p className="text-[#EC1D23] font-semibold">${totalPrice}</p>
          </h3>
        </div>
      </div>
    </section>
  );
}
