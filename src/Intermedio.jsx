import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import Footer from "./Footer.jsx";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook

  const [saldo, setSaldo] = useState(2000);
  const [resultado, setResultado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [carta1, setCarta1] = useState(0);
  const [carta2, setCarta2] = useState(0);
  const [estado, setEstado] = useState(false);

  // Efecto para reaccionar cuando `numeroAleatorio` cambia
  useEffect(() => {
    if (estado) {
      if (numeroAleatorio > carta1 && numeroAleatorio < carta2) {
        // alert("Ganasteee!!");
        setResultado("Ganasteee!!");
      } else {
        setResultado("Perdiste :(");
      }
    }
  }, [numeroAleatorio, carta1, carta2, resultado, estado]); // Ejecuta este efecto cuando cambien estas variables

  const goBack = () => {
    setResultado("");
    navigate("/"); // Redirige a la página de inicio
  };

  const aleatorio = () => {
    const numero = Math.floor(Math.random() * 12) + 1;
    setNumeroAleatorio(numero); // Actualiza el estado
  };

  const inicio = () => {
    setEstado(true);
    const numero1 = Math.floor(Math.random() * 12) + 1; // Genera el primer número aleatorio
    const numero2 = Math.floor(Math.random() * 12) + 1; // Genera el segundo número aleatorio

    if (numero1 <= numero2) {
      // Si carta1 es menor o igual a carta2, asigna normalmente
      setCarta1(numero1);
      setCarta2(numero2);
    } else {
      // Si carta1 es mayor que carta2, invierte los valores
      setCarta1(numero2);
      setCarta2(numero1);
    }
  };

  return (
    <Container className=" center-content fondo intermedio">
      <Row className="banner" style={{ textAlign: "left", paddingLeft: "10%" }}>
        <Form.Label> Saldo: ${saldo} </Form.Label>
      </Row>
      <h1 className="letrero">
        {resultado ? resultado : "Bienvenido a Intermedio"}
      </h1>
      <button onClick={inicio} style={{ marginTop: "20px" }}>
        {" "}
        Comenzar
      </button>
      <button onClick={aleatorio}> aleatorio</button>
      <Row>
        {" "}
        {carta1} {carta2}
      </Row>
      {numeroAleatorio}
      {/* <Footer /> */}
      {/* <button className="exit" onClick={goBack}>
        Volver
      </button> */}
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
