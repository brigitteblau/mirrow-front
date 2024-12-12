import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Login from "./components/Login"; 
import SingUp from "./components/SingUp";
// import Guia from "./components/Guia;
const App = () => {
  return (
    <Router>
      <Header /> 
      <div>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/sing-up" element={<SingUp/>} />
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
