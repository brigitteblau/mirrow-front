//src/components/cart/Cart.jsx
import React, { useRef } from "react";
import { useCart } from "../../context/CartContext";
import Generate from "../layout/Generate";
import "../../css/pages/card.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const cartRef = useRef(); // Ref para el carrito

  return (
    <>
      <h2 className="cart-title">Carrito de Compras</h2>
      <div className="cart" ref={cartRef}>
        {cart.length === 0 ? (
          <p className="empty-cart">No hay productos en el carrito.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="div-li">
                <div className="li-card">
                  <p>{item.name} - Cantidad: {item.quantity}</p>
                  <p>
                    Talle: {Array.isArray(item.size) ? item.size.join(", ") : item.size}
                  </p>
                  <p>Color: {item.color}</p>
                  <div className="div-eliminar">
                    <button className="eliminar" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="button-div">
        <Generate targetRef={cartRef} />
      </div>
    </>
  );
};

export default Cart;
