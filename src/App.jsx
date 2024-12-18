import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/user/Login";
import SingUp from "./components/user/SingUp";
import ProductList from "./components/products/ProductsList";
import ProductDetail from "./components/products/ProductDetail"; 
import ResetPassword from "./components/user/ResetPassword";

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
