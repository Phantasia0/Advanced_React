import React, { FormEvent } from "react";

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef<HTMLInputElement>();
  const ageInputRef = React.createRef<HTMLInputElement>();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameInputRef.current!.value);
    console.log(ageInputRef.current!.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" placeholder="Name" ref={nameInputRef} />
      <input type="number" name="age" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};
