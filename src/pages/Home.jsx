import React, { useState } from "react";
import Formulario from "../components/Formulario";
import './home.css'

function Home({ fetchData }) {
  const [cadastrar, setCadastrar] = useState(false);
  const [teste, setTest] = useState('Cadastrar')

  const handleClick = () => {
    setCadastrar(!cadastrar);
    if (cadastrar) setTest('Cadastrar');
    if (!cadastrar) setTest('Voltar');
  }

  return (
    <div className="container_home">
      { cadastrar && <Formulario fetchData = { fetchData } /> }

      {
        !cadastrar && (<>
          <h1>Cadastre-se já na API Trybers</h1>
          <p>e deixe seus amigos trabalharem com você!</p>
        </>)
      }

      <button 
        type="button"
        onClick={ handleClick }
      >
        { teste }
      </button>
      
    </div>
  );
}

export default Home;