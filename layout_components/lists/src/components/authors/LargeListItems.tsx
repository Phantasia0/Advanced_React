import React from "react";
import { authorType } from "../../data/authors";
import { ItemType } from "../lists/Regular";

interface ItemProps {
  [key: string]: ItemType;
}
export const LargeAuthorListItem: React.FC<ItemProps> = ({ author }) => {
  const { name, age, country, books } = author as authorType;
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country!}</p>
      <h2>Books</h2>
      <ul>
        {books!.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
};
