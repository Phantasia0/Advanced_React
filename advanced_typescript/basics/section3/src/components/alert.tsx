type AlertVariantProps =
  | {
      variant: "no-code";
    }
  | {
      variant: "with-code";
      code: string;
    };

type AlertProps = AlertVariantProps & { btnColor?: string };

const Alert = (props: AlertProps) => {
  if (props.variant === "no-code") {
    return (
      <div>
        <h3>No Code</h3>
        <button
          style={{
            backgroundColor: props.btnColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Code: {props.code}</span>
        <button
          style={{
            backgroundColor: props.btnColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
};

export default Alert;
