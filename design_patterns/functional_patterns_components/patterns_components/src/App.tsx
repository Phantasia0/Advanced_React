import React from "react";
import { RecursiveComponent } from "./components/recursive";
// import { GreenSmallButton, RedButton } from "./components/composition";
import { RedButton, SmallRedButton } from "./components/partial";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
      {/*<RedButton text={"I am Red"} />*/}
      {/*<GreenSmallButton text={"i am small and green"} />*/}
      <SmallRedButton text={"redSmall"} />
      <RedButton text={"red"} />
    </>
  );
}

export default App;
