import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./error-boundry";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h2>Error at App Level</h2>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
