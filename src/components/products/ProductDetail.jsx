// src/components/products/ProductDetail.js
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../css/products/productosDetail.css";
import Popup from "../shared/PopUp";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  // Agregar producto al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    };
    addToCart(productToAdd, quantity);
    setShowPopup(true);
  };

  // Cambiar imágenes
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  // Ajustar cantidad
  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-detail">
      {/* Columna izquierda: Thumbnails */}
      <div className="images-section">
        <div className="thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className={index === currentImageIndex ? "active-thumbnail" : ""}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>

      {/* Columna central: Imagen principal */}
      <div className="main">
      <div className="main-image">
        <img src={product.images[currentImageIndex]} alt={product.name} />
      </div>
      </div>

      {/* Columna derecha: Información del producto */}
      <div className="details-section">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>

        <div className="colors">
          <p>Colores:</p>
          {product.colors.map((color, index) => (
            <button
              key={index}
              style={{
                backgroundColor: color,
                border: selectedColor === color ? "2px solid black" : "1px solid #ddd",
              }}
              className={`color-button ${selectedColor === color ? "active" : ""}`}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>

        <div className="sizes">
          <p>Talle:</p>
          <div className="size-buttons">
            {product.size.map((size, index) => (
              <button
                key={index}
                className={`size-button ${selectedSize === size ? "active-size" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p>
            ¿No sabes tu talle? Consulta nuestra <Link to="/guia-de-talles">guía de talles</Link>
          </p>
        </div>

        <div className="quantity">
          <p>Cantidad:</p>
         
          <button 
            onClick={decreaseQuantity}
            disabled={quantity === 1} >
                  -
                  </button>
       
         
        <div className="span-div">
        <span className="span">{quantity}</span>
        </div>
        
          <button
            onClick={increaseQuantity}
            disabled={quantity === product.stock}
          >
            +
          </button>
        </div>

        <p className="stock-info">
          {product.stock > 0 ? `Stock disponible: ${product.stock}` : "No hay stock disponible"}
        </p>

        <div className="buttons">
          <button
            className="buy-now"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Comprar
          </button>
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          message="Producto añadido al carrito"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
