import React from "react";
import { filas } from "./lista";
import { func } from "prop-types";

function Row({ fila }: {
    fila: {
        marca: string;
        modelo: string;
        precio: string;
        color: string;
        año: string;
        kilometraje: string;
        comprado: boolean;
        imagen: string;
    }
}) {

    return (
        <tr>
            <td><img src={fila.imagen} /></td>
            <td>{fila.marca}</td>
            <td>{fila.modelo}</td>
            <td>{fila.precio}</td>
            <td>{fila.color}</td>
            <td>{fila.año}</td>
            <td>{fila.kilometraje}</td>
            <td>{fila.comprado ? "Vendido" : "Disponible"}</td>
        </tr>
    );
}

export default Row;