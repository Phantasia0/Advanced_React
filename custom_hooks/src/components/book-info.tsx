import React from "react";
import { useResource } from "./resource.hook";

export interface BookInfoProps {
  book?: {
    name: string;
    price: number;
    title: string;
    pages: number;
  };
}

export const BookInfo = ({ bookId }: { bookId: string }) => {
  const book = useResource<BookInfoProps["book"]>(`/books/${bookId}`);
  const { name, price, title, pages } = book ?? {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
