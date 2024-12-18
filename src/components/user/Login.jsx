import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/user/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showResetLink, setShowResetLink] = useState(false); // Nuevo estado para mostrar el link

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShowResetLink(false); // Ocultar el link cada vez que se intenta un nuevo inicio de sesión

    try {
      const response = await fetch("https://mirrow-db.vercel.app/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 402) {
        throw new Error("Error en la autenticación. Verifica tus credenciales.");
      } else if (response.status === 401) {
        throw new Error("Usuario no verificado.");
      } else {
        const data = await response.json();
        console.log("Login exitoso:", data);
        alert("¡Bienvenido!");
        window.location.href = "/home";
      }
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      setShowResetLink(true); // Mostrar el link si hay error
    }
  };

  return (
    <div className="login-page">
      <div className="outer-border">
        <div className="inner-border">
          <div className="login-box">
            <h1 className="login-tittle">INICIAR SESIÓN</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Mail/Teléfono</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              {showResetLink && (
                <p className="reset-password">
                  ¿Olvidaste tu contraseña?{" "}
                  <Link to="/cambio-contraseña" className="register-link">
                    Haz clic aquí para cambiarla
                  </Link>
                </p>
              )}
              <button type="submit">Ingresar</button>
            </form>
            <p>
              ¿No tienes cuenta?{" "}
              <Link to="/sing-up" className="register-link">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
