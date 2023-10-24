import React from "react";
import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";

const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
