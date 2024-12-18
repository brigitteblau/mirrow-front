//src/components/Products.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../css/products/productos.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
