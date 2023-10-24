import React, { useState } from "react";
import { ParamType } from "../App";

interface FlowProps {
  children: React.ReactNode[];
  onDone: (param: ParamType) => void;
}

export const UncontrolledFlow: React.FC<FlowProps> = ({ children, onDone }) => {
  const [data, setData] = useState<Object>({});
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const goNext = (dataFromStep: ParamType) => {
    const nextStepIndex = currentStepIndex + 1;

    const newData = {
      ...data,
      ...dataFromStep,
    };

    console.log(newData);

    if (nextStepIndex < children.length) {
      setCurrentStepIndex((prevState) => prevState + 1);
    } else {
      onDone(newData);
    }

    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext } as {
      goNext: () => void;
    });
  }

  return <>{currentChild}</>;
};
