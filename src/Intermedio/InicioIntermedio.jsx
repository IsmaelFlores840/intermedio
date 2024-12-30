import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";

function InicioIntermedio(props) {
  const [resultado, setResultado] = useState("");
  const [saldo, setSaldo] = useState("");

  const GuardarSaldo = () => {
    props.apuesta(saldo);
    // navigate("/"); // Redirige a la página de inicio
  };
  // const onChangeSaldo = () => {
  //   setResultado("");
  // };

  // const inicio = () => {};

  return (
    <Container>
      <Form.Label>Apuesta inicial:</Form.Label>
      <Form.Control
        value={saldo}
        placeholder="Ingrese un valor"
        required
        readOnly={false}
        onChange={(event) => {
          const inputValue = event.target.value;
          const regex = /^[0-9/]*$/; // Expresión regular para permitir números, barras y guiones
          if (regex.test(inputValue)) {
            // pregunta si es que el texto ingresado está dentro de los parametros establecidos
            setSaldo(inputValue);
          }
        }}
      ></Form.Control>
      {saldo ? (
        <button
          onClick={GuardarSaldo}
          style={{ marginTop: "20px" }}
          // disabled={!saldo}
        >
          {" "}
          Comenzar
        </button>
      ) : null}
    </Container>
  );
}

export default InicioIntermedio;
