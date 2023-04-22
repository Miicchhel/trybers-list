import React from "react";
import Cards from "../Cards";
import Home from "../../pages/Home";
import './container.css'

function Container({ children }) {
  return (
    <section className="container">
      <div className="div1"> 
        <Home />
      </div>
      <div className="div2"> 
        <h3>Trybes cadastrados</h3>
        <Cards />
      </div>
    </section>
  );
}

export default Container;