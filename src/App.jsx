import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import ProductList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail"; // Nuevo componente
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/producto/:id" element={<ProductDetail />} /> 
          <Route path="/tiendas" element={<div>Tiendas Page</div>} />
          <Route path="/promociones" element={<div>Promociones Page</div>} />
          <Route path="/guia-de-tallas" element={<div>Guía de tallas Page</div>} />
          <Route path="/cambio-contraseña" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
