import { useState, useEffect } from "react";
import axios from "axios";
export const useCurrentUser = <T extends any>() => {
  const [user, setUser] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios("/current-user", {
        baseURL: "http://localhost:9090",
      });
      setUser(response.data as T);
    })();
  }, []);

  return user;
};
