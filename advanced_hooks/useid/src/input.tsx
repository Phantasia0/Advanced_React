import React, { ChangeEvent, FormEvent, useId, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState<string>("");

  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type={"email"}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type={"text"} />
    </div>
  );
};

export default Form;
