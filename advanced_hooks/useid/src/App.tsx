import React, { useEffect, useRef, useState, useCallback } from "react";
import Form from "./input";
import "./App.css";

function App() {
  const [showInput, setShowInput] = useState<boolean>(false);
  // const inputRef = useRef<HTMLInputElement>(null);
  const realInputRef = useRef<HTMLInputElement>();
  const inputRef = useCallback((input: any) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  // useEffect(() => {
  //   inputRef.current.value;
  // }, []);

  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
      <Form />
      <p>It is !!!</p>
      <Form />
    </>
  );
}

export default App;
