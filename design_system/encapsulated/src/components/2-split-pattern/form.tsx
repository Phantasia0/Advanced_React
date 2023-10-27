import React from "react";
import { Layers } from "../1-layers-pattern/start";

export const InputGroup = (props: any) => {
  return (
    <Layers gutter={"m"}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Layers>
  );
};

const Form = () => {
  return (
    <Layers gutter={"xl"}>
      <Layers>
        <InputGroup htmlFor={"firstname"} label={"First Name"}>
          <input type="text" id="firstname" />
        </InputGroup>

        <InputGroup htmlFor={"lastname"} label={"Last Name"}>
          <input type="text" id="lastname" />
        </InputGroup>

        <InputGroup htmlFor={"email"} label={"Email"}>
          <input type="email" id="email" />
        </InputGroup>

        <InputGroup htmlFor={"address"} label={"Street Address"}>
          <input type="text" id="address" />
        </InputGroup>

        <InputGroup htmlFor={"city"} label={"City"}>
          <input type="text" id="city" />
        </InputGroup>

        <InputGroup htmlFor={"country"} label={"Country"}>
          <input type="text" id="country" />
        </InputGroup>

        <InputGroup htmlFor={"phone"} label={"Phone Number"}>
          <input type="text" id="phone" />
        </InputGroup>

        <button>Subscribe</button>
      </Layers>
    </Layers>
  );
};

export default Form;
