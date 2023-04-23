import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/Container";

import './App.css';

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
