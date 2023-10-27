import { css } from "styled-components";

export const typeScale = {
  header1: "1.9rem",
  header2: "1.5rem",
  header3: "1.3rem",
  header4: "1rem",
  header5: "0.9rem",
  paragraph: "0.8rem",
  text: "0.7rem",
  copyright: "0.5rem",
};

export const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};
export const stretchSchema = {
  all: `> *  { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};

export const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const responsive = css`
  --switchAt: ${({ switchAt }: any) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;
