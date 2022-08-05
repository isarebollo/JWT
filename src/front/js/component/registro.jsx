import React, { useState, useEffect } from "react";
import "../../styles/registro.css";
import { HOSTNAME } from "../component/config";

export const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [deshabilitado, setDeshabilitado] = useState(true);

  const updateText = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDeshabilitado(false);
    } else {
      setDeshabilitado(true);
    }
  });

  const onSave = async () => {
    const body = JSON.stringify({
      email,
      password
    });

    const resp = await fetch(HOSTNAME + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await resp.json();

    if (data.message === "ok") {
      alert("Usuario Creado Con exito");
    }

    if (data.message === "Usuario ya existe.") {
      alert(data.message);
    }
  };

  return (
    <>
      <div className="container" id="containerRegister">
      <h2>Registro</h2>
        <form className="row g-3 was-validated">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => updateText(e, setEmail)}
                value={email}
                type="email"
                className="form-control "
                required
              ></input>
            </div>
            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input
                onChange={(e) => updateText(e, setPassword)}
                value={password}
                type="password"
                className="form-control"
                required
              ></input>
            </div>
          </div>
          <div className="col-12">
            <button
              disabled={deshabilitado}
              onClick={onSave}
              id="buttonRegister"
              type="submit"
              className="btn btn-info button"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
