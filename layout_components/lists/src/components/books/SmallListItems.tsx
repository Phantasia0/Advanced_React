import React from "react";
import { bookType } from "../../data/books";
import { ItemType } from "../lists/Regular";

interface ItemProps {
  [key: string]: ItemType;
}
export const SmallBookListItem: React.FC<ItemProps> = ({ book }) => {
  const { name, price } = book as bookType;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
};
