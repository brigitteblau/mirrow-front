import React from "react";
import "../css/popUp.css";

const PopUp = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default PopUp;
