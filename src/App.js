import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/Container";

import './App.css';
// import Cards from "./components/Cards";

function App() {
  return (
    <main>
      <BrowserRouter>
          <Cabecalho />
          <Container />
          <Rodape />
      </BrowserRouter>
    </main>
  );
}

export default App;
