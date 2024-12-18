import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../css/products/productosDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [stockError, setStockError] = useState("");

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  // Cambiar imágenes con los indicadores
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  // Control de cantidad y stock
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > product.stock) {
      setQuantity(product.stock);
      setStockError("No hay suficiente stock disponible.");
    } else if (value >= 1) {
      setQuantity(value);
      setStockError("");
    }
  };

  return (
    <div className="product-detail">
      {/* Título */}
      <h1>{product.name}</h1>

      {/* Carrusel de imágenes */}
      <div className="carousel">
        <img src={product.images[currentImageIndex]} alt={product.name} />
      </div>
      <div className="carousel-indicators">
        {product.images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleImageChange(index)}
          ></span>
        ))}
      </div>

      {/* Detalles del producto */}
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock disponible:</strong> {product.stock > 0 ? product.stock : "Sin stock"}</p>

      {/* Selección de color */}
      <div>
        <label><strong>Color:</strong></label>
        <div className="color-buttons">
          {product.colors.map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: color,
                border: selectedColor === color ? "2px solid black" : "1px solid #ddd",
              }}
              className="color-button"
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>

      {/* Selección de talle */}
      <div>
        <label><strong>Talle:</strong></label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {product.size.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Input de cantidad */}
      <div>
        <label><strong>Cantidad:</strong></label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        {stockError && <p className="stock-error">{stockError}</p>}
      </div>

      {/* Botón Añadir */}
      <button
        onClick={() => alert("Producto añadido al carrito")}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Sin stock" : "Añadir al carrito"}
      </button>
    </div>
  );
};

export default ProductDetail;
