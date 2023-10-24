import React from "react";
import { authorType } from "../../data/authors";
import { bookType } from "../../data/books";
import { ItemType } from "./Regular";

interface NumberedListProps {
  items: authorType[] | bookType[];
  sourceName: "author" | "book";
  ItemComponent: React.FC<{
    [key: string]: ItemType;
  }>;
}
export const NumberedList: React.FC<NumberedListProps> = ({
  items,
  sourceName,
  ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent key={item.name} {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};
