import React from "react";

import { CurrentUserLoader } from "./components/current-user-loader";
import { UserLoader } from "./components/user-loader";
import { UserInfo } from "./components/user-info";
import { ResourceLoader } from "./components/resource-loader";
import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";

import axios from "axios";

const getDataFromServer = async (url: string) => {
  const baseURL = "http://localhost:9090";
  const response = await axios.get(baseURL + url);
  return response.data;
};

const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }: { msg?: string }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
