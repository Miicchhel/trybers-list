import React, { useState } from "react";
import Cards from "../Cards";
import Home from "../../pages/Home";
import './container.css'
import { getTrybers } from "../../services/requests";

function Container() {

  const [data, setData] = useState([]);
  // const [teste, setTeste] = useState(false);

  const fetchData = async () => {
    const url = '/trybers';
    try {
      const response = await getTrybers(url);
      console.log(response);
      setData(response)
    } catch (error) {
      console.error(error);
    }
  }

  // const testando = () => {
  //   console.log('cliquei no testando');
  //   setTeste(!teste)
  // }
  
  return (
    <section className="container">
      <div className="div1"> 
        <Home fetchData = { fetchData } />
      </div>
      <div className="div2"> 
        <h3>Trybers cadastrados</h3>
        <Cards data={ data } fetchData = { fetchData }/>
      </div>
    </section>
  );
}

export default Container;