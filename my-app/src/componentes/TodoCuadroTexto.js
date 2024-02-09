import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
function CuadroTexto() {
    return (
      <>
         <InputGroup className="mb-3">
        <Form.Control
          placeholder="Escribe aqui una tarea"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

    </>
  );
}

export default CuadroTexto;