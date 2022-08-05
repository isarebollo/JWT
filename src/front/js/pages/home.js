import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container">
        
        <div className="row">
          <div className="col-6">
            <h1>BIENVENIDOS</h1> 
            <img id="gato" src="https://img.freepik.com/foto-gratis/hermoso-gato-ojos-azules_58409-14525.jpg?w=2000"/>
          </div>
        </div>
      </div>
     
    </>
  );
};
