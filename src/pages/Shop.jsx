import NavigationIcon from "../components/NavigationIcon";
import ProductComponent from "../components/ProductComponent/ProductComponent";
import SearchInterface from "../components/Shop_Search";
import { motion } from "framer-motion";
import { productList1, productList2, productList3 } from "../lib/ProductList";
import NutsRight from "../components/absoluteImages/NutsRight";
import NutsLeft from "../components/absoluteImages/NutsLeft";
import ChocolateRight from "../components/absoluteImages/ChocolateRight";
import ChocolateLeft from "../components/absoluteImages/ChocolateLeft";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Shop() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen w-[100svw]"
    >
      <div className="min-h-[60svh] page_container pt-[20vh] flex flex-col gap-8">
        <h3 className="globalHeaderFont w-full text-6xl text-center">
          Our Products
        </h3>
        <div className="w-full flex justify-center">
          <NavigationIcon
            navigation={
              <>
                <h3 className="">Shop</h3>
              </>
            }
          />
        </div>
      </div>
      <Main_Section
        titleStart="Our "
        titleRed="Classic "
        titleEnd="Favorites"
        para="Check out our top products that our customers love."
      />
      <Section2
        titleStart="Our "
        titleRed="Best "
        titleEnd="Services"
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="New "
        titleEnd="Arrivals"
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section
        titleRed="Eclairs "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <div className="w-[100svw] hidden md:block">
        <Section3
          titleRed="Toffees "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section2
          titleRed="Lollipop "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section
          titleRed="Candy "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section2
          titleRed="Dates Chocolate "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section3
          titleRed="Truffles "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section
          titleRed="Mould Chocolate "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section2
          titleRed="Kunafa Dubai Chocolates "
          para="Discover the favorites that keep our customers coming back for more."
        />
        <Section3
          titleRed="Caramel "
          para="Discover the favorites that keep our customers coming back for more."
        />
      </div>
    </motion.div>
  );
}

function Main_Section({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateLeft />
      </div>
      <div className="w-[100svw] max-h-fit relative">
        <img
          loading="lazy"
          src="/images/topPattern.png"
          alt="design top"
          className="min-h-[150px] h-full"
        />
        <div className="w-full h-full absolute top-2/3 -translate-y-1/2 z-10 flex justify-end lg:justify-evenly">
          <SearchInterface />
        </div>
      </div>
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList1} />
      </div>
    </motion.div>
  );
}

function Section({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60 ">
        <ChocolateLeft />
      </div>
      <img
        loading="lazy"
        src="/images/topPattern.png"
        alt="design top"
        className=""
      />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList2} />
      </div>
      <div className="absolute -top-20 right-0 w-0 md:w-28 lg:w-40 z-10">
        <NutsRight />
      </div>
    </motion.div>
  );
}

function Section2({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 left-0 w-0 md:w-28 lg:w-40 z-10">
        <NutsLeft />
      </div>
      <img
        loading="lazy"
        src="/images/topPattern.png"
        alt="design top"
        className=""
      />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList3} />
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}

function Section3({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60 ">
        <ChocolateLeft />
      </div>
      <img
        loading="lazy"
        src="/images/topPattern.png"
        alt="design top"
        className=""
      />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <ProductComponent productList={productList1} />
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <ChocolateRight />
      </div>
    </motion.div>
  );
}
