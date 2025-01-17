// src/components/products/ProductList.jsx
import React, { useState } from "react";
import useProducts from "../../data/useProducts";
import ProductCard from "./Products";
import ProductFilters from "./ProductFilters";
import Loader from "../shared/Loader";
import "../../css/products/productosList.css";

const ProductList = () => {
  const { products, filteredProducts, loading, error, filterProducts } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedColor, setSelectedColor] = useState("");
  const [sortByPrice, setSortByPrice] = useState(false);
  const [showSalesOnly, setShowSalesOnly] = useState(false);

  const handleFiltersChange = () => {
    filterProducts({
      searchTerm,
      category: selectedCategory,
      color: selectedColor,
      sortByPrice,
    });
  };
  

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (filteredProducts.length === 0) return <p>No hay productos disponibles.</p>;
  console.log({ searchTerm, selectedCategory, selectedColor, sortByPrice });

  return (
    <div className="product-list">
      <div className="div-titulo">
        <h1 className="titulo">Productos</h1>
      </div>
      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        sortByPrice={sortByPrice}
        setSortByPrice={setSortByPrice}
        showSalesOnly={showSalesOnly}
        setShowSalesOnly={setShowSalesOnly}
        handleFiltersChange={handleFiltersChange} 
        products={products} 
      />
      <div className="product-items">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
