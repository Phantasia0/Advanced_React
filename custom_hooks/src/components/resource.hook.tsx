import { useState, useEffect } from "react";
import axios from "axios";
export const useResource = <T extends any>(resourceUrl: string) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios(resourceUrl, {
        baseURL: "http://localhost:9090",
      });
      setResource(response.data as T);
    })();
  }, [resourceUrl]);

  return resource;
};
