import React, { useEffect } from "react";
import "../../styles/menuPrincipal.css";
import { useNavigate } from "react-router-dom";

export const MenuPrincipal = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/menuprincipal");
    } else {
      navigate("/private")
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>ESTAS DENTRO DE UN MENU PRIVADO</h1>
      </div>
    </>
  );
};
