import React, { useState, useEffect } from "react";
import "../../styles/private.css";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("inicia sesión para entrar")
      navigate("/login ");
    } else {
      navigate("/private");
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>ESTAS DENTRO DE UN MENU PRIVADO </h1>
      </div>
    </>
  );
};

export default Private;
