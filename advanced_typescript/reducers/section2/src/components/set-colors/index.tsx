import ColorName from "./color-name"; // Importing the ColorName component
import HexToCMYK from "./to-cmyk"; // Importing the HexToCMYK component
import HexToHSL from "./to-hsl"; // Importing the HexToHSL component
import HexToHSV from "./to-hsv"; // Importing the HexToHSV component
import HexToRGB from "./to-rgb";
import { ColorActions } from "../../reducer/color-reducer";
import { Dispatch } from "react"; // Importing the HexToRGB component

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

type SetColorsProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const SetColors = ({ hexColor, dispatch }: SetColorsProps) => {
  return (
    <div style={containerStyle}>
      {/* Display the title */}
      <h3>Set Colors</h3>
      {/* Display the HexToRGB component */}
      <HexToRGB hexColor={hexColor} dispatch={dispatch} />
      {/* Display the HexToHSL component */}
      <HexToHSL hexColor={hexColor} />
      {/* Display the HexToHSV component */}
      <HexToHSV hexColor={hexColor} />
      {/* Display the HexToCMYK component */}
      <HexToCMYK hexColor={hexColor} />
      {/* Display the ColorName component */}
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default SetColors;
