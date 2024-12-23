//src/components/products/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import "../../css/products/productos.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`, { state: { product } });
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    addToCart(product); 
  };

  return (
    <div
      className="product-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={product.images[0]} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <button onClick={handleAddToCartClick}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
