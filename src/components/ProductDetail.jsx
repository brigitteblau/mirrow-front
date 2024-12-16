import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="product-detail">
      {/* Título */}
      <h1>{product.name}</h1>

      {/* Carrusel de imágenes */}
      <div className="carousel">
        <button onClick={handlePrevImage}>{"<"}</button>
        <img src={product.images[currentImageIndex]} alt={product.name} />
        <button onClick={handleNextImage}>{">"}</button>
      </div>

      {/* Detalles del producto */}
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock disponible:</strong> {product.stock}</p>
      <p><strong>Tela:</strong> {product.fabric}</p>
      <p><strong>Type ID:</strong> {product.typeId} | <strong>SubType ID:</strong> {product.subTypeId}</p>

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


      <div>
        <label><strong>Cantidad:</strong></label>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>


      <button
        onClick={() =>
          alert(
            `Producto añadido: ${product.name}\nTalle: ${selectedSize}\nCantidad: ${quantity}`
          )
        }
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductDetail;
