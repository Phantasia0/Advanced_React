import React from "react";
import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper test={"test"} b={"I am be"} c={21} />
    </>
  );
}

export default App;
