import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";

function InicioIntermedio(props) {
  const [resultado, setResultado] = useState("");
  const [saldo, setSaldo] = useState(props.saldo);

  const GuardarSaldo = () => {
    props.apuestaInicial("");
    // navigate("/"); // Redirige a la página de inicio
  };
  const onChangeSaldo = () => {
    setResultado("");
  };

  // const inicio = () => {};

  return (
    <Container>
      <Form.Label>Apuesta inicial:</Form.Label>
      <input
        type="text"
        onChange={onChangeSaldo}
        placeholder="Ingrese un valor"
      ></input>
      <button onClick={GuardarSaldo} style={{ marginTop: "20px" }}>
        {" "}
        Comenzar
      </button>
    </Container>
  );
}

export default InicioIntermedio;
