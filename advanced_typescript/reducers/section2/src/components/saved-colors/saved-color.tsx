import { Dispatch, MouseEventHandler } from "react"; // Importing MouseEventHandler from React
import Button from "../common/button"; // Importing the Button component
import ColorChangeSwatch from "../common/color-change-swatch";
import { ColorActions } from "../../reducer/color-reducer"; // Importing the ColorChangeSwatch component

// Inline CSS styles for the container element
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "space-between",
  width: "50%",
};

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
  dispatch: Dispatch<ColorActions>;
};

const SavedColor = ({
  name,
  hexColor,
  onClick,
  onRemove,
  dispatch,
}: SavedColorProps) => {
  return (
    <article style={containerStyle}>
      {/* Button component to delete the saved color */}
      <Button variant="destructive" size="small" onClick={onRemove}>
        Delete
      </Button>
      {/* ColorChangeSwatch component to display the saved color */}
      <ColorChangeSwatch
        hexColor={hexColor}
        colorName={name}
        onClick={() => dispatch({ type: "update-hex", payload: { hexColor } })}
      />
    </article>
  );
};

export default SavedColor;
