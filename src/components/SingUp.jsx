// src/components/SignUp.jsx
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

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
    const response = await fetch("https://mi-api.com/api/auth/verify-email-status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.emailVerified) {
      // Si el correo está verificado, redirigir al home
      window.location.href = "/home"; // O usar React Router si lo prefieres
    } else {
      // Si el correo no está verificado, pedir que lo verifiquen
      alert("Por favor, confirma tu correo.");
    }
  };

  return (
    <div className="sign-up">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Registrar"}
        </button>
      </form>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
          {showPopUp && (
            <div className="pop-up">
              <p>Por favor, verifica tu correo.</p>
              <button onClick={handleVerificationClick}>Ya se verificó</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUp;
