import { FormEvent, useRef } from "react";
import "./App.css";
import { Input } from "./input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    console.log(inputRef.current!.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;
