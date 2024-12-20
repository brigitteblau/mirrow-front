// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <AppRoutes />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

