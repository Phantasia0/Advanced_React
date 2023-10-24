import React, { useEffect, useState } from "react";
import axios from "axios";

export const includeUser = (Component: React.FC, userId: string) => {
  return (props: any) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`, {
          baseURL: "http://localhost:9090",
        });
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
