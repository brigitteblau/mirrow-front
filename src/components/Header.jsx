import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import "../css/header.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="header">
      {/* Logo */}
      <img src="public/img/Logo.png" alt="Logo" className="logo" />

      {/* Links de navegación */}
      <nav className={`nav-links ${isMenuActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/tiendas">Tiendas</Link>
        <Link to="/promociones">Promociones</Link>
        <Link to="/guia-de-tallas">Guía de tallas</Link>
      </nav>

      {/* Iconos */}
      <div className="icons">
        <Link to="/SingUp">
          <img src="public/img/user.svg" alt="User Icon" className="icon" />
        </Link>
        <img src="public/img/car.svg" alt="Cart Icon" className="icon" />

        {/* Menu Hamburguesa */}
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
