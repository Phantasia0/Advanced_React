import Rows from "./components/rows";

function App() {
  return (
    <>
      <Rows
        renderRow={(index) => {
          return <div key={index}>{index}</div>;
        }}
      />
      <Rows
        renderRow={(index) => {
          return index;
        }}
      />
      <Rows
        renderRow={(index) => {
          return null;
        }}
      />
    </>
  );
}

export default App;
