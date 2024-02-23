import React from "react";
import { filas } from "./lista";
import { func } from "prop-types";
import Row from "./Row";

function Tabla() {
    const fila = filas;
    return (
        <table>
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
        <tbody>
            {filas.map((fila, index) => (
                <Row key={index} fila={fila} />
            ))}
        </tbody>
    </table>
    );
}

export default Tabla;