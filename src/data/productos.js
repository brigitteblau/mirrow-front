// // src/data/productos.js

export const products = {
  remeras: [
    {
      id: 1,
      name: "Remera Koala",
      description: "Remera de algodón koala",
      price: 500,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/0000FF"],
      stock: 10,
      size: ["S", "M", "L", "XL"],
      typeId: 1,
      subTypeId: 101,
      fabric: "100% algodón",
    },
    {
      id: 2,
      name: "Remera Estampada bici",
      description: "Remera con estampado exclusivo.",
      price: 600,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/FF0000"],
      stock: 5,
      size: ["S", "M", "L"],
      typeId: 1,
      subTypeId: 102,
      fabric: "Algodón y poliéster",
    },
  ],
};
