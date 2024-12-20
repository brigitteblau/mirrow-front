import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from "../shared/PopUp";
import "../../css/shared/PopUp.css";

const SingUp = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      surname,
      email,
      password,
      address,
      phone
    };

    try {
      const response = await fetch('https://mirrow-db.vercel.app/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      
      if (response.status === 201) {
        // Registro exitoso, mostramos el popup
        setIsFormSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Por favor, intente nuevamente.');
      }
    } catch (error) {
      setErrorMessage('Error al conectar con el servidor. Por favor, intente más tarde.');
      console.error(error);
    }
  };

  const handleClosePopup = () => {
    setIsFormSubmitted(false); // Cerrar el popup
  };

  return (
    <div className="login-page">
         <div className="outer-border">
         <div className="inner-border">
      <div id="form-container" className="login-box">
      <h1 className="login-tittle">REGISTRARSE</h1>
        <form onSubmit={handleSubmit}>
       
          <label htmlFor="register-name" className="label">Nombre:</label>
          <input
            type="text"
            id="register-name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="register-surname" className="label">Apellido:</label>
          <input
            type="text"
            id="register-surname"
            className="input-field"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <label htmlFor="register-email" className="label">Email:</label>
          <input
            type="email"
            id="register-email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="register-password" className="label">Contraseña:</label>
          <input
            type="password"
            id="register-password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="register-address" className="label">Dirección:</label>
          <input
            type="text"
            id="register-address"
            className="input-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label htmlFor="register-phone" className="label">Teléfono:</label>
          <input
            type="tel"
            id="register-phone"
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Registrar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>

        <p className="login-link">
          ¿Ya tienes cuenta?<Link to="/log-in" className="register-link"> Inicia sesión</Link>
        </p>
      </div>
      </div>
      </div>

      {isFormSubmitted && (
        <Popup
          message="Se ha enviado un correo de verificación a tu dirección de email. Por favor, verifica tu cuenta antes de iniciar sesión."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SingUp;

