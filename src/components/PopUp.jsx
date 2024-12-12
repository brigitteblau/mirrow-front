import React from 'react';

const PopUp = ({ message, onClose }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <p>{message}</p>
        <button onClick={onClose} className="pop-up-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default PopUp;
