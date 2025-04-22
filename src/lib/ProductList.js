const productList1 = [
  {
    id: "Assorted_Chocolate_Dates",
    name: "Assorted Chocolate Dates",
    img: "/images/choco1.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F7F2F7",
    price: 5.39,
  },
  {
    id: "Chocolate_Dates",
    name: "Chocolate Dates",
    img: "/images/choco2.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 5.89,
  },
  {
    id: "Kofy_Candy",
    name: "Kofy Candy",
    img: "/images/choco3.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 5.59,
  },
  {
    id: "Strawberry_Candy",
    name: "Strawberry Candy",
    img: "/images/choco4.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.89,
  },
];

const idToList = [
  {
    id: [
      "Strawberry_Candy",
      "Kofy_Candy",
      "Chocolate_Dates",
      "Assorted_Chocolate_Dates",
    ],
    list: "productList1",
  },
  {
    id: [
      "Chocolate_Eclairs",
      "Coffee_Eclairs",
      "Honey_Eclairs",
      "Milk_Eclairs",
    ],
    list: "productList2",
  },
  {
    id: ["Mint_candy", "Peanut_Eclairs", "Selection_Eclairs"],
    list: "productList3",
  },
];

const products = [
  {
    name: "Chocolate Eclairs",
    imgSrc: "/images/range1.png",
  },
  {
    name: "Coffee Eclairs",
    imgSrc: "/images/range2.png",
  },
  {
    name: "Honey Eclairs",
    imgSrc: "/images/range3.png",
  },
  {
    name: "Kofy Candy",
    imgSrc: "/images/range4.png",
  },
  {
    name: "Milk Eclairs",
    imgSrc: "/images/range5.png",
  },
  {
    name: "Mint candy",
    imgSrc: "/images/range6.png",
  },
  {
    name: "Strawberry candy",
    imgSrc: "/images/range7.png",
  },
  {
    name: "Peanut Eclairs",
    imgSrc: "/images/range8.png",
  },
  {
    name: "Selection Eclairs",
    imgSrc: "/images/range9.png",
  },
];

const productList2 = [
  {
    id: "Chocolate_Eclairs",
    name: "Chocolate Eclairs",
    img: "/images/range1.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F7F2F7",
    price: 7.69,
  },
  {
    id: "Coffee_Eclairs",
    name: "Coffee Eclairs",
    img: "/images/range2.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 6.99,
  },
  {
    id: "Honey_Eclairs",
    name: "Honey Eclairs",
    img: "/images/range3.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.49,
  },
  {
    id: "Milk_Eclairs",
    name: "Milk Eclairs",
    img: "/images/range5.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 4.39,
  },
];

const productList3 = [
  {
    ...productList1[0],
  },
  {
    id: "Mint_candy",
    name: "Mint candy",
    img: "/images/range6.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#FFEEEE",
    price: 5.99,
  },
  {
    id: "Peanut_Eclairs",
    name: "Peanut Eclairs",
    img: "/images/range8.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 6.39,
  },
  {
    id: "Selection_Eclairs",
    name: "Selection Eclairs",
    img: "/images/range9.png",
    para: "A delightful mix of assorted chocolate-covered dates, each filled with creamy goodness.",
    bgColor: "#F6F9E1",
    price: 7.39,
  },
];

const allLists = {
  productList1,
  productList2,
  productList3,
};

function getProductById(productId) {
  const mapping = idToList.find((entry) => entry.id.includes(productId));
  console.log(mapping)
  if (!mapping) return null;
  
  const list = allLists[mapping.list];
  console.log(list)
  return list.find((product) => product.id === productId) || null;
}

export { productList1, productList2, productList3, products, getProductById };
