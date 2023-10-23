import React from "react";

interface BookInfoProps {
  book: {
    name: string;
    price: number;
    title: string;
    pages: number;
  };
}

export const BookInfo: React.FC<BookInfoProps> = ({ book }) => {
  const { name, price, title, pages } = book || {};

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
