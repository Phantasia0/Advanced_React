import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserInfoProps } from "./user-info";

export const includeUpdatableUser = (Component: React.FC, userId: string) => {
  return (props: any) => {
    const [initialUser, setInitialUser] = useState<UserInfoProps | null>(null);
    const [user, setUser] = useState<UserInfoProps | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`, {
          baseURL: "http://localhost:9090",
        });
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates: UserInfoProps) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axios.post(
        `/users/${userId}`,
        { user },
        { baseURL: "http://localhost:9090" },
      );
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
