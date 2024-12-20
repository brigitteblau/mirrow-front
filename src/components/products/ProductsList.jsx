// src/components/products/ProductList.js
import React from "react";
import { products } from "../../data/productos"; 
import ProductCard from "./Products"; 
import "../../css/products/productosList.css";

const ProductList = () => {
  const allProducts = [
    ...products.remeras,
    // ...products.chombas,
    // ...products.camisas,
    // ...products.pantalones,
    // ...products.bermudas,
  ];

  return (
    <div className="product-list">
      <div className="div-titulo">
      <h1 className="titulo">Productos</h1>
      </div>
      <div className="product-items">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
