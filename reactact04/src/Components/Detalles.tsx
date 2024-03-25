import React from "react";
import Razas, { Breeds } from "./ListaRazas";

export default function RazaDetalle({ raza }) {
    return (
      <div>
        <h2>{raza.name}</h2>
        <img src={raza.image.url} alt={raza.name} />
        <p>{raza.description}</p>
        <p>Peso: {raza.weight.metric} (metric)</p>
      </div>
    );
  }
  