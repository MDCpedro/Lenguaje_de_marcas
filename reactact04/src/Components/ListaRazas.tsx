import React, { useState } from "react";
import { useFetch } from "./usarFetch";
import { Breeds } from "./tipos";
import Form from 'react-bootstrap/Form';

export default function Razas() {

  const data = useFetch("https://api.thedogapi.com/v1/breeds") as unknown as Breeds;
  const [razaSelec, setRazaSelec] = useState();
  return (
    <>
      <div>
        <Form.Select aria-label="Default select example" value={ razaSelec }>
          {data?.map((raza, i) => (<option key={i}>{raza.name}</option>))}
        </Form.Select>
      </div>
    </>

  );
}