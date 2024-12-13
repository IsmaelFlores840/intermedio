// import MaterialReactTable from "material-react-table";
// import { useMemo, useState } from "react";
// import { darken } from "@mui/material";
// import { MRT_Localization_ES } from "material-react-table/locales/es";

import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook para navegar
import { Card, Col, Container, Row } from "react-bootstrap";

function Intermedio() {
  const navigate = useNavigate(); // Creamos una instancia del hook

  const goBack = () => {
    navigate("/"); // Redirige a la página de inicio
  };

  return (
    <div className="center-content fondo">
      <h1>Bienvenido a Intermedio</h1>
      <p>¡Este es el juego de Intermedio!</p>
      <button onClick={goBack}>Volver</button>
    </div>
  );
}

export default Intermedio;
