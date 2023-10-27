import { styled } from "styled-components";
import { Inline } from "./patterns-components/design-patterns";
import { Pad } from "./patterns-components/design-patterns";
import { Logo } from "./logo";

const Menu = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  align: "center",
  stretch: 1,
  padding: ["m", "xl"],
}))`
  background: #0f1623;
  color: white;
  border-block-end: 1px solid #303030;
`;

const Item = styled(Pad).attrs(() => ({
  padding: ["s", "m"],
  as: "li",
}))<{ active?: boolean }>`
  background: ${(props) => (props.active ? "#1F2937" : "transparent")};
  border-radius: 0.25rem;
  list-style-type: none;
`;

const SearchBar = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  background: #1f2937;
  border: none;
  color: white;
`;

const MenuBar = () => {
  return (
    <div>
      <Menu>
        <Logo size={"2.5rem"} />
        <nav>
          <Inline as={"ul"} gutter={"s"}>
            <Item active>OverView</Item>
            <Item>Position</Item>
            <Item>Candidates</Item>
            <Item>Employer</Item>
          </Inline>
        </nav>
        <SearchBar placeholder={"Search"} />
        <Logo square size={"1.5rem"} />
        <Logo size={"2rem"} />
      </Menu>
    </div>
  );
};

export default MenuBar;
