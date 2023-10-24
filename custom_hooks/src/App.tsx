import React from "react";
import "./App.css";
import { UserInfo } from "./components/user-info";
import { BookInfo } from "./components/book-info";

function App() {
  return (
    <>
      <UserInfo userId={"1"} />
      <BookInfo bookId={"2"} />
    </>
  );
}

export default App;
