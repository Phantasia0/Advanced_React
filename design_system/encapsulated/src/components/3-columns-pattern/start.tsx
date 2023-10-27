import { styled } from "styled-components";
import { Split } from "../2-split-pattern/start";
import { InputGroup } from "../2-split-pattern/form";
import { spaceSchema } from "../common/spaces";

export const Columns = styled.div<{
  gutter?: string;
  fraction?: string;
  columns?: number;
}>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div<{ $span?: number }>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

export const InfoFormWithColumns = () => {
  return (
    <Split fraction={"1/3"} gutter={"xxl"}>
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

const Form = () => {
  return (
    <Columns columns={6}>
      <Column $span={3}>
        <InputGroup htmlFor={"firstname"} label={"First Name"}>
          <input type="text" id="firstname" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor={"lastname"} label={"Last Name"}>
          <input type="text" id="lastname" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor={"email"} label={"Email"}>
          <input type="email" id="email" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor={"address"} label={"Street Address"}>
          <input type="text" id="address" />
        </InputGroup>
      </Column>

      <Column $span={2}>
        <InputGroup htmlFor={"city"} label={"City"}>
          <input type="text" id="city" />
        </InputGroup>
      </Column>

      <Column $span={2}>
        <InputGroup htmlFor={"country"} label={"Country"}>
          <input type="text" id="country" />
        </InputGroup>
      </Column>

      <Column $span={2}>
        <InputGroup htmlFor={"phone"} label={"Phone Number"}>
          <input type="text" id="phone" />
        </InputGroup>
      </Column>
    </Columns>
  );
};
