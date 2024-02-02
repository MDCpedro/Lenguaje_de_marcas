import React, {useState} from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

function TodoButton() {
    const [cont, setCont] = React.useState(0);
    const [palabra, setPalabra] = React.useState("Hola");

    function click() {
        setCont(prevCont => prevCont + 1);
        // setCont +1
    }

    return (
        <div>
            <p>{cont}</p>
            <button onClick={click}>Click</button>
        </div>
    );
}
export default TodoButton;