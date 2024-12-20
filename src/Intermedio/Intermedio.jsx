import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import InicioIntermedio from "./InicioIntermedio";
import JuegoIntermedio from "./JuegoIntermedio";
// import Footer from "./Footer.jsx";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook

  const [saldo, setSaldo] = useState(2000);
  const [resultado, setResultado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [carta1, setCarta1] = useState(0);
  const [carta2, setCarta2] = useState(0);
  const [estado, setEstado] = useState(true);

  const goBack = () => {
    setResultado("");
    navigate("/"); // Redirige a la página de inicio
  };

  const aleatorio = () => {
    const numero = Math.floor(Math.random() * 12) + 1;
    setNumeroAleatorio(numero); // Actualiza el estado
  };

  const actualizarSaldo = (nuevoSaldo) => {
    setSaldo(nuevoSaldo);
  };

  return (
    <Container className=" center-content fondo intermedio">
      <Row className="banner" style={{ textAlign: "left", paddingLeft: "10%" }}>
        <Form.Label> Saldo: ${saldo} </Form.Label>
      </Row>
      <h1 className="letrero">
        {resultado ? resultado : "Bienvenido a Intermedio"}
      </h1>

      {/* <button onClick={aleatorio}> aleatorio</button> */}
      {/* <Row>
        {carta1} {carta2}
      </Row> */}
      {numeroAleatorio}

      {estado ? (
        <InicioIntermedio
          saldo={saldo}
          apuesta={(saldo) => actualizarSaldo(saldo)}
        />
      ) : (
        <JuegoIntermedio />
      )}
      <button onClick={goBack}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <polygon points="15 2, 15 22, 5 12"></polygon>
        </svg>{" "}
        Volver
      </button>
    </Container>
  );
}

export default Intermedio;
