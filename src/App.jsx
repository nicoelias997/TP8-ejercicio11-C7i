import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Titulo from "./components/Titulo"
import Formulario from "./components/Formulario"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <Card>
        <Card.Header>
      <Titulo></Titulo>
      </Card.Header>
        <Card.Body>
        <Formulario></Formulario>
        </Card.Body>
      </Card>
  );
}

export default App;
