// src/components/ProductList.js
import React from "react";
import { products } from "../data/productos"; // Importa la data
import ProductCard from "./Products"; // Importa el componente de tarjeta

const ProductList = () => {
  // Combinamos todos los productos en un solo array
  const allProducts = [
    ...products.remeras,
    ...products.chombas,
    ...products.camisas,
    ...products.pantalones,
    ...products.bermudas,
  ];

  return (
    <div className="product-list">
      <h1>Productos</h1>
      <div className="product-items">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
