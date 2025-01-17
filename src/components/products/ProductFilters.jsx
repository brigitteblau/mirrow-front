// src/components/products/Filtro.jsx
import React, { useState } from "react";
import "../../css/products/filtro.css";



const ProductFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  sortByPrice,
  setSortByPrice,
  handleFiltersChange,
  products,
}) => {
  // Obtener colores únicos
  const uniqueColors = products
    .map((product) => product.colors)
    .flat()
    .filter((color, index, self) => self.indexOf(color) === index);

  // Función para manejar la búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Si tiene más de 3 caracteres, empieza a buscar
    if (value.length >= 3) {
      handleFiltersChange();
    }
  };

  // Limpiar el campo de búsqueda y restablecer todos los filtros
  const clearSearch = () => {
    setSearchTerm("");  // Limpiar el término de búsqueda
    setSelectedCategory("all");  // Restablecer la categoría
    setSelectedColor("");  // Restablecer el color
    setSortByPrice(false);  // Restablecer el orden de precio
    handleFiltersChange();  // Llamar al filtro para mostrar todos los productos
  };

  return (
    <div className="filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="clear-search">
            ✖️
          </button>
        )}
      </div>
      
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          handleFiltersChange();
        }}
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
      
      <div className="color-filter">
        <label>Filtrar por color:</label>
        <select
          value={selectedColor}
          onChange={(e) => {
            setSelectedColor(e.target.value);
            handleFiltersChange();
          }}
          className="color-dropdown"
        >
          <option value="">Todos los colores</option>
          {uniqueColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => {
          setSortByPrice(!sortByPrice);
          handleFiltersChange();
        }}
        className="sort-price-button"
      >
        {sortByPrice ? "Ordenar por Precio: Mayor a Menor" : "Ordenar por Precio: Menor a Mayor"}
      </button>
    </div>
  );
};

export default ProductFilters;
