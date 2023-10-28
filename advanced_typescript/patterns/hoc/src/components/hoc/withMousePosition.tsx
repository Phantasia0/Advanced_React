import React, { MouseEventHandler, useCallback, useState } from "react";
import { DisplayMouseMoveProps } from "./displayMouseMove";
import { getPosition } from "../get-pos";

const withMousePositions =
  <T extends {}>(Component: React.ComponentType<DisplayMouseMoveProps>) =>
  (props: Omit<T, keyof DisplayMouseMoveProps>) => {
    const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = useCallback<MouseEventHandler>(
      (event) => {
        const { x, y } = getPosition(event);
        setPosition({ x, y });
      },
      [setPosition],
    );

    return <Component {...(props as T)} x={x} y={y} onMouseMove={updatePosition} />;
  };

export default withMousePositions;
