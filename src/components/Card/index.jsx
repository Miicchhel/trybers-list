import React from "react";
import './card.css'
import { FaGithub } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import {MdOutlineEmail} from 'react-icons/md'

const Card = ({mock}) => {
  return (
    <div className="card">
      <p>{mock.nome}</p>
      <img src={`${mock.github}.png`} alt="foto" />
      <div className="container_btn">
        <a href={ mock.github } target="_blanck"><FaGithub /></a>
        <a href={ mock.linkedin } target="_blanck"><FaLinkedin /></a>
      </div>
      <p>Turma {mock.turma}</p>
      { mock.status ? <span>{mock.status}</span>:'' }
    </div>
  );
}

export default Card;