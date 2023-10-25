import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div onClickCapture={() => console.log("Outer div")}>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({
  children,
  onClose,
  show,
}: {
  children: React.ReactNode;
  onClose: () => void;
  show: boolean;
}) => {
  if (!show) return null;

  return createPortal(
    <div
      className="alert"
      onClickCapture={() => {
        onClose();
        console.log("Inner div");
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-holder") as HTMLDivElement,
  );
};

export default App;
