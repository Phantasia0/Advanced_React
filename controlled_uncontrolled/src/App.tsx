import { UncontrolledFlow } from "./components/uncontorlled-flow";

export interface ParamType {
  name?: string;
  age?: number;
  country?: string;
}

type NextFn = (param: ParamType) => void;

const StepOne = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #1: Enter your name:</h1>
      <button
        onClick={() => {
          if (goNext) {
            goNext({ name: "MyName" });
          }
        }}
      >
        Next
      </button>
    </>
  );
};
const StepTwo = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button
        onClick={() => {
          if (goNext) {
            goNext({ age: 20 });
          }
        }}
      >
        Next
      </button>
    </>
  );
};
const StepThree = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #3: Enter your country</h1>
      <button
        onClick={() => {
          if (goNext) {
            goNext({ country: "Mars" });
          }
        }}
      >
        Next
      </button>
    </>
  );
};

function App() {
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Final Step Completed!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
