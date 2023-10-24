import { includeUpdatableUser } from "./include-updatable-user";
import React from "react";

export const UserInfoForm = includeUpdatableUser(
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
  "3",
);
