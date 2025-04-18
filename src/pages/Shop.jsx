import ChocolateSide from "../components/ChocolateSide/ChocolateSide";
import Card from "../components/homepage/Favorite/Card";
import NavigationIcon from "../components/NavigationIcon";
import SearchInterface from "../components/Shop_Search";

export default function Shop() {
  return (
    <div className="min-h-screen w-[100svw]">
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
      <Section
        titleRed="New "
        titleEnd="Arrivals"
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Eclairs "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section3
        titleRed="Toffees "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Lollipop "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Candy "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Dates Chocolate "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Truffles "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Mould Chocolate "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Kunafa Dubai Chocolates "
        para="Discover the favorites that keep our customers coming back for more."
      />
      <Section2
        titleRed="Caramel "
        para="Discover the favorites that keep our customers coming back for more."
      />
    </div>
  );
}

function Main_Section({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute top-0 left-0 w-0 md:w-36 lg:w-60 z-[10]">
        <ChocolateSide />
      </div>
      <div className="w-[100svw] max-h-fit relative">
        <img
          src="/images/topPattern.png"
          alt="design top"
          className="min-h-[150px] h-full"
        />
        <div className="w-full h-full absolute top-2/3 -translate-y-1/2 flex justify-end lg:justify-evenly">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw] py-[8vh]">
          <Card
            imgSrc="/images/choco1.png"
            bgColor="#F7F2F7"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco2.png"
            bgColor="#FFEEEE"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco3.png"
              bgColor="#F6F9E1"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco4.png"
              bgColor="#FFFAF4"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60 ">
        <ChocolateSide />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="" />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw] py-[8vh]">
          <Card
            imgSrc="/images/choco1.png"
            bgColor="#F7F2F7"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco2.png"
            bgColor="#FFEEEE"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco3.png"
              bgColor="#F6F9E1"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco4.png"
              bgColor="#FFFAF4"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-20 right-0 w-0 md:w-28 lg:w-40 z-10">
        <img src="/images/nutsRight.png" alt="" className="drop-shadow-lg" />
      </div>
    </div>
  );
}

function Section2({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 left-0 w-0 md:w-28 lg:w-40 z-10">
        <img src="/images/nuts.png" alt="" className="drop-shadow-lg" />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="" />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw] py-[8vh]">
          <Card
            imgSrc="/images/choco1.png"
            bgColor="#F7F2F7"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco2.png"
            bgColor="#FFEEEE"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco3.png"
              bgColor="#F6F9E1"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco4.png"
              bgColor="#FFFAF4"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <img src="/images/SideRight2.png" alt="" className="drop-shadow-lg" />
      </div>
    </div>
  );
}

function Section3({ titleStart = "", titleRed = "", titleEnd = "", para }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[100svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -top-20 lg:-top-44 left-0 w-0 md:w-36 lg:w-60 ">
        <ChocolateSide />
      </div>
      <img src="/images/topPattern.png" alt="design top" className="" />
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pb-16">
        <div className=" flex flex-col gap-6 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            {titleStart}
            <span>{titleRed}</span>
            {titleEnd}
          </h3>
          <p className="text-[#646464]">{para}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw] py-[8vh]">
          <Card
            imgSrc="/images/choco1.png"
            bgColor="#F7F2F7"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <Card
            imgSrc="/images/choco2.png"
            bgColor="#FFEEEE"
            title="Assorted Chocolate
Dates"
            para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
          />
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco3.png"
              bgColor="#F6F9E1"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
          <div className="hidden md:block">
            <Card
              imgSrc="/images/choco4.png"
              bgColor="#FFFAF4"
              title="Assorted Chocolate
Dates"
              para="A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness."
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-40 lg:-top-56 right-0 w-0 md:w-36 lg:w-60 z-10">
        <img src="/images/SideRight2.png" alt="" className="drop-shadow-lg" />
      </div>
    </div>
  );
}
