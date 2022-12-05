const data = [
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
    category: "Plants",
    name: "Boncellensis Secullant",
    price: 34.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: false,
    itemId: "100000001",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
    category: "Cactus",
    name: "Cleistocactus",
    price: 25.0,
    oldPrice: 28.0,
    sale: true,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000002",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
    category: "Plants",
    name: "Green Soil Lotus",
    price: 34.0,
    oldPrice: 54.0,
    sale: true,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000003",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
    category: "Plants",
    name: "Money Plant",
    price: 20.0,
    oldPrice: 23.0,
    sale: true,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000004",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
    category: "Cactus",
    name: "Old Lady Cactus",
    price: 12.0,
    oldPrice: 15.0,
    sale: true,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000005",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    category: "Plants",
    name: "Piorro Quisquam",
    price: 32.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000006",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    category: "Plants",
    name: "Rattle Snake Tail",
    price: 45.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000007",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
    category: "Cactus",
    name: "Star Cactus",
    price: 30.0,
    oldPrice: 34.0,
    sale: true,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000008",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant2-free-img.jpg",
    category: "Plants",
    name: "Aluminum Plant",
    price: 45.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "100000009",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus3-free-img.jpg",
    category: "Cactus",
    name: "Ball Cactus",
    price: 15.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "1000000010",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus5-free-img.jpg",
    category: "Cactus",
    name: "Mini Astrophytum",
    price: 45.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "1000000011",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus1-free-img.jpg",
    category: "Cactus",
    name: "Mini San Pedro Cactus",
    price: 32.0,
    oldPrice: 0,
    sale: false,
    description:
      "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
    rating: 0,
    shipping: true,
    itemId: "1000000012",
  },
];

const getCategoriesCount = () => {
  const categories = {};
  data.map(({ category }) => {
    if (!categories[category]) {
      categories[category] = 1;
    } else {
      categories[category]++;
    }
  });
  return Object.entries(categories);
};

export const categoriesCount = getCategoriesCount();

export default data;
