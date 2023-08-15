import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [customError, setCustomError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setCustomError(null);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setCustomError(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, customError };
};
