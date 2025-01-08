// src/components/products/ProductList.jsx
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
        const response = await getProducts(true); 
        if (response && Array.isArray(response.data) && response.data.length > 0) {
          setProducts(response.data);
        } else {
          console.warn("Datos no válidos o vacíos, usando datos locales.");
          const localData = getProducts(false);
          setProducts(localData.data || []); 
        }
      } catch (err) {
        console.error("Error haciendo fetch:", err);
        setError("No se pudieron cargar los productos. Usando datos locales.");
        const localData = getProducts(false);
        setProducts(localData.data || []);
      } finally {
        // setTimeout(() => setLoading(false), 3000);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return <p>No hay productos disponibles incluso con datos locales.</p>;
  }

  return (
    <div className="product-list">
      <div className="div-titulo">
        <h1 className="titulo">Productos</h1>
      </div>
      <div className="product-items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
