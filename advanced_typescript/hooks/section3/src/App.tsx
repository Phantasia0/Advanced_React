import { useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const mutableRefValue = useRef();

  mutableRefValue.current = 20;

  return (
    <>
      <input ref={inputRef} />
    </>
  );
}

export default App;
