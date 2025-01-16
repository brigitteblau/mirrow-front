// src/components/products/ProductDetail.js
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../css/products/productosDetail.css";
import Popup from "../shared/PopUp";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showPopup, setShowPopup] = useState(false); // Popup de confirmación
  const [showModal, setShowModal] = useState(false); // Estado del modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Imagen activa

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart({ ...product, size: selectedSize, color: selectedColor, quantity });
    } else {
      setShowPopup(true);
    }
  };

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
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Columna central: Imagen principal */}
      <div className="main">
        <div className="main-image">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            onClick={() => setShowModal(true)} // Abrir modal
            style={{ cursor: "pointer" }}
          />
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
            ¿No sabes tu talle? Consulta nuestra <Link to="/guia-de-tallas">guía de talles</Link>
          </p>
        </div>

        <div className="quantity">
          <p>Cantidad:</p>
          <button onClick={decreaseQuantity} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} disabled={quantity === product.stock}>
            +
          </button>
        </div>

        <p className="stock-info">
          {product.stock > 0 ? `Stock disponible: ${product.stock}` : "No hay stock disponible"}
        </p>

        <div className="buttons">
          <button className="buy-now" onClick={handleAddToCart} disabled={product.stock === 0}>
            Comprar
          </button>
          <button className="add-to-cart" onClick={handleAddToCart} disabled={product.stock === 0}>
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Modal con Swiper */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-modal">
              <button onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation
              pagination={{ clickable: true }}
              zoom={true}
              loop={true}
              initialSlide={currentImageIndex}
              className="modal-swiper"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img src={image} alt={`${product.name} slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

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
