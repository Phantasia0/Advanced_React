import { Popup } from "./components/pop-up";

function App() {
  return (
    <>
      <Popup
        isOpen
        variant="with-controls"
        label="Click Me!"
        onClick={() => {}}
      ></Popup>
      <Popup isOpen variant="no-controls"></Popup>

      {/*<Popup isOpen variant="with-controls"></Popup>*/}
      {/*<Popup isOpen variant="without-controls" onClick={() => {}} />*/}
    </>
  );
}

export default App;
