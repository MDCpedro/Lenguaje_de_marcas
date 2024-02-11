import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
function CuadroTexto({ onAdd }) {
  const [texto, setTexto] = useState("");

  function EnviarTexto() {
    onAdd(texto)
    setTexto("")
  }

    return (
      <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Escribe aqui una tarea"
          aria-describedby="basic-addon2"
          value = {texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="success" onClick={EnviarTexto}>Añadir tarea</Button> {}
        </InputGroup.Append>
      </InputGroup>

    </>
  );
}

export default CuadroTexto;