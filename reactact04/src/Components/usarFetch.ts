import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data)), {
      headers: {
        "x-api-key": "123456"
      }
    }
  }, []);
  return data
}
