import React from "react";
import { ParamType } from "../App";

interface FlowProps {
  children: React.ReactNode[];
  onDone: (param: ParamType) => void;
  currentIndex: number;
  onNext: Function;
}

export const ControlledFlow: React.FC<FlowProps> = ({
  children,
  onDone,
  currentIndex,
  onNext,
}) => {
  const goNext = (dataFromStep: FlowProps) => {
    onNext(dataFromStep);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext } as {
      goNext: Function;
    });
  }

  return <>{currentChild}</>;
};
