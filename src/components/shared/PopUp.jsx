import React from 'react';
import "../../css/shared/popUp.css";
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;

