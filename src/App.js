// import logo from "./logo.svg";
import ruleta from "./Fondos/ruleta.png";
import React, { useState } from "react";
import "./App.css";
import Intermedio from "./Intermedio/Intermedio";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import Footer from "./Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate(); // Hook para programar redirecciones

  // const OnChangeText = (event) => {
  //   // funcion de flecha, es la mas común
  //   setTexto(event.target.value);
  // };
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
        {/* <input
          type="text"
          onChange={OnChangeText}
          placeholder="Ingrese un valor"
        ></input> */}
        {/* {texto} */}
        <Row style={{ padding: "20px" }}>
          <Button className="llili" onClick={redirectIntermedio}>
            Intermedo
          </Button>
        </Row>
      </header>
      <Footer />
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
