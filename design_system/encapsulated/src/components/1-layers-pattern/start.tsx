import React from "react";
import styled from "styled-components";
import { spaceSchema } from "../common/spaces";

export const Layers = styled.div<{ gutter?: string }>`
  display: grid;
  gap: ${(props) =>
    spaceSchema[props.gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
`;

const SubscribeForm = () => {
  return (
    <Layers gutter={"xl"}>
      <Layers gutter={"m"}>
        <h2>Subscribe To Newsletter</h2>
        <p>
          Subscribe to the newsletter to receive updates about new products and
          other news
        </p>
      </Layers>
      <Layers>
        <Layers gutter={"s"}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Layers>

        <Layers gutter={"s"}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Layers>

        <button>Subscribe</button>
      </Layers>
    </Layers>
  );
};

export default SubscribeForm;