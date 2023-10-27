import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";
import Card from "./card";

export const Grid = styled.div<{ gutter?: string; minItemWidth?: string }>`
  display: grid;
  gap: ${({ gutter }) =>
    spaceSchema[gutter as keyof typeof spaceSchema] ?? spaceSchema.l};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth ?? "310px"}, 100%), 1fr)
  );
`;

const Cards = () => {
  return (
    <Grid minItemWidth={"24rem"} gutter={"xl"}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Cards;
