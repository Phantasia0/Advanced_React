const classNames = {
  primary: "primary-blue-500 color-white",
  secondary: "primary-black-200 color-white",
  tertiary: "primary-yellow-500 color-black",
};

type ButtonProps = {
  variant: keyof typeof classNames;
};

export const Button = (props: ButtonProps) => {
  return <button className={classNames[props.variant]}>Click me!</button>;
};

export default Button;
