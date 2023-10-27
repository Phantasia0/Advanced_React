import { ComponentProps } from "react";

const buttonProps = {
  submit: {
    className: "submit-btn",
    type: "submit",
    // notAllowedProperty: "anything",
  },
  reset: {
    className: "reset-btn",
    type: "reset",
    // notAllowedProperty: "anything",
  },
  skip: {
    className: "skip-btn",
    type: "button",
    // notAllowedProperty: "anything",
  },
} satisfies Record<string, ComponentProps<"button">>;

type ButtonProps = {
  variant: keyof typeof buttonProps;
};

const Button = (props: ButtonProps) => {
  return <button {...buttonProps[props.variant]}>Click me!</button>;
};

export default Button;
