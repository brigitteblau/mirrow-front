//src/components/cart/Cart.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>
                {item.name} - Cantidad: {item.quantity}
              </p>
              <div className="div-eliminar">
              <button className="eliminar" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
