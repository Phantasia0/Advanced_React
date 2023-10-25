import { forwardRef } from "react";

const CustomInput = (props: any, ref: any) => {
  return <input ref={ref} {...props} className="text-input" />;
};

export const Input = forwardRef(CustomInput);
