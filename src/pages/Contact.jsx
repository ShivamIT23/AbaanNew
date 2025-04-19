import LiveMap from "../components/LiveMap/LiveMap";
import NavigationIcon from "../components/NavigationIcon";
import { motion } from "framer-motion";

const contactList = [
  {
    img: "/images/contact_s1.png",
    title: "Our Location",
    para: "7CP6+7JC -Al Qusais Industrial Area 5 - Dubai",
  },
  {
    img: "/images/contact_s2.png",
    title: "Phone Number",
    para: "+1234567890",
  },
  {
    img: "/images/contact_s3.png",
    title: "Email Us At",
    para: "info@example.com",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="min-h-screen w-[100svw]"
    >
      <section className="min-h-[60svh] h-fit page_container pt-[20vh] flex flex-col justify-between gap-8">
        <div className=" flex flex-col gap-8 h-fit">
          <h3 className="globalHeaderFont w-full text-7xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            Contact Us
          </h3>
          <div className="w-full hidden md:flex justify-center">
            <NavigationIcon
              navigation={
                <>
                  <h3 className="">Contact Us</h3>
                </>
              }
            />
          </div>
        </div>

        <img
          src="/images/topPattern.png"
          alt="design top"
          className=" rotate-180 h-[10svh] hidden md:block w-full"
        />
      </section>
      <section className=" bg-inherit font-archivo md:bg-white min-h-screen h-fit flex flex-col items-center gap-8 px-[5vw] md:px-[10vw] md:pt-28 pb-2">
        <div className=" flex flex-col gap-7 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4 text-center">
            Get in <span>Touch </span>With Us
          </h3>
          <p className="text-[#646464] text-center">
            Reach out and connect with us today for any inquiries or assistance!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-y-8 h-fit pt-[10vh]">
          <div className="col-span-2 lg:col-span-1 flex w-full flex-col xs:flex-row md:flex-col items-center justify-center xs:justify-between md:justify-center min-h-full h-fit gap-6">
            {contactList.map((card, index) => {
              return (
                <Card
                  key={index}
                  img={card.img}
                  title={card.title}
                  para={card.para}
                />
              );
            })}
          </div>
          <section className="col-span-2 flex flex-col justify-center w-full items-start min-h-full h-fit gap-6 lg:ml-[10%]">
            <form
              action="get"
              className="grid grid-cols-2 gap-6 w-full max-w-[600px]"
            >
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="first_name"
                >
                  First Name :
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="h-[40px] rounded-3xl border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="last_name"
                >
                  Last Name :
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="min-h-[40px] rounded-3xl h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="email_address"
                >
                  Email address :
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  className="min-h-[40px] rounded-3xl h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-1 flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="phone"
                >
                  Phone :
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="min-h-[40px] rounded-3xl h-fit border-[#E3E4E5] border"
                />
              </div>
              <div className="w-full col-span-full xs:col-span-full flex flex-col gap-2">
                <label
                  className="pl-1 cursor-pointer whitespace-nowrap drop-shadow-lg"
                  htmlFor="message"
                >
                  Message :
                </label>
                <textarea
                  rows={1}
                  id="message"
                  name="message"
                  className="min-h-[120px] rounded-3xl h-fit border-[#E3E4E5] border resize-none overflow-hidden"
                />
              </div>
            </form>
            <div className="flex w-full md:w-fit h-fit justify-center">
              <button
                className="text-white rounded-[4vw] flex py-[0.4vw] px-4 bg-[#EC1D23] font-archivo font-semibold
                text-[1.6vw] gap-1 shadow-[0px_2px_18px_2px_rgba(251,171,42,0.3)] transition-shadow duration-300 ease-in-out md:text-[0.9vw] h-[30px] lg:h-fit items-center group"
              >
                Submit Now
                <img
                  src="/images/btnArrow.svg"
                  className="btn-primary-img scale-75 group-hover:scale-100 transition"
                  alt=""
                />
              </button>
            </div>
          </section>
        </div>
      </section>
      <LiveMap />
    </motion.div>
  );
}

function Card({ img, title, para }) {
  return (
    <div
      style={{
        boxShadow: "0px 2px 73px 2px rgba(0, 0, 0, 0.05)",
      }}
      className="flex box-border gap-6 px-[5%] bg-white py-[3%] w-full min-h-full md:min-h-[13vh] h-fit xs:h-auto md:h-fit items-center border-white border-[1px] rounded-[20px] overflow-y-hidden"
    >
      <img
        src={img}
        alt=""
        className="w-6 md:w-12 h-6 md:h-12 rounded-full drop-shadow-md"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-archivo font-bold text-xs md:text-lg text-[#0F0200]">
          {title}
        </h3>
        <p className="text-[#646464] w-[70%] text-[8px] md:text-sm">{para}</p>
      </div>
    </div>
  );
}
