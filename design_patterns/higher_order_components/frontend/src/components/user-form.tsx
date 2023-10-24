import React from "react";
import { includeUpdatableResource } from "./include-updatable-resource";

export const UserInfoForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }: any) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeUser({ name: event.target.value })
            }
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeUser({ age: Number(event.target.value) })
            }
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/2",
  "user",
);
