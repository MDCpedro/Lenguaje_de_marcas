import React from "react";
import { useState } from "react";

function ListaDeTareas() {
    const [tareas, setTareas] = useState([""]);
    const [TareaNueva, setTareaNueva] = useState('');

    const nueva_tarea = () => {
        setTareas ([...tareas, TareaNueva]);
    
    };

    const eliminar_tarea = (index) => {
        const nuevas_tareas = [...tareas]
        nuevas_tareas.splice(index,1);
        setTareas(nuevas_tareas)
    };

    return (
        <div>
            <h1>Lista de tareas</h1>
            <h2>Escribe aqui tus tareas</h2>
            <input type="text" value={TareaNueva} onChange={(e)=>setTareaNueva(e.target.value)}></input>
            <button onClick={nueva_tarea}>Añadir Tarea</button>
        <ul>
            {tareas.map((tarea, index) => (
            <li key={index}>
                {tarea}
                <button onClick={() => eliminar_tarea(index)}>Eliminar</button>
            </li>
        ))}
      </ul>
        </div>
        
    );
};

export default ListaDeTareas;