import { useEffect, useState } from "react";
import React from "react";

export default usarFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("url"), {
          headers: {
            "x-api-key": "123456"
          },
        }
        .then((response) => response.json())
        .then((data) => {setData(data);});
    }, []);
    return {data};
}