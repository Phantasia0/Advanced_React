import React, { useState } from "react";

interface FlowProps {
  children: React.ReactNode;
  onDone: boolean;
}

export const UncontrolledFlow: React.FC<FlowProps> = ({ children, onDone }) => {
  const [data, setData] = useState<Object>({});
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const goNext = () => {
    setCurrentStepIndex((prevState) => prevState + 1);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext } as {
      goNext: () => void;
    });
  }

  return <>{currentChild}</>;
};
