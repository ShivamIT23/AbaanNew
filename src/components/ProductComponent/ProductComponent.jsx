import Card from "./Card";
import { productList1 } from "../../lib/ProductList";

export default function ProductComponent({productList = productList1}) {
  return (
    <div className="grid grid-cols-1 shadow-component sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[4vw] py-[3vh] md:py-[8vh] bg-[#F8F4F1] rounded-3xl lg:bg-transparent">
      {productList.map((card,idx)=>{
        return(
          <Card
          key={idx}
          id={card.id}
            imgSrc={card.img}
            bgColor={card.bgColor}
            price={card.price}
            name={card.name}
            para={card.para}
          />
        )
      })}
    </div>
  );
}
