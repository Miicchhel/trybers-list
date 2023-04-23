import React, { useState } from "react";
import { postTrybers } from "../../services/requests";
import './formulario.css';

const Formulario = ({fetchData}) => {
  const [turma, setTurma] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  function handleTurmaChange(event) {
    setTurma(event.target.value);
  }

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleLinkedinChange(event) {
    setLinkedin(event.target.value);
  }

  function handleGithubChange(event) {
    setGithub(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await postTrybers('/trybers', {turma, nome, email, linkedin, github});

    setTurma('');
    setNome('');
    setEmail('');
    setLinkedin('');
    setGithub('');

    fetchData()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_form">
        <label htmlFor="turma">Turma</label>
        <input
          type="number"
          id="turma"
          name="turma"
          value={turma}
          onChange={handleTurmaChange}
          required
        />
      </div>

      <div className="input_form">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={handleNomeChange}
          required
        />
      </div>

      <div className="input_form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="mariana@email.com"
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className="input_form">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={handleLinkedinChange}
          required
        />
      </div>
    <div className="input_form">
      <label htmlFor="github">Github</label>
      <input
        type="text"
        id="github"
        name="github"
        value={github}
        onChange={handleGithubChange}
        required
      />
    </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;