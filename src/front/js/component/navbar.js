import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const removeStorage = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Inicio</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">Iniciar Sesión</button>
          </Link>
          <Link to="/registro">
            <button id="buttonNavbar" className="btn btn-primary">
              Registro
            </button>
          </Link>
          <Link to="/private">
            <button id="buttonNavbar" className="btn btn-primary">
              Privado
            </button>
          </Link>
        </div>
        <Link to="/home">
        <button
          className="btn btn-danger"
          onClick={() => {
            removeStorage()
          }}
        >
         
          Cerrar Sesión
        </button>
        </Link>
      </div>
    </nav>
  );
};
