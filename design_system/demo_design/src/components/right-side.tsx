import React from "react";

import { styled } from "styled-components";
import { Logo } from "./logo";
import {
  Column,
  Columns,
  Layers,
  Pad,
  Split,
} from "./patterns-components/design-patterns";
import Buttons from "./buttons";

const Form = styled.div`
  border-inline-start: 1px solid lightgray;

  > * + * {
    border-block-start: 1px solid lightgray;
  }
`;

const Inputs = ({ label, children }: any) => {
  return (
    <Layers as={"label"} gutter={"xs"}>
      {label}
      {children}
    </Layers>
  );
};

const SubLabel = styled.span`
  color: grey;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  color: #303030;
  height: 30px;
`;

const RightSide = () => {
  return (
    <Form>
      <Pad as={"section"} padding={"l"}>
        <Layers gutter={"l"}>
          <Layers as={"header"} gutter={"l"}>
            <h2>General Information</h2>
            <SubLabel>
              These information will be required for the basic verification of
              profile.
            </SubLabel>
          </Layers>
          <div>
            <Split gutter={"l"} fraction={"auto-end"}>
              <Layers gutter={"l"}>
                <Inputs label={"username"}>
                  <Input />
                </Inputs>
                <Inputs label={"About"}>
                  <Input as={"textarea"} />
                  <SubLabel>Tell a brief introduction of yourself.</SubLabel>
                </Inputs>
              </Layers>

              <label>
                Image <Logo inverse size={"10rem"} />
              </label>
            </Split>
          </div>
          <Columns gutter={"l"} columns={2}>
            <Inputs label={"First Name"}>
              <Input />
            </Inputs>
            <Inputs label={"Last Name"}>
              <Input />
            </Inputs>
            <Inputs label={"Linkedin"}>
              <Input />
            </Inputs>
            <Inputs label={"Employer"}>
              <Input />
            </Inputs>
          </Columns>
        </Layers>
      </Pad>

      <Buttons />
    </Form>
  );
};

export default RightSide;
