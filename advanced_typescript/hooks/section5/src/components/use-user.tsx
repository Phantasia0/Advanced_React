import { useState, useEffect } from "react";

export const useUser = (src: string) => {
  const [state, setState] = useState("fetching");

  useEffect(() => {
    setState("fetching");

    let aborted = false;

    fetch(src)
      .then((data) => {
        if (aborted) {
          return;
        }

        //do something with the data

        setState("fetched");
      })
      .catch((error) => {
        if (aborted) {
          return;
        }
        setState("error");
      });

    return () => {
      aborted = true;
    };
  }, [src]);

  return state;
};
