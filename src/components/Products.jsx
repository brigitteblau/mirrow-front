// src/components/ProductCard.js
import React from "react";
import "../css/productos.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
