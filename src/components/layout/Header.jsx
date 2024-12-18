import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../../css/layout/header.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="header">
 
      <img src="public/img/Logo-2.png" alt="Logo" className="logo" />

      <nav className={`nav-links ${isMenuActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/tiendas">Tiendas</Link>
        <Link to="/promociones">Promociones</Link>
        <Link to="/guia-de-tallas">Guía de tallas</Link>
      </nav>

    
      <div className="icons">
        <Link to="/log-in">
          <img src="/img/user.svg" alt="User Icon" className="icon" />
        </Link>
        <img src="/img/car.svg" alt="Cart Icon" className="icon" />

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
