import { useUser } from "./components/use-user";

function App() {
  const state = useUser("/user");

  if (state === "non-existing-state") {
  }

  if (state === "fetching") {
    return "fetching...";
  }

  if (state === "fetched") {
    return "fetched";
  }

  if (state === "error") {
    return "Error";
  }
  return <></>;
}

export default App;
