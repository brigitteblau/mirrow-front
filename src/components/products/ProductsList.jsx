// src/components/products/ProductList.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/productos";
import ProductCard from "./Products";
import Loader from "../shared/Loader";
import "../../css/products/productosList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedColor, setSelectedColor] = useState("");
  const [sortByPrice, setSortByPrice] = useState(false); // Estado para controlar el orden

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getProducts(true);
        if (response && Array.isArray(response.data) && response.data.length > 0) {
          setProducts(response.data);
          setFilteredProducts(response.data); // Inicializamos con todos los productos
        } else {
          console.warn("Datos no válidos o vacíos, usando datos locales.");
          const localData = getProducts(false);
          setProducts(localData.data || []); 
          setFilteredProducts(localData.data || []);
        }
      } catch (err) {
        console.error("Error haciendo fetch:", err);
        setError("No se pudieron cargar los productos. Usando datos locales.");
        const localData = getProducts(false);
        setProducts(localData.data || []);
        setFilteredProducts(localData.data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para manejar el cambio en el buscador
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterProducts(term, selectedCategory, minPrice, maxPrice, selectedColor, sortByPrice);
  };

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterProducts(searchTerm, category, minPrice, maxPrice, selectedColor, sortByPrice);
  };

  // Función para manejar el cambio de precio mínimo
  const handleMinPriceChange = (e) => {
    const price = parseInt(e.target.value);
    setMinPrice(price);
    filterProducts(searchTerm, selectedCategory, price, maxPrice, selectedColor, sortByPrice);
  };

  // Función para manejar el cambio de precio máximo
  const handleMaxPriceChange = (e) => {
    const price = parseInt(e.target.value);
    setMaxPrice(price);
    filterProducts(searchTerm, selectedCategory, minPrice, price, selectedColor, sortByPrice);
  };

  // Función para manejar el cambio de color
  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    filterProducts(searchTerm, selectedCategory, minPrice, maxPrice, color, sortByPrice);
  };

  // Función para ordenar los productos por precio (Mayor a Menor)
  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice); // Alterna el estado para ordenar de mayor a menor
    filterProducts(searchTerm, selectedCategory, minPrice, maxPrice, selectedColor, !sortByPrice);
  };

  // Filtrar y ordenar los productos
  const filterProducts = (searchTerm, selectedCategory, minPrice, maxPrice, selectedColor, sortByPrice) => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.typeId === parseInt(selectedCategory);
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesColor =
        !selectedColor || product.colors.includes(selectedColor);

      return matchesSearch && matchesCategory && matchesPrice && matchesColor;
    });

    // Ordenar por precio si es necesario
    if (sortByPrice) {
      filtered = filtered.sort((a, b) => b.price - a.price); // De mayor a menor
    }

    setFilteredProducts(filtered);
  };

  if (loading) {
    return <Loader />;
  }

  if (filteredProducts.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="product-list">
      <div className="div-titulo">
        <h1 className="titulo">Productos</h1>
          {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Filtro por categoría */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="filter-dropdown"
      >
        <option value="all">Todas las categorías</option>
        <option value="1">Remeras</option>
        <option value="2">Chombas</option>
        <option value="3">Buzos</option>
        <option value="4">Camisas Hawaianas</option>
        <option value="5">Sweaters</option>
        <option value="6">Pantalones</option>
        <option value="7">Jeans</option>
      </select>

      {/* Filtro por color */}
      <div className="color-filter">
        <label>Filtrar por color:</label>
        <select value={selectedColor}  onChange={handleColorChange}
          className="color-dropdown">
          <option value="">Todos los colores</option>
          {products
            .map((product) => product.colors)
            .flat()
            .filter((color, index, self) => self.indexOf(color) === index) // Filtramos colores únicos
            .map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
        </select>
      </div>

      {/* Botón para ordenar productos por precio */}
      <button onClick={handleSortByPrice} className="sort-price-button">
        {sortByPrice ? "Ordenar por Precio: Mayor a Menor" : "Ordenar por Precio: Menor a Mayor"}
      </button>

      </div>

    
      <div className="product-items">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
