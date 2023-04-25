import React, { useState } from "react";
import Cards from "../Cards";
import Home from "../../pages/Home";
import './container.css'
import { getTrybers } from "../../services/requests";
import SaveLink from "../SaveLink";

function Container() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = '/trybers';
    try {
      const response = await getTrybers(url);
      setData(response)
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <section className="container">
      <div className="div1"> 
        <Home fetchData = { fetchData } />

        <SaveLink></SaveLink>
      
      </div>
      
      <div className="div2"> 
        <h3>Trybers cadastrados</h3>
        <Cards data={ data } fetchData = { fetchData }/>
      </div>
    </section>
  );
}

export default Container;