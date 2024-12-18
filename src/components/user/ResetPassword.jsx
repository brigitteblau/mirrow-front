import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/shared/popUp.css";
import "../../css/user/reset.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uuid, setUuid] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Controla la visibilidad del popup
  const [popupMessage, setPopupMessage] = useState(""); // Mensaje del popup

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("uuid");
    setUuid(token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch(
        "https://mirrow-db.vercel.app/users/resetPassword",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: newPassword, resetToken: uuid }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setPopupMessage("¡Contraseña restablecida con éxito!");
        setShowPopup(true);

        // Redirige al login después de un tiempo
        setTimeout(() => {
          setShowPopup(false);
          navigate("/log-in");
        }, 2000);
      } else {
        // Manejo específico de códigos HTTP
        switch (response.status) {
          case 401:
            setPopupMessage("Error 401: Token inválido o expirado.");
            break;
          case 402:
            setPopupMessage("Error 402: Requiere una acción adicional.");
            break;
          case 403:
            setPopupMessage("Error 403: No tienes permisos para esta acción.");
            break;
          case 404:
            setPopupMessage("Error 404: Usuario no encontrado.");
            break;
          case 500:
            setPopupMessage("Error 500: Error interno del servidor.");
            break;
          default:
            setPopupMessage(data.message || "Ocurrió un error inesperado.");
        }
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setPopupMessage("Ocurrió un error de conexión. Inténtalo de nuevo.");
      setShowPopup(true);
    }
  };

  return (
    <div className="reset-container">
      <h1>Restablecer Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-password">Nueva Contraseña:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div className="div-submit">
          <button type="submit" className="submit">Restablecer</button>
        </div>
      </form>

      {/* Mostrar el Popup si está visible */}
      {showPopup && (
        <Popup
          message={popupMessage}
          onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
};

export default ResetPassword;
