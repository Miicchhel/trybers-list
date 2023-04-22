import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './rodape.css'

const Rodape = () => {
  return(
    <div className="rodape">
      <p>
        Desenvolvipo por <strong>Michel Ferreira</strong>
      </p>

      <div className="social_media">
        <a href="https://github.com/Miicchhel" target="_blanck"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/michel-ferreira-dev/" target="_blanck"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Rodape;