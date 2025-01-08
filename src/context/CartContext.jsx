//src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Intenta cargar los datos desde sessionStorage
  const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const storedCartCount = storedCart.length;

  const [cart, setCart] = useState(storedCart);
  const [cartCount, setCartCount] = useState(storedCartCount);

  useEffect(() => {
    // Guardar el carrito y el contador en sessionStorage cada vez que cambien
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('cartCount', cartCount);
  }, [cart, cartCount]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartCount(updatedCart.length);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
