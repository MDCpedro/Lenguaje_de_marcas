import { useEffect, useState } from "react";
import React from "react";

export function usarFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data)), {
          headers: {
            "x-api-key": "123456"
          }
        }
    }, []);
    return { data }
}