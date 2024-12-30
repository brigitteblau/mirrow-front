// src/components/products/ProductList.js
import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/productos";
import ProductCard from "./Products";
import Loader from "../shared/Loader";
import "../../css/products/productosList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProducts(true); // Intentar obtener productos remotos
        if (response && Array.isArray(response.data)) {
          setProducts(response.data); 
        } else {
          console.warn("Datos no válidos, usamos locales");
          const localData = getProducts(false);
          setProducts(localData.data || []); 
        }
      } catch (err) {
        console.error("Error haciendo fetch:", err);
        setError("No se pudieron cargar los productos.");
        const localData = getProducts(false);
        setProducts(localData.data || []);
      }
      finally {
        setTimeout(() => setLoading(false), 6000);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }
  if (loading) {
    return <Loader/>; 
  }
  if (products.length ===0) {
    return <div className="no-products">No hay productos cargados por favor intente mas tarde!</div>; 
  }
  return (
    <div className="product-list">
      <div className="div-titulo">
        <h1 className="titulo">Productos</h1>
      </div>
      <div className="product-items">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
