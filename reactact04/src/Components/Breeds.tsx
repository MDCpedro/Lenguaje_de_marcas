import React from "react";

export default function Razas() {
    const [razas, setRazas] = React.useState([] as Razas);

    React.useEffect(() => {
        fetch("link api")
        .then((response) => response.json())
        .then((data: Razas) => {
            setRazas(data);
        })
    })
}