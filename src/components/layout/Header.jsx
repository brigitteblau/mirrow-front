import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import "../../css/layout/header.css";

const Header = () => {
  const { cartCount } = useCart(); // Obtén el contador de productos en el carrito
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="header">
      <img src="/img/Logo-2.png" alt="Logo" className="logo" />

      <nav className={`nav-links ${isMenuActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/coleccion">Colección</Link>
        <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
        <Link to="/promociones">ON SALE</Link>
        <Link to="/guia-de-tallas">Guía de tallas</Link>
      </nav>

      <div className="icons">
        <Link to="/log-in">
          <img src="/img/user.svg" alt="User Icon" className="icon" />
        </Link>

        <Link to="/cart">
          <div className="cart-container">
            <img src="/img/car.svg" alt="Cart Icon" className="icon" />
            {cartCount > 0 && (
              <div className="cart-notification">
                {cartCount}
              </div>
            )}
          </div>
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
