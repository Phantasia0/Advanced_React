import React from "react";

import { CurrentUserLoader } from "./components/current-user-loader";
import { UserLoader } from "./components/user-loader";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
