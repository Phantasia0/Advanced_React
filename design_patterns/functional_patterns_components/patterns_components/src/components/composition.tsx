export const Button = ({ size, color, text, ...props }: any) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props: any) => {
  return <Button {...props} color={"crimson"} />;
};

export const GreenSmallButton = (props: any) => {
  return <Button {...props} color={"green"} size={"small"} />;
};
