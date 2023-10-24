import { useState, useEffect } from "react";
export const useDataSource = <T extends any>(getData: Function) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return resource;
};
