import React from "react";
import "./App.css";
import { Child } from "./child";
import { ErrorBoundary } from "./error-boundry";

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundary fallback={<h1>Error at Child Level</h1>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
