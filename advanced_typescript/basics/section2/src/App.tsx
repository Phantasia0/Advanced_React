import Card from "./components/card";
import "./App.css";

function App() {
  return (
    <main className="m-8">
      <Card>
        Welcome to a custom component!
        <p>Inside, we can have various elements.</p>
        <Card>
          <h2>Another custom component within.</h2>
        </Card>
        <Card>
          <h2 className="mb-4">
            A nested custom component with multiple elements.
          </h2>
          <p>This is the second element.</p>
        </Card>
      </Card>
    </main>
  );
}

export default App;
