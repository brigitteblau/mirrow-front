import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Login from "./components/Login"; 
import SingUp from "./components/SingUp";
import ProductList from "./components/ProductsList";
import ResetPassword from "./components/ResetPassword";
// import Guia from "./components/Guia;
const App = () => {
  return (
    <Router>
 <Header/>
      <div>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/sing-up" element={<SingUp/>} />
          <Route path="/log-in" element={<Login/>} />
          <Route path="/productos" element={<ProductList/> }/>
          <Route path="/tiendas" element={<div>Tiendas Page</div>} />
          <Route path="/promociones" element={<div>Promociones Page</div>} />
          <Route path="/guia-de-tallas" element={<div>Guía de tallas Page</div>} />
          <Route path="/cambio-contraseña" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
