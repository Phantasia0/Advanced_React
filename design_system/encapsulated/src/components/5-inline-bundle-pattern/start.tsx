import { styled } from "styled-components";
import MenuBasis from "./menu";
import { spaceSchema } from "../common/spaces";

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div<{
  gutter?: string;
  justify?: string;
  align?: string;
}>`
  --gutter: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifySchema[props.justify as keyof typeof justifySchema] ??
    justifySchema["start"]};
  align-items: ${(props) =>
    justifySchema[props.align as keyof typeof justifySchema] ??
    justifySchema["start"]};
`;

const Menu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter={"l"} justify={"end"} align={"center"}>
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default Menu;
