// src/data/useProducts.js
import { useEffect, useState } from "react";
import { getProducts } from "../data/productos";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const filterProducts = ({
    searchTerm = "",
    category = "all",
    minPrice = 0,
    maxPrice = 1000000,
    color = "",
    sortByPrice = false,
    showSalesOnly = false,
  }) => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "all" || product.typeId === parseInt(category);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesColor = !color || product.colors.includes(color);
      const matchesSale = !showSalesOnly || product.onSale;

      return matchesSearch && matchesCategory && matchesPrice && matchesColor && matchesSale;
    });

    if (sortByPrice) {
      filtered = filtered.sort((a, b) => b.price - a.price); // De mayor a menor
    }

    setFilteredProducts(filtered);
  };

  return {
    products,
    filteredProducts,
    loading,
    error,
    filterProducts,
  };
};

export default useProducts;
