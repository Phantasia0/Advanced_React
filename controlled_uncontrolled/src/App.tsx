import { UncontrolledFlow } from "./components/uncontorlled-flow";

type NextFn = () => void;

const StepOne = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};

function App() {
  return (
    <>
      <UncontrolledFlow onDone={false}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
