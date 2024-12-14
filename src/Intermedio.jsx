import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
// import Footer from "./Footer.jsx";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook
  const [saldo, setSaldo] = useState(2000);
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [carta1, setCarta1] = useState(0);
  const [carta2, setCarta2] = useState(0);

  // Efecto para reaccionar cuando `numeroAleatorio` cambia
  useEffect(() => {
    if (numeroAleatorio > carta1 && numeroAleatorio < carta2) {
      alert("Ganasteee!!");
    }
  }, [numeroAleatorio, carta1, carta2]); // Ejecuta este efecto cuando cambien estas variables

  const goBack = () => {
    navigate("/"); // Redirige a la página de inicio
  };

  const aleatorio = () => {
    const numero = Math.floor(Math.random() * 12) + 1;
    setNumeroAleatorio(numero); // Actualiza el estado
  };

  const inicio = () => {
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
        <Form.Label> Saldo: {saldo} </Form.Label>
      </Row>
      <h1>Bienvenido a Intermedio</h1>
      <p>¡Este es el juego de Intermedio!</p>
      <button onClick={inicio}> Comenzar</button>
      <button onClick={aleatorio}> aleatorio</button>
      <Row>
        {" "}
        {carta1} {carta2}
      </Row>
      {numeroAleatorio}
      {/* <Row className="footer">
        <Form.Label>derechos reservados</Form.Label>
        </Row> */}
      {/* <Footer /> */}
      <button onClick={goBack} className="volver">
        Volver
      </button>
    </Container>
  );
}

export default Intermedio;
