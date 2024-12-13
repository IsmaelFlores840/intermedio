// import MaterialReactTable from "material-react-table";
// import { useMemo, useState } from "react";
// import { darken } from "@mui/material";
// import { MRT_Localization_ES } from "material-react-table/locales/es";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import Footer from "./Footer.jsx";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook
  const [saldo, setSaldo] = useState(2000);
  const goBack = () => {
    navigate("/"); // Redirige a la página de inicio
  };

  return (
    <Container className=" center-content fondo intermedio">
      <Row className="banner" style={{ textAlign: "left", paddingLeft: "10%" }}>
        <Form.Label> Saldo: {saldo} </Form.Label>
      </Row>
      <h1>Bienvenido a Intermedio</h1>
      <p>¡Este es el juego de Intermedio!</p>
      <button onClick={goBack} className="volver">
        Volver
      </button>
      {/* <Row className="footer">
        <Form.Label>derechos reservados</Form.Label>
      </Row> */}
      {/* <Footer /> */}
    </Container>
  );
}

export default Intermedio;
