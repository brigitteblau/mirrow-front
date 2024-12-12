import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://mirrow-db.vercel.app/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status===402) {
        throw new Error("Error en la autenticación. Verifica tus credenciales.");
        console.log(await response.json())
      }
      else if (response.status=== 401){
        throw new Error("usuario no verificado");
      }
      else{
        const data = await response.json();
        console.log("Login exitoso:", data);
        alert("¡Bienvenido!");
        window.location.href = "/home";
      }
      

      
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-page">
    <div className="outer-border">
      <div className="inner-border">
        <div className="login-box">
          <h1 className="login-tittle">INICIAR SESION</h1>
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
