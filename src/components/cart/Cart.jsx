

import React, { useState } from 'react';

// Componente para el carrito
const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>{producto.nombre} - ${producto.precio}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => alert('Proceder a la compra')}>Ir a la compra</button>
    </div>
  );
};

export default Carrito;
