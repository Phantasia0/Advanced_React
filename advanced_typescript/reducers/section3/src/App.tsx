import { useContext, useReducer } from "react";
import ColorSelect from "./components/color-selector";
import SetColors from "./components/set-colors";
import ColorGroups from "./components/color-group";
import SavedColors from "./components/saved-colors";
import "./App.css";
import { colorReducer, initState } from "./reducer/color-reducer";
import { ColorContext } from "./context/context";

function App() {
  const { hexColor, dispatch } = useContext(ColorContext);

  return (
    <div className="grid">
      <ColorSelect
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: "update-hex",
            payload: { hexColor: e.target.value },
          })
        }
      />
      <SetColors dispatch={dispatch} hexColor={hexColor} />
      <ColorGroups hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
}

export default App;
