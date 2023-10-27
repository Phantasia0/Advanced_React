import React from "react";
import { Inline, Pad } from "./patterns-components/design-patterns";
import { styled } from "styled-components";

const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))<{ primary?: any }>`
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary ? "1px solid transparent" : "1px solid #0f1623"};
  background: ${(props) => (props.primary ? "#0f1623" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0f1623")};
`;

const Buttons = () => {
  return (
    <Inline as={Pad} gutter={"l"} justify={"end"} padding={"l"}>
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </Inline>
  );
};

export default Buttons;
