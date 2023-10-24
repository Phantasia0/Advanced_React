import React from "react";
import { useCurrentUser } from "./current-user.hook";
import { useUser } from "./user.hook";
import { useResource } from "./resource.hook";
import { useDataSource } from "./data-source.hook";
import axios from "axios";

const fetchFromServer = (resourceUrl: string) => async () => {
  const response = await axios(resourceUrl, {
    baseURL: "http://localhost:9090",
  });
  return response.data;
};

const getDataFromLocalStorage = (key: string) => () => {
  return localStorage.getItem(key);
};

export interface UserInfoProps {
  user?: {
    name: string;
    age: number;
    country: string;
    books: string[];
  };
}

export const UserInfo = ({ userId }: { userId: string }) => {
  const user = useDataSource(fetchFromServer(`/users/${userId}`));
  const message = useDataSource(getDataFromLocalStorage("msg"));

  const { name, age, country, books } = (user as UserInfoProps["user"]) || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>{books?.map((book) => <li key={book}> {book} </li>)}</ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
