import React from "react";
import "./App.css";
import { GlobalStyles } from "./utils";
import { Button, PrimaryButton } from "./components/button";
import Modal from "./components/modal";

function App() {
  return (
    <>
      {/*<PrimaryButton className={"warning"}>Click me!</PrimaryButton>*/}
      <Modal />
      <GlobalStyles />
    </>
  );
}

export default App;
