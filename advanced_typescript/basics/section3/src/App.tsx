import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert variant="with-code" code="101" />
      <Alert variant="no-code" />
    </div>
  );
}

export default App;
