// import logo from "./logo.svg";
import ruleta from "./ruleta.png";
import React, { useState } from "react";
import "./App.css";
import Intermedio from "./Intermedio";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate(); // Hook para programar redirecciones

  const OnChangeText = (event) => {
    // funcion de flecha, es la mas común
    setTexto(event.target.value);
  };
  const redirectIntermedio = () => {
    navigate("/intermedio"); // Redirige al componente Intermedio
  };

  return (
    <Container className="App">
      <header className="App-header">
        <h2>
          Timba
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </h2>
        <img
          src={ruleta}
          className="App-logo"
          alt="logo"
          // style={{ paddingBottom: "20px" }}
        />
        <input
          type="text"
          onChange={OnChangeText}
          placeholder="Ingrese un valor"
        ></input>
        {texto}
        <button onClick={redirectIntermedio}>Intermedo</button>
      </header>
    </Container>
  );
}

// export default App;
// Envolvemos el componente App con Router para usar rutas
export default function WrappedApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intermedio" element={<Intermedio />} />
      </Routes>
    </Router>
  );
}
