import { useState } from "react";
import { ControlledFlow } from "./components/controlled-flow";

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
            goNext({ age: 29 });
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
      <h1>Congratulation! You are qualified!</h1>
      <button
        onClick={() => {
          if (goNext) {
            goNext({});
          }
        }}
      >
        Next
      </button>
    </>
  );
};

const StepFour = ({ goNext }: { goNext?: NextFn }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
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
  const [data, setData] = useState<ParamType>({});
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const goNext = (dataFromStep: ParamType) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex((prevState) => prevState + 1);
  };

  return (
    <>
      <ControlledFlow
        onDone={(data) => {
          console.log(data);
          alert("Final Step Completed!");
        }}
        currentIndex={currentStepIndex}
        onNext={goNext}
      >
        <StepOne />
        <StepTwo />
        {data.age! > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
