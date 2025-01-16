//src/components/products/Products.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "../../css/products/productos.css";
import { useNavigate } from "react-router-dom";
import Popup from "../shared/PopUp";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showPopup, setShowPopup] = useState(false);
 

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`, { state: { product } });
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); 
    if (selectedSize && selectedColor) {
      addToCart({ ...product, size: selectedSize, color: selectedColor, quantity: 1 });
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  const sizes = Array.isArray(product.size) ? product.size : [];
  const colors = Array.isArray(product.colors) ? product.colors : []; 

  

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
       <img src={product.images[0]} alt={product.name} className="productos-img"/> 
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>


      <div className="size-selector">
        {sizes.length > 0 ? (
          sizes.map((size) => (
            <span
              key={size}
              className={`size-chip ${selectedSize === size ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
              aria-label={`Seleccionar talle ${size}`}
            >
              {size}
            </span>
          ))
        ) : (
          <span>No hay tamaños disponibles</span>
        )}
      </div>

      {/* Selección de color con chips */}
      <div className="color-selector">
        {colors.length > 0 ? (
          colors.map((color) => (
            <span
              key={color}
              className={`color-chip ${selectedColor === color ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(color);
              }}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
                margin: '5px',
              }}
              aria-label={`Seleccionar color ${color}`}
            />
          ))
        ) : (
          <span>No hay colores disponibles</span>
        )}
      </div>

      <button
        className="add"
        onClick={handleAddToCartClick}
        disabled={!selectedSize || !selectedColor} 
      >
        <img src="/img/car.svg" alt="Añadir al carrito" className="img-car"/>
      </button>

      {showPopup && <Popup message="Por favor, selecciona un talle y un color." onClose={closePopup} />}
    </div>
  );
};

export default ProductCard;
