import { useState, useEffect } from "react";
import axios from "axios";
export const useUser = <T extends any>(userId: string) => {
  const [user, setUser] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios(`/users/${userId}`, {
        baseURL: "http://localhost:9090",
      });
      setUser(response.data as T);
    })();
  }, [userId]);

  return user;
};
