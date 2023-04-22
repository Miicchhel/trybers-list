import React, { useEffect, useState } from "react";
import Card from "../Card";
import './cards.css'
import { getTrybers } from "../../services/requests";

// const mock = [
//   {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },,
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },,
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },  {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },,
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }, {
//     "_id": "6441deeef1a843101c120087",
//     "turma": 24,
//     "nome": "Michel Ferreira",
//     "email": "michel.ferreira.melo@gmail.com",
//     "linkedin": "https://www.linkedin.com/in/michel-ferreira-dev/",
//     "github": "https://github.com/Miicchhel",
//     "status": "admin"
//   },
//   {
//     "_id": "644292ede84681984a3bc4b7",
//     "turma": 24,
//     "nome": "Thiago Souza",
//     "email": "thiago29.06@hotmail.com",
//     "linkedin": "https://www.linkedin.com/in/thiagoccs/",
//     "github": "https://github.com/thiagoccs"
//   }
// ]
function Cards() {

  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);

  const fetchData = async () => {
    const url = '/trybers';
    try {
      const response = await getTrybers(url);
      setData(response)
    } catch (error) {
      console.error(error);
    }
  }

  const atualizandoShowData = () => {
    let dataTest = data.slice(0, data.length-1)
    let first = data.slice(data.length-1)
    dataTest.unshift(first[0])
    setShowData(dataTest)
  }

  useEffect(() => {
    console.log('primeiro');
    fetchData()
  },[]);

  useEffect(() => {
    console.log('segundo');
    atualizandoShowData()
  },[data]);
  
  return (
    <section className="cards">
      { showData.length > 1 && showData.map((user, key) => <Card key={user._id} mock={user} />) }
    </section>
  );
}

export default Cards;