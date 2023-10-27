import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import {
  ColorActions,
  colorReducer,
  initState,
} from "../reducer/color-reducer";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: "#FDGTA34",
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
