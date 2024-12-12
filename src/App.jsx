// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Login from "./components/Login"; 
import Singup from "./components/SingUp";
const App = () => {
  return (
    <Router>
      <Header /> {/* Esto asegurará que el Header se muestre en todas las rutas */}
      <div>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/sign-up" element={<Singup/>} />
          <Route path="/log-in" element={<Login/>} />
          <Route path="/productos" element={<div>Productos Page</div>} />
          <Route path="/tiendas" element={<div>Tiendas Page</div>} />
          <Route path="/promociones" element={<div>Promociones Page</div>} />
          <Route path="/guia-de-tallas" element={<div>Guía de tallas Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
