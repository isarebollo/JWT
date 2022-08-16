import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { HOSTNAME } from "../component/config";
import { Link } from "react-router-dom";

import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const updateText = (e, setState) => {
    const value = e.target.value;
    setState(value);
  };

  const onSave = async () => {
    const body = JSON.stringify({
      email,
      password,
    });
    const resp = await fetch(HOSTNAME + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body,
    });
    const data = await resp.json();
    localStorage.setItem("token", data);
  };
  return (
    <>
      <div className="container " id="login">
        <h2>Login</h2>
        <form id="form" className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden">Email</label>
            <input
              onChange={(e) => updateText(e, setEmail)}
              value={email}
              type="Email"
              className="form-control"
              placeholder="Email"
            ></input>
          </div>
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              onChange={(e) => updateText(e, setPassword)}
              value={password}
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            ></input>
          </div>
          <div className="col-auto">
            <Link to="/private">
              <button
                onClick={ onSave }
                type="submit"
                className="btn btn-primary mb-3"
              >
                Iniciar Sesión
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
