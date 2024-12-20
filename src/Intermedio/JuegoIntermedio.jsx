import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import Footer from "./Footer.jsx";

function JuegoIntermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook
  const [carta1, setCarta1] = useState(0);
  const [carta2, setCarta2] = useState(0);
  const [resultado, setResultado] = useState("");

  // // Efecto para reaccionar cuando `numeroAleatorio` cambia
  // useEffect(() => {

  // }, []); // Ejecuta este efecto cuando cambien estas variables

  const onChangeSaldo = () => {
    setResultado("");
    // navigate("/"); // Redirige a la página de inicio
  };

  const inicio = () => {
    // setEstado(true);
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
    <Container>
      <Form.Label>Apuesta inicial:</Form.Label>
      <input
        type="text"
        onChange={onChangeSaldo}
        placeholder="Ingrese un valor"
      ></input>
    </Container>
  );
}

export default JuegoIntermedio;
