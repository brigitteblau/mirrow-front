import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import PopUp from "./PopUp"; 

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Llamada a la API para registrar al usuario
      const response = await fetch("https://mi-api.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      const data = await response.json();
      setLoading(false);

      // Mostrar mensaje de éxito
      setSuccessMessage("¡Registro exitoso! Por favor, verifica tu correo.");
      setShowPopUp(true); // Mostrar el pop-up de verificación de correo

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleVerificationClick = async () => {
    // Llamada para verificar el estado de la verificación del email
    try {
      const response = await fetch("https://mi-api.com/api/auth/verify-email-status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.emailVerified) {
        // Si el correo está verificado, redirigir al home
        navigate("/home"); // Usamos React Router para redirigir
      } else {
        // Si el correo no está verificado, pedir que lo verifiquen
        alert("Por favor, confirma tu correo.");
      }
    } catch (error) {
      alert("Hubo un error al verificar el estado del correo.");
    }
  };

  const closePopUp = () => {
    setShowPopUp(false); // Cerrar el pop-up
  };

  return (


    <div className="sign-up">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label">Email:</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="input-label">Contraseña:</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Registrar"}
        </button>
      </form>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
          {showPopUp && (
            <PopUp
              message="Por favor, verifica tu correo."
              onClose={closePopUp}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SignUp;
