import { FormEvent, useRef } from "react";
import "./App.css";
import { Input } from "./input";

function App() {
  const inputRef = useRef<any>(null);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    console.log(inputRef.current!.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button
        className="button"
        onClick={() => console.log(inputRef.current.value)}
      >
        Focus
      </button>
      {/*<button type="submit" className="button">*/}
      {/*  Submit*/}
      {/*</button>*/}
    </form>
  );
}

export default App;
