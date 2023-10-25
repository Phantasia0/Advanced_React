import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const CustomInput = (props: any, ref: any) => {
  const [value, setValue] = useState<any>("");

  const inputRef = useRef<any>();
  const inputRef2 = useRef<any>();

  useImperativeHandle(
    ref,
    () => {
      // return {
      //   sayHello: () => alert("Hello"),
      //   focus: () => inputRef.current.focus(),
      //   input1: inputRef.current,
      //   input2: inputRef2.current,
      // };
      return { value };
    },
    [value],
  );

  return (
    <>
      {/*<input {...props} className="text-input" ref={inputRef} />*/}
      {/*<input {...props} className="text-input" ref={inputRef2} />*/}
      <input
        {...props}
        className="text-input"
        type={"text"}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </>
  );
};

export const Input = forwardRef(CustomInput);
