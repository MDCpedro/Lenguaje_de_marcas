import React from "react";
import { filas } from "./lista";
import { func } from "prop-types";
import Row from "./Row";
import Table from 'react-bootstrap/Table';


function Tabla() {
    const fila = filas;
    return (
        <Table striped bordered hover variant="dark">
            <thead>
             <tr>
                <th>Imagen</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Precio</th>
                <th>Color</th>
                <th>Año</th>
                <th>Kilometraje</th>
                <th>Estado</th>
            </tr>
            </thead>
        <tbody>
            {filas.map((fila, index) => (
                <Row key={index} fila={fila} />
            ))}
        </tbody>
    </Table>
    );
}

export default Tabla;