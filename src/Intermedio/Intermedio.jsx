import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import InicioIntermedio from "./InicioIntermedio";
import JuegoIntermedio from "./JuegoIntermedio";
// import Footer from "./Footer.jsx";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook

  const [saldo, setSaldo] = useState(2000);
  const [apuesta, setApuesta] = useState(0);
  const [resultado, setResultado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [estado, setEstado] = useState(true);
  useEffect(() => {
    console.log(apuesta);
  }, [apuesta]);
  const goBack = () => {
    setResultado("");
    navigate("/"); // Redirige a la página de inicio
  };

  const aleatorio = () => {
    const numero = Math.floor(Math.random() * 12) + 1;
    setNumeroAleatorio(numero); // Actualiza el estado
  };

  const apuestaInicial = (apuesta) => {
    setApuesta(apuesta);
    setEstado(false);
  };

  return (
    <Container className=" center-content fondo intermedio">
      <Row
        className="banner"
        style={{
          textAlign: "left",
          paddingLeft: "10%",
          display: "flex",
          justifyItems: "center",
          textJustify: "center",
          // justifyContent: "center",
        }}
      >
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
        </button>{" "}
        <Form.Label> Saldo: ${saldo} </Form.Label>
      </Row>
      <h1 className="letrero">
        {resultado ? resultado : "Bienvenido a Intermedio"}
      </h1>

      {/* <button onClick={aleatorio}> aleatorio</button> */}
      {/* <Row>
        {carta1} {carta2}
      </Row> */}
      {/* {numeroAleatorio} */}

      {estado ? (
        <InicioIntermedio
          saldo={saldo}
          apuesta={(saldo) => apuestaInicial(saldo)}
        />
      ) : (
        <JuegoIntermedio />
      )}
    </Container>
  );
}

export default Intermedio;
