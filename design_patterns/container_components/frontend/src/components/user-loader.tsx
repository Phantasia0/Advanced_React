import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserInfoProps } from "./user-info";

interface UserLoaderProps {
  children: React.ReactNode;
  userId: string;
}

export const UserLoader: React.FC<UserLoaderProps> = ({ userId, children }) => {
  const [user, setUser] = useState<UserInfoProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user } as {
            user: UserInfoProps;
          });
        }
        return child;
      })}
    </>
  );
};
