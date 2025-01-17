// src/components/products/Sale.jsx
import React from "react";
import useProducts from "../../data/useProducts";
import ProductCard from "../products/Products";
import "../../css/products/productosList.css";
import "../../css/products/productosModal.css";
import Loader from "../shared/Loader";


const Sale = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;


  const saleProducts = products.filter((product) => product.promocion);

  if (saleProducts.length === 0) {
    return <p>No hay productos en promoción.</p>;
  }

  return (
    <div className="product-list">
      {/* <div className="div-titulo">
      <h1 className="titulo">Aprovecha ahoraa</h1>
      </div> */}
   
      <div className="product-items">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
