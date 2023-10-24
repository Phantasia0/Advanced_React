import React from "react";

export interface UserInfoProps {
  user?: {
    name: string;
    age: number;
    country: string;
    books: string[];
  };
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, age, country, books } = user || {};
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
