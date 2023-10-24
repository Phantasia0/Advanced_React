import React, { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setError("name can not be empty!");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAge(+event.target.value)
        }
      />
      <input type="submit" value="Submit" />
      <button>Submit</button>
    </form>
  );
};
