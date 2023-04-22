import React from "react";
import './card.css'
import { FaGithub } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import {MdOutlineEmail} from 'react-icons/md'

const Card = ({mock}) => {
  return (
    <div className="card">
      <div>
        <p>{mock.nome}</p>
      </div>
      <img src={`${mock.github}.png`} alt="foto" />
      <div className="container_btn">
        <a href={ mock.github } target="_blanck"><FaGithub /></a>
        <a href={ mock.linkedin } target="_blanck"><FaLinkedin /></a>
      </div>
      <div>
        <p>Turma {mock.turma}</p>
        { mock.status ? <span>{mock.status}</span>:'' }
      </div>
    </div>
  );
}

export default Card;