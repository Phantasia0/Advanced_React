import { styled } from "styled-components";
import Form from "./form";
import { spaceSchema } from "../common/spaces";

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div<{ gutter?: string; fraction?: string }>`
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};

  grid-template-columns: ${({ fraction }) =>
    fractions[fraction as keyof typeof fractions] ?? fractions["1/2"]};
`;

const InfoForm = () => {
  return (
    <Split fraction={"1/3"} gutter={"xl"}>
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form will be exposed to the
          public.
        </span>
      </div>
      <Form />
    </Split>
  );
};

export default InfoForm;
