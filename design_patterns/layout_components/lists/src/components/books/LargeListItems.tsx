import React from "react";
import { bookType } from "../../data/books";
import { ItemType } from "../lists/Regular";

interface ItemProps {
  [key: string]: ItemType;
}
export const LargeBookListItem: React.FC<ItemProps> = ({ book }) => {
  const { name, pages, title, price } = book as bookType;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title: {title}</h2>
      <p># of Pages: {pages}</p>
    </>
  );
};
