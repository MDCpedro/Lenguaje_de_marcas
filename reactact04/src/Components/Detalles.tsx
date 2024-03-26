import React from "react";
import Razas from "./ListaRazas";
import { Breed } from "./tipos";
import { useFetch } from "./usarFetch";

export default function RazaDetalle({ raza }: { raza: Breed}) {
  const data = useFetch("https://api.thedogapi.com/v1/breeds") as unknown as Breed;
    return (
      <div>
        <h2>{raza.name}</h2>
        <img src={raza.image.url} alt={raza.name} />
        <p>{raza.description}</p>
        <p>Peso: {raza.weight.metric}</p>
      </div>
    );
  }
  