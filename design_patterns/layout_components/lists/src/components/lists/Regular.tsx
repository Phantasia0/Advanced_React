import React from "react";
import { authorType } from "../../data/authors";
import { bookType } from "../../data/books";

export type ItemType = authorType | bookType | string;

interface RegularListProps {
  items: authorType[] | bookType[];
  sourceName: "author" | "book";
  ItemComponent: React.FC<{
    [key: string]: ItemType;
  }>;
}
export const RegularList: React.FC<RegularListProps> = ({
  items,
  sourceName,
  ItemComponent,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.name} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
