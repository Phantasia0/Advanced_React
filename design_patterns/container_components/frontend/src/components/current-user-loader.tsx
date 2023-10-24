import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserInfoProps } from "./user-info";

interface CurrentUserLoaderProps {
  children: React.ReactNode;
}

export const CurrentUserLoader: React.FC<CurrentUserLoaderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfoProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:9090/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user } as { user: UserInfoProps });
        }
        return child;
      })}
    </>
  );
};
