import React from "react";
import { authorType } from "../../data/authors";
import { ItemType } from "../lists/Regular";

interface ItemProps {
  [key: string]: ItemType;
}
export const SmallAuthorListItem: React.FC<ItemProps> = ({ author }) => {
  const { name, age } = author as authorType;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
